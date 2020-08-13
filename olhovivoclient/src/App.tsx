/* eslint-disable react/jsx-indent */
import React from 'react';

import Sidebar from './components/Sidebar';

import './styles/global.css';

const App: React.FC = () => {
    return (
        <div className="container">
            <Sidebar />

            <h1>Some content here</h1>
        </div>
    );
};

export default App;
