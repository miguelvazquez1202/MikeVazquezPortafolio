import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface AnimalImage {
  id: string;
  src: string;
  alt: string;
  lightboxSrc: string;
}

export default function AnimalesPage() {
  const [selectedImage, setSelectedImage] = useState<AnimalImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes de animales con tamaños optimizados de la colección de Cloudinary
  const animalesImages: AnimalImage[] = [
    {
      id: 'animal-1',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753764520/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_51d8059a_slggsf.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_900,q_auto,f_auto/v1753764520/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_51d8059a_slggsf.jpg',
      alt: 'Fotografía de vida salvaje capturada por Mike Vázquez'
    },
    {
      id: 'animal-2',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753764518/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_a6a9ab5e_irfwl5.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_900,q_auto,f_auto/v1753764518/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_a6a9ab5e_irfwl5.jpg',
      alt: 'Fotografía de fauna silvestre por Mike Vázquez'
    },
    {
      id: 'animal-3',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753764516/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_b7df56ed_brhz7h.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_900,q_auto,f_auto/v1753764516/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_b7df56ed_brhz7h.jpg',
      alt: 'Retrato animal en su hábitat natural por Mike Vázquez'
    },
    {
      id: 'animal-4',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753766549/WEB-11_im0av4.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_900,q_auto,f_auto/v1753766549/WEB-11_im0av4.jpg',
      alt: 'Fotografía profesional de animales por Mike Vázquez'
    },
    {
      id: 'animal-5',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753770784/WEB-18_e1euhy.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_900,q_auto,f_auto/v1753770784/WEB-18_e1euhy.jpg',
      alt: 'Captura de vida animal en movimiento por Mike Vázquez'
    },
    {
      id: 'animal-6',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753770789/WEB-19_c1268v.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_900,q_auto,f_auto/v1753770789/WEB-19_c1268v.jpg',
      alt: 'Fotografía artística de fauna por Mike Vázquez'
    }
  ];

  const openLightbox = (image: AnimalImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
      setCurrentIndex(animalesImages.length - 1);
      setSelectedImage(animalesImages[animalesImages.length - 1]);
    } else if (newIndex >= animalesImages.length) {
      setCurrentIndex(0);
      setSelectedImage(animalesImages[0]);
    } else {
      setCurrentIndex(newIndex);
      setSelectedImage(animalesImages[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage(-1);
          break;
        case 'ArrowRight':
          navigateImage(1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-light-grey">
      {/* Header */}
      <div className="relative py-16 bg-dark-grey overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-vibrant-yellow/60 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-vibrant-yellow to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-8">
              <Button 
                variant="ghost" 
                className="text-pure-white hover:text-dark-grey transition-all duration-300 flex items-center gap-3 text-lg group bg-vibrant-yellow/20 hover:bg-vibrant-yellow border border-vibrant-yellow hover:border-vibrant-yellow px-6 py-3 rounded-lg shadow-lg"
              >
                <motion.div
                  whileHover={{ x: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft size={20} />
                </motion.div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Volver al inicio</span>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-pure-white mb-6">
                <span className="text-vibrant-yellow">A</span>nimales
                <motion.div
                  className="h-1 bg-gradient-to-r from-transparent via-vibrant-yellow to-transparent mx-auto mt-4"
                  style={{ width: '200px' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                ></motion.div>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-montserrat text-xl md:text-2xl text-pure-white max-w-4xl mx-auto leading-relaxed"
            >
              Capturando la <span className="text-vibrant-yellow font-semibold">esencia salvaje</span> y la 
              <span className="text-vibrant-yellow font-semibold"> belleza natural</span> de la vida animal
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animalesImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-pure-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-12 h-12 bg-vibrant-yellow rounded-full flex items-center justify-center ml-auto">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-6 h-6 border-2 border-dark-grey rounded-sm"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-pure-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-dark-grey/80 hover:bg-vibrant-yellow transition-colors duration-300 rounded-full z-10 group"
          >
            <X size={24} className="text-pure-white group-hover:text-dark-grey" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(-1);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-dark-grey/80 hover:bg-vibrant-yellow transition-colors duration-300 rounded-full z-10 group"
          >
            <ChevronLeft size={24} className="text-pure-white group-hover:text-dark-grey" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(1);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-dark-grey/80 hover:bg-vibrant-yellow transition-colors duration-300 rounded-full z-10 group"
          >
            <ChevronRight size={24} className="text-pure-white group-hover:text-dark-grey" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-dark-grey/80 rounded-full z-10">
            <span className="text-pure-white font-montserrat">
              {currentIndex + 1} de {animalesImages.length}
            </span>
          </div>

          {/* Main image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[80vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.lightboxSrc}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}