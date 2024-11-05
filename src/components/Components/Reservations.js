// src/components/Reservations.js
import React, { useState, useEffect } from 'react';
import { getReservations, createReservation } from '../../api/ReservationService';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);
    const [newReservation, setNewReservation] = useState({ customerName: '', date: '', time: '' });

    useEffect(() => {
        // Fetch reservations on component mount
        const fetchReservations = async () => {
            const reservationsList = await getReservations();
            setReservations(reservationsList);
        };
        fetchReservations();
    }, []);

    const handleAddReservation = async () => {
        const addedReservation = await createReservation(newReservation);
        setReservations([...reservations, addedReservation]);
        setNewReservation({ customerName: '', date: '', time: '' }); // Reset form
    };

    return (
        <div>
            <h2>Reservations</h2>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        {reservation.customerName} - {reservation.date} at {reservation.time}
                    </li>
                ))}
            </ul>

            <h3>Add New Reservation</h3>
            <input
                type="text"
                placeholder="Customer Name"
                value={newReservation.customerName}
                onChange={(e) => setNewReservation({ ...newReservation, customerName: e.target.value })}
            />
            <input
                type="date"
                value={newReservation.date}
                onChange={(e) => setNewReservation({ ...newReservation, date: e.target.value })}
            />
            <input
                type="time"
                value={newReservation.time}
                onChange={(e) => setNewReservation({ ...newReservation, time: e.target.value })}
            />
            <button onClick={handleAddReservation}>Add Reservation</button>
        </div>
    );
};

export default Reservations;
