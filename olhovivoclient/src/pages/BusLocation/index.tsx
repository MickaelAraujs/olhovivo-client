/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React, { useState, useEffect, useCallback } from 'react';

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
}

export interface LocationsProps {
    coordinates: {
        latitude: number;
        longitude: number;
    }[];
}

const BusLocation: React.FC = () => {
    const [busLocations, setBusLocations] = useState<LocationsProps[]>([]);
    const [busLocationsByRoutes, setBusLocationsByRoutes] = useState([]);
    const [time, setTime] = useState('');

    const [searchInput, setSearchInput] = useState('');

    async function loadBusLocationsByRoutes() {
        setBusLocations([]);

        const authResponse = await authenticate();

        if (authResponse) {
            const searchRouteResponse = await api.get(`Linha/Buscar`, {
                params: {
                    termosBusca: searchInput,
                },
            });

            const routesCodes = searchRouteResponse.data.map(
                (route: { cl: number }) => route.cl,
            );

            const code = routesCodes[0];

            const busLocationsResponse = await api.get(`Posicao/Linha`, {
                params: {
                    codigoLinha: code,
                },
            });

            const { hr, vs: vehicles } = busLocationsResponse.data;

            setTime(hr);

            const vehiclesCoordinates = vehicles.map(
                (vehicle: VehicleProps) => {
                    const { py: latitude, px: longitude } = vehicle;

                    return { latitude, longitude };
                },
            );

            setBusLocationsByRoutes(vehiclesCoordinates);
            setSearchInput('');
        }
    }

    const loadBusLocations = useCallback(async () => {
        setBusLocationsByRoutes([]);

        const authResponse = await authenticate();

        if (authResponse) {
            const busLocationsResponse = await api.get('Posicao');

            const { hr, l: locations } = busLocationsResponse.data;

            setTime(hr);

            // extraindo apenas as coordenadas dos dados
            const locationsCoordinates = locations.map(
                (location: { vs: [] }) => {
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

            setBusLocations(locationsCoordinates);
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

                    <form className="search">
                        <SearchInput
                            name="position"
                            label="Linha"
                            placeholder="Informe o número ou nome da linha"
                            searchSubmit={loadBusLocationsByRoutes}
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                        />
                    </form>
                </header>

                <main>
                    <Refresh reference={time} refresh={loadBusLocations} />

                    <MapView
                        locations={busLocations}
                        routesLocations={busLocationsByRoutes}
                    />
                </main>
            </div>
        </div>
    );
};

export default BusLocation;
