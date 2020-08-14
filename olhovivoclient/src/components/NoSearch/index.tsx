/* eslint-disable react/jsx-indent */

import React from 'react';

import waitingImg from '../../assets/waiting.svg';

import './styles.css';

const NoSearch: React.FC = () => {
    return (
        <div className="no-search-made">
            <h3>Nenhuma busca realizada ...</h3>

            <img src={waitingImg} alt="Esperando ..." />
        </div>
    );
};

export default NoSearch;
