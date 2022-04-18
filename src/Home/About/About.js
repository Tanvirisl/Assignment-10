import React from 'react';
import myImage from '../../image/Apicture.png';
import './About.css'
const About = () => {
    return (
        <div className='about-image'>
            <h2>About Me</h2>
            <img src={myImage} alt="" />
        </div>
    );
};

export default About;