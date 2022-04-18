import React from 'react';
import myImage from '../../image/Apicture.png';
import './About.css'
const About = () => {
    return (
        <div className='about-image'>
            <h2>About Me</h2>
            <img src={myImage} alt="" />
            <h2>Number:01728XXXXXX</h2>
            <h2>Email: <small>himonxxxxxxx@gmail.com</small></h2>
            <div className='horizontal'></div>

            <div>
                <h1>My Goals: WebDeveloper</h1>
            </div>
        </div>
    );
};

export default About;