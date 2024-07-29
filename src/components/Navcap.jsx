import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navStyle.css'; // Ensure this path is correct

const Navcap = () => {
  return (
    <Navbar expand="lg" className="navboot fixed-top py-4">
      <Container>

        <img className="nav-logo" src="./images/logo192.png" alt="Logo" />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"  >
          </Nav>
          <Nav className='d-flex gap-5'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navcap;