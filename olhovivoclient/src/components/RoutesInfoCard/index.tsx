/* eslint-disable react/jsx-indent */

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

const RoutesInfoCard: React.FC = () => {
    return (
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
    );
};

export default RoutesInfoCard;
