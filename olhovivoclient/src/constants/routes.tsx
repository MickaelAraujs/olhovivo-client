/* eslint-disable react/jsx-indent */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BusRoutes from '../pages/BusRoutes';
import Stops from '../pages/Stops';
import Corridors from '../pages/Corridors';
import BusLocation from '../pages/BusLocation';
import Arrives from '../pages/Arrives';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={BusLocation} />
            <Route path="/linhas" component={BusRoutes} />
            <Route path="/paradas" component={Stops} />
            <Route path="/corredores" component={Corridors} />
            <Route path="/previsao" component={Arrives} />
        </BrowserRouter>
    );
};

export default Routes;
