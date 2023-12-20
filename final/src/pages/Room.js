import React from 'react';
import RoomInfo from '../components/RoomInfo';
import RoomShowcase from '../components/RoomShowcase';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Room = () => (
  <div>
    <RoomShowcase />
    <RoomInfo />
    <ContactForm />
    <Footer />
  </div>
);

export default Room;