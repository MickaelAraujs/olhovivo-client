/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */

import React from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import RoutesInfoCard from '../../components/RoutesInfoCard';
import CheckBox from '../../components/CheckBox';

import './styles.css';

const BusRoutes: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="bus-routes-page">
                <header>
                    <h1>Linhas disponíveis</h1>

                    <form className="search-routes">
                        <SearchInput
                            name="routes"
                            label="Linhas"
                            placeholder="informe o número ou nome da linha"
                            searchSubmit={() => {}}
                        />

                        <div className="check-box-group">
                            <CheckBox
                                name="w-direction"
                                label="Buscar linha por sentido"
                            />

                            <select
                                name="select-direction"
                                id="select-direction"
                                disabled
                            >
                                <option value="">Selecione um sentido</option>

                                <option value="1">
                                    Terminal principal para terminal secundário
                                </option>

                                <option value="2">
                                    Terminal secundário para terminal principal
                                </option>
                            </select>
                        </div>
                    </form>
                </header>

                <main className="search-routes-result">
                    <RoutesInfoCard />

                    <RoutesInfoCard />

                    <RoutesInfoCard />
                </main>
            </div>
        </div>
    );
};

export default BusRoutes;
