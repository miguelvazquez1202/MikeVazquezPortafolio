import { motion } from "framer-motion";
import { Music, Heart, User, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const specializations = [
    { icon: Music, label: "Fotografía de Conciertos" },
    { icon: Heart, label: "Bodas y Eventos" },
    { icon: User, label: "Sesiones de Retratos" },
    { icon: Video, label: "Videos Cinematográficos" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section id="about" className="py-20 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Mike Vázquez professional photographer headshot"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-vibrant-yellow rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
                Acerca de Mike Vázquez
              </h2>
              <div className="space-y-6 font-source text-lg text-charcoal leading-relaxed">
                <p>
                  Con más de una década de experiencia en la producción audiovisual, especializado en capturar emociones genuinas y contar historias auténticas a través de la fotografía y el video. Cada imagen debe hablar por sí sola, y cada secuencia debe transmitir una sola cosa: EMOCIÓN.
                </p>
                <p>
                  Ha trabajado desde la dirección y realización hasta la edición y postproducción, con un enfoque narrativo que pone al centro lo más importante: las personas y sus momentos irrepetibles. Ha colaborado en proyectos que van desde retratos íntimos hasta conciertos y producciones de gran escala.
                </p>
                <p>
                  Cofundador de Hello Hi Producciones, una productora donde la calidad visual y la narrativa emocional se encuentran para ofrecer contenido con identidad y propósito.
                </p>
                <p>
                  Radica en la Ciudad de México, pero su trabajo ha viajado lejos: ha colaborado con clientes en Estados Unidos, Europa, Nueva Zelanda y todo México. Entre los proyectos más destacados están campañas para marcas como Coca-Cola, Nescafé, Johnson & Johnson, y producciones junto a artistas como Reyli Barba, Pandora y Ana Bárbara.
                </p>
                <p>
                  Un apasionado del arte visual que conecta, que emociona y que deja huella. Su compromiso es claro: ofrecer excelencia creativa, profesionalismo absoluto y resultados que cuenten una historia que valga la pena recordar.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-playfair text-2xl font-semibold text-dark-grey">
                Especializaciones
              </h3>
              <div className="grid grid-cols-2 gap-4 font-montserrat text-charcoal">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-8 h-8 bg-vibrant-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <spec.icon size={16} className="text-dark-grey" />
                    </div>
                    <span>{spec.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToContact}
                className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto"
              >
                Contrátame
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}