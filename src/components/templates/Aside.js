import React from 'react';
import { FiUsers, FiHome, FiUserPlus } from 'react-icons/fi';
import './Aside.css';

import { Link } from 'react-router-dom';

function Asside() {
    return (
        <aside className="menu-area">
            <nav className="nav-menu">
                <Link to="/">
                    <FiHome className="mr-3" /> Início
                </Link>
                <Link to="/users">
                    <FiUserPlus className="mr-3" /> Cadastro
                </Link>
                <Link to="/listUsers">
                    <FiUsers className="mr-3" /> Usuários
                </Link>
            </nav>
        </aside>
    )
}

export default Asside;