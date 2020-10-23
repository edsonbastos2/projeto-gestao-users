import React from 'react';
import Main from '../templates/Main';

const headerProps = {
    title: 'Cadastro de Usuário',
    subtitle: 'Para fazer cadastro de usuários'
}

function Usera() {
    return (
        <Main {...headerProps}>
            Cadastro de usuários
        </Main>
    )
}

export default Usera;