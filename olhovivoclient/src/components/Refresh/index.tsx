/* eslint-disable react/jsx-indent */

import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';

import './styles.css';

const Refresh: React.FC = () => {
    return (
        <div className="refresh">
            <p>
                Horário de referência:
                <span>01:05</span>
            </p>

            <button type="button">
                <FiRefreshCw />
                Atualizar
            </button>
        </div>
    );
};

export default Refresh;
