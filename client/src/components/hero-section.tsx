import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dq0ogehwz/image/upload/DSC00379_p6qglu.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-dark-grey/75 to-black/85" />

      {/* Content */}
      <div className="relative z-10 text-center text-pure-white max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
          style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 1px 1px 2px rgba(0, 0, 0, 0.8)' }}
        >
          Capturando los<br />
          <span className="text-vibrant-yellow drop-shadow-2xl" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.95), 2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Momentos Únicos</span><br />
          de la Vida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-montserrat text-xl md:text-2xl mb-8 font-medium opacity-100 drop-shadow-lg"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.85), 1px 1px 2px rgba(0, 0, 0, 0.7)' }}
        >
          Fotógrafo y cineasta profesional especializado en conciertos, eventos sociales y narrativa cinematográfica
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection("concerts")}
            className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-lg h-auto"
          >
            Ver Portafolio
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-vibrant-yellow text-vibrant-yellow px-8 py-4 font-montserrat font-semibold hover:bg-vibrant-yellow hover:text-dark-grey transition-all duration-300 bg-transparent text-lg h-auto"
          >
            Contáctame
          </Button>
        </motion.div>
      </div>
    </section>
  );
}