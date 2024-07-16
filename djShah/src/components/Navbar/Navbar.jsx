import React from 'react';
import './Navbar.css';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Navbar = ({ openDrawerRight }) => {
    console.log('Navbar received openDrawerRight:', openDrawerRight);

    const handleEventsClick = () => {
        console.log('EVENTS clicked');
        openDrawerRight(); // Invoke the prop function to open the drawer
    };

    return (
        <div className='navbar'>
            <h1 className='logo'>DJ SHXH</h1>
            <ul>
                <li>HOME</li>
                <li onClick={handleEventsClick}>EVENTS</li>
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
    );
}

export default Navbar;
