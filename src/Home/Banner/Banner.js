import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import painting1 from '../../image/painting.png'
import painting2 from '../../image/painting2.png'
import painting3 from '../../image/painting3.jpg'
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel className='carousel-container' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{ height: "500px", borderRadius: "10px" }}
                        className="d-block w-100"
                        src={painting1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px", borderRadius: "10px" }}
                        className="d-block w-100"
                        src={painting2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: "500px", borderRadius: "10px" }}
                        className="d-block w-100"
                        src={painting3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;