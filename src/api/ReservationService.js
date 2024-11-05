// src/api/ReservationService.js
import api from './axiosInstance';

export const getReservations = async () => {
    const response = await api.get('/reservations');
    return response.data;
};

export const createReservation = async (reservation) => {
    const response = await api.post('/reservations', reservation);
    return response.data;
};

// Additional reservation-related functions...
