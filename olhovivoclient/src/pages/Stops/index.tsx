/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */

import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import CheckBox from '../../components/CheckBox';
import NoSearch from '../../components/NoSearch';

import './styles.css';
import authenticate from '../../services/auth';
import api from '../../services/api';
import MapView from '../../components/MapView';

const Stops: React.FC = () => {
    const [stops, setStops] = useState([]);

    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSearchStops() {
        setIsLoading(true);

        const authResponse = await authenticate();

        if (authResponse) {
            const stopsResponse = await api.get(`Parada/Buscar`, {
                params: {
                    termosBusca: searchInput,
                },
            });

            setStops(stopsResponse.data);
            setSearchInput('');
            setIsLoading(false);
        }
    }

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
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            searchSubmit={handleSearchStops}
                            buttonText={isLoading ? 'Buscando...' : ''}
                        />

                        <div className="check-box-group">
                            <CheckBox
                                label="Buscar paradas por linha"
                                name="w-routes"
                            />
                        </div>
                    </form>
                </header>

                <main className="dashboard-content">
                    {stops.length === 0 ? (
                        <NoSearch />
                    ) : (
                        <MapView stops={stops} />
                    )}
                </main>
            </div>
        </div>
    );
};

export default Stops;
