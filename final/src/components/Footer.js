import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer id="contact-info" className="bg-dark">
    <div className="container">
      <div className="box">
        <FontAwesomeIcon icon="fa-solid fa-map-pin" />
        <h3>Location</h3>
        <p>34/1 Manas Street</p>
        <button type="button" className="btn"><a href="/contact">Map</a></button>
      </div>
      <div className="box">
      <FontAwesomeIcon icon="fas fa-phone fa-3x" />
        <h3>Telephone Number</h3>
        <p>8 (727) 320-00-00</p>
        <p>8 (727) 320-00-01</p>
      </div>
      <div className="box">
      <FontAwesomeIcon icon="fas fa-envelope fa-3x" />
        <h3>Email Address</h3>
        <p>reception@iitu.edu.kz</p>
      </div>
    </div>
  </footer>
);

export default Footer;