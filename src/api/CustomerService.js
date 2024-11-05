// src/api/CustomerService.js
import api from './axiosInstance';

export const getCustomers = async () => {
    const response = await api.get('/customers');
    return response.data;
};

export const createCustomer = async (customer) => {
    const response = await api.post('/customers', customer);
    return response.data;
};

// Additional customer-related functions...
