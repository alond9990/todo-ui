import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import authClient from '../services/auth';


const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        authClient.isAuthenticated()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

export default SecuredRoute;