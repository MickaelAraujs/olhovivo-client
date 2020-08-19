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
    latitude: number;

    longitude: number;

    accessible: boolean;

    lt0: string;

    lt1: string;
}

interface RouteProps {
    cl: number;
}

interface RoutesDataProps {
    lt0: string;

    lt1: string;

    vs: VehicleProps[];
}

const BusLocation: React.FC = () => {
    const [busLocations, setBusLocations] = useState<LocationsProps[]>([]);
    const [time, setTime] = useState('');

    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(false);

    async function loadBusLocationsByRoutes() {
        setBusLocations([]);
        setIsLoading(true);
        setIsLoadingSpinner(true);

        const authResponse = await authenticate();

        if (authResponse) {
            const searchRouteResponse = await api.get(`Linha/Buscar`, {
                params: {
                    termosBusca: searchInput,
                },
            });

            // retornando os códigos de todas as linhas pesquisadas em um array
            const routesCodes = searchRouteResponse.data.map(
                (route: RouteProps) => route.cl,
            );

            routesCodes.forEach(async (routeCode: number) => {
                const busLocationsResponse = await api.get(`Posicao/Linha`, {
                    params: {
                        codigoLinha: routeCode,
                    },
                });

                const { hr, vs: vehicles } = busLocationsResponse.data;

                if (!hr || !vehicles) {
                    return;
                }

                const vehiclesData = vehicles.map((vehicle: VehicleProps) => {
                    return {
                        latitude: vehicle.py,
                        longitude: vehicle.px,
                        accessible: vehicle.a,
                    };
                });

                setBusLocations(locations => [...locations, ...vehiclesData]);

                setTime(hr);
                setIsLoading(false);
                setIsLoadingSpinner(false);
            });
        }
    }

    const loadBusLocations = useCallback(async () => {
        setBusLocations([]);
        setIsLoadingSpinner(true);

        const authResponse = await authenticate();

        if (authResponse) {
            const busLocationsResponse = await api.get('Posicao');

            const { hr, l: routesData } = busLocationsResponse.data;

            if (!hr || !routesData) {
                return;
            }

            routesData.forEach((route: RoutesDataProps, index: number) => {
                // pra carregar todos os dados remove esse if
                if (index >= routesData.length / 10) {
                    return;
                }

                const { vs: vehicles, lt0, lt1 } = route;

                const vehiclesData = vehicles.map(vehicle => {
                    return {
                        latitude: vehicle.py,
                        longitude: vehicle.px,
                        accessible: vehicle.a,
                        lt0,
                        lt1,
                    };
                });

                setBusLocations(locations => [...locations, ...vehiclesData]);
            });

            setTime(hr);
            setIsLoadingSpinner(false);
        }
    }, []);

    useEffect(() => {
        loadBusLocations();
    }, []);

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

                            <MapView locations={busLocations} zoom={15} />
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BusLocation;
