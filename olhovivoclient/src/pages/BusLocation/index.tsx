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
    const [time, setTime] = useState('');

    const loadBusLocations = useCallback(async () => {
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
        } else {
            loadBusLocations();
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
                        />
                    </form>
                </header>

                <main>
                    <Refresh reference={time} refresh={loadBusLocations} />

                    <MapView locations={busLocations} />
                </main>
            </div>
        </div>
    );
};

export default BusLocation;
