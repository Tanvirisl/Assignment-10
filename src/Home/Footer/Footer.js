import React from 'react';
import './Footer.css'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <h2><small>CopyRight @ {year}</small></h2>
        </div>
    );
};

export default Footer;