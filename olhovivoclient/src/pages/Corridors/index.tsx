/* eslint-disable react/jsx-indent */
import React from 'react';

import Sidebar from '../../components/Sidebar';
import MapView from '../../components/MapView';

import './styles.css';

const Corridors: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="corridors-page">
                <header>
                    <h1>Paradas por corredores</h1>
                </header>

                <main>
                    <div className="corridors">
                        <button type="button">Campo Limpo</button>

                        <button type="button">Expresso Tiradentes</button>

                        <button type="button">Inajar de Souza</button>

                        <button type="button">Parelheiros</button>

                        <button type="button">Pirituba</button>

                        <button type="button">Santo Amaro</button>

                        <button type="button">Paes de Barros</button>
                    </div>

                    <MapView />
                </main>
            </div>
        </div>
    );
};

export default Corridors;
