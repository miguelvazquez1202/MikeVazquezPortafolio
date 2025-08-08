import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/lib/data";
import { Link } from "wouter";

interface GallerySectionProps {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
  bgColor: string;
}

export default function GallerySection({ id, title, description, images, bgColor }: GallerySectionProps) {
  const openLightbox = (imageIndex: number) => {
    const event = new CustomEvent('openLightbox', {
      detail: { images, currentIndex: imageIndex }
    });
    window.dispatchEvent(event);
  };

  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            {title}
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-3xl mx-auto mb-4">
            {description}
          </p>
          {title === "Conciertos" && (
            <div className="font-montserrat text-lg max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-2 text-center">
                <span className="text-vibrant-yellow font-semibold">Fotografía</span>
                <span className="text-dark-grey">/</span>
                <span className="text-dark-grey font-semibold">Aftermovies</span>
                <span className="text-vibrant-yellow">/</span>
                <span className="text-vibrant-yellow font-semibold whitespace-nowrap">Making Of</span>
                <span className="text-dark-grey">/</span>
                <span className="text-dark-grey font-semibold whitespace-nowrap">Circuito Cerrado</span>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src.includes('DSC04770-Enhanced-NR') 
                  ? image.src.replace('c_limit,w_600,h_800', 'c_fill,w_800,h_600,g_face')
                  : image.src.replace('c_limit,w_600,h_800', 'c_fill,w_800,h_600,g_center').replace('c_limit,w_1200,h_1600', 'c_fill,w_800,h_600,g_center')
                }
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-vibrant-yellow/0 group-hover:bg-vibrant-yellow/20 transition-all duration-300 rounded-lg" />
              <div className="absolute top-4 right-4 w-3 h-3 bg-vibrant-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {title !== "Fotografía" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            {title === "Conciertos" ? (
              <Link href="/conciertos">
                <Button className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto">
                  Ver Más de Conciertos
                </Button>
              </Link>
            ) : title === "Eventos Sociales" ? (
              <Link href="/eventos-sociales">
                <Button className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto">
                  Ver Más de Eventos Sociales
                </Button>
              </Link>
            ) : (
              <Button className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto">
                {`Ver Más Fotos de ${title.split(' ')[0]}`}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}