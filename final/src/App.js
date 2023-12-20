import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Room';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import './styles/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);



const logoSrc = '/img/marina-bay-sands.png';

function App() {
  return (
    <Router>
      <div>
        <header id="navbar">
          <div className="container">
            <h1 className="logo">
              <NavLink to="/">
              <img src={logoSrc} alt="Logo" width="35px" height="35px" />
              </NavLink>
            </h1>
            <ul>
              <li><NavLink to="/rooms" activeClassName="current">STAY</NavLink></li>
              <li><NavLink to="/shop" activeClassName="current">SHOP</NavLink></li>
              <li><NavLink to="/about" activeClassName="current">DINE</NavLink></li>
              <li><NavLink to="/contact" activeClassName="current">RESERVE</NavLink></li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;