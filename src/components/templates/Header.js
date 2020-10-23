import React from 'react';
import './Header.css';

function Header(props) {

    return (
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3">
                {props.title}
            </h1>
            <p>{props.subtitle}</p>
        </header>
    )
}

export default Header;