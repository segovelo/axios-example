import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AxiosGet from '../components/AxiosGet';
import AxiosPost from '../components/AxiosPost';
import AxiosPut from '../components/AxiosPut';
import AxiosDelete from '../components/AxiosDelete';
import AxiosError from '../components/AxiosError';
import AxiosCreate from '../components/AxiosCreate';
import AxiosAwait from '../components/AxiosAwait';
import AxiosHook from '../components/AxiosHook';
import CheeseHook from '../components/CheeseHook';
import CustomHook from '../components/CustomHook';
import '../App.css';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <NavBar className="NavBar"/>
            <Switch>
                <Route component={AxiosGet} path="/" exact={true} />
                <Route component={AxiosPost} path="/post" />
                <Route component={AxiosPut} path="/put" />
                <Route component={AxiosDelete} path="/delete"/>
                <Route component={AxiosError} path="/error"/>
                <Route component={AxiosCreate} path="/create"/>
                <Route component={AxiosAwait} path="/await"/>
                <Route component={AxiosHook} path="/useAxios"/>
                <Route component={CheeseHook} path="/cheese"/>
                <Route component={CustomHook} path="/custom"/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;