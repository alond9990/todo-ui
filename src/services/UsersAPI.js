import axios from 'axios';
import config from '../config';

const BACKEND_URL = config.BACKEND_URL;
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