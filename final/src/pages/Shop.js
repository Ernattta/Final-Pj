import React from 'react';
import ShopShowcase from '../components/ShopShowcase';
import ShopCarousel from '../components/ShopCarousel';
import ShopQR from '../components/ShopQR'
import Footer from '../components/Footer';

const Shop = () => (
  <div>
    <ShopShowcase />
    <ShopCarousel />
    <ShopQR />
    <Footer />
  </div>
);

export default Shop;