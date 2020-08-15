/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';

import Sidebar from '../../components/Sidebar';
import Refresh from '../../components/Refresh';
import MapView from '../../components/MapView';

import './styles.css';

const Dashboard: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div className="page-content">
                <header>
                    <h1>Dashboard</h1>

                    <h2>
                        Monitore a frota de ônibus da cidade de São Paulo em
                        tempo real.
                    </h2>
                </header>

                <main className="dashboard-content">
                    <Refresh />

                    <MapView />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
