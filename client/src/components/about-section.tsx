import { motion } from "framer-motion";
import { Music, Heart, User, Video } from "lucide-react";

export default function AboutSection() {
  const specializations = [
    { icon: Music, label: "Fotografía de Conciertos" },
    { icon: Heart, label: "Bodas y Eventos" },
    { icon: User, label: "Sesiones de Retratos" },
    { icon: Video, label: "Videos Cinematográficos" },
  ];

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
              src="https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_750,c_fill,g_face,q_auto,f_auto/v1755057636/240153231_6653007281379920_4210642738946288813_n_dsixce.jpg"
              alt="Mike Vázquez professional photographer headshot"
              className="w-3/4 h-auto rounded-lg shadow-2xl mx-auto"
            />
            <div className="absolute -top-4 -left-4 w-3/4 h-full border-4 border-vibrant-yellow rounded-lg -z-10 mx-auto" />
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
                  Cada imagen debe hablar por sí sola, y cada secuencia debe transmitir una sola cosa: EMOCIÓN.
                </p>
                <p>
                  Con más de 10 años de experiencia en la industria audiovisual, ha trabajado desde la dirección, realización hasta la edición y postproducción, con un enfoque narrativo que pone al centro lo más importante: las personas y sus momentos irrepetibles. Ha producido proyectos que van desde retratos hasta conciertos y producciones de gran escala.
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

          </motion.div>
        </div>
      </div>
    </section>
  );
}