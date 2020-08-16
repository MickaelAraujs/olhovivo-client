/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { RouteProps } from '../../pages/BusRoutes';

import './styles.css';

interface RoutesInfoCardProps {
    cardData: RouteProps;
}

const RoutesInfoCard: React.FC<RoutesInfoCardProps> = ({ cardData }) => {
    return (
        <div className="route-card">
            <header className="card-header">
                <h2 className="card-title">
                    {cardData?.lt}
                    <span className="card-sufix">{cardData.tl}</span>
                </h2>

                <div className="card-route-info">
                    <span>sentido:</span>

                    <div className="card-route-info-title">
                        <h3>{cardData?.tp}</h3>

                        <FiArrowRight />

                        <h3>{cardData?.ts}</h3>
                    </div>
                </div>
            </header>

            <main className="card-content">
                <p>
                    Terminal principal:
                    <span>{cardData?.tp}</span>
                </p>

                <p>
                    Terminal secundário:
                    <span>{cardData?.ts}</span>
                </p>

                <footer>
                    {cardData?.lc && <span>* opera em modo circular</span>}
                </footer>
            </main>
        </div>
    );
};

export default RoutesInfoCard;
