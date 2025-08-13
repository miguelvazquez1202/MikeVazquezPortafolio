import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo-head';
import MobileCarousel from '@/components/mobile-carousel';
import { useMobileDetect } from '@/hooks/use-mobile-detect';

interface EventoSocialImage {
  id: string;
  src: string;
  lightboxSrc: string;
  alt: string;
}

export default function EventosSocialesGallery() {
  const [selectedImage, setSelectedImage] = useState<EventoSocialImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileCarouselOpen, setIsMobileCarouselOpen] = useState(false);
  const isMobile = useMobileDetect();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const eventosSocialesImages: EventoSocialImage[] = [
    {
      id: 'evento-1',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_500,g_face,q_auto,f_auto/v1753769933/WEB-17_nopwqq.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1200,h_1500,q_auto,f_auto/v1753769933/WEB-17_nopwqq.jpg',
      alt: 'Fotografía de evento social por Mike Vázquez - Ambiente festivo y profesional'
    },
    {
      id: 'evento-2',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_350,h_450,g_face,q_auto,f_auto/v1753769932/WEB-16_abwn5o.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1050,h_1350,q_auto,f_auto/v1753769932/WEB-16_abwn5o.jpg',
      alt: 'Captura profesional de evento social - Momentos únicos documentados'
    },
    {
      id: 'evento-3',
      src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_420,h_350,g_center,q_auto,f_auto/v1753769822/WEB-15_ib8vkv.jpg',
      lightboxSrc: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_limit,w_1260,h_1050,q_auto,f_auto/v1753769822/WEB-15_ib8vkv.jpg',
      alt: 'Fotografía artística de evento social - Composición dinámica y emotiva'
    }
  ];

  const openLightbox = (image: EventoSocialImage, index: number) => {
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
      setCurrentIndex(eventosSocialesImages.length - 1);
      setSelectedImage(eventosSocialesImages[eventosSocialesImages.length - 1]);
    } else if (newIndex >= eventosSocialesImages.length) {
      setCurrentIndex(0);
      setSelectedImage(eventosSocialesImages[0]);
    } else {
      setCurrentIndex(newIndex);
      setSelectedImage(eventosSocialesImages[newIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-light-grey">
      <SEOHead
        title="Fotografía de Eventos Sociales - Mike Vázquez | Fotógrafo de Bodas y Celebraciones México"
        description="Fotografía profesional de eventos sociales en México. Documentación artística de bodas, quinceañeros, aniversarios y celebraciones especiales. Capturando momentos únicos con técnica cinematográfica."
        keywords="fotografía de eventos sociales México, fotógrafo de bodas México, quinceañeros, celebraciones especiales, fotografía social Ciudad de México, eventos familiares, Mike Vázquez fotógrafo"
        image="https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_1200,h_630,g_center,q_auto,f_auto/v1753769933/WEB-17_nopwqq.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Fotografía de Eventos Sociales - Mike Vázquez",
          "description": "Galería profesional de fotografía de eventos sociales con documentación artística y técnica cinematográfica",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez",
            "jobTitle": "Fotógrafo de Eventos Sociales",
            "telephone": "+52-55-3726-4582",
            "email": "miguelvazquez1202@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ciudad de México",
              "addressCountry": "México"
            }
          },
          "genre": "Fotografía de Eventos Sociales",
          "url": window.location.href,
          "mainEntity": {
            "@type": "Service",
            "name": "Fotografía de Eventos Sociales",
            "description": "Documentación artística profesional de bodas, quinceañeros, aniversarios y celebraciones especiales",
            "serviceType": "Fotografía Social",
            "category": ["Bodas", "Quinceañeros", "Aniversarios", "Celebraciones"],
            "areaServed": {
              "@type": "Place",
              "name": "México",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.4326",
                "longitude": "-99.1332"
              }
            },
            "provider": {
              "@type": "Person",
              "name": "Mike Vázquez"
            }
          }
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-pure-white/95 backdrop-blur-sm border-b border-soft-grey">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#servicios" className="flex items-center space-x-3 text-dark-grey hover:text-vibrant-yellow transition-colors">
              <ArrowLeft size={20} />
              <span className="font-montserrat font-medium">Volver</span>
            </Link>
            <div className="font-playfair text-2xl font-semibold text-dark-grey">
              Mike Vázquez
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-vibrant-yellow/5 via-pure-white to-vibrant-yellow/10 relative overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="absolute top-0 left-0 w-32 h-32 bg-vibrant-yellow/10 rounded-full blur-xl" 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-playfair text-5xl md:text-7xl font-bold text-vibrant-yellow mb-6 relative"
            >
              Eventos Sociales
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-vibrant-yellow rounded-full" 
              />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-montserrat text-xl text-dark-grey/80 max-w-3xl mx-auto leading-relaxed"
            >
              Documentación artística de tus momentos más especiales. 
              <motion.span 
                initial={{ backgroundColor: "transparent" }}
                animate={{ backgroundColor: "#ffc20f20" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-vibrant-yellow font-semibold px-1 rounded"
              >
                Cada celebración
              </motion.span> 
              merece ser recordada con la elegancia y profesionalismo que la caracteriza.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-grey mb-4">
              Galería de Eventos Sociales
            </h2>
            <p className="font-montserrat text-dark-grey/70 max-w-2xl mx-auto">
              {eventosSocialesImages.length} fotografías que capturan la esencia y emoción de celebraciones únicas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventosSocialesImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  damping: 15
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 2
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-soft-grey rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
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
      </section>

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


        </motion.div>
      )}

      {/* Mobile Carousel */}
      <MobileCarousel
        images={eventosSocialesImages.map(img => ({ id: img.id, src: img.lightboxSrc, alt: img.alt }))}
        initialIndex={currentIndex}
        isOpen={isMobileCarouselOpen}
        onClose={() => setIsMobileCarouselOpen(false)}
      />
    </div>
  );
}