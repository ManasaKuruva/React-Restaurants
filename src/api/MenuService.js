import api from './axiosInstance';

export const getMenuItems = async () => {
    const response = await api.get('/menu');
    return response.data;
};

export const addMenuItem = async (menuItem) => {
    const response = await api.post('/menu', menuItem);
    return response.data;
};

// Add more functions as needed for update, delete, etc.
