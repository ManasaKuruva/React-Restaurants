import React, { useEffect, useState } from 'react';
import { getMenuItems, addMenuItem } from '../../api/MenuService';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [newMenuItem, setNewMenuItem] = useState({ name: '', price: 0 });

    useEffect(() => {
        // Fetch menu items on component mount
        const fetchMenuItems = async () => {
            const items = await getMenuItems();
            setMenuItems(items);
        };
        fetchMenuItems();
    }, []);

    const handleAddMenuItem = async () => {
        const addedItem = await addMenuItem(newMenuItem);
        setMenuItems([...menuItems, addedItem]);
        setNewMenuItem({ name: '', price: 0 });  // Reset form
    };

    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>

            <h3>Add New Menu Item</h3>
            <input
                type="text"
                placeholder="Name"
                value={newMenuItem.name}
                onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={newMenuItem.price}
                onChange={(e) => setNewMenuItem({ ...newMenuItem, price: parseFloat(e.target.value) })}
            />
            <button onClick={handleAddMenuItem}>Add Item</button>
        </div>
    );
};

export default Menu;

