import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx'

import './index.css';

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
