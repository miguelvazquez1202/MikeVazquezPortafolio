import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ServicesOverview() {
  const services = [
    {
      title: "Fotografía de Conciertos",
      description: "Eventos de música en vivo y presentaciones",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      target: "concerts"
    },
    {
      title: "Eventos Sociales",
      description: "Bodas, fiestas y celebraciones",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      target: "socials"
    },
    {
      title: "Fotografía",
      description: "Retratos profesionales y hasta paisajes hermosos",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      target: "portraits"
    },
    {
      title: "Videoclips",
      description: "Producciones musicales para artistas emergentes y establecidos",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      target: "videoclips"
    },
    {
      title: "Demo Reel",
      description: "Videos cinematográficos y producciones",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      target: "demo-reel"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Servicios Creativos
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-3xl mx-auto">
            Desde retratos íntimos hasta eventos a gran escala, capturo la esencia de cada momento con visión artística y experiencia técnica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => scrollToSection(service.target)}
            >
              <Card className="group overflow-hidden bg-dark-grey rounded-lg border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/90 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-pure-white">
                    <h3 className="font-playfair text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="font-source text-sm opacity-90">{service.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-vibrant-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}