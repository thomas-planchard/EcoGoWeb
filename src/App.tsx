// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;