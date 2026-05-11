import React from 'react';
import { motion } from 'motion/react';
import { Car, Users, Soup, Clock, Baby, UtensilsCrossed, Flame, Leaf, Music, MapPin, Wine, PartyPopper, ChefHat, Phone, Star, ChevronRight, Sun, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegolandPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Asia Restaurant in der Nähe von Legoland – Gourmet Lin Günzburg";
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-8 bg-accent"></span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Perfekter Stop</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Asia Restaurant – in der Nähe vom Legoland</h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
                Gourmet Lin in Günzburg – ca. 10 Minuten mit dem Auto vom Legoland entfernt. Einfach Navigation starten und direkt zu uns kommen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link to="/#contact" className="bg-accent text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-accent/80 transition-all text-center">
                  Tisch reservieren
                </Link>
                <a 
                  href="https://www.google.com/maps/dir/Legoland+Deutschland,+LEGOLAND-Allee+1,+89312+G%C3%BCnzburg/Gourmet+Lin,+Schlachthausstra%C3%9Fe+59,+89312+G%C3%BCnzburg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-all text-center"
                >
                  Anfahrt starten
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                <div className="text-center">
                  <Car className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/50 block leading-tight">~10 Min. Anfahrt</span>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/50 block leading-tight">Familienfreundlich</span>
                </div>
                <div className="text-center">
                  <Soup className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/50 block leading-tight">All-You-Can-Eat Buffet</span>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/50 block leading-tight">Täglich geöffnet</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square hidden lg:block"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
              <img 
                src="https://static.wixstatic.com/media/17c0b7_7857f4fd52e04f41acac2f288d7c14e9~mv2.jpg" 
                alt="Legoland Special" 
                className="w-full h-full object-cover rounded-[60px] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anfahrt Section */}
      <section className="py-24 px-6 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.3!2d10.2837!3d48.4534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e9581a0735749%3A0xc49d97cb8a99478f!2sGourmet%20Lin!5e0!3m2!1sde!2sde!4v1715434567890!5m2!1sde!2sde" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Route"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Navigation</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">So findet ihr uns vom Legoland</h2>
              <p className="text-white/60 text-lg mb-8">
                Gourmet Lin befindet sich in der Günzburger Innenstadt – ca. 10 Minuten mit dem Auto vom Legoland. Einfach Navigation starten und zu uns kommen.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  "Vom Legoland-Parkplatz auf die LEGOLAND-Allee fahren Richtung Günzburg",
                  "Weiter über die B16 in Richtung Stadtmitte",
                  "Links auf die Schlachthausstraße abbiegen",
                  "Gourmet Lin befindet sich auf der rechten Seite (Nr. 59)"
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>

              <a 
                href="https://www.google.com/maps/dir/Legoland+Deutschland,+LEGOLAND-Allee+1,+89312+G%C3%BCnzburg/Gourmet+Lin,+Schlachthausstra%C3%9Fe+59,+89312+G%C3%BCnzburg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all"
              >
                Navigation starten – Google Maps
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warum Gourmet Lin Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Perfekt nach dem Besuch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Warum Familien Gourmet Lin lieben</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: <Baby className="w-8 h-8" />,
              title: "Kinderpreise im Buffet",
              text: "Kinder von 1–11 Jahren zahlen vergünstigte Preise. Kleinkinder bis 2 Jahre essen für nur 2 €."
            },
            {
              icon: <UtensilsCrossed className="w-8 h-8" />,
              title: "Unbegrenzt essen",
              text: "All-you-can-eat Buffet mit mongolischem Grill, Sushi, Maki und frisch zubereiteten asiatischen Speisen."
            },
            {
              icon: <Flame className="w-8 h-8" />,
              title: "Show-Cooking Erlebnis",
              text: "Erleben Sie live, wie Ihre Speisen direkt vor Ihren Augen zubereitet werden – ein Erlebnis für die ganze Familie."
            },
            {
              icon: <Leaf className="w-8 h-8" />,
              title: "Ohne Glutamat",
              text: "Alle Speisen werden ohne Glutamat zubereitet – frische, hochwertige Zutaten für bewussten Genuss."
            },
            {
              icon: <Music className="w-8 h-8" />,
              title: "Entspannte Atmosphäre",
              text: "Nach einem aufregenden Tag im Legoland: Ruhe, entspannende Musik und ein gemütliches Ambiente erwarten Sie."
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Nur 10 Minuten entfernt",
              text: "Direkt in Günzburg, ca. 10 Minuten vom Legoland. Ideal als letzten Stop vor der Heimfahrt."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/5 p-10 rounded-[40px] hover:bg-accent/10 hover:border-accent/20 transition-all group"
            >
              <div className="mb-6 p-4 bg-accent/10 rounded-2xl w-fit text-accent group-hover:bg-accent group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Buffet Section - Lunch */}
      <section className="py-24 px-6 bg-[#050505] overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Mittagspause</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Das Mittagsbuffet</h2>
            <p className="text-white/60 text-lg italic">"Ideal für die kleine Stärkung zwischen den LEGO-Abenteuern."</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[300px] lg:h-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200" 
                alt="Mittagsbuffet" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-sm flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-white">Mittagsbuffet</h2>
              </div>
              
              <div className="space-y-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Verfügbarkeit</span>
                  <p className="text-lg md:text-xl text-white/80">Montag bis Samstag, 11:30 – 14:30 Uhr</p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Preis Erwachsene</span>
                  <p className="text-3xl md:text-4xl font-serif text-white">19,50 € <span className="text-sm text-white/40 italic font-sans tracking-normal">pro Person</span></p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Inbegriffen</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {["Softdrinks", "Kaffee", "2x Bier"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Kinderpreise Mittag</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { age: "1–2 Jahre", price: "2,00 €" },
                      { age: "3–5 Jahre", price: "6,00 €" },
                      { age: "6–8 Jahre", price: "9,00 €" },
                      { age: "9–11 Jahre", price: "12,00 €" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center transition-colors hover:bg-white/10">
                        <p className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">{item.age}</p>
                        <p className="text-base font-bold text-white">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buffet Section - Evening */}
      <section className="py-24 px-6 bg-[#080808] overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Abend-Erlebnis</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Das Erlebnisbuffet</h2>
            <p className="text-white/60 text-lg italic">"Der krönende Abschluss nach einem aufregenden Tag im Legoland."</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-sm flex flex-col justify-center order-2 lg:order-1"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-white">Erlebnisbuffet mit mongolischem Grill</h2>
              </div>
              
              <p className="text-white/60 mb-10 leading-relaxed text-sm md:text-base">
                Unser Abend-Highlight: Wählen Sie frische Zutaten und erleben Sie, wie unsere Köche Ihre Speisen direkt am mongolischen Grill zubereiten – Live-Cooking pur.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { days: "Mo–Do", time: "17:30–22:00", price: "31,50 €" },
                  { days: "Fr–Sa", time: "17:30–22:00", price: "33,00 €" },
                  { days: "So & Feiertage", time: "11:30–14:30 & 17:30–22:00", price: "33,00 €" }
                ].map((block, i) => (
                  <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-colors hover:bg-white/10">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold mb-1">{block.days}</span>
                    <span className="text-[10px] text-white/40 mb-3 uppercase tracking-widest">{block.time}</span>
                    <span className="text-xl md:text-2xl font-serif text-white">{block.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">Inbegriffen</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {["Softdrinks", "Bionade", "Kaffee", "2x Bier"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Kinderpreise Buffet</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { age: "1–2 Jahre", price: "2,00 €" },
                      { age: "3–5 Jahre", price: "7,00 €" },
                      { age: "6–8 Jahre", price: "12,00 €" },
                      { age: "9–11 Jahre", price: "17,00 €" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center transition-colors hover:bg-white/10">
                        <p className="text-[10px] text-white/40 mb-1 uppercase tracking-widest">{item.age}</p>
                        <p className="text-base font-bold text-white">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2 h-[300px] lg:h-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1200" 
                alt="Erlebnisbuffet" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
            <Link to="/#contact" className="bg-accent text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:scale-105 transition-all text-center">
              Tisch reservieren
            </Link>
            <Link to="/menu" className="border border-white/20 text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-white/10 transition-all text-center">
              Zur Speisekarte
            </Link>
          </div>
        </div>
      </section>

      {/* Angebote Strip */}
      <section className="py-12 bg-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <Wine className="w-8 h-8 text-accent" />
              <p className="text-sm italic text-white/80">Jedes Glas Wein (0,2 l) nur 2,00 € – nur in Verbindung mit dem Buffet</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PartyPopper className="w-8 h-8 text-accent" />
              <p className="text-sm italic text-white/80">Feiern Sie Geburtstage, Firmenfeiern & Junggesellenabschiede bei uns</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ChefHat className="w-8 h-8 text-accent" />
              <p className="text-sm italic text-white/80">Show-Cooking: Zusehen, wie Ihr Essen direkt vor Ihnen entsteht</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LegolandPage;
