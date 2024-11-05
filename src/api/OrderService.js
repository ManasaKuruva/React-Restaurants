
import api from './axiosInstance';

export const getOrders = async () => {
    const response = await api.get('/orders');
    return response.data;
};

export const createOrder = async (order) => {
    const response = await api.post('/orders', order);
    return response.data;
};

// Additional order-related functions...
