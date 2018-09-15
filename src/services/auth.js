import axios from 'axios'

const BACKEND_URL = 'http://localhost:3000';

class Auth {
    constructor() {
        this.getToken = this.getToken.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    getToken() {
        try {
            return JSON.parse(localStorage.getItem('user')).token;
        } catch (e) {
            return null
        }
    }

    isAuthenticated() {

    }

    signIn(username, password) {
        return axios.post(BACKEND_URL, {"username": username, "password": password})
            .then(function (res) {
                localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;
            });
    }

    signOut() {
        // clear id token, profile, and expiration
        localStorage.removeItem('user');
    }
}

const authClient = new Auth();

export default authClient;