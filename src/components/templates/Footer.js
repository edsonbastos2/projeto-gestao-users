import React from 'react';
import { FaRegHeart } from 'react-icons/fa'
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <span>
                Desenvolvido com <FaRegHeart className="text-danger" /> por <strong>Edson
                <span className="text-danger">B</span>astos</strong>
            </span>
        </footer>
    )
}

export default Footer;