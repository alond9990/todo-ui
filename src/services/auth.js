import axios from 'axios'

const BACKEND_URL = 'http://localhost:3000';

class Auth {
    constructor() {
        this.setTokenToAxiosDefaults = this.setTokenToAxiosDefaults.bind(this);
        this.getToken = this.getToken.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.register = this.register.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);

        let token = this.getToken();
        if (token) {
            // todo: add verify token
            this.setTokenToAxiosDefaults(token);
        }
    }

    setTokenToAxiosDefaults(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    getToken() {
        try {
            return JSON.parse(localStorage.getItem('user')).token;
        } catch (e) {
            return null
        }
    }

    getUsername() {
        try {
            return JSON.parse(localStorage.getItem('user')).username;
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
            });
    }

    signOut() {
        // clear id token, profile, and expiration
        localStorage.removeItem('user');
    }
}

const authClient = new Auth();

export default authClient;