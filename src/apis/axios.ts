import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    if(response.data && response.status >= 200 && response.status < 300) {
        return response;
    } else {
        return Promise.reject(response);
    }
}, function (error) {
    return Promise.reject(error.response.data);
});

export default instance;