import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";

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
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_280,h_350,g_center,q_auto,f_auto/v1753764613/WEB-08_i87yky.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_600,h_750,q_auto,f_auto/v1753764613/WEB-08_i87yky.jpg',
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
    <div className="min-h-screen bg-light-grey">
      <SEOHead
        title="Fotografía de Paisajes - Mike Vázquez | Paisajes Naturales y Urbanos"
        description="Colección de fotografías de paisajes naturales y urbanos capturados con visión artística. Explorando la belleza de los espacios naturales y arquitectónicos."
        keywords="fotografía de paisajes, paisajes naturales, fotografía urbana, naturaleza, Mike Vázquez"
        image="https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_1200,h_630,g_center,q_auto,f_auto/v1753771198/WEB-23_gvup8o.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Fotografía de Paisajes - Mike Vázquez",
          "description": "Colección de fotografías de paisajes naturales y urbanos capturados con visión artística",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez"
          },
          "genre": "Fotografía de Paisajes",
          "url": window.location.href
        }}
      />
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
              <h1 className="font-playfair text-6xl md:text-7xl font-bold text-pure-white mb-2 relative">
                Paisajes
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-transparent via-vibrant-yellow to-transparent absolute -bottom-2 left-0"
                ></motion.div>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-montserrat text-xl md:text-2xl text-pure-white max-w-4xl mx-auto leading-relaxed"
            >
              Explorando la <span className="text-vibrant-yellow font-semibold">majestuosidad natural</span> y 
              <span className="text-vibrant-yellow font-semibold"> arquitectónica</span> a través de composiciones únicas
            </motion.p>
            

          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-20 bg-light-grey relative">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-vibrant-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-dark-grey/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Colección Visual
            </h2>
            <p className="font-montserrat text-lg text-charcoal max-w-2xl mx-auto">
              Cada imagen cuenta una historia única de belleza natural y urbana
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {paisajesImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="break-inside-avoid cursor-pointer group relative"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:-translate-y-2">
                  {/* Image container with dynamic effects */}
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 via-dark-grey/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-pure-white">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-vibrant-yellow rounded-full"></div>
                          <p className="font-montserrat text-sm font-medium">Ver imagen completa</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Border accent */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-vibrant-yellow/30 transition-all duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-vibrant-yellow/0 group-hover:border-vibrant-yellow/70 transition-all duration-500 rounded-tr-lg"></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom decorative section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-vibrant-yellow"></div>
              <div className="w-3 h-3 bg-vibrant-yellow rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-vibrant-yellow"></div>
            </div>
          </motion.div>
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