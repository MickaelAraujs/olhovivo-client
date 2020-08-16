/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import Refresh from '../../components/Refresh';
import ArrivesInfoCard from '../../components/ArrivesInfoCard';

import './styles.css';

const Arrives: React.FC = () => {
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
                            searchSubmit={() => {}}
                        />
                    </form>
                </header>

                <main className="arrive-page-content">
                    <Refresh />

                    <h2 className="arrive-title">
                        PARADA ROBERTO SELMI DEI B/C
                    </h2>

                    <div className="search-routes-result">
                        <ArrivesInfoCard />

                        <ArrivesInfoCard />

                        <ArrivesInfoCard />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Arrives;
