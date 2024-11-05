// src/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api', // Change this to your backend URL
    timeout: 1000, // Optional: Set a timeout for requests
});

// Optional: You can add interceptors for request/response logging or token handling
axiosInstance.interceptors.request.use(
    config => {
        // You can modify the request config here
        return config;
    },
    error => {
        // Handle the request error here
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        // You can modify the response data here
        return response;
    },
    error => {
        // Handle the response error here
        return Promise.reject(error);
    }
);

export default axiosInstance;
