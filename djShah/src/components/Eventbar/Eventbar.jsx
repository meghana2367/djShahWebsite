import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './Eventbar.css';
import Event from './Event.jsx';


const Eventbar = () => {
    return (
        <div className='eventbar'>
            <div className='title'> 
                upcoming events
            </div>
            <Event />
            <Event />
        </div>
    )
}

export default Eventbar;