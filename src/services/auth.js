import axios from 'axios';
import config from '../config';

const BACKEND_URL = config.BACKEND_URL;

class Auth {
    constructor() {
        this.setTokenToAxiosDefaults = this.setTokenToAxiosDefaults.bind(this);
        this.verifyToken = this.verifyToken.bind(this);
        this.getToken = this.getToken.bind(this);
        this.getUser = this.getUser.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.register = this.register.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);

        let token = this.getToken();
        if (token) {
            this.setTokenToAxiosDefaults(token);
            let isValid = this.verifyToken(token);
            if (!isValid) {
                this.signOut();
            }
        }
    }

    setTokenToAxiosDefaults(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    verifyToken(token) {
        return axios.get(BACKEND_URL + '/verify')
            .then(function (res) {
                return true;
            })
            .catch(function(err) {
                return false;
            });
    }

    getToken() {
        try {
            return JSON.parse(localStorage.getItem('user')).token;
        } catch (e) {
            return null
        }
    }

    getUser() {
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch (e) {
            return null
        }
    }

    isAuthenticated() {
        let token = this.getToken();
        return !!token;

    }

    register(username, password) {
        return axios.post(BACKEND_URL + '/register', {"username": username, "password": password})
            .then(function (res) {
                return true;
            })
            .catch(function(err) {
                return false;
            });
    }

    signIn(username, password) {
        return axios.post(BACKEND_URL + '/login', {"username": username, "password": password})
            .then(function (res) {
                let user = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                window.location.reload(); // token is set to defaults after reload
                return user;
            })
            .catch(function(err) {
                return null;
            });
    }

    signOut() {
        // clear id token, profile, and expiration
        localStorage.removeItem('user');
    }
}

const authClient = new Auth();

export default authClient;