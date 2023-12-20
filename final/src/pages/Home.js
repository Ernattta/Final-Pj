import React from 'react';
import HomeShowcase from '../components/HomeShowcase';
import HomeShop from '../components/HomeShop.js';
import HomeDiner from '../components/HomeDiner';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <HomeShowcase />
    <HomeShop />
    <HomeDiner />
    <Footer />
  </div>
);

export default Home;