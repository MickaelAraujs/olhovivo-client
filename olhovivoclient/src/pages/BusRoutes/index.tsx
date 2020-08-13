/* eslint-disable react/jsx-indent */
import React from 'react';

import Sidebar from '../../components/Sidebar';

import './styles.css';

const BusRoutes: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div className="page-content">
                <h1>linhas disponíveis</h1>
            </div>
        </div>
    );
};

export default BusRoutes;
