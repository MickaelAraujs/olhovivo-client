/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import Refresh from '../../components/Refresh';

import './styles.css';

const BusLocation: React.FC = () => {
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
                    <Refresh />
                </main>
            </div>
        </div>
    );
};

export default BusLocation;
