import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import DateNow from '../DateNow';
import Main from '../templates/Main';


function Home() {
    return (
        <Main title="Início" subtitle="Projeto Gestão">
            <Jumbotron>
                <h1>Seja Bem vindo</h1>
                <p>Sistema de gestão de usuário</p>
                <DateNow />
            </Jumbotron>
        </Main>
    )
}

export default Home;