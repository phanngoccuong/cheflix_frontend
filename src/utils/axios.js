import axios from 'axios';

import {
    BASE_URL
} from '../constants';

let _token = '';

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    },
    timeout: 5000
});

client.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${_token}`;
    return config;
})

const injectToken = (token) => {
    _token = token;
}

const removeToken = () => {
    _token = '';
}

export {
    injectToken,
    removeToken,
    client
};