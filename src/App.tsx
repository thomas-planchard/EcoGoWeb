// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import About from './pages/About/About.tsx';
import NotFoundPage from './pages/404/404Page.tsx';
import './App.css';
import PortfolioPage from './pages/Portfolio/Portfolio.tsx';
import ProjectPage from './pages/ProjectPage/ProjectPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/portfolio/:projectId" Component={ProjectPage} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;