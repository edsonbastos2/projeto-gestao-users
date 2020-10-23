import React from 'react';
import Main from '../templates/Main';

const headerProps = {
    title: 'Listagem de usuários',
    subtitle: 'Para fazer consultas'
}

function ListUsers() {
    return (
        <Main {...headerProps}>
            Listagem de usuários
        </Main>
    )
}

export default ListUsers;