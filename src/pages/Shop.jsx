import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import React Icons
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import { Col, Container, Row, Button, Modal, Dropdown } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import './styles/shop.css'; // Ensure your custom styles are imported
import { useNavigate } from 'react-router-dom';

export default function Shop() {
  const [iconsActive, setIconsActive] = useState('all');
  const [showFilterModal, setShowFilterModal] = useState(false);

  const navigate = useNavigate()

  const navigateProductd = ()=>{
    navigate('../productdetails')
  }

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }
    setIconsActive(value);
  };

  const handleFilterModal = () => setShowFilterModal(!showFilterModal);

  return (
    <div className="shop-page">
      <Container fluid>
        <Row className="mb-4 align-items-center">
          <Col className="d-flex align-items-center">
            <div className="d-none d-sm-block">
              <MDBTabs className='mb-3'>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleIconsClick('all')}
                    active={iconsActive === 'all'}
                  >
                    <MDBIcon fas icon='tags' className='me-2' /> All
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleIconsClick('products')}
                    active={iconsActive === 'products'}
                  >
                    <MDBIcon fas icon='box' className='me-2' /> Products
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleIconsClick('accessories')}
                    active={iconsActive === 'accessories'}
                  >
                    <MDBIcon fas icon='star' className='me-2' /> Accessories
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
            </div>

            <div className="d-block d-sm-none">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className="custom-dropdown-toggle">
                  <MDBIcon fas icon='bars' className='me-2' /> Categories
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item
                    onClick={() => handleIconsClick('all')}
                    active={iconsActive === 'all'}
                    className="custom-dropdown-item"
                  >
                    <MDBIcon fas icon='tags' className='me-2' /> All
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleIconsClick('products')}
                    active={iconsActive === 'products'}
                    className="custom-dropdown-item"
                  >
                    <MDBIcon fas icon='box' className='me-2' /> Products
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleIconsClick('accessories')}
                    active={iconsActive === 'accessories'}
                    className="custom-dropdown-item"
                  >
                    <MDBIcon fas icon='star' className='me-2' /> Accessories
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col className="text-md-end d-flex justify-content-end">
            <Button className='filterbutton' onClick={handleFilterModal}>
              Filter
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <MDBTabsContent>
              <MDBTabsPane open={iconsActive === 'all'}>
                <Row className="g-4">
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
              </MDBTabsPane>
              <MDBTabsPane open={iconsActive === 'products'}>
                <Row className="g-4">
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
              </MDBTabsPane>
              <MDBTabsPane open={iconsActive === 'accessories'}>
                <Row className="g-4">
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <div className="product-card position-relative" onClick={navigateProductd}>
                      <div className="badge">Hot</div>
                      <div className="product-tumb">
                        <img src="./images/products/product1.jpg" alt="Product" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">Women, bag</span>
                        <h4><a href="#">Women Leather Bag</a></h4>
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
              </MDBTabsPane>
            </MDBTabsContent>
          </Col>
        </Row>
      </Container>

      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={handleFilterModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add filter options here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFilterModal}>
            Close
          </Button>
          <Button variant="primary">
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
