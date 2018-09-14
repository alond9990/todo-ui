import React from 'react';
import {Route} from 'react-router-dom';
import authClient from '../services/Auth';

function SecuredRoute(props) {
    const {component: Component, path} = props;
    return (
        <Route path={path} render={() => {
            if (!authClient.isAuthenticated()) {
                return <div></div>;
            }
            return <Component />
        }} />
    );
}

export default SecuredRoute;