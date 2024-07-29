import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShower, FaBath, FaFaucet, FaWrench } from 'react-icons/fa';
import './styles/services.css'; // Make sure this path is correct



function Services() {
  const services = [
    {
      icon: <FaShower size={50} />,
      title: 'Elegant Showers',
      description: 'Experience luxury with our range of elegant showers.'
    },
    {
      icon: <FaBath size={50} />,
      title: 'Luxurious Baths',
      description: 'Relax in style with our luxurious bath collections.'
    },
    {
      icon: <FaFaucet size={50} />,
      title: 'Modern Faucets',
      description: 'Upgrade your bathroom with our modern faucets.'
    },
    {
      icon: <FaWrench size={50} />,
      title: 'Expert Installation',
      description: 'Professional installation services for a perfect fit.'
    }
  ];
  return (
    <Container className="service-section py-5">
      {/* <Row>
        <Col xs={12}>
          <div className="why_choose_head">
            <h1>O<span>UR SERVIC</span>E US?</h1>
          </div>
        </Col>
      </Row> */}
      <Row>
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="mb-4">
            <Card className="h-100 text-center service-card">
              <Card.Body>
                <div className="service-icon mb-3">{service.icon}</div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Services
