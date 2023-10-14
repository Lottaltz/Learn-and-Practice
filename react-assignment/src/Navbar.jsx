import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css'


const Navbar = () => {
    const [isHomeHovering,setIsHomeHovering] = useState(false);
    const [isOwnerHovering,setIsOwnerHovering] = useState(false);

    const handleHomeMouseEnter = () => {
        setIsHomeHovering(true);
    }
    const handleHomeMouseLeave = () => {
        setIsHomeHovering(false);
    }
    const handleOwnerMouseEnter = () => {
        setIsOwnerHovering(true);
    }
    const handleOwnerMouseLeave = () => {
        setIsOwnerHovering(false);
    }

    return(
        <ul className='navigation'>
            <img src="https://cdn-icons-png.flaticon.com/256/7465/7465421.png" alt="" />
            <div className="link">
            <li><Link to='/' 
            style={{color: isHomeHovering ? '#333' : 'white',textDecoration: 'none'}} 
            onMouseEnter={handleHomeMouseEnter} 
            onMouseLeave={handleHomeMouseLeave}>Home</Link></li>
            <li><Link to='/owner' 
            style={{color: isOwnerHovering ? '#333' : 'white',textDecoration: 'none'}} 
            onMouseEnter={handleOwnerMouseEnter} 
            onMouseLeave={handleOwnerMouseLeave}>Owner</Link></li>
            </div>
        </ul>
    )
};

export default Navbar;