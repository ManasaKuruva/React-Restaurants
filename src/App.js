// src/App.js
import Menu from './components/Components/Menu';
import Orders from './components/Components/Orders';
import Customers from './components/Components/Customers';
import Reservations from './components/Components/Reservations';
import {useState} from "react";


function App() {
  const [activeComponent, setActiveComponent] = useState('menu');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'menu':
        return <Menu />;
      case 'orders':
        return <Orders />;
      case 'customers':
        return <Customers />;
      case 'reservations':
        return <Reservations />;
      default:
        return <Menu />;
    }
  };

  return (
      <div>
        <h1>Restaurant Management System</h1>
        <nav>
          <button onClick={() => setActiveComponent('menu')}>Menu</button>
          <button onClick={() => setActiveComponent('orders')}>Orders</button>
          <button onClick={() => setActiveComponent('customers')}>Customers</button>
          <button onClick={() => setActiveComponent('reservations')}>Reservations</button>
        </nav>
        <div>{renderComponent()}</div>
      </div>
  );
}

export default App;
