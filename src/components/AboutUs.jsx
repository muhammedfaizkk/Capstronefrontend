import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './styles/aboutus.css'; // Make sure this path is correct

function AboutUs() {
    const serviceCards = [
        {
          icon: "fa-chart-line",
          title: "Tracking Lead",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
        },
        {
          icon: "fa-arrows-down-to-people",
          title: "Advanced Targeting solution",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
        },
        {
          icon: "fa-globe",
          title: "Global Reach & Quality Traffic",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
        },
        {
          icon: "fa-money-check-dollar",
          title: "Flexible pricing models",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
        },
        {
          icon: "fa-circle-check",
          title: "Advanced optimization technologies & methodologies",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
        },
        {
          icon: "fa-people-group",
          title: "Dedicated account management team",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
        }
      ];
    return (
        <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="section-header">
              <h2 className="fw-bold fs-1">
                Our
                <span className="b-class-secondary">Advertiser </span>Services
              </h2>
              <p className="sec-icon">
                <i className="fa-solid fa-gear"></i>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          {serviceCards.map((card, index) => (
            <Col key={index} className="d-flex justify-content-center mb-4">
              <div className="service-card">
                <div className="icon-wrapper">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    )
}

export default AboutUs;
