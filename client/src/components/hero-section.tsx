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
          backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380')`
        }}
      />
      <div className="absolute inset-0 bg-dark-grey/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-pure-white max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Capturing Life's<br />
          <span className="text-vibrant-yellow">Most Beautiful</span> Moments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-montserrat text-xl md:text-2xl mb-8 font-light opacity-90"
        >
          Professional photographer and filmmaker specializing in concerts, social events, and cinematic storytelling
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
            View Portfolio
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-vibrant-yellow text-vibrant-yellow px-8 py-4 font-montserrat font-semibold hover:bg-vibrant-yellow hover:text-dark-grey transition-all duration-300 bg-transparent text-lg h-auto"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}