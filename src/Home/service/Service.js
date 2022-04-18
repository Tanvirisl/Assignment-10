import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    console.log(service)
    return (
        <div className='service-main-container'>
            <div className='service-container'>
                <img src={service.image} alt="" />
                <div className='service-container-details'>
                    <h3>{service.name}</h3>
                    <div>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;