import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import './styles/footer.css'; // Ensure this CSS file is created and included

const Footer = () => {
  return (
    <footer className="footer-bg text-muted">
      {/* Section: Social media */}
      <section className="p-4 footer-border-bottom">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left */}
          <div className="footer-margin-right d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div className="d-flex">
            <a href="#" className="footer-margin-right footer-text-reset footer-icon-hover">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-margin-right footer-text-reset footer-icon-hover">
              <FaTwitter />
            </a>
            <a href="#" className="footer-margin-right footer-text-reset footer-icon-hover">
              <FaGoogle />
            </a>
            <a href="#" className="footer-margin-right footer-text-reset footer-icon-hover">
              <FaInstagram />
            </a>
          </div>
        </Container>
      </section>

      {/* Section: Footer content */}
      <section className='pt-5'>
        <Container className="footer-text-center">
          <Row>
            {/* Column 1 */}
            <Col md={3} className="footer-col">
              <h5 className="footer-heading">Capstrone</h5>
              <p>
                Discover a wide range of bathfits items. Explore our latest collections and find the perfect fit for your bath spaces.
              </p>
            </Col>

            {/* Column 2 */}
            <Col md={3} className="footer-col">
              <h6 className="footer-text-uppercase footer-fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="footer-text-reset">Shower Heads</a>
              </p>
              <p>
                <a href="#!" className="footer-text-reset">Taps</a>
              </p>
              <p>
                <a href="#!" className="footer-text-reset">Accessories</a>
              </p>
              <p>
                <a href="#!" className="footer-text-reset">Best Sellers</a>
              </p>
            </Col>

            {/* Column 3 */}
            <Col md={3} className="footer-col">
              <h6 className="footer-text-uppercase footer-fw-bold mb-4">Useful Links</h6>
              <p>
                <a href="#!" className="footer-text-reset">Installation Guide</a>
              </p>
              <p>
                <a href="#!" className="footer-text-reset">Returns & Exchanges</a>
              </p>
              <p>
                <a href="#!" className="footer-text-reset">Shipping Information</a>
              </p>
              <p>
                <a href="#!" className="footer-text-reset">Contact Us</a>
              </p>
            </Col>

            {/* Column 4 */}
            <Col md={3} className="footer-col">
              <h6 className="footer-text-uppercase footer-fw-bold mb-4">Contact</h6>
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
        <a className="footer-text-reset footer-fw-bold" href="https://example.com">capstrone@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
