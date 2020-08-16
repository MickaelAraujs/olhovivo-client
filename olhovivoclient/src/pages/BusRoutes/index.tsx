/* eslint-disable react/jsx-curly-newline */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */

import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import SearchInput from '../../components/SearchInput';
import RoutesInfoCard from '../../components/RoutesInfoCard';
import CheckBox from '../../components/CheckBox';

import './styles.css';
import authenticate from '../../services/auth';
import api from '../../services/api';
import NoSearch from '../../components/NoSearch';

export interface RouteProps {
    cl: number;
    lc: boolean;
    lt: string;
    sl: number;
    tl: number;
    tp: string;
    ts: string;
}

const BusRoutes: React.FC = () => {
    const [busRoutes, setBusRoutes] = useState([]);

    const [searchInput, setSearchInput] = useState('');
    const [isCheckboxOn, setIsCheckboxOn] = useState(false);
    const [selectedDirection, setSelectedDirection] = useState('');

    async function handleSearch() {
        const authResponse = authenticate();

        if (authResponse) {
            let searchResponse;

            if (!isCheckboxOn) {
                searchResponse = await api.get(`Linha/Buscar`, {
                    params: {
                        termosBusca: searchInput,
                    },
                });
            } else {
                searchResponse = await api.get(`Linha/BuscarLinhaSentido`, {
                    params: {
                        termosBusca: searchInput,
                        sentido: selectedDirection,
                    },
                });
            }

            setBusRoutes(searchResponse.data);
            setSearchInput('');
        }
    }

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
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            searchSubmit={handleSearch}
                        />

                        <div className="check-box-group">
                            <CheckBox
                                name="w-direction"
                                label="Buscar linha por sentido"
                                checked={isCheckboxOn}
                                onChange={() => setIsCheckboxOn(!isCheckboxOn)}
                            />

                            <select
                                name="select-direction"
                                id="select-direction"
                                disabled={!isCheckboxOn}
                                value={selectedDirection}
                                onChange={e =>
                                    setSelectedDirection(e.target.value)
                                }
                            >
                                <option value="" defaultChecked disabled hidden>
                                    Selecione um sentido
                                </option>

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
                    {busRoutes.length === 0 && <NoSearch />}

                    {busRoutes.map((route: RouteProps) => (
                        <RoutesInfoCard key={route.cl} cardData={route} />
                    ))}
                </main>
            </div>
        </div>
    );
};

export default BusRoutes;
