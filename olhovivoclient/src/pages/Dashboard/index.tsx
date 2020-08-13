/* eslint-disable react/jsx-indent */
import React from 'react';

import Sidebar from '../../components/Sidebar';

import './styles.css';

const Dashboard: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <div id="page-content">
                <header>
                    <h1>Dashboard</h1>

                    <h2>
                        Monitore a frota de ônibus da cidade de São Paulo em
                        tempo real.
                    </h2>
                </header>
            </div>
        </div>
    );
};

export default Dashboard;
