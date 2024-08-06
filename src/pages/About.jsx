import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles/aboutus.css';
import TeamMembersSwiper from '../components/TeamMembersSwiper';
import { Row } from 'react-bootstrap';
import Moreabout from '../components/Moreabout';
import Aboutcount from '../components/Aboutcount';


function About() {
  return (
    <div className="about-section ">
      <Container fluid>
        <Container>
          <div className="about-container">
            <div className="about-content">
              <h2 className="about-heading">Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              </p>
            </div>
            <div className="about-image">
              <img src="./images/images/about01.jpg" alt="About Us" />
            </div>
          </div>

          <Row>
            <TeamMembersSwiper />
          </Row>
        </Container>
        <Row className='moreCon'>
          <Container>
            <Moreabout />
          </Container>
        </Row>
        <Row>
          <Aboutcount/>
        </Row>
      </Container>
    </div>
  );
}

export default About;
