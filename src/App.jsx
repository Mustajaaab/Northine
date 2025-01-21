import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Casestudies from './pages/Casestudies'; // Fixed casing in import
import Contact from './pages/Contact-Us';
import Jamila from './components/OurTeam/jamila';
import Farhan from './components/OurTeam/Farhan';
import Ahsam from './components/OurTeam/Ahsam';
import Irfan from './components/OurTeam/Irfan';
import Haseena from './components/OurTeam/Haseena';
import Kashif from './components/OurTeam/Kashif';
import Shazmeen from './components/OurTeam/Shazmeen';
import Rahat from './components/OurTeam/Rahat';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App ">
            <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<Casestudies />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/ourTeam/Jamila" element={<Jamila />} />
        <Route path="/ourTeam/Farhan" element={<Farhan />} />
        <Route path="/ourTeam/Ahsam" element={<Ahsam />} />
        <Route path="/ourTeam/Irfan" element={<Irfan />} />
        <Route path="/ourTeam/Haseena" element={<Haseena />} />
        <Route path="/ourTeam/Kashif" element={<Kashif />} />
        <Route path="/ourTeam/Shazmeen" element={<Shazmeen />} />
        <Route path="/ourTeam/Rahat" element={<Rahat />} />
      </Routes>
    </div>
  );
}

export default App;
