/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import CheckBox from '../../components/CheckBox';
import NoSearch from '../../components/NoSearch';

import './styles.css';

const Stops: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="stops-page">
                <header>
                    <h1>Pontos de parada</h1>

                    <form className="search">
                        <SearchInput
                            label="Parada"
                            name="stops"
                            placeholder="informe o nome ou o endereço da parada"
                        />

                        <div className="check-box-group">
                            <CheckBox
                                label="Buscar paradas por linha"
                                name="w-routes"
                            />
                        </div>
                    </form>
                </header>

                <main>
                    <NoSearch />
                </main>
            </div>
        </div>
    );
};

export default Stops;
