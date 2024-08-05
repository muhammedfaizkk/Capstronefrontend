import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navStyle.css'; // Ensure this path is correct
import { useNavigate, useLocation } from 'react-router-dom';

const Navcap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateHome = () => {
    navigate('/')


  }
  const navigateAbout = () => {
    navigate('/about')
  }

  // Determine if the current path is home or about
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';


  return (
    <Navbar expand="lg" className={`navboot fixed-top py-4 ${isHome ? 'home-nav' : ''} ${isAbout ? 'about-nav' : ''}`}>
      <Container>
        <img className="nav-logo" src="./images/logo192.png" alt="Logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"  >
          </Nav>
          <Nav className='d-flex gap-5'>
            <Nav.Link onClick={navigateHome}>Home</Nav.Link>
            <Nav.Link onClick={navigateAbout}>About</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navcap;
