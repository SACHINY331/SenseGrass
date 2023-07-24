import axios from 'axios';

const tasksUrl = 'http://localhost:8000';

export const gettask = async (id) => {
    id = id || '';
    return await axios.get(`${tasksUrl}/${id}`);
}

export const addtask = async (task) => {
    return await axios.post(`${tasksUrl}/add`, task);
}

export const deletetask = async (id) => {
    return await axios.delete(`${tasksUrl}/${id}`);
}

export const edittask = async (id, task) => {
    return await axios.put(`${tasksUrl}/${id}`, task)
}