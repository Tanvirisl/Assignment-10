import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('myService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-main-container'>
            <h2>My services</h2>
            <div  className='services-container' id='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;