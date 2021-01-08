import axios from "axios";

const instance = axios.create({
    baseURL: '...' // put the API {cloud function} url
});

export default instance;