import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AxiosGet from '../components/AxiosGet';
import AxiosPost from '../components/AxiosPost';
import history from '../components/history';

const AppRouter = () => (
    <BrowserRouter history={history}>
        <div className="container">
            <NavBar/>
            <Switch>
                <Route component={AxiosGet} path="/" exact={true} />
                <Route component={AxiosPost} path="/post" />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;