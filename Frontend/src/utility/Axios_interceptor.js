import axios from "axios";
import { BASE_URL } from "./url";

export const axiosinstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

axiosinstance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosinstance.interceptors.response.use(
    function onFulfilled(response) {
        return response;
    },
    function onRejected(error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('unauthorized'));
            }
        }
        return Promise.reject(error);
    }
);
