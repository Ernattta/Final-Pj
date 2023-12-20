import React from 'react';
import AboutInfo from '../components/AboutInfo';
import AboutShowcase from '../components/AboutShowcase';
import AboutEvents from '../components/AboutEvents';
import AboutClub from '../components/AboutClub';
import Footer from '../components/Footer';

const About = () => (
  <div>
    <AboutShowcase/>
    <AboutInfo />
    <AboutClub />
    <AboutEvents />
    <Footer />
    
  </div>
);

export default About;