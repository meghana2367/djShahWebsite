import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Event from './components/Eventbar/Event.jsx'; // Adjust the import path as necessary
import './index.css';

function App() {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => {
    setOpenRight(true);
  };

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  return (
    <div className='container'>
      <Navbar openDrawerRight={openDrawerRight} />
      <Home />
      <Event />
    </div>
  );
}

export default App;
