/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import Refresh from '../../components/Refresh';
import ArrivesInfoCard from '../../components/ArrivesInfoCard';

import './styles.css';
import authenticate from '../../services/auth';
import api from '../../services/api';
import NoSearch from '../../components/NoSearch';

interface StopProps {
    cp: number;
}

interface RouteProps {
    cl: number;
    sl: number;
    lt0: string;
    lt1: string;
    qv: number;
    vs: {
        p: string;
        t: string;
        a: boolean;
    }[];
}

interface VehicleProps {
    letters: string;
    accessible: boolean;
    arrivePreview: string;
}

interface RouteDataProps {
    routeCode: number;
    lt0: string;
    lt1: string;
    totalVehicles: number;
    routeDirection: number;
    vehicles: VehicleProps[];
}

export interface stopsArriveDataProps {
    cp: number;
    stopName: string;
    routesData: RouteDataProps[];
}

const Arrives: React.FC = () => {
    const [time, setTime] = useState('');
    const [stopsArriveData, setStopsArriveData] = useState<
        stopsArriveDataProps[]
    >([]);

    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSearchArrivesPreview() {
        setStopsArriveData([]);
        setIsLoading(true);

        const authResponse = await authenticate();

        if (authResponse) {
            const stopsSearchResponse = await api.get('Parada/Buscar', {
                params: {
                    termosBusca: searchInput,
                },
            });

            // retornando todos os códigos de parada em um array
            const stopsCodes = stopsSearchResponse.data.map(
                (stop: StopProps) => stop.cp,
            );

            stopsCodes.forEach(async (stopCode: number) => {
                const arrivesPreviewResponse = await api.get(
                    'Previsao/Parada',
                    {
                        params: {
                            codigoParada: stopCode,
                        },
                    },
                );

                const { hr, p: stops } = arrivesPreviewResponse.data;

                if (!stops) {
                    return;
                }

                const { cp, np: stopName, l: routes } = stops;

                const routesData = routes.map((route: RouteProps) => {
                    const { cl, lt0, lt1, qv, sl, vs } = route;

                    const vehicles = vs.map(vehicle => {
                        const { p, a, t } = vehicle;

                        return {
                            letters: p,
                            accessible: a,
                            arrivePreview: t,
                        };
                    });

                    return {
                        routeCode: cl,
                        lt0,
                        lt1,
                        totalVehicles: qv,
                        routeDirection: sl,
                        vehicles,
                    };
                });

                setTime(hr);
                setStopsArriveData(data => [
                    ...data,
                    {
                        cp,
                        stopName,
                        routesData,
                    },
                ]);
            });
        }

        setIsLoading(false);
    }

    function handleLoadArrivesData(routesData: RouteDataProps[]) {
        return routesData.map(route => {
            const { lt0, lt1, totalVehicles, routeDirection } = route;

            const routeData = {
                lt0,
                lt1,
                totalVehicles,
                routeDirection,
            };

            return route.vehicles.map((vehicle: VehicleProps, index) => (
                <ArrivesInfoCard
                    key={index}
                    routeData={routeData}
                    vehicleData={vehicle}
                />
            ));
        });
    }

    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="arrives-page">
                <header>
                    <h1>Previsão de chegada</h1>

                    <form className="search">
                        <SearchInput
                            label="Ponto de parada"
                            name="arrives-preview"
                            placeholder="informe o nome ou endereço da parada"
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            buttonText={isLoading ? 'Buscando...' : ''}
                            searchSubmit={handleSearchArrivesPreview}
                        />
                    </form>
                </header>

                <main className="arrive-page-content">
                    {stopsArriveData.length === 0 ? (
                        <NoSearch />
                    ) : (
                        <Refresh
                            refresh={handleSearchArrivesPreview}
                            reference={time}
                        />
                    )}

                    <div className="search-routes-result-container">
                        {stopsArriveData.map((arriveData, index) => (
                            <div key={index}>
                                <h2 className="arrive-title">
                                    {arriveData.stopName}
                                </h2>

                                <div className="search-routes-result">
                                    {handleLoadArrivesData(
                                        arriveData.routesData,
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Arrives;
