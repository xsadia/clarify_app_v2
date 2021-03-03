import axios from 'axios';

const api = axios.create({
    //baseURL: "http://192.168.100.29/clarify/api/"
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export default api;