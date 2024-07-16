import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx'

import './index.css';
import Eventbar from './components/Eventbar/Eventbar.jsx';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
