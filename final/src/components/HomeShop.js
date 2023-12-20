import React from 'react';

const HomeShop = () => (
  <section id="home-info" className="bg-dark">
    <div className="info-video">
      <video src="/video/homepage-slider.mp4" type="video/mp4" autoPlay muted loop/>
      
    </div>
    
    <div className="info-content">
      <h2><span className="text-primary">WHERE LUXURY UNFOLDS AT EVERY TURN</span></h2>
      <p>
      Discover Marina Bay Sands, a landmark destination in the heart of Singapore’s vibrant city district. Envisioned by renowned architect Moshe Safdie, the striking aesthetic defiantly blurs the line between art and architecture.<br/><br/>
      Experience unparalleled luxury matched by exceptional service, in a land where every detail whispers indulgence. An exhilarating oasis of tranquility and thrill.<br/><br/>
      Gaze down on the glittering expanse of the city from the world-famous Infinity Pool and immerse yourself in a world of infinite possibilities — all in one extraordinary destination. There is nowhere else on earth quite like this.
      </p>
      <div class="section-divider"></div>
      <a className="btn-light" href="/shop">Discover more</a>
      
    </div>
  </section>
);

export default HomeShop;