// src/components/Customers.js
import React, { useState, useEffect } from 'react';
import { getCustomers, createCustomer } from '../../api/CustomerService';

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });

    useEffect(() => {
        // Fetch customers on component mount
        const fetchCustomers = async () => {
            const customersList = await getCustomers();
            setCustomers(customersList);
        };
        fetchCustomers();
    }, []);

    const handleAddCustomer = async () => {
        const addedCustomer = await createCustomer(newCustomer);
        setCustomers([...customers, addedCustomer]);
        setNewCustomer({ name: '', email: '' }); // Reset form
    };

    return (
        <div>
            <h2>Customers</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>

            <h3>Add New Customer</h3>
            <input
                type="text"
                placeholder="Name"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={newCustomer.email}
                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
            />
            <button onClick={handleAddCustomer}>Add Customer</button>
        </div>
    );
};

export default Customers;
