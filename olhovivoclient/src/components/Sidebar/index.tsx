/* eslint-disable react/jsx-indent */
import React from 'react';
import {
    FaInfo,
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
            <img src={logoImg} alt="Olho Vivo - Dashboard" />

            <nav className="sidebar-items">
                <ul className="items-list">
                    <li>
                        <FaEye />
                        <a href="/">Dashboard</a>
                    </li>

                    <li>
                        <FaGripLinesVertical />
                        <a href="/">Linhas</a>
                    </li>

                    <li>
                        <FaBus />
                        <a href="/">Paradas</a>
                    </li>

                    <li>
                        <FaAngleRight />
                        <a href="/">Corredores</a>
                    </li>

                    <li>
                        <FaInfo />
                        <a href="/">Posição dos veículos</a>
                    </li>

                    <li>
                        <FaClock />
                        <a href="/">Previsão de chegada</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
