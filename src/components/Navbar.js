import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import authClient from '../services/auth';

function NavBar(props) {

    const signOut = () => {
        authClient.signOut();
        props.history.replace('/');
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                To-do App
            </Link>
            {
                !authClient.isAuthenticated() &&
                <Link className="btn btn-dark" to="/login">Sign In</Link>
            }
            {
                authClient.isAuthenticated() &&
                <div>
                    <label className="mr-2 text-white">{authClient.getUser().username}</label>
                    <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
                </div>
            }
        </nav>
    );
}

export default withRouter(NavBar);