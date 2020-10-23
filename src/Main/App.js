import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { HashRouter } from 'react-router-dom';
import Router from '../routes';
import Logo from '../components/templates/Logo';
import Aside from '../components/templates/Aside'
import Footer from '../components/templates/Footer';

function App() {
    return (
        <HashRouter>
            <div className="app">
                <Logo />
                <Router />
                <Aside />
                <Footer />
            </div>
        </HashRouter>

    )
}

export default App;