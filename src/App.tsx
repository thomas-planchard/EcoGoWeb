// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact';
import NotFoundPage from './pages/404/404Page.tsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;