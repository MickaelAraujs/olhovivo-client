/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */

import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';

import './styles.css';

interface RefreshProps {
    reference?: string;
    refresh: () => void;
}

const Refresh: React.FC<RefreshProps> = ({ reference, refresh }) => {
    return (
        <div className="refresh">
            <p>
                Horário de referência:
                <span>{reference}</span>
            </p>

            <button type="button" onClick={refresh}>
                <FiRefreshCw />
                Atualizar
            </button>
        </div>
    );
};

export default Refresh;
