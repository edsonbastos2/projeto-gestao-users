import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Users from './components/Users';
import ListUsers from './components/ListUser';

function Router() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/listUsers" component={ListUsers} />
        </Switch>
    )
}

export default Router;
