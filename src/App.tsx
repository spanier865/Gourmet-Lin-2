import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BuffetPage from './pages/BuffetPage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import LokalPage from './pages/LokalPage';
import LegolandPage from './pages/LegolandPage';

export default function App() {
  return (
    <Router>
      <div className="relative bg-[#050505] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buffet" element={<BuffetPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/uber-uns" element={<AboutPage />} />
          <Route path="/lokal" element={<LokalPage />} />
          <Route path="/legoland" element={<LegolandPage />} />
        </Routes>
        <Footer />
        
        {/* Background Accents */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </Router>
  );
}
