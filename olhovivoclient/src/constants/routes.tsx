/* eslint-disable react/jsx-indent */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route name="Dashboard" component={Dashboard} />
        </BrowserRouter>
    );
};

export default Routes;
