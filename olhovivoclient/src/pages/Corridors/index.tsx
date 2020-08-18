/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-indent-props */
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
    const [stopsByCorridors, setStopsByCorridors] = useState([]);

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

    async function searchStopsByCorridors(stopCode: number) {
        const authResponse = await authenticate();

        if (authResponse) {
            const searchResponse = await api.get(
                'Parada/BuscarParadasPorCorredor',
                {
                    params: {
                        codigoCorredor: stopCode,
                    },
                },
            );

            setStopsByCorridors(searchResponse.data);
        }
    }

    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="corridors-page">
                <header>
                    <h1>Paradas por corredores</h1>
                    <h2>
                        Clique em um dos corredores e localize as paradas
                        relacionadas a ele.
                    </h2>
                </header>

                <main>
                    <div className="corridors">
                        {corridors.map(corridor => (
                            <button
                                type="button"
                                key={corridor.cc}
                                onClick={() =>
                                    searchStopsByCorridors(corridor.cc)
                                }
                            >
                                {corridor.nc}
                            </button>
                        ))}
                    </div>

                    <MapView stops={stopsByCorridors} />
                </main>
            </div>
        </div>
    );
};

export default Corridors;
