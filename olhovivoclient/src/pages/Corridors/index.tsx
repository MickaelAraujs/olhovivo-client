/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import MapView from '../../components/MapView';

import authenticate from '../../services/auth';
import api from '../../services/api';

import './styles.css';

interface CorridorProps {
    cc: number;
    nc: string;
}

const Corridors: React.FC = () => {
    const [corridors, setCorridors] = useState<CorridorProps[]>([]);

    useEffect(() => {
        async function loadCorridors() {
            const authResponse = await authenticate();

            if (authResponse) {
                const corridorsResponse = await api.get('Corredor');

                setCorridors(corridorsResponse.data);
            }
        }

        loadCorridors();
    }, []);

    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="corridors-page">
                <header>
                    <h1>Paradas por corredores</h1>
                    <p>
                        Clique em um dos corredores e localize as paradas
                        relacionadas a ele.
                    </p>
                </header>

                <main>
                    <div className="corridors">
                        {corridors.map(corridor => (
                            <button type="button" key={corridor.cc}>
                                {corridor.nc}
                            </button>
                        ))}
                    </div>

                    <MapView />
                </main>
            </div>
        </div>
    );
};

export default Corridors;
