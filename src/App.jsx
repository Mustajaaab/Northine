import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Casestudies from './pages/Casestudies'; // Fixed casing in import
import Contact from './pages/Contact-Us';
import Jamila from './components/OurTeam/jamila';
import Farhan from './components/ourTeam/Farhan';
import Ahsam from './components/OurTeam/Ahsam';
import Irfan from './components/OurTeam/Irfan';
import Haseena from './components/ourTeam/Haseena';
import Kashif from './components/ourTeam/Kashif';
import Shazmeen from './components/ourTeam/Shazmeen';
import Rahat from './components/OurTeam/Rahat';
import Afshan from './components/ourTeam/Afshan';
import Javaid from './components/ourTeam/Javaid .jsx';
import Sohail from './components/ourTeam/Sohail';
import ScrollToTop from './components/ScrollToTop';
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy';
import CasesStudie1 from './components/casestudies/casestudies1.jsx';
import CasesStudie2 from './components/casestudies/casestudies2.jsx';
import CasesStudie3 from './components/casestudies/casestudies3.jsx';
import CasesStudie4 from './components/casestudies/casestudies4.jsx';
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
        <Route path="/case-studies1" element={< CasesStudie1/>} />
        <Route path="/case-studies2" element={<CasesStudie2/>} />
        <Route path="/case-studies3" element={<CasesStudie3/>} />
        <Route path="/case-studies4" element={<CasesStudie4/>} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/ourTeam/Jamila" element={<Jamila />} />
        <Route path="/ourTeam/Farhan" element={<Farhan />} />
        <Route path="/ourTeam/Ahsam" element={<Ahsam />} />
        <Route path="/ourTeam/Irfan" element={<Irfan />} />
        <Route path="/ourTeam/Haseena" element={<Haseena />} />
        <Route path="/ourTeam/Kashif" element={<Kashif />} />
        <Route path="/ourTeam/Shazmeen" element={<Shazmeen />} />
        <Route path="/ourTeam/Rahat" element={<Rahat />} />
        <Route path="/ourTeam/Afshan" element={<Afshan />} />
        <Route path="/ourTeam/Javaid" element={<Javaid />} />
        <Route path="/ourTeam/Sohail" element={<Sohail />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
