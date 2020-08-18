/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React, { useState, useEffect, useCallback } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import Refresh from '../../components/Refresh';
import MapView from '../../components/MapView';

import api from '../../services/api';
import authenticate from '../../services/auth';

import './styles.css';

interface VehicleProps {
    py: number;
    px: number;
    a: boolean;
}

export interface LocationsProps {
    coordinates: {
        latitude: number;
        longitude: number;
    }[];
}

interface RouteProps {
    cl: number;
}

interface LocationRoutesProps {
    lt0: string;
    lt1: string;
    vs: {
        a: boolean;
        py: number;
        px: number;
    }[];
}

const BusLocation: React.FC = () => {
    const [busLocations, setBusLocations] = useState<LocationsProps[]>([]);
    const [busLocationsByRoutes, setBusLocationsByRoutes] = useState([]);
    const [time, setTime] = useState('');

    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(true);

    async function loadBusLocationsByRoutes() {
        setBusLocations([]);
        setIsLoading(true);

        const authResponse = await authenticate();

        if (authResponse) {
            const searchRouteResponse = await api.get(`Linha/Buscar`, {
                params: {
                    termosBusca: searchInput,
                },
            });

            const routesCodes = searchRouteResponse.data.map(
                (route: RouteProps) => route.cl,
            );

            const routeCode = routesCodes[0];

            const busLocationsResponse = await api.get(`Posicao/Linha`, {
                params: {
                    codigoLinha: routeCode,
                },
            });

            const { hr, vs: vehicles } = busLocationsResponse.data;

            const vehiclesCoordinates = vehicles.map(
                (vehicle: VehicleProps) => {
                    const { py: latitude, px: longitude } = vehicle;

                    return { latitude, longitude };
                },
            );

            setTime(hr);
            setBusLocationsByRoutes(vehiclesCoordinates);
            setSearchInput('');
            setIsLoading(false);
        }
    }

    const loadBusLocations = useCallback(async () => {
        setBusLocationsByRoutes([]);
        setIsLoadingSpinner(true);

        const authResponse = await authenticate();

        if (authResponse) {
            const busLocationsResponse = await api.get('Posicao');

            const { hr, l: locations } = busLocationsResponse.data;

            // extraindo apenas as coordenadas dos dados
            const locationsCoordinates = locations.map(
                (location: LocationRoutesProps) => {
                    const foundVehicles = location.vs;

                    const vehiclesCoordinates = foundVehicles.map(
                        (vehicle: VehicleProps) => {
                            return {
                                latitude: vehicle.py,
                                longitude: vehicle.px,
                            };
                        },
                    );

                    return { coordinates: vehiclesCoordinates };
                },
            );

            setTime(hr);
            setBusLocations(locationsCoordinates);
            setIsLoadingSpinner(false);
        }
    }, []);

    useEffect(() => {
        loadBusLocations();
    }, [loadBusLocations]);

    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="bus-location-page">
                <header>
                    <h1>Posição dos veículos</h1>

                    <h2>
                        Monitore em tempo real a frota de ônibus da cidade de
                        São Paulo.
                    </h2>

                    <form className="search">
                        <SearchInput
                            name="position"
                            label="Linha"
                            placeholder="Informe o número ou nome da linha"
                            value={searchInput}
                            searchSubmit={loadBusLocationsByRoutes}
                            onChange={e => setSearchInput(e.target.value)}
                            buttonText={isLoading ? 'Buscando...' : ''}
                        />
                    </form>
                </header>

                <main>
                    {isLoadingSpinner ? (
                        <div className="loader">
                            <BeatLoader
                                color="#0B8AB2"
                                margin={2}
                                size={15}
                                loading={isLoadingSpinner}
                            />
                        </div>
                    ) : (
                        <>
                            <Refresh
                                reference={time}
                                refresh={loadBusLocations}
                            />

                            <MapView
                                locations={busLocations}
                                routesLocations={busLocationsByRoutes}
                            />
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BusLocation;
