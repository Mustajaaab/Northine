import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Casestudies from './pages/casestudies';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/case-studies" element={<Casestudies />} />
    </Routes>
  );
}

export default App;
