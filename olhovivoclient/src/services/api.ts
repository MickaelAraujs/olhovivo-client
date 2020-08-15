/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aiko-estagio-proxy.azurewebsites.net',
});

export default api;
