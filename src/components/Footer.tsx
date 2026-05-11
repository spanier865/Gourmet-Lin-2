import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
        <div className="text-2xl font-serif font-bold tracking-widest uppercase text-white">Gourmet Lin</div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} Gourmet Lin. Alle Rechte vorbehalten.
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest text-white/50">
          <Link to="/legoland" className="hover:text-white transition-colors text-accent">Anfahrt aus dem Legoland</Link>
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Datenschutzerklärung</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
