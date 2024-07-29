import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import './styles/footer.css'; // Ensure this CSS file is created and included

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="p-4 border-bottom">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div className="d-flex">
            <a href="#" className="me-4 text-reset icon-hover">
              <FaFacebookF />
            </a>
            <a href="#" className="me-4 text-reset icon-hover">
              <FaTwitter />
            </a>
            <a href="#" className="me-4 text-reset icon-hover">
              <FaGoogle />
            </a>
            <a href="#" className="me-4 text-reset icon-hover">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </section>

      {/* Section: Links */}
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row>
            {/* Grid column */}
            <Col md={3} lg={4} xl={3} className="mb-4">
              <h5 className="footer-heading">Capstrone</h5>
              <p>
                Discover a wide range of bathfits items. Explore our latest collections and find the perfect fit for your bath spaces.
              </p>
            </Col>

            {/* Grid column */}
            <Col md={2} lg={2} xl={3} className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">Shower Heads</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Taps</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Accessories</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Best Sellers</a>
              </p>
            </Col>

            {/* Grid column */}
            <Col md={3} lg={2} xl={3} className="mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <a href="#!" className="text-reset">Installation Guide</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Returns & Exchanges</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Shipping Information</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contact Us</a>
              </p>
            </Col>

            {/* Grid column */}
            <Col md={4} lg={3} xl={3} className="mb-md-0 mb-4">
              {/* Contact */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> 123 Bath Street, Bath City</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                capstrone@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +1 234 567 890</p>
              <p><i className="fas fa-print me-3"></i> +1 234 567 891</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://example.com">capstrone@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
