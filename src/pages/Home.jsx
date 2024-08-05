import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Navcap from '../components/Navcap';
import Banner from '../components/Banner';
import Services from '../components/Services';
import CatalogueSection from '../components/CatalogueSection';
import WhyChooseUs from '../components/WhychooseUs';
import CustomerTestimonials from '../components/CustomerTestimonials';
import Footer from '../components/Footer';
import './styles/home.css'; // Create this CSS file for custom styles

function Home() {
  return (
    <>
      <Banner/>
      <Services/>
      <CatalogueSection/>
      <WhyChooseUs/>
      <CustomerTestimonials/>
      

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="tel:+1234567890" className="icon">
          <FaPhone size={30} />
        </a>
        <a href="https://wa.me/1234567890" className="icon">
          <FaWhatsapp size={30} />
        </a>
      </div>
    </>
  );
}

export default Home;
