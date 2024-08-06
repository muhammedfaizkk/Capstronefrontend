import React from 'react';
import './styles/shop.css';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import React Icons

function Shop() {
  return (
    <Container>
      <Row className="g-5 py-md-5">
        <Col md={6} lg={4}>
          <div className="product-card position-relative">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src="./images/products/2 Way Angle Cock-bold x.jpg" alt="Product" />
            </div>
            <div className="product-details">
              <span className="product-catagory">Lorem Ipsum</span>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>$230.99</div>
                <div className="product-links">
                  <a href="#"><FaHeart className="icon" /></a>
                  <a href="#"><FaShoppingCart className="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="product-card position-relative">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src="./images/products/2WAY ANGLE COCK COSTA (CS 512).jpg" alt="Product" />
            </div>
            <div className="product-details">
              <span className="product-catagory">Lorem Ipsum</span>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>$230.99</div>
                <div className="product-links">
                  <a href="#"><FaHeart className="icon" /></a>
                  <a href="#"><FaShoppingCart className="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="product-card position-relative">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src="./images/products/6 - sink mixer Ovel EX.jpeg" alt="Product" />
            </div>
            <div className="product-details">
              <span className="product-catagory">Lorem Ipsum</span>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>$230.99</div>
                <div className="product-links">
                  <a href="#"><FaHeart className="icon" /></a>
                  <a href="#"><FaShoppingCart className="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
          <div className="product-card position-relative">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src="./images/products/2 Way Angle Cock-bold x.jpg" alt="Product" />
            </div>
            <div className="product-details">
              <span className="product-catagory">Lorem Ipsum</span>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>$230.99</div>
                <div className="product-links">
                  <a href="#"><FaHeart className="icon" /></a>
                  <a href="#"><FaShoppingCart className="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4}>
       
          <div className="product-card position-relative">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src="./images/products/oval sinkcok.jpg" alt="Product" />
            </div>
            <div className="product-details">
              <span className="product-catagory">Lorem Ipsumbag</span>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div className="product-bottom-details">
                <div className="product-price"><small>$96.00</small>$230.99</div>
                <div className="product-links">
                  <a href="#"><FaHeart className="icon" /></a>
                  <a href="#"><FaShoppingCart className="icon" /></a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
