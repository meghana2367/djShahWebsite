import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './index.css';
import Eventbar from './components/Eventbar/Eventbar.jsx';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar />
        <Eventbar />
      </div>
    </BrowserRouter>
  )
}

export default App
