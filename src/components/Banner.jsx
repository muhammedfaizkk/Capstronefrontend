import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bennerCap.css';

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <Carousel
                fade
                controls={false}  
                indicators={false} 
            >
                

                <Carousel.Item>
                    <video className="d-block w-100 video" autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/videos/bannervideoone.mp4`} type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <h5>Luxury Bath Fixtures</h5>
                        <div className="button-group">
                        <Button variant="outline-light">SEE MORE</Button>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <video className="d-block w-100 video" autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/videos/bannervideotow.mp4`} type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <h5>Elegant Showers and Taps</h5>
                        <div className="button-group">
                        <Button variant="outline-light">SEE MORE</Button>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
