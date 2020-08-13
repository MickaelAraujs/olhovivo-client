/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';

import './styles.css';

const BusRoutes: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div className="page-content" id="bus-routes-page">
                <header>
                    <h1>Linhas disponíveis</h1>

                    <form className="search-routes">
                        <div className="search-group">
                            <fieldset>
                                <label htmlFor="routes">Linhas</label>

                                <input
                                    type="text"
                                    name="routes"
                                    id="routes"
                                    placeholder="informe o número ou nome da linha"
                                />
                            </fieldset>

                            <button type="submit">
                                <FiSearch />
                                Buscar
                            </button>
                        </div>

                        <div className="check-box-group">
                            <fieldset>
                                <input
                                    type="checkbox"
                                    name="w-direction"
                                    id="w-direction"
                                />

                                <label htmlFor="w-direction">
                                    Buscar linha por sentido
                                </label>
                            </fieldset>

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
                    <div className="route-card">
                        <header className="card-header">
                            <h2 className="card-title">
                                8000
                                <span className="card-sufix">10</span>
                            </h2>

                            <div className="card-route-info">
                                <span>sentido:</span>

                                <div className="card-route-info-title">
                                    <h3>PÇA. RAMOS DE AZEVEDO</h3>

                                    <FiArrowRight />

                                    <h3>TERM. LAPA</h3>
                                </div>
                            </div>
                        </header>

                        <main className="card-content">
                            <p>
                                Terminal principal:
                                <span>PÇA. RAMOS DE AZEVEDO</span>
                            </p>

                            <p>
                                Terminal secundário:
                                <span>TERM. LAPA</span>
                            </p>

                            <footer>
                                <span>* opera em modo circular</span>
                            </footer>
                        </main>
                    </div>

                    <div className="route-card">
                        <header className="card-header">
                            <h2 className="card-title">
                                8000
                                <span className="card-sufix">10</span>
                            </h2>

                            <div className="card-route-info">
                                <span>sentido:</span>

                                <div className="card-route-info-title">
                                    <h3>PÇA. RAMOS DE AZEVEDO</h3>

                                    <FiArrowRight />

                                    <h3>TERM. LAPA</h3>
                                </div>
                            </div>
                        </header>

                        <main className="card-content">
                            <p>
                                Terminal principal:
                                <span>PÇA. RAMOS DE AZEVEDO</span>
                            </p>

                            <p>
                                Terminal secundário:
                                <span>TERM. LAPA</span>
                            </p>

                            <footer>
                                <span>* opera em modo circular</span>
                            </footer>
                        </main>
                    </div>

                    <div className="route-card">
                        <header className="card-header">
                            <h2 className="card-title">
                                8000
                                <span className="card-sufix">10</span>
                            </h2>

                            <div className="card-route-info">
                                <span>sentido:</span>

                                <div className="card-route-info-title">
                                    <h3>PÇA. RAMOS DE AZEVEDO</h3>

                                    <FiArrowRight />

                                    <h3>TERM. LAPA</h3>
                                </div>
                            </div>
                        </header>

                        <main className="card-content">
                            <p>
                                Terminal principal:
                                <span>PÇA. RAMOS DE AZEVEDO</span>
                            </p>

                            <p>
                                Terminal secundário:
                                <span>TERM. LAPA</span>
                            </p>

                            <footer>
                                <span>* opera em modo circular</span>
                            </footer>
                        </main>
                    </div>

                    <div className="route-card">
                        <header className="card-header">
                            <h2 className="card-title">
                                8000
                                <span className="card-sufix">10</span>
                            </h2>

                            <div className="card-route-info">
                                <span>sentido:</span>

                                <div className="card-route-info-title">
                                    <h3>PÇA. RAMOS DE AZEVEDO</h3>

                                    <FiArrowRight />

                                    <h3>TERM. LAPA</h3>
                                </div>
                            </div>
                        </header>

                        <main className="card-content">
                            <p>
                                Terminal principal:
                                <span>PÇA. RAMOS DE AZEVEDO</span>
                            </p>

                            <p>
                                Terminal secundário:
                                <span>TERM. LAPA</span>
                            </p>

                            <footer>
                                <span>* opera em modo circular</span>
                            </footer>
                        </main>
                    </div>

                    <div className="route-card">
                        <header className="card-header">
                            <h2 className="card-title">
                                8000
                                <span className="card-sufix">10</span>
                            </h2>

                            <div className="card-route-info">
                                <span>sentido:</span>

                                <div className="card-route-info-title">
                                    <h3>PÇA. RAMOS DE AZEVEDO</h3>

                                    <FiArrowRight />

                                    <h3>TERM. LAPA</h3>
                                </div>
                            </div>
                        </header>

                        <main className="card-content">
                            <p>
                                Terminal principal:
                                <span>PÇA. RAMOS DE AZEVEDO</span>
                            </p>

                            <p>
                                Terminal secundário:
                                <span>TERM. LAPA</span>
                            </p>

                            <footer>
                                <span>* opera em modo circular</span>
                            </footer>
                        </main>
                    </div>

                    <div className="route-card">
                        <header className="card-header">
                            <h2 className="card-title">
                                8000
                                <span className="card-sufix">10</span>
                            </h2>

                            <div className="card-route-info">
                                <span>sentido:</span>

                                <div className="card-route-info-title">
                                    <h3>PÇA. RAMOS DE AZEVEDO</h3>

                                    <FiArrowRight />

                                    <h3>TERM. LAPA</h3>
                                </div>
                            </div>
                        </header>

                        <main className="card-content">
                            <p>
                                Terminal principal:
                                <span>PÇA. RAMOS DE AZEVEDO</span>
                            </p>

                            <p>
                                Terminal secundário:
                                <span>TERM. LAPA</span>
                            </p>

                            <footer>
                                <span>* opera em modo circular</span>
                            </footer>
                        </main>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BusRoutes;
