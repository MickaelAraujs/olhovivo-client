/* eslint-disable react/jsx-indent */

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

const ArrivesInfoCard: React.FC = () => {
    return (
        <div className="arrive-card">
            <header className="card-header">
                <h2 className="card-title">73651</h2>

                <div className="card-info">
                    <div className="card-info-content">
                        <span>Origem</span>
                        <h3>PÇA. RAMOS DE AZEVEDO</h3>
                    </div>

                    <FiArrowRight />

                    <div className="card-info-content">
                        <span>Destino:</span>
                        <h3>TERM. LAPA</h3>
                    </div>
                </div>
            </header>

            <main className="card-content">
                <p>
                    Previsão de chegada:
                    <span>23:22</span>
                </p>

                <footer>
                    <span>* Acessível a pessoas com deficiência</span>
                </footer>
            </main>
        </div>
    );
};

export default ArrivesInfoCard;
