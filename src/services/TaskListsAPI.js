import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';
const TASKLIST_URL = BACKEND_URL + '/task_lists';

function getAll() {
    return axios.get(TASKLIST_URL)
        .then(function(res) {
            return res.data;
        });
}

function create(tasklist) {
    return axios.post(TASKLIST_URL, tasklist);
}


export default {
    getAll: getAll,
    create: create
};