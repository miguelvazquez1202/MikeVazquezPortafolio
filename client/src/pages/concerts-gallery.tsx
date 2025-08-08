import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Heart, Share2 } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo-head';
import MobileCarousel from '@/components/mobile-carousel';
import { useMobileDetect } from '@/hooks/use-mobile-detect';

interface ConcertImage {
  id: string;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

const concertGalleryImages: ConcertImage[] = [
  { id: 'tajin_video', src: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1754545144/Tajin_V2alta_lo8tx5.mp4', alt: 'Video aftermovie de concierto - Tajín', type: 'video' },
  { id: 'DSC00089_wayg1s', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762144/DSC00089_wayg1s.jpg', alt: 'Fotografía de concierto profesional', type: 'image' },
  { id: 'DSC00095_lezf1e', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762138/DSC00095_lezf1e.jpg', alt: 'Presentación musical en vivo', type: 'image' },
  { id: 'DSC00165_varofk', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762134/DSC00165_varofk.jpg', alt: 'Artista en escenario con iluminación dramática', type: 'image' },
  { id: 'DSC00212_p4jkbb', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762129/DSC00212_p4jkbb.jpg', alt: 'Momento único de presentación musical', type: 'image' },
  { id: 'DSC00379_p6qglu', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762135/DSC00379_p6qglu.jpg', alt: 'Concierto con efectos de luz espectaculares', type: 'image' },
  { id: 'DSC00433_pmmrxp', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762132/DSC00433_pmmrxp.jpg', alt: 'Fotografía profesional de evento musical', type: 'image' },
  { id: 'DSC00479_stzkns', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762130/DSC00479_stzkns.jpg', alt: 'Artista solista en presentación', type: 'image' },
  { id: 'DSC00653_ctprfh', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762143/DSC00653_ctprfh.jpg', alt: 'Concierto capturado con técnica profesional', type: 'image' },
  { id: 'DSC00663_qyjvz3', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762129/DSC00663_qyjvz3.jpg', alt: 'Momento emotivo de presentación en vivo', type: 'image' },
  { id: 'DSC00799_muw0sv', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762138/DSC00799_muw0sv.jpg', alt: 'Fotografía de concierto con gran composición', type: 'image' },
  { id: 'DSC00937_xhhurl', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762140/DSC00937_xhhurl.jpg', alt: 'Artista en el escenario con público', type: 'image' },
  { id: 'DSC00944-Enhanced-NR_jscfcx', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762141/DSC00944-Enhanced-NR_jscfcx.jpg', alt: 'Presentación con efectos de iluminación mejorados', type: 'image' },
  { id: 'DSC00979-Enhanced-NR_jc3sho', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762128/DSC00979-Enhanced-NR_jc3sho.jpg', alt: 'Concierto con postproducción profesional', type: 'image' },
  { id: 'DSC01229_ahnfdd', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762141/DSC01229_ahnfdd.jpg', alt: 'Momento capturado en presentación musical', type: 'image' },
  { id: 'DSC01232_umfwnn', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762134/DSC01232_umfwnn.jpg', alt: 'Fotografía profesional de evento en vivo', type: 'image' },
  { id: 'DSC01287_bxcwnl', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762143/DSC01287_bxcwnl.jpg', alt: 'Artista durante presentación emotiva', type: 'image' },
  { id: 'DSC01887_www5pk', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762144/DSC01887_www5pk.jpg', alt: 'Concierto documentado profesionalmente', type: 'image' },
  { id: 'DSC02680_wupelb', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762132/DSC02680_wupelb.jpg', alt: 'Presentación musical con gran ambiente', type: 'image' },
  { id: 'DSC02788_sle5mi', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762131/DSC02788_sle5mi.jpg', alt: 'Momento único en concierto en vivo', type: 'image' },
  { id: 'DSC03081_p7x2cv', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762141/DSC03081_p7x2cv.jpg', alt: 'Fotografía de concierto con excelente timing', type: 'image' },
  { id: 'DSC03570_wypjuu', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762131/DSC03570_wypjuu.jpg', alt: 'Artista en momento de conexión con público', type: 'image' },
  { id: 'DSC03693_a6ofhq', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762140/DSC03693_a6ofhq.jpg', alt: 'Presentación capturada con técnica avanzada', type: 'image' },
  { id: 'DSC03779_cxcexq', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762139/DSC03779_cxcexq.jpg', alt: 'Concierto con iluminación artística', type: 'image' },
  { id: 'DSC03811_mryaeu', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762138/DSC03811_mryaeu.jpg', alt: 'Momento emotivo de presentación en vivo', type: 'image' },
  { id: 'DSC04402_ixv9sz', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762138/DSC04402_ixv9sz.jpg', alt: 'Fotografía profesional de evento musical', type: 'image' },
  { id: 'DSC04466_dseyh6', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762133/DSC04466_dseyh6.jpg', alt: 'Artista durante performance energética', type: 'image' },
  { id: 'DSC06287_azkvdz', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762135/DSC06287_azkvdz.jpg', alt: 'Concierto documentado artísticamente', type: 'image' },
  { id: 'DSC06517_aodxjk', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762141/DSC06517_aodxjk.jpg', alt: 'Presentación con composición excepcional', type: 'image' },
  { id: 'DSC06623_k3qcar', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762128/DSC06623_k3qcar.jpg', alt: 'Momento capturado en concierto profesional', type: 'image' },
  { id: 'DSC06648_bdfijl', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762130/DSC06648_bdfijl.jpg', alt: 'Fotografía de evento musical en vivo', type: 'image' },
  { id: 'DSC06654_fr8ahn', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762134/DSC06654_fr8ahn.jpg', alt: 'Artista en presentación con gran energía', type: 'image' },
  { id: 'DSC06786_qpanoi', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762133/DSC06786_qpanoi.jpg', alt: 'Concierto capturado con técnica superior', type: 'image' },
  { id: 'DSC06896_i1zjbb', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762139/DSC06896_i1zjbb.jpg', alt: 'Momento único de conexión artística', type: 'image' },
  { id: 'DSC06928_2_nkwpsj', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762137/DSC06928_2_nkwpsj.jpg', alt: 'Presentación musical documentada profesionalmente', type: 'image' },
  { id: 'DSC07048_ucs39k', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762140/DSC07048_ucs39k.jpg', alt: 'Fotografía de concierto con excelente iluminación', type: 'image' },
  { id: 'DSC08427_znnrkg', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/w_600,h_400,c_fill,g_auto,q_auto,f_auto/v1753762134/DSC08427_znnrkg.jpg', alt: 'Artista capturado en momento performático', type: 'image' },
  { id: 'tapachula_video', src: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753769573/Tapachula_Reyli_yms53z.mp4', alt: 'Video aftermovie de concierto - Tapachula Reyli', type: 'video' }
];

export default function ConcertsGallery() {
  const [selectedImage, setSelectedImage] = useState<ConcertImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isMobileCarouselOpen, setIsMobileCarouselOpen] = useState(false);
  const isMobile = useMobileDetect();

  const openLightbox = (image: ConcertImage, index: number) => {
    if (isMobile) {
      setIsMobileCarouselOpen(true);
      setCurrentIndex(index);
    } else {
      setSelectedImage(image);
      setCurrentIndex(index);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % concertGalleryImages.length;
    setSelectedImage(concertGalleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + concertGalleryImages.length) % concertGalleryImages.length;
    setSelectedImage(concertGalleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const toggleLike = (imageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  const shareImage = (image: ConcertImage, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `Fotografía de Concierto - ${image.alt}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };



  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-pure-white">
      <SEOHead
        title="Fotografía de Conciertos - Mike Vázquez | Fotógrafo Musical Profesional"
        description="Galería profesional de fotografía de conciertos y eventos musicales. Capturando la energía y emoción de las presentaciones en vivo con técnica experta y visión artística."
        keywords="fotografía de conciertos, fotógrafo musical, eventos en vivo, fotografía de escenario, presentaciones musicales, Mike Vázquez"
        image="https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_1200,h_630,g_center,q_auto,f_auto/v1753762144/DSC00089_wayg1s.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Fotografía de Conciertos - Mike Vázquez",
          "description": "Galería profesional de fotografía de conciertos y eventos musicales",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez"
          },
          "genre": "Fotografía Musical",
          "url": window.location.href
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-grey via-pure-white to-soft-grey relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-vibrant-yellow/10 rounded-full blur-xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-vibrant-yellow/5 rounded-full blur-2xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-vibrant-yellow relative">
                Conciertos
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-vibrant-yellow rounded-full" />
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-montserrat text-xl text-dark-grey/80 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Capturando la energía, emoción y arte de las presentaciones musicales en vivo. 
              Una colección de <span className="text-vibrant-yellow font-semibold">momentos únicos</span> que definen la experiencia musical.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center space-x-2 text-dark-grey/60 font-montserrat"
            >
              <div className="w-12 h-px bg-vibrant-yellow" />
              <span>Scroll para explorar</span>
              <div className="w-12 h-px bg-vibrant-yellow" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="py-8 bg-soft-grey/50 border-b border-soft-grey">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="font-montserrat font-semibold text-dark-grey">
              {concertGalleryImages.filter(item => item.type === 'image').length} Fotografías • {concertGalleryImages.filter(item => item.type === 'video').length} Videos
            </h3>
            
            <div className="flex items-center space-x-2 text-sm text-dark-grey/70">
              <Heart size={16} />
              <span>{likedImages.size} favoritas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {concertGalleryImages.map((image, index) => {
              // Crear variaciones de altura para efecto masonry más dinámico
              const heightVariations = ['h-64', 'h-80', 'h-96', 'h-72', 'h-60', 'h-88'];
              const randomHeight = heightVariations[index % heightVariations.length];
              
              // Crear elementos destacados especiales cada 8 fotos
              const isFeatureImage = index % 8 === 0 && index > 0;
              const isVideo = image.type === 'video';
              
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className={`relative group cursor-pointer mb-6 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    isVideo 
                      ? 'col-span-full h-80 md:h-96 ring-4 ring-vibrant-yellow/40 hover:ring-vibrant-yellow/70 bg-gradient-to-r from-vibrant-yellow/10 to-vibrant-yellow/5' 
                      : isFeatureImage 
                        ? 'h-96 ring-2 ring-vibrant-yellow/30 hover:ring-vibrant-yellow/60 hover:-rotate-1' 
                        : `${randomHeight} break-inside-avoid hover:-rotate-1`
                  }`}
                  onClick={() => openLightbox(image, index)}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                  style={image.type === 'image' ? {
                    backgroundImage: `url(https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_500,h_600,g_center,q_auto,f_auto/${image.id}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  } : {}}
                >
                  {/* Video or Image Content */}
                  {image.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <video
                        className="w-full h-full object-cover"
                        poster={`https://res.cloudinary.com/dq0ogehwz/video/upload/so_${image.id === 'tajin_video' ? '35' : image.id === 'tapachula_video' ? '27' : '3'},w_800,h_450,c_fill,q_auto,f_jpg/${image.id === 'tajin_video' ? 'v1754545144/Tajin_V2alta_lo8tx5' : image.id === 'tapachula_video' ? 'v1753769573/Tapachula_Reyli_yms53z' : 'default'}.jpg`}
                        controlsList="nodownload"
                        disablePictureInPicture
                        muted
                        loop
                        preload="metadata"
                      >
                        <source src={image.src} type="video/mp4" />
                      </video>
                      {/* Video indicator badge */}
                      <div className="absolute top-4 left-4 bg-vibrant-yellow text-dark-grey px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                        VIDEO
                      </div>
                      {/* Play Button - Always Visible */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 bg-vibrant-yellow rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-[0_0_30px_rgba(255,194,15,0.4)] transition-all duration-300 border-2 border-vibrant-yellow/20">
                            <div className="w-0 h-0 border-l-[12px] border-l-dark-grey border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                          
                          {/* Pulsing Ring Animation */}
                          <div
                            className="absolute inset-0 rounded-full border-2 border-vibrant-yellow animate-ping opacity-75"
                            style={{
                              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Interactive Controls */}
                  <AnimatePresence>
                    {hoveredImage === image.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-4 left-4 flex space-x-2"
                      >
                        <button
                          onClick={(e) => toggleLike(image.id, e)}
                          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                            likedImages.has(image.id) 
                              ? 'bg-red-500 text-white' 
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <Heart size={16} fill={likedImages.has(image.id) ? 'currentColor' : 'none'} />
                        </button>
                        <button
                          onClick={(e) => shareImage(image, e)}
                          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-200"
                        >
                          <Share2 size={16} />
                        </button>

                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Texto overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="font-montserrat text-sm opacity-90 flex items-center justify-between">
                      <span>{image.type === 'video' ? 'Video' : 'Fotografía'} {index + 1} de {concertGalleryImages.length}</span>
                      {likedImages.has(image.id) && (
                        <Heart size={14} className="text-red-400 fill-current" />
                      )}
                    </div>
                  </div>
                  
                  {/* Border accent */}
                  <div className="absolute inset-0 border-2 border-vibrant-yellow/0 group-hover:border-vibrant-yellow/50 rounded-2xl transition-all duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Top Controls */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <div className="flex items-center space-x-4">
                <button
                  onClick={(e) => { e.stopPropagation(); toggleLike(selectedImage.id, e); }}
                  className={`p-3 rounded-full backdrop-blur-sm transition-all duration-200 ${
                    likedImages.has(selectedImage.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Heart size={20} fill={likedImages.has(selectedImage.id) ? 'currentColor' : 'none'} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); shareImage(selectedImage, e); }}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                >
                  <Share2 size={20} />
                </button>
              </div>
              
              <button
                onClick={closeLightbox}
                className="p-3 rounded-full bg-white/10 text-white hover:text-vibrant-yellow hover:bg-white/20 transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:text-vibrant-yellow hover:bg-white/20 transition-all duration-200"
            >
              <ArrowLeft size={24} />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:text-vibrant-yellow hover:bg-white/20 transition-all duration-200"
            >
              <ArrowLeft size={24} className="rotate-180" />
            </button>

            {/* Media Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-[70vh] mx-auto px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.type === 'video' ? (
                <video
                  className="max-w-full max-h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  controlsList="nodownload"
                  disablePictureInPicture
                >
                  <source src={selectedImage.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={selectedImage.src.replace('w_600,h_400', 'w_1200,h_800')}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
            </motion.div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 right-6 text-white z-10">
              <div className="flex items-center space-x-2 text-sm font-montserrat opacity-80">
                <div className="w-2 h-2 bg-vibrant-yellow rounded-full" />
                <span>{selectedImage.type === 'video' ? 'Video' : 'Fotografía'} {currentIndex + 1} de {concertGalleryImages.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact CTA */}
      <section className="py-20 bg-dark-grey">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-pure-white mb-6">
              ¿Te gusta mi trabajo?
            </h2>
            <p className="font-montserrat text-xl text-light-grey mb-8">
              Contáctame para documentar tu próximo evento musical
            </p>
            <Link href="/#contact">
              <Button className="bg-vibrant-yellow text-dark-grey font-montserrat font-semibold px-8 py-4 rounded-lg hover:bg-vibrant-yellow/90 transition-colors h-auto">
                Solicitar Cotización
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile Carousel */}
      <MobileCarousel
        images={concertGalleryImages}
        initialIndex={currentIndex}
        isOpen={isMobileCarouselOpen}
        onClose={() => setIsMobileCarouselOpen(false)}
      />
    </div>
  );
}