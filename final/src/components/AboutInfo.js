import React, { useState } from 'react';

const AboutInfo = () => {
  const images = [
    { id: 1, src: '/img/dine-1.jpg', description: 'This two-MICHELIN-Starred restaurant by Tetsuya Wakuda lets you experience the artistry and delicacies from exquisite bar sets inspired by the flavours and seasons of Japan.' },
    { id: 2, src: '/img/dine-2.jpg', description: 'Inspired by seasonal blooms and British treats, our three-tiered afternoon tea sets are a sight to behold and a delight to explore. Choose between two meticulously curated menus, featuring exquisite creations elevated with a contemporary panache.' },
    { id: 3, src: '/img/dine-3.jpg', description: 'Enter through a striking 20-metre passageway reminiscent of Fushimi Inari Shrine. Savour innovative and original creations in a dramatic setting inspired by old Kyoto ― a real feast for the senses.' },
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
      <h2><span className="text-primary">A CULINARY ODYSSEY</span></h2>
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
      <div class="section-divider"></div>
  <h1 className="l-heading"> <span className="text-primary">MEET OUR CELEBRITY CHEFS</span></h1>
      <div className="chef">
        <img src="/img/chef-1.jpg" alt="Chef 1" />
        <h1 className="l-heading"><span className="text-primary">DANIEL BOULUD</span></h1>
        <p>Regarded as one of America's culinary authorities, Chef Daniel is the winner of several James Beard awards and chef-owner of two- Michelin-starred restaurant, DANIEL.</p>
      </div>


      <div className="chef">
        <img src="/img/chef-2.jpg" alt="Chef 2" />
        <h1 className="l-heading"><span className="text-primary">GORDON RAMSAY</span></h1>
        <p>Renowned for his appearances on TV shows, Chef Gordon also opened numerous successful restaurants like three- Michelin-starred Restaurant Gordon Ramsay.</p>
      </div>


      <div className="chef">
        <img src="/img/chef-3.jpg" alt="Chef 3" />
        <h1 className="l-heading"><span className="text-primary">TETSUYA WAKUDA</span></h1>
        <p>Considered one of Australia's finest chefs, Chef Tetsuya is known for his skill in combining fresh produce with French culinary arts and Japanese-style presentation.</p>
      </div>


      <div className="chef">
        <img src="/img/chef-4.jpg" alt="Chef 4" />
        <h1 className="l-heading"><span className="text-primary">WOLFGANG PUCK</span></h1>
        <p>Chef Wolfgang honed his bold and inventive style of cooking in some of France's most celebrated restaurants before opening the now-legendary Spago Beverly Hills in 1982.</p>
      </div>
    </div>
    <br />
</section>
  
    
  );
};

export default AboutInfo;