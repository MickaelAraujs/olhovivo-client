/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaGripLinesVertical,
    FaBus,
    FaAngleRight,
    FaEye,
    FaClock,
    FaLongArrowAltLeft,
    FaLongArrowAltRight,
} from 'react-icons/fa';

import logoImg from '../../assets/logo.svg';

import './styles.css';

const Sidebar: React.FC = () => {
    const [responsiveToggleClass, setResponsiveToggleClass] = useState(
        'active',
    );

    function handleToggleClass() {
        if (responsiveToggleClass === 'active') {
            setResponsiveToggleClass('');
        } else {
            setResponsiveToggleClass('active');
        }
    }

    return (
        <div className={`sidebar-container ${responsiveToggleClass}`}>
            <button
                type="button"
                className="toggle-menu"
                onClick={handleToggleClass}
            >
                {responsiveToggleClass === 'active' ? (
                    <FaLongArrowAltRight size={24} />
                ) : (
                    <FaLongArrowAltLeft size={24} />
                )}
            </button>

            <Link to="/">
                <img src={logoImg} alt="Olho Vivo - Dashboard" />
            </Link>

            <nav className="sidebar-items">
                <ul className="items-list">
                    <li>
                        <FaEye />

                        <Link to="/">Dashboard</Link>
                    </li>

                    <li>
                        <FaGripLinesVertical />

                        <Link to="/linhas">Linhas</Link>
                    </li>

                    <li>
                        <FaBus />

                        <Link to="/paradas">Paradas</Link>
                    </li>

                    <li>
                        <FaAngleRight />

                        <Link to="/corredores">Corredores</Link>
                    </li>

                    <li>
                        <FaClock />

                        <Link to="/previsao">Previsão de chegada</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
