/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from './api';
import { token } from './credentials/token.json';

const authenticate = async () => {
    const response = await api.post(`/Login/Autenticar?token=${token}`);

    return response.data;
};

export default authenticate;
