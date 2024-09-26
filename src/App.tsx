// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;