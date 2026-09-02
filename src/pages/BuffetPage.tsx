import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Flame, 
  Check, 
  Leaf, 
  Info, 
  Star, 
  Clock, 
  Phone,
  UtensilsCrossed
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BuffetHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1920" 
          alt="Buffet Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight text-white">
            Unser Erlebnis-Buffet
          </h1>
          <p className="text-xl md:text-2xl text-accent font-serif mb-6 italic">
            Chinesisch · Mongolisch · Japanisch – täglich frisch, alles ohne Glutamat
          </p>
          <p className="text-lg text-white/70 font-light tracking-wide max-w-2xl mx-auto mb-10">
            Erleben Sie eine kulinarische Reise durch Ostasien. Von knusprigen Vorspeisen über frisches Sushi bis hin zum mongolischen Grill mit Live-Cooking – täglich frisch zubereitet, alles ohne Glutamat.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="bg-accent text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-accent/80 transition-all shadow-xl shadow-accent/20">
              Jetzt Tisch reservieren →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LunchBuffet = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square w-full lg:w-1/2"
        >
          <img 
            src="https://static.wixstatic.com/media/17c0b7_2c9e7c0689314efab29a2cfe1c8a696b~mv2.jpg" 
            alt="Mittagsbuffet" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-sm flex flex-col justify-center w-full lg:w-1/2"
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Kinderpreise</span>
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
    </section>
  );
};

const EveningBuffet = () => {
  return (
    <section className="py-24 px-6 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-sm flex flex-col justify-center order-2 lg:order-1 w-full lg:w-1/2"
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Kinderpreise</span>
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

            <div className="mt-8 p-5 bg-accent/10 border border-accent/20 rounded-2xl">
              <p className="text-accent font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Sonderangebot</p>
              <p className="text-white/70 text-sm italic leading-relaxed">Jedes Glas Wein (0,20 l) nur 2,00 € – gilt nur in Verbindung mit dem Buffet</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2 aspect-square w-full lg:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1200" 
            alt="Erlebnisbuffet" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const BuffetContent = () => {
  const categories = [
    {
      name: "Vorspeisen & Suppen",
      desc: "Frühlingsrollen, Wonton-Suppe, Dim Sum und weitere klassische Vorspeisen aus der chinesischen Küche.",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Sushi & Maki",
      desc: "Frisch zubereitetes Sushi und Maki aus der japanischen Küche – täglich neu, in großer Vielfalt.",
      img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Mongolischer Grill – Live Cooking",
      desc: "Wählen Sie Fleisch, Gemüse und Soßen – unsere Köche bereiten Ihre Speisen direkt vor Ihren Augen zu. Ein Erlebnis, das niemand verpassen sollte.",
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1200",
      highlight: true
    },
    {
      name: "Warme Hauptgerichte",
      desc: "Wechselnde Wok-Gerichte, gebratener Reis, Nudeln und saisonale Spezialitäten – jeden Tag anders.",
      img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Desserts",
      desc: "Frische Früchte, asiatische Süßspeisen und klassische Desserts als süßer Abschluss.",
      img: "https://static.wixstatic.com/media/17c0b7_77e2e19b4bf346cda7151276aac1b097~mv2.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-accent"></span>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Vielfalt</span>
            <span className="h-[1px] w-8 bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Was erwartet Sie am Buffet?</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Täglich frisch – abwechslungsreich – ohne Glutamat</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden border border-white/10 min-h-[400px] flex flex-col ${
                cat.highlight 
                  ? 'lg:col-span-6 lg:min-h-[500px]' 
                  : 'lg:col-span-3'
              }`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 md:p-12 mt-auto">
                {cat.highlight && (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 bg-accent text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
                      Unser Highlight
                    </span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-accent fill-accent" />)}
                    </div>
                  </div>
                )}
                <h3 className={`${cat.highlight ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} font-serif text-white mb-4 leading-tight`}>
                  {cat.name}
                </h3>
                <p className={`text-white/60 leading-relaxed ${cat.highlight ? 'text-lg max-w-2xl' : 'text-sm max-w-md'}`}>
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  const blocks = [
    {
      icon: <Check className="w-6 h-6 text-accent" />,
      title: "Ohne Glutamat",
      text: "Alle unsere Speisen werden ohne Glutamat zubereitet – ganz nach unserem Motto: Man sieht, was man isst."
    },
    {
      icon: <Info className="w-6 h-6 text-accent" />,
      title: "Allergiker willkommen",
      text: "Bei Allergien oder Unverträglichkeiten sprechen Sie bitte unser Personal an – wir helfen Ihnen gerne weiter."
    },
    {
      icon: <Star className="w-6 h-6 text-accent" />,
      title: "Frische Zutaten",
      text: "Wir verarbeiten ausschließlich frische, hochwertige Zutaten – beim Fleisch gehen wir keine Kompromisse ein."
    },
    {
      icon: <Leaf className="w-6 h-6 text-accent" />,
      title: "Lebensmittelverschwendung vermeiden",
      text: "Bitte nehmen Sie nur, was Sie auch essen. Bei Resten ab 100 g pro Teller oder halbvollen Getränkeflaschen behalten wir uns einen Aufpreis von 5,00 € vor."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Gut zu wissen</h2>
          <div className="w-16 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col items-center text-center"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                {block.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-3">{block.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BuffetCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/17c0b7_a81eb84e491f42d3a50e903f4eb30d1f~mv2.jpg" 
          alt="Gourmet Lin Buffet" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Bereit für Ihr Buffet-Erlebnis?</h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Reservieren Sie Ihren Tisch und sichern Sie sich Ihren Platz. Besonders an Wochenenden und Feiertagen sind die Plätze schnell vergeben – wir empfehlen eine frühzeitige Reservierung.
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-12 text-accent">
            <Clock className="w-5 h-5" />
            <p className="text-sm font-bold uppercase tracking-widest">Täglich geöffnet: 11:30 – 14:30 Uhr & 17:30 – 22:30 Uhr</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-accent/20">
              Tisch online reservieren
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BuffetPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Unser Buffet – Mittagsbuffet & Erlebnisbuffet | Restaurant Gourmet Lin Günzburg";
  }, []);

  return (
    <div className="bg-[#050505] text-white">
      <BuffetHero />
      <LunchBuffet />
      <EveningBuffet />
      <BuffetContent />
      <InfoSection />
      <BuffetCTA />
    </div>
  );
};

export default BuffetPage;
