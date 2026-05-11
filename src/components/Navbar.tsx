import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Startseite", path: "/" },
    { name: "Lokal", path: "/lokal" },
    { name: "Buffet", path: "/buffet" },
    { name: "Speisekarte", path: "/menu" },
    { name: "Über uns", path: "/uber-uns" },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest uppercase text-white">Gourmet Lin</Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => handleNavClick(link.path)}
              className={`transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-white hover:text-accent'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent/80 transition-all transform hover:scale-105">
            Reservieren
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col space-y-4 text-center uppercase tracking-widest text-sm"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => handleNavClick(link.path)}
                className={location.pathname === link.path ? 'text-accent' : 'text-white'}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white px-6 py-3 rounded-full">Reservieren</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
