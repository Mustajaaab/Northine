import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
<<<<<<< HEAD
import Casestudies from './pages/casestudies';
=======
>>>>>>> 3de220013904a85eddd0f68a1180a38c574969bf

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
<<<<<<< HEAD
      <Route path="/case-studies" element={<Casestudies />} />
=======
>>>>>>> 3de220013904a85eddd0f68a1180a38c574969bf
    </Routes>
  );
}

export default App;
