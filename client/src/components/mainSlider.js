import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgone from '../images/spider.webp';
import imgtwo from '../images/avengers.webp';
import imgthr from '../images/joker.webp';

export default function MainSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="surroundedShadow"></div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgtwo}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgthr}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://occ-0-590-64.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaa3bNbHMTLN9kF7NGZRbxjW1VRtAqBBsZR6pPnBOuzxva4WGuKt3-WwjXYAH3fkNt2_FHGQS31ToN_BQs10wlSGiVgPy3-cn17q.jpg?r=d92"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
}

