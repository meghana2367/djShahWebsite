import React, {useState} from 'react';
import './Navbar.css';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Eventbar from '../Eventbar/Eventbar';


const Navbar = () => {
    const showEventBar = () => {
        setEventBarOpen(true);
    };

    const closeEventBar = () => {
        setEventBarOpen(false);
    };

    return (
        <div className='navbar'>
            <h1 className='logo'>DJ SHXH</h1>
            <ul>
                <li>HOME</li>
                <li onClick={showEventBar}>EVENTS</li>
                <li>CONTACT</li>
                <li>GALLERY</li>
                <li>ABOUT</li>
            </ul>
            <a href="https://www.instagram.com/dj.shxh/?__d=11" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='icon' />
            </a>
            <a href="https://www.tiktok.com/@dj.shxh" target="_blank" rel="noopener noreferrer">
                <AiFillTikTok className='icon'/>
            </a>
            <a href="https://www.youtube.com/@djshxh/videos" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='icon' />
            </a>
        </div>
    )
}

export default Navbar;