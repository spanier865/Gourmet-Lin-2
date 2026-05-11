import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Ban, Globe, Heart, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Über uns | Restaurant Gourmet Lin Günzburg";
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section - Unsere Geschichte */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-8 bg-accent"></span>
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Unsere Geschichte</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Wer steckt hinter Gourmet Lin?</h1>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Gourmet Lin entstand aus einer tiefen Leidenschaft für die Vielfalt Ostasiens. Was als Traum begann, authentische Aromen aus China, der Mongolei und Japan nach Günzburg zu bringen, wurde zu einem Ort, an dem Kulturen und Geschmäcker aufeinandertreffen.
                </p>
                <p>
                  Gegründet von einer Familie, die selbst in der asiatischen Küche aufgewachsen ist, steht hinter jedem Gericht eine Geschichte – von Großmutters Rezepten bis hin zu modernen Interpretationen klassischer Gerichte. Unsere Wurzeln geben uns die Inspiration, unsere Gäste die Motivation.
                </p>
                <p>
                  Seit unserer Eröffnung in der Schlachthausstraße 59 in Günzburg ist Gourmet Lin mehr als ein Restaurant – es ist ein Ort der Begegnung, des Genusses und der kulinarischen Entdeckung.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl translate-x-6 translate-y-6 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200" 
                alt="Gourmet Lin Restaurant in Günzburg" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophie Section */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Überzeugung</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Unsere Philosophie</h2>
              <p className="text-white/50 text-xl font-light">Frische, Ehrlichkeit und drei Küchen unter einem Dach</p>
              <div className="h-px w-20 bg-accent/30 mx-auto mt-8 mb-8"></div>
              <p className="text-white/70 italic">
                "Was uns von anderen Restaurants unterscheidet, ist unser Versprechen an unsere Gäste: Man sieht, was man isst."
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-accent" />,
                title: "Nur frische Zutaten",
                text: "Wir verwenden ausschließlich frische, sorgfältig ausgewählte Produkte – besonders beim Fleisch gehen wir keine Kompromisse ein. Qualität schmeckt man."
              },
              {
                icon: <Ban className="w-8 h-8 text-accent" />,
                title: "Ohne Glutamat",
                text: "Wir verzichten bewusst auf Glutamat. So können auch Allergiker und Genussmenschen mit gutem Gewissen bei uns speisen – voller Geschmack, ganz natürlich."
              },
              {
                icon: <Globe className="w-8 h-8 text-accent" />,
                title: "Drei Küchen, eine Seele",
                text: "Chinesische Klassiker, japanisches Sushi & Maki und mongolisches Live-Cooking vereinen sich bei uns zu einem einzigartigen kulinarischen Erlebnis."
              },
              {
                icon: <Heart className="w-8 h-8 text-accent" />,
                title: "Tradition & Leidenschaft",
                text: "Die Wahrung kulinarischer Traditionen liegt uns am Herzen. Jede Speise erzählt eine Geschichte aus einer fernen, faszinierenden Kultur."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-accent/20 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Besuchen Sie uns – wir freuen uns auf Sie!</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Überzeugen Sie sich selbst von unserer Küche, unserer Atmosphäre und unserem Team. Reservieren Sie jetzt Ihren Tisch oder kontaktieren Sie uns direkt – wir freuen uns, Sie persönlich begrüßen zu dürfen.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16 text-left border border-white/10 p-8 rounded-3xl bg-black/40 backdrop-blur-xl">
              <div>
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Adresse</span>
                </div>
                <p className="text-white/80 font-medium">Schlachthausstr. 59,<br />89312 Günzburg</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <Phone className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Telefon</span>
                </div>
                <a href="tel:082212060910" className="text-white/80 font-medium hover:text-accent transition-colors">08221 – 206 0910</a>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Öffnungszeiten</span>
                </div>
                <p className="text-white/80 font-medium">Täglich 11:30–14:30 Uhr<br />& 17:30–22:30 Uhr</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/#contact" className="w-full sm:w-auto px-12 py-5 bg-accent text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-accent/20">
                Tisch reservieren
              </Link>
              <Link to="/menu" className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white/10 transition-all duration-500">
                Speisekarte ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
