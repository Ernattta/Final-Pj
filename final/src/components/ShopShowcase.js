import React from 'react';

const ShopShowcase = () => (
  <div id="showcase">
    <div className="container">
      <video src="/video/video-shop.mp4" type="video/mp4" autoPlay muted loop/>
      <div className="effects"></div>
      <div className="showcase-content">
        <h1>LUXURY NEVER GOES<br/>OUT OF STYLE</h1>
      </div>
    </div>
  </div>
);

export default ShopShowcase;