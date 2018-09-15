import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';
const USER_URL = BACKEND_URL + '/users';

function getAll() {
    return axios.get(USER_URL)
        .then(function(res) {
            return res.data;
        });
}


export default {
    getAll: getAll
};