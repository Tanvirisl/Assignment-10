import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) =>{
        navigate(`/service/${id}`)
    }
    
    return (
        <div className='service-main-container'>
            <div className='service-container'>
                <img src={service.image} alt="" />
                <div className='service-container-details'>
                    <h3>{service.name}</h3>
                    <div>
                        <button onClick={()=>navigateToServiceDetail(service.id)}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;