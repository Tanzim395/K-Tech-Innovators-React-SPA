import React from 'react';
import './Header.css';
import logo from '../../images/TP200720160544_A1.jpg';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/councilling">Councilling Time</a>
                <a href="/contact">Contact</a>
            </nav>
            <div>
                <h3 style={{ textAlign: 'center', fontWeight: '700', fontSize: '25px' }}>Where the world meet <span style={{ color: 'orange' }}>"Tech Legends"</span></h3>
            </div>
        </div>
    );
};

export default Header;