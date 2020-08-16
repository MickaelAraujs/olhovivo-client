/* eslint-disable react/jsx-indent */
import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaGripLinesVertical,
    FaBus,
    FaAngleRight,
    FaEye,
    FaClock,
} from 'react-icons/fa';

import logoImg from '../../assets/logo.svg';

import './styles.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container">
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
