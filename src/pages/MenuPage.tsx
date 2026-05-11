import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  // Update this URL with the actual PDF path when available
  const menuPdfUrl = "https://17c0b707-0a79-4a86-9b4d-5da46eea4996.usrfiles.com/ugd/17c0b7_0f7ca6b741164f3fb2c16566f0a551ac.pdf"; 

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Speisekarte | Restaurant Gourmet Lin Günzburg";
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs uppercase tracking-widest font-bold">Zurück zur Startseite</span>
          </Link>
          
          <div className="flex flex-col items-center text-center gap-8">
            <div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="h-[1px] w-8 bg-accent"></span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Kulinarik</span>
                <span className="h-[1px] w-8 bg-accent"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif">Unsere Speisekarte</h1>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={menuPdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-accent/20"
              >
                <ExternalLink className="w-4 h-4" />
                Vollbild anzeigen
              </a>
              <a 
                href={menuPdfUrl} 
                download
                className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white/10 transition-all duration-500"
              >
                <Download className="w-4 h-4" />
                Herunterladen (PDF)
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 aspect-[3/4] md:aspect-[1/1.4] shadow-2xl"
        >
          {/* PDF Viewer for Desktop */}
          <iframe
            src={`${menuPdfUrl}#view=FitH`}
            className="w-full h-full border-none hidden md:block"
            title="Speisekarte PDF"
          />

          {/* Mobile Fallback / Card View */}
          <div className="md:hidden flex flex-col items-center justify-center h-full p-12 text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-serif mb-4">Speisekarte im Vollbild ansehen</h3>
            <p className="text-white/50 mb-8 max-w-xs mx-auto">
              Für die beste Erfahrung auf dem Smartphone öffnen Sie bitte die PDF direkt im Browser oder laden Sie diese herunter.
            </p>
            <a 
              href={menuPdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold w-full"
            >
              PDF Öffnen
            </a>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-white/30 text-sm italic"
        >
          Änderungen an Gerichten und Preisen vorbehalten. Alle Angaben ohne Gewähr.
        </motion.p>
      </div>
    </div>
  );
};

export default MenuPage;
