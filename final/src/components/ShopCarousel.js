import React, { useState } from 'react';

const ShopCarousel = () => {
  const images = [
    { id: 1, src: '/img/shop-1.jpg', description: 'UNWRAP THE JOY OF GIFTING |\nShop for the perfect gift and be generously rewarded as you round off the most wonderful season on a high note.' },
    { id: 2, src: '/img/shop-2.jpg', description: 'LOUIS VUITTON\nWOMEN’S FASHION | MEN’S FASHION |\nDiscover the evolving styles of one of the world’s most iconic luxury brands amidst incredible views of Marina Bay in the world’s only floating Louis Vuitton boutique.' },
    { id: 3, src: '/img/shop-3.jpg', description: 'APPLE\nELECTRONICS & TELECOMMUNICATIONS |\nThe first Apple store in the world that sits on water, with uninterrupted 360-degree panoramic views of the city. Explore curated Apple products and accessories while our Specialists and Geniuses are on hand to answer any queries.' },
    { id: 4, src: '/img/shop-4.png', description: 'BVLGARI\nJEWELLERY | WATCHES |\nEvery BVLGARI creation is imbued with a spirit of excellence, offering unmatched prestige through its recognisable, contemporary and elegant style.' },
    { id: 5, src: '/img/shop-5.jpg', description: 'CARTIER\nJEWELLERY | WATCHES |\nA reference in the world of luxury, Cartier, whose name is synonymous with open-mindedness and curiosity, stands out with its creations and reveals beauty wherever it may lie.' },
    { id: 6, src: '/img/shop-6.jpg', description: 'GUCCI\nWOMEN’S FASHION | MEN’S FASHION |\nFounded in Florence, Italy, in 1921, Gucci has built itself as one of the world’s leading luxury brands, celebrating creativity, Italian craftsmanship, and innovation. Explore the finest collection of ready-to-wear, handbags, small leather goods, luggage, shoes, accessories, and fine watches and jewellery.' },
  
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about-info" className="bg-light py-3">
      
      <br/><br/><br/><br/><br/><br/>
      <h2><span className="text-primary">FEATURED</span></h2>
      <div className="carousel">
        <img src={images[currentImage].src} alt={`dine ${currentImage + 1}`} />
        <div className="description">
          <p>{images[currentImage].description}</p>
        </div>
        <div className="nav">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className="container">
      <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    <br />
</section>
  
    
  );
};

export default ShopCarousel;