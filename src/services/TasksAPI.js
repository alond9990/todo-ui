import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';
const TASKLIST_URL = BACKEND_URL + '/tasks';



function create(task) {
    return axios.post(TASKLIST_URL, task)
        .then(function (res) {
            return res.data;
        });
}


export default {
    create: create
};