import React from 'react';
import '../../App.css';
import { Carousel } from 'react-bootstrap';
import image from '../../images/cover.png';
import image2 from '../../images/cover2.png';
import image3 from '../../images/cover3.png';

const CarouselSlider = (props) => {
    const { index, eventHandler } = props;

    return (
        <Carousel activeIndex={index} onSelect={eventHandler}>
            <Carousel.Item className="carousel text-center">
                <img className="d-block w-100" src={image3} alt="First slide" />
                <Carousel.Caption>
                    <h3>Contested By 20 Clubs...</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel text-center">
                <img className="d-block w-100" src={image} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Playing All 19 Other Teams Both Home And Away...</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel text-center">
                <img className="d-block w-100" src={image2} alt="Third slide" />
                <Carousel.Caption>
                    <h3>The Premier League is The Most-Watched Sports League in The World !</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default CarouselSlider;