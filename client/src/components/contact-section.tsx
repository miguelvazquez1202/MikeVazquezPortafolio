import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  serviceType: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado exitosamente!",
          description: "Gracias por tu consulta. Me pondré en contacto contigo pronto.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          serviceType: "",
          message: "",
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      toast({
        title: "Error al enviar mensaje",
        description: "Por favor intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Correo",
      value: "miguelvazquez1202@gmail.com",
      href: "mailto:miguelvazquez1202@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 55 3726 4582",
      href: "tel:+525537264582",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad de México",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/mikevazquez12?igsh=MXdzdHJramNiNm94bQ%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/525537264582", label: "WhatsApp" },
    { icon: Mail, href: "mailto:miguelvazquez1202@gmail.com", label: "Correo" },
  ];

  return (
    <section id="contact" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Creemos Juntos
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-3xl mx-auto">
            ¿Listo para capturar tu próximo momento importante? Contáctame para platicar sobre tus necesidades de fotografía y cinematografía.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-dark-grey mb-6">
                Ponte en Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-vibrant-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <info.icon size={20} className="text-dark-grey" />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold text-dark-grey">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-source text-charcoal hover:text-vibrant-yellow transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div>
                          <p className="font-source text-charcoal">{info.value}</p>
                          {info.label === "Ubicación" && (
                            <p className="font-source text-charcoal/70 text-sm italic mt-1">(Disponibilidad para viajar)</p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-dark-grey rounded-full flex items-center justify-center hover:bg-vibrant-yellow transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-pure-white group-hover:text-dark-grey transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg border-2 border-light-grey hover:border-vibrant-yellow/30 transition-colors duration-300">
              <h3 className="font-playfair text-2xl font-semibold text-dark-grey mb-6">
                Envía un Mensaje
              </h3>
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block font-montserrat font-medium text-charcoal mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="focus:border-vibrant-yellow transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-montserrat font-medium text-charcoal mb-2">
                      Apellido *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="focus:border-vibrant-yellow transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-montserrat font-medium text-charcoal mb-2">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="focus:border-vibrant-yellow transition-colors duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block font-montserrat font-medium text-charcoal mb-2">
                    Tipo de Servicio
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange("serviceType", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-vibrant-yellow transition-colors duration-200"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="concert">Fotografía de Conciertos</option>
                    <option value="social">Eventos Sociales</option>
                    <option value="portrait">Fotografía de Retratos</option>
                    <option value="video">Producción de Videos</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat font-medium text-charcoal mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="focus:border-vibrant-yellow transition-colors duration-200 resize-vertical"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-vibrant-yellow text-dark-grey py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}