import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, PartyPopper, Calendar, Users, Star, Music, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LokalPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Das Lokal | Gourmet Lin Günzburg";
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Gourmet Lin Interior" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-xs uppercase tracking-[0.5em] font-bold mb-4 block">Chinesisch · Mongolisch · Japanisch</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">Unser Lokal</h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-10">
              Authentische ostasiatische Küche – täglich frisch zubereitet, nur mit den besten Zutaten.
            </p>
            <a href="#reservierung" className="inline-block bg-accent text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-accent/80 transition-all transform hover:scale-105">
              Tisch reservieren
            </a>
          </motion.div>
        </div>
      </section>

      {/* Über das Lokal Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-8 bg-accent"></span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Unser Lokal</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Eine kulinarische Reise nach Ostasien</h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Aus dem Herzen der internationalen Gourmet-Küche präsentieren wir Ihnen alles, was Sie von einem besonderen Restaurant erwarten. Die Wahrung von Traditionen zeigt sich in der Zubereitung jeder einzelnen Speise – von einer Vielfalt an Sushi und Maki aus der japanischen Küche bis hin zum Live-Cooking vom mongolischen Grill.
                </p>
                <p>
                  Ganz nach dem Motto „Man sieht, was man isst" – alles ohne Glutamat, mit ausschließlich frischen Zutaten und höchster Qualität beim Fleisch.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-6 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Für jeden Anlass</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Ihr Event im Gourmet Lin</h2>
              <p className="text-white/60 text-lg">
                Ob Firmenfeier, Geburtstag, Junggesellenabschied oder privates Dinner – wir geben Ihrer Feier den letzten Feinschliff.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "Firmenfeier",
              "Geburtstagsfest",
              "Junggesellenabschied",
              "Familienfeier",
              "Show-Cooking-Event"
            ].map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-black/40 border border-white/5 rounded-2xl flex items-center gap-6 group hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  {idx === 0 && <Users className="w-5 h-5" />}
                  {idx === 1 && <PartyPopper className="w-5 h-5" />}
                  {idx === 2 && <Calendar className="w-5 h-5" />}
                  {idx === 3 && <Heart className="w-5 h-5" />}
                  {idx === 4 && <Music className="w-5 h-5" />}
                </div>
                <span className="text-xl font-serif">{type}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 mb-10 max-w-2xl mx-auto"
            >
              Erleben Sie unser exklusives Show-Cooking, bei dem geschickte Hände Ihre Speisen direkt vor Ihren Augen zubereiten. Leckere Speisen, schönes Ambiente und ein unvergessliches Erlebnis für alle Gäste.
            </motion.p>
            <a href="#reservierung" className="inline-block border border-white/20 text-white px-12 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Jetzt Anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Reservierung Section */}
      <section id="reservierung" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">Jetzt einen Tisch reservieren</h2>
              <p className="text-white/60 text-xl font-light mb-12">
                Wir freuen uns darauf, Sie persönlich verwöhnen zu dürfen.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-accent">Adresse</h4>
                    <p className="text-lg text-white/80">Schlachthausstraße 59,<br />89312 Günzburg</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-accent">Telefon</h4>
                    <p className="text-lg text-white/80">08221 – 206 0910</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-3 bg-accent/10 rounded-full text-accent">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-accent">Öffnungszeiten</h4>
                    <p className="text-lg text-white/80">Täglich 11:30 – 14:30 Uhr<br />& 17:30 – 22:30 Uhr</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-[40px] border border-white/10 text-center"
            >
              <Star className="w-12 h-12 text-accent mx-auto mb-8 animate-pulse" />
              <h3 className="text-3xl font-serif mb-6">Bereit für ein Erlebnis?</h3>
              <p className="text-white/50 mb-10 leading-relaxed">
                Planen Sie Ihre Feier oder ein entspanntes Abendessen bei uns. Wir garantieren Ihnen höchste Qualität und besten Service.
              </p>
              <a href="tel:082212060910" className="block w-full bg-accent text-white py-5 rounded-full text-sm uppercase tracking-widest hover:bg-accent/80 transition-all font-bold">
                Jetzt Tisch reservieren
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LokalPage;
