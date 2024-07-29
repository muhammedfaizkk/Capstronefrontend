import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/CatalogueSection.css';

const catalogueItems = [
  {
    icon: "fa-shower",
    title: "Shower Systems",
    description: "Premium quality shower systems with modern designs.",
  },
  {
    icon: "fa-faucet",
    title: "Tap Fittings",
    description: "Stylish and durable tap fittings for every need.",
  },
  {
    icon: "fa-bath",
    title: "Bath Accessories",
    description: "Complete range of bath accessories to enhance your experience.",
  },
];

function CatalogueSection() {
  return (
    <section id="catalogue" className="catalogue-section pt-5 pb-5">
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <h2 className="fw-bold fs-1">
              Our <span className="b-class-secondary">Catalogue</span>
            </h2>
          </Col>
        </Row>
        <Row className="mt-5 row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
          {catalogueItems.map((item, index) => (
            <Col key={index} className="d-flex justify-content-center mb-4">
              <div className="catalogue-card">
                <div className="icon-wrapper">
                  <i className={`fa ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CatalogueSection;
