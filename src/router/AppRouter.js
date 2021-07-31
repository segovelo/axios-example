import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AxiosGet from '../components/AxiosGet';
import AxiosPost from '../components/AxiosPost';
import AxiosPut from '../components/AxiosPut';
import AxiosDelete from '../components/AxiosDelete';
import history from '../components/history';
import '../App.css';

const AppRouter = () => (
    <BrowserRouter history={history}>
        <div className="container">
            <NavBar className="NavBar"/>
            <Switch>
                <Route component={AxiosGet} path="/" exact={true} />
                <Route component={AxiosPost} path="/post" />
                <Route component={AxiosPut} path="/put" />
                <Route component={AxiosDelete} path="/delete"/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;