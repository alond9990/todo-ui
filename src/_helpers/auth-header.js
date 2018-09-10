/**
 * Created by alond9990 on 10/09/2018.
 */

export function authHeader() {
    // return authorization header with the auth token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}