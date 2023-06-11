import React from 'react';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
    <>
        <div className='Navbar-container'>
            <h2>Gilbert Co</h2>
            <ul className='navbar-menu-items'>
                <li className='navbar-item'>
                    <i class="fa fa-facebook"></i>
                </li>
                <li className='navbar-item'>
                    <i class="fa fa-twitter"></i>
                </li>
                <li className='navbar-item'>
                    <i class="fa fa-linkedin"></i>
                </li>
                <li className='navbar-item'>
                    <i class="fa fa-github"></i>
                </li>
                <li className='navbar-item menu' onClick={handleClick}>
                    <i className={click? 'fa fa-times': 'fa fa-bars'}></i>
                </li>
            </ul>

        </div>
        <div className='collapse-menu' style={{display: (click? 'block': 'none')}}>
            <ul className='profile-menu-items'>
                <li className='profile-menu-item' >
                    <a href='#home' className='menu'>Home</a>
                </li>
                <li className='profile-menu-item'>
                    <a href='#about-me' className='menu'>About Me</a>
                </li>
                <li className='profile-menu-item'>
                    <a href='#services' className='menu'>Services</a>
                </li>
                <li className='profile-menu-item'>
                    <a to='/' className='menu'>Resume</a>
                </li>
                <li className='profile-menu-item'>
                    <a to='/' className='menu'>Projects</a>
                </li>
                <li className='profile-menu-item'>
                    <a to='/' className='menu'>Contact</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar