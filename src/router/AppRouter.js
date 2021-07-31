import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AxiosGet from '../components/AxiosGet';
import AxiosPost from '../components/AxiosPost';


const AppRouter = () => (
    <BrowserRouter>
        <div className="container">

            <Switch>
                <Route component={AxiosGet} path="/" exact={true} />
                <Route component={AxiosPost} path="/post" exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;