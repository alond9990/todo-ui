
class Auth {
    constructor() {
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    getIdToken() {

    }

    handleAuthentication() {

    }

    isAuthenticated() {

    }

    signIn() {

    }

    signOut() {
        // clear id token, profile, and expiration
    }
}

const authClient = new Auth();

export default authClient;