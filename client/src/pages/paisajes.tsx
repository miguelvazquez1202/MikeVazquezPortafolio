import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface PaisajeImage {
  id: string;
  src: string;
  alt: string;
  lightboxSrc: string;
}

export default function PaisajesPage() {
  const [selectedImage, setSelectedImage] = useState<PaisajeImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Imágenes de paisajes con tamaños optimizados
  const paisajesImages: PaisajeImage[] = [
    {
      id: 'paisaje-1',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753771198/WEB-23_gvup8o.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_800,h_600,q_auto,f_auto/v1753771198/WEB-23_gvup8o.jpg',
      alt: 'Paisaje natural capturado por Mike Vázquez'
    },
    {
      id: 'paisaje-2', 
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_350,h_450,g_center,q_auto,f_auto/v1753766608/WEB-13_c86og5.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_600,h_800,q_auto,f_auto/v1753766608/WEB-13_c86og5.jpg',
      alt: 'Vista panorámica de paisaje urbano'
    },
    {
      id: 'paisaje-3',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_450,h_350,g_center,q_auto,f_auto/v1753766546/WEB-12_ch7lel.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_800,h_600,q_auto,f_auto/v1753766546/WEB-12_ch7lel.jpg',
      alt: 'Fotografía de paisaje con composición artística'
    },
    {
      id: 'paisaje-4',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_300,h_400,g_center,q_auto,f_auto/v1753764613/WEB-08_i87yky.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_600,h_800,q_auto,f_auto/v1753764613/WEB-08_i87yky.jpg',
      alt: 'Paisaje natural con enfoque cinematográfico'
    },
    {
      id: 'paisaje-5',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_380,h_300,g_center,q_auto,f_auto/v1753764610/WEB-09_si3utl.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_800,h_600,q_auto,f_auto/v1753764610/WEB-09_si3utl.jpg',
      alt: 'Vista paisajística con técnica profesional'
    },
    {
      id: 'paisaje-6',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_420,h_350,g_center,q_auto,f_auto/v1753764523/IMG_3063_wwfizk.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_800,h_600,q_auto,f_auto/v1753764523/IMG_3063_wwfizk.jpg',
      alt: 'Fotografía de paisaje con iluminación natural'
    },
    {
      id: 'paisaje-7',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_350,h_400,g_center,q_auto,f_auto/v1753764514/03_dgbrnx.png',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_700,h_800,q_auto,f_auto/v1753764514/03_dgbrnx.png',
      alt: 'Composición paisajística con elementos arquitectónicos'
    },
    {
      id: 'paisaje-8',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_320,g_center,q_auto,f_auto/v1753764512/02_s0iagd.png',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_800,h_640,q_auto,f_auto/v1753764512/02_s0iagd.png',
      alt: 'Vista panorámica de paisaje urbano nocturno'
    },
    {
      id: 'paisaje-9',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_360,h_450,g_center,q_auto,f_auto/v1753764510/01_fjmcg9.png',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_600,h_750,q_auto,f_auto/v1753764510/01_fjmcg9.png',
      alt: 'Paisaje arquitectónico con perspectiva única'
    }
  ];

  const openLightbox = (image: PaisajeImage, index: number) => {
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
      setCurrentIndex(paisajesImages.length - 1);
      setSelectedImage(paisajesImages[paisajesImages.length - 1]);
    } else if (newIndex >= paisajesImages.length) {
      setCurrentIndex(0);
      setSelectedImage(paisajesImages[0]);
    } else {
      setCurrentIndex(newIndex);
      setSelectedImage(paisajesImages[newIndex]);
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
    <div className="min-h-screen bg-gradient-to-br from-pure-white via-soft-grey to-light-grey">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-r from-dark-grey to-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-grey/90 to-charcoal/90" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-block mb-8">
            <Button variant="ghost" className="text-pure-white hover:text-vibrant-yellow transition-colors duration-200 flex items-center gap-2">
              <ArrowLeft size={20} />
              Volver al inicio
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-pure-white mb-6">
              Paisajes
            </h1>
            <p className="font-montserrat text-xl text-pure-white/90 max-w-3xl mx-auto">
              Capturando la belleza natural y urbana a través de composiciones paisajísticas únicas
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {paisajesImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid cursor-pointer group relative"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-pure-white hover:text-vibrant-yellow transition-colors duration-200 z-10 h-12 w-12"
          >
            <X size={24} />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-dark-grey/80 text-pure-white hover:bg-vibrant-yellow hover:text-dark-grey transition-all duration-200 z-10 h-12 w-12 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-dark-grey/80 text-pure-white hover:bg-vibrant-yellow hover:text-dark-grey transition-all duration-200 z-10 h-12 w-12 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </Button>
          
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-[65vw] max-h-[65vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.lightboxSrc}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain border-2 border-vibrant-yellow/20 rounded-lg"
            />
          </motion.div>

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 text-pure-white z-10">
            <p className="font-source text-sm opacity-70">
              <span className="text-vibrant-yellow">{currentIndex + 1}</span> de {paisajesImages.length}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}