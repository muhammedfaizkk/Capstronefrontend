import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/whychooseus.css';

const WhyChooseUs = () => {
    const services = [
        {
            imgSrc: "./images/products/banner1.jpg",
            heading: "High-Quality Showers",
            details: "Our showers are made from the highest quality materials, ensuring durability and long-lasting performance."
        },
        {
            imgSrc: "./images/products/banner4.jpg",
            heading: "Elegant Taps",
            details: "Our range of taps combines functionality with elegant design to enhance the look of your bathroom."
        },
        {
            imgSrc: "./images/products/banner1.jpg",
            heading: "Affordable Prices",
            details: "We offer competitive pricing on all our bathfit items without compromising on quality."
        },
        {
            imgSrc: "./images/products/banner2.jpg",
            heading: "Expert Installation",
            details: "Our team of professionals provides expert installation services for all our products."
        },
        {
            imgSrc: "./images/products/banner3.jpg",
            heading: "Customer Support",
            details: "We offer 24/7 customer support to assist you with any queries or issues you may have."
        },
        {
            imgSrc: "./images/products/banner4.jpg",
            heading: "Eco-Friendly Products",
            details: "Our products are designed to be eco-friendly, helping you conserve water and energy."
        },
    ];

    return (
        <div className="why_choose">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="why_choose_head">
                            <h2 className="fw-bold fs-1">
                                Why <span className="b-class-secondary">Choose us</span>
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {services.map((service, index) => (
                        <Col xs={12} sm={6} md={4} key={index} className="top">
                            <div className="text-down">
                                <img src={service.imgSrc} alt="Service" />
                                <div className="textbox">
                                    <h3>{service.heading}</h3>
                                    <p className="details">{service.details}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default WhyChooseUs;
