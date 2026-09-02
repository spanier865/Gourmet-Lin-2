import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  UtensilsCrossed,
  Sparkles,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/17c0b7_31a1003de73843deb1764bad82206536~mv2.jpg" 
          alt="Asian Cuisine" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-[86px] lg:text-[115px] font-serif leading-tight mb-4 md:mb-6 mt-16 md:mt-0 text-white">
            Willkommen bei <br />
            <span className="italic text-accent text-glow">Gourmet Lin</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light tracking-wide max-w-3xl mx-auto mb-8 md:mb-10 px-2 sm:px-0">
            Authentische ostasiatische Küche mit besten Zutaten – täglich für Sie da in Günzburg. Vom mongolischen Grill bis zum frischen Sushi – erleben Sie Geschmack ohne Kompromisse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-accent/80 transition-all text-center">
              Tisch reservieren
            </a>
            <Link to="/menu" className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-all text-center">
              Speisekarte
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const USPs = () => {
  const points = [
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-accent" />,
      title: "Täglich frisch gekocht",
      desc: "Wir zaubern Ihnen täglich frisch zubereitete Delikatessen – nur mit den besten Zutaten, ganz ohne Glutamat."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Drei Küchen. Ein Erlebnis.",
      desc: "Chinesisch, mongolisch, japanisch – vom frischen Sushi bis zum Live Cooking direkt vor Ihren Augen."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Für jeden Anlass",
      desc: "Ob Familienessen, Firmenfeier oder Geburtstag – wir sind 365 Tage im Jahr für Sie da."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">{point.icon}</div>
              <h3 className="text-xl font-serif mb-4 tracking-wide text-white">{point.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BuffetCards = () => {
  return (
    <section id="buffet" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/17c0b7_8bd7afc73cf544579442f1ef9a5f49dc~mv2.jpg" 
          alt="Buffet Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-accent"></span>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Entdecken Sie</span>
            <span className="h-[1px] w-8 bg-accent"></span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-white">Unser Buffet Angebot</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] p-10 rounded-2xl border border-white/10 flex flex-col items-center text-center backdrop-blur-md hover:border-accent/30 transition-colors duration-500"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">Mittags</span>
            <h3 className="text-3xl font-serif mb-6 text-white">Mittagsbuffet</h3>
            <div className="mb-6">
              <span className="text-4xl font-serif text-white">Ab 19,50 €</span>
              <span className="text-xs text-white/40 ml-2 italic">p.P.</span>
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <p className="font-medium">Mo–Sa · 11:30–14:30 Uhr</p>
              <p className="text-xs italic">inkl. Softdrinks, Kaffee & 2x Bier</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.03] p-10 rounded-2xl border border-white/10 flex flex-col items-center text-center backdrop-blur-md hover:border-accent/30 transition-colors duration-500"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">Abends</span>
            <h3 className="text-3xl font-serif mb-6 text-white leading-tight">Erlebnisbuffet mit mongolischem Grill</h3>
            <div className="mb-6">
              <span className="text-4xl font-serif text-white">Ab 31,50 €</span>
              <span className="text-xs text-white/40 ml-2 italic">p.P.</span>
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <p className="font-medium">Mo–So · 17:30–22:00 Uhr</p>
              <p className="text-xs italic">inkl. Softdrinks, Bionade, Kaffee & 2x Bier</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/buffet" className="px-10 py-4 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-accent/10">
            Alle Preise & Details ansehen
          </Link>
        </div>
      </div>
    </section>
  );
};

const Atmosphere = () => {
  const highlights = [
    "Show-Cooking direkt vor Ihren Augen",
    "Gesunde Speisen ohne Glutamat",
    "Authentische ostasiatische Küche",
    "Mongolischer Grill als Erlebnis"
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Für jeden Anlass gerüstet</h2>
            <div className="w-16 h-[1px] bg-accent"></div>
          </div>
          <p className="text-white/60 leading-relaxed text-lg">
            Wir werden Ihrer Feier ganz bestimmt den letzten Feinschliff verleihen. Wenn Sie auf leckere Speisen und ein schönes Ambiente nicht verzichten möchten, dann sind Sie in unserem Gourmet Lin Restaurant in Günzburg genau richtig. Dabei spielt es überhaupt keine Rolle, ob Sie eine Firmenfeier, ein Geburtstagsfest oder einen Junggesellenabschied veranstalten möchten. Wir verzaubern Sie mit kulinarischen Köstlichkeiten aus den fernen faszinierenden Ländern.
          </p>
          <ul className="space-y-4">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white/80">
                <Sparkles className="w-5 h-5 text-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <a href="#contact" className="inline-block px-10 py-4 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-accent/10">
              Tisch reservieren
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-square md:aspect-auto h-auto md:h-[600px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
        >
          <img 
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200" 
            alt="Atmosphäre" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

const BuffetGallery = () => {
  const images = [
    "https://static.wixstatic.com/media/17c0b7_3b22038312924bc3a5c9ce4944c302a9~mv2.jpg",
    "https://static.wixstatic.com/media/17c0b7_cc73a8233c40423b87105d916ec1bbf7~mv2.jpg",
    "https://static.wixstatic.com/media/17c0b7_3e42356f12bc43f7af5829214b2841d1~mv2.jpg",
    "https://static.wixstatic.com/media/17c0b7_401c1683398c4faf8f57990736871f38~mv2.jpg",
    "https://static.wixstatic.com/media/17c0b7_e79606d8499b44b0b4a97c48162e5482~mv2.jpg"
  ];

  return (
    <section className="py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-8 bg-accent"></span>
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Impressionen</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-white">Unsere Buffet Galerie</h2>
      </div>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8 px-6 md:px-12 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="snap-center shrink-0 w-[280px] md:w-[400px] aspect-square rounded-2xl overflow-hidden border border-white/10"
          >
            <img 
              src={img} 
              alt={`Buffet Impression ${i + 1}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CustomerReviews = () => {
  const reviews = [
    { 
      name: "Sebastian Klins", 
      text: "Ein sehr empfehlenswertes All-You-Can-Eat-Restaurant! Die Auswahl an Speisen ist riesig – von Sushi und asiatischen Klassikern bis zu kleinen Desserts. Besonders praktisch: Alle Getränke sind bereits im Preis enthalten. Das macht den Besuch planbar, ohne dass am Ende eine Überraschung auf der Rechnung steht. Die Sushi-Qualität ist wirklich gut, frisch und schön angerichtet. Die Bedienung ist schnell, freundlich und stets aufmerksam. Das Ambiente wirkt modern und einladend. Insgesamt ein super Ort für Geburtstage, Familienessen oder gemütliche Abende mit Freunden. Preis-Leistung stimmt absolut.", 
      rating: 5,
      date: "vor 4 Monaten"
    },
    { 
      name: "Maria", 
      text: "Tolles All-You-Can-Eat-Restaurant! Besonders das Sushi ist unglaublich frisch und vielfältig. Getränke sind sogar inklusive. Perfekt für alle, die viel probieren möchten und Wert auf Qualität legen. Absolut empfehlenswert!", 
      rating: 5,
      date: "vor 4 Monaten"
    },
    { 
      name: "Tanja", 
      text: "Ein richtig tolles Buffet-Restaurant mit einer super großen Auswahl an Speisen. Alles schmeckt frisch und sehr lecker. Die Atmosphäre ist entspannt, man kann in Ruhe genießen. Sauberkeit wird hier großgeschrieben und das Personal ist immer freundlich und hilfsbereit. Für dieses Essen nehmen wir auch gerne eine längere Fahrt in Kauf – und kommen jedes Mal gern wieder.", 
      rating: 5,
      date: "vor 4 Monaten"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-accent"></span>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Google Bewertungen</span>
            <span className="h-[1px] w-8 bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Was unsere Gäste sagen</h2>
          <p className="text-white/50">Täglich geöffnet – täglich begeisterte Gäste</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] p-10 rounded-2xl border border-white/10 relative backdrop-blur-sm"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-white/80 italic font-light mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-6">
                <span className="text-sm font-bold text-white">{rev.name}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full hover:border-accent transition-colors duration-300"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-white font-bold group-hover:text-accent transition-colors">
              Alle Bewertungen auf Google ansehen
            </span>
            <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactMap = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[1px] w-8 bg-accent"></span>
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Anfahrt & Kontakt</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-white">So finden Sie uns</h2>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-accent/30 transition-colors duration-500">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-3 text-white">Restaurant Gourmet Lin</h4>
                  <p className="text-white/60 leading-relaxed">Schlachthausstraße 59<br />89312 Günzburg<br />Deutschland</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-accent/30 transition-colors duration-500 flex-grow">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif text-xl mb-6 text-white">Öffnungszeiten</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/5 pb-3 gap-1">
                      <span className="text-white/80 font-medium">Montag – Samstag</span>
                      <span className="text-white/60 text-sm">11:30 – 14:30 | 17:30 – 22:30 Uhr</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/5 pb-3 gap-1">
                      <span className="text-white/80 font-medium">Sonntag & Feiertage</span>
                      <span className="text-white/60 text-sm">11:30 – 14:30 | 17:30 – 22:30 Uhr</span>
                    </div>
                  </div>
                  <div className="mt-6 inline-block px-4 py-2 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Wir bedienen Sie an 365 Tagen im Jahr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-accent/30 transition-colors duration-500">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif text-xl mb-4 text-white">Kontakt</h4>
                  <div className="space-y-2 mb-6">
                    <p className="text-white/80 text-lg">+49 8221 206 0910</p>
                    <p className="text-white/60">info@gourmetlin-gz.com</p>
                  </div>
                  <a href="tel:+4982212060910" className="inline-block w-full text-center px-8 py-4 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-lg shadow-accent/10">
                    Tisch reservieren
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 h-[500px] lg:h-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <iframe 
              src="https://maps.google.com/maps?q=Schlachthausstra%C3%9Fe%2059,%2089312%20G%C3%BCnzburg&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(120%) opacity(90%)' }} 
              allowFullScreen 
              loading="lazy"
              className="relative z-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="bg-[#050505] text-white">
      <Hero />
      <USPs />
      <BuffetCards />
      <Atmosphere />
      <BuffetGallery />
      <CustomerReviews />
      <ContactMap />
    </div>
  );
};

export default HomePage;
