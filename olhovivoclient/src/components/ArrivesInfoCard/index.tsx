/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

interface ArrivesInfoCardProps {
    routeData: {
        lt0: string;
        lt1: string;
        totalVehicles: number;
        routeDirection: number;
    };

    vehicleData: {
        letters: string;
        accessible: boolean;
        arrivePreview: string;
    };
}

const ArrivesInfoCard: React.FC<ArrivesInfoCardProps> = ({
    routeData,
    vehicleData,
}) => {
    return (
        <div className="arrive-card">
            <header className="card-header">
                <h2 className="card-title">{vehicleData.letters}</h2>

                <div className="card-info">
                    {routeData.routeDirection === 1 ? (
                        <>
                            <div className="card-info-content">
                                <span>Origem</span>
                                <h3>{routeData.lt0}</h3>
                            </div>

                            <FiArrowRight />

                            <div className="card-info-content">
                                <span>Destino:</span>
                                <h3>{routeData.lt1}</h3>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card-info-content">
                                <span>Origem</span>
                                <h3>{routeData.lt1}</h3>
                            </div>

                            <FiArrowRight />

                            <div className="card-info-content">
                                <span>Destino:</span>
                                <h3>{routeData.lt0}</h3>
                            </div>
                        </>
                    )}
                </div>
            </header>

            <main className="card-content">
                <p>
                    Previsão de chegada:
                    <span>{vehicleData.arrivePreview}</span>
                </p>

                <footer>
                    {vehicleData.accessible && (
                        <span>* Acessível a pessoas com deficiência</span>
                    )}
                </footer>
            </main>
        </div>
    );
};

export default ArrivesInfoCard;
