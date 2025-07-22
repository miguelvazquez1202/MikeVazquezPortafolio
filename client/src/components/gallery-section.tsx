import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/lib/data";

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
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-black mb-6">
            {title}
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-3xl mx-auto">
            {description}
          </p>
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
              className="cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-deep-black text-pure-white px-8 py-4 font-montserrat font-semibold hover:bg-charcoal transition-all duration-300 text-lg h-auto">
            View More {title.split(' ')[0]} Photos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
