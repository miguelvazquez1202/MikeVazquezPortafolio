import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Correo Electrónico",
      value: "miguelvazquez1202@gmail.com",
      href: "mailto:miguelvazquez1202@gmail.com",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "(+52) 55 3726 4582",
      href: "https://wa.me/525537264582",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-pure-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Contacto
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-2xl mx-auto">
            ¿Listo para capturar tu próximo momento importante? Contáctame para platicar sobre tus necesidades.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === "WhatsApp" ? "_blank" : undefined}
              rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-4 group cursor-pointer"
            >
              <div className="w-20 h-20 bg-vibrant-yellow rounded-full flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(255,194,15,0.5)] transition-all duration-300">
                <method.icon size={36} className="text-dark-grey" />
              </div>
              <div className="text-center">
                <p className="font-montserrat font-semibold text-dark-grey text-lg">
                  {method.label}
                </p>
                <p className="font-source text-charcoal group-hover:text-vibrant-yellow transition-colors duration-200">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}