import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Casestudies from './pages/Casestudies'; // Fixed casing in import
import Contact from './pages/Contact-Us';
import './App.css';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<Casestudies />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
