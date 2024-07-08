import React from 'react';
import './Navbar.css';
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='logo'>DJ SHAH</h1>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Gallery</li>
                <li>About</li>
            </ul>
            <IoIosSearch className='searchBtn'/>
        </div>
    )
}

export default Navbar;