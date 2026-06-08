import axios from "axios";
import { BASE_URL } from "./url";

export const axiosinstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

// Request interceptor — attach JWT token from localStorage
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

// Response interceptor — handle errors globally
axiosinstance.interceptors.response.use(
    function onFulfilled(response) {
        return response;
    },
    function onRejected(error) {
        // If token expired / unauthorized, clear storage
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
        return Promise.reject(error);
    }
);
