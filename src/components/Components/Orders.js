// src/components/Orders.js
import React, { useState, useEffect } from 'react';
import { getOrders, createOrder } from '../../api/OrderService';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ customerName: '', items: '' });

    useEffect(() => {
        // Fetch orders on component mount
        const fetchOrders = async () => {
            const ordersList = await getOrders();
            setOrders(ordersList);
        };
        fetchOrders();
    }, []);

    const handleAddOrder = async () => {
        const addedOrder = await createOrder(newOrder);
        setOrders([...orders, addedOrder]);
        setNewOrder({ customerName: '', items: '' }); // Reset form
    };

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.customerName} - {order.items.join(', ')}
                    </li>
                ))}
            </ul>

            <h3>Add New Order</h3>
            <input
                type="text"
                placeholder="Customer Name"
                value={newOrder.customerName}
                onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Items (comma-separated)"
                value={newOrder.items}
                onChange={(e) => setNewOrder({ ...newOrder, items: e.target.value.split(',') })}
            />
            <button onClick={handleAddOrder}>Add Order</button>
        </div>
    );
};

export default Orders;
