import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/proDetails.css';

function ProductDetailspage() {
  // State to manage the main image
  const [mainImage, setMainImage] = useState('./images/products/5 - swan neck Ovel EX.jpg');

  // Thumbnail images for bathfits items
  const thumbnails = [
    './images/products/product1.jpg',  // Default image
    './images/products/2WAY ANGLE COCK COSTA (CS 512).jpg',
    './images/products/5 - swan neck Ovel EX.jpg',
    './images/products/2WAY ANGLE COCK COSTA (CS 512).jpg',
  ];

  // Function to handle thumbnail click
  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <Container  className="product-details-page">
       <section id="product-info">
        <Row>
          <Col md={2} xs={3} className="item-list-vertical">
            {thumbnails.map((thumb, index) => (
              <div 
                className="thumb-box" 
                key={index} 
                onClick={() => handleThumbnailClick(thumb)} // Update the main image when thumbnail is clicked
              >
                <img src={thumb} alt={`thumbnail-${index}`} />
              </div>
            ))}
          </Col>
          <Col md={5} xs={9} className="item-image-main">
            <img src={mainImage} alt="main-product" />
          </Col>
          <Col md={5} xs={12} className="item-info-parent">
            <div className="main-info">
              <h4>Deluxe Chrome-Plated Bath Tap</h4>
              <div className="star-rating">
                <span>★★★★</span>★
              </div>
              <p>Price: <span id="price">₹ 3,999.00</span></p>
            </div>

            <div className="select-items">
              <div className="change-category">
                <label><b>Category:</b></label><br />
                <Button variant="outline-dark" className="me-2">Taps</Button>
                <Button variant="outline-dark" className="me-2">Showers</Button>
                <Button variant="outline-dark">Accessories</Button>
              </div>

              <div className="change-size">
                <label><b>Size:</b></label><br />
                <select>
                  <option>Standard</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
              </div>

              <div className="description">
                <ul>
                  <li>Material: Chrome-Plated Brass</li>
                  <li>Installation: Wall-Mounted</li>
                  <li>Finish: Polished</li>
                  <li>Flow Rate: 10 L/min</li>
                  <li>Warranty: 5 Years</li>
                </ul>
              </div>
            </div>

            <Button variant="dark" size="md" className="mt-4">Buy Now</Button>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default ProductDetailspage;
