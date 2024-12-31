import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Casestudies from './pages/casestudies';
import Contact from './pages/Contact-Us';
import Fireworks from './components/Fireworks/Fireworks';

function App() {
  const [showFireworks, setShowFireworks] = useState(true);

  useEffect(() => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); 

    if (now >= midnight) {
      setShowFireworks(false);
    }
  }, []);

  return showFireworks ? (
    <Fireworks onFinish={() => setShowFireworks(false)} />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/case-studies" element={<Casestudies />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}

export default App;
