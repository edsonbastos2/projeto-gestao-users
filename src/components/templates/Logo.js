import React from 'react';
import logo from '../../assets/img/logo.png';
import './Logo.css';

function Logo() {
    return (
        <aside className="logo">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}

export default Logo;