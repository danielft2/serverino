import { API_URL } from '@env';
import axios from 'axios';

export const publicAPI = axios.create({
   baseURL: API_URL
});

export const privateAPI = axios.create({
   baseURL: API_URL
});
