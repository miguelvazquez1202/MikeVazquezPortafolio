import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";
import MobileCarousel from "@/components/mobile-carousel";
import { useMobileDetect } from "@/hooks/use-mobile-detect";

interface RetratosImage {
  id: string;
  src: string;
  alt: string;
  lightboxSrc: string;
}

export default function RetratosPage() {
  const [selectedImage, setSelectedImage] = useState<RetratosImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileCarouselOpen, setIsMobileCarouselOpen] = useState(false);
  const isMobile = useMobileDetect();

  // Imágenes de la colección de Cloudinary con tamaños optimizados
  const retratosImages: RetratosImage[] = [
    {
      id: 'retrato-1',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_600,g_face,q_auto,f_auto/v1753771091/WEB-22_ln3kgw.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753771091/WEB-22_ln3kgw.jpg',
      alt: 'Retrato profesional con iluminación dramática'
    },
    {
      id: 'retrato-2', 
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_500,h_400,g_face,q_auto,f_auto/v1753764635/DSC04770-Enhanced-NR_c9miya.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753764635/DSC04770-Enhanced-NR_c9miya.jpg',
      alt: 'Retrato artístico con iluminación profesional'
    },
    {
      id: 'retrato-3',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_350,h_500,g_face,q_auto,f_auto/v1753765429/WEB-10_x9tqjp.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753765429/WEB-10_x9tqjp.jpg',
      alt: 'Sesión de retratos en estudio profesional'
    },
    {
      id: 'retrato-4',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_450,h_350,g_face,q_auto,f_auto/v1753765323/DSC03844_rwfsa7.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753765323/DSC03844_rwfsa7.jpg',
      alt: 'Retrato contemporáneo con composición artística'
    },
    {
      id: 'retrato-5',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_300,h_450,g_face,q_auto,f_auto/v1753764591/DSC04710_bdsrsr.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753764591/DSC04710_bdsrsr.jpg',
      alt: 'Fotografía de retrato con enfoque creativo'
    },
    {
      id: 'retrato-6',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_face,q_auto,f_auto/v1753764722/DSC04868-Enhanced-NR_mp4u69.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753764722/DSC04868-Enhanced-NR_mp4u69.jpg',
      alt: 'Retrato natural con luz ambiente'
    },
    {
      id: 'retrato-7',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_320,h_480,g_face,q_auto,f_auto/v1753770789/WEB-19_c1268v.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753770789/WEB-19_c1268v.jpg',
      alt: 'Retrato expresivo con técnica profesional'
    },
    {
      id: 'retrato-8',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_480,h_320,g_face,q_auto,f_auto/v1753770786/WEB-20_catoge.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753770786/WEB-20_catoge.jpg',
      alt: 'Sesión de retrato con composición única'
    },
    {
      id: 'retrato-9',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_380,h_520,g_face,q_auto,f_auto/v1753771094/WEB-21_bkb7dn.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_450,h_600,q_auto,f_auto/v1753771094/WEB-21_bkb7dn.jpg',
      alt: 'Retrato artístico con iluminación creativa'
    }
  ];

  const openLightbox = (image: RetratosImage, index: number) => {
    if (isMobile) {
      setIsMobileCarouselOpen(true);
      setCurrentIndex(index);
    } else {
      setSelectedImage(image);
      setCurrentIndex(index);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
      setCurrentIndex(retratosImages.length - 1);
      setSelectedImage(retratosImages[retratosImages.length - 1]);
    } else if (newIndex >= retratosImages.length) {
      setCurrentIndex(0);
      setSelectedImage(retratosImages[0]);
    } else {
      setCurrentIndex(newIndex);
      setSelectedImage(retratosImages[newIndex]);
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
    <div className="min-h-screen bg-pure-white relative">
      <SEOHead
        title="Retratos Profesionales - Mike Vázquez | Fotógrafo de Retratos Ciudad de México"
        description="Fotografía profesional de retratos en Ciudad de México. Sesiones personalizadas con iluminación artística y técnica avanzada para capturar la esencia única de cada persona. Disponibilidad para viajar."
        keywords="retratos profesionales, fotografía de retrato, sesiones fotográficas, retratos artísticos, fotógrafo Ciudad de México, retratos en estudio, iluminación profesional, fotografía de personas, Mike Vázquez, Hello Hi Producciones"
        image="https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_1200,h_630,g_face,q_auto,f_auto/v1753771091/WEB-22_ln3kgw.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Retratos Profesionales - Mike Vázquez",
          "description": "Galería profesional de retratos con técnica avanzada e iluminación artística en Ciudad de México",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez",
            "jobTitle": "Fotógrafo Profesional",
            "telephone": "+52-55-3726-4582",
            "email": "miguelvazquez1202@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ciudad de México",
              "addressCountry": "México"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Hello Hi Producciones"
            }
          },
          "genre": "Fotografía de Retrato",
          "url": window.location.href,
          "mainEntity": {
            "@type": "Service",
            "name": "Sesiones de Retratos Profesionales",
            "description": "Fotografía profesional de retratos con técnica artística avanzada",
            "serviceType": "Fotografía de Retratos",
            "areaServed": [
              {
                "@type": "Place",
                "name": "Ciudad de México"
              },
              {
                "@type": "Place", 
                "name": "México"
              }
            ],
            "provider": {
              "@type": "Person",
              "name": "Mike Vázquez"
            }
          }
        }}
      />
      {/* Background blur overlay when lightbox is open */}
      {selectedImage && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-dark-grey/20" />
      )}

      {/* Header */}
      <div className="relative z-30 bg-pure-white/95 backdrop-blur-sm border-b border-light-grey/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2 text-dark-grey hover:text-vibrant-yellow transition-colors">
                <ArrowLeft size={20} />
                Volver al Inicio
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-dark-grey">
                Retratos
              </h1>
              <p className="font-montserrat text-charcoal mt-2">
                Capturando la esencia única de cada persona
              </p>
            </div>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Dynamic Gallery Grid */}
      <div className="relative z-20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {retratosImages.map((image, index) => (
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-3 h-3 bg-vibrant-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
              <span className="text-vibrant-yellow">{currentIndex + 1}</span> de {retratosImages.length}
            </p>
          </div>
        </motion.div>
      )}

      {/* Mobile Carousel */}
      <MobileCarousel
        images={retratosImages.map(img => ({ id: img.id, src: img.lightboxSrc, alt: img.alt }))}
        initialIndex={currentIndex}
        isOpen={isMobileCarouselOpen}
        onClose={() => setIsMobileCarouselOpen(false)}
      />
    </div>
  );
}