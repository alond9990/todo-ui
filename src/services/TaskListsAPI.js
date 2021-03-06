import axios from 'axios';
import config from '../config';

const BACKEND_URL = config.BACKEND_URL;
const TASKLIST_URL = BACKEND_URL + '/task_lists';

function getAll() {
    return axios.get(TASKLIST_URL)
        .then(function(res) {
            return res.data;
        });
}

function create(tasklist) {
    return axios.post(TASKLIST_URL, tasklist)
        .then(function(res) {
            return res.data;
        });
}

function updateUsers(taskListId, user_ids) {
    return axios.put(TASKLIST_URL + '/' + taskListId + '/users', user_ids)
        .then(function(res) {
            return res.data;
        });
}


export default {
    getAll: getAll,
    create: create,
    updateUsers: updateUsers
};