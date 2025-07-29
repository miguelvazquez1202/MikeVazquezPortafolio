import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { Link } from 'wouter';

interface ConcertImage {
  id: string;
  src: string;
  alt: string;
}

const concertGalleryImages: ConcertImage[] = [
  { id: 'DSC00089_wayg1s', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762144/DSC00089_wayg1s.jpg', alt: 'Fotografía de concierto profesional' },
  { id: 'DSC00095_lezf1e', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762138/DSC00095_lezf1e.jpg', alt: 'Presentación musical en vivo' },
  { id: 'DSC00165_varofk', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762134/DSC00165_varofk.jpg', alt: 'Artista en escenario con iluminación dramática' },
  { id: 'DSC00212_p4jkbb', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762129/DSC00212_p4jkbb.jpg', alt: 'Momento único de presentación musical' },
  { id: 'DSC00379_p6qglu', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762135/DSC00379_p6qglu.jpg', alt: 'Concierto con efectos de luz espectaculares' },
  { id: 'DSC00433_pmmrxp', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762132/DSC00433_pmmrxp.jpg', alt: 'Fotografía profesional de evento musical' },
  { id: 'DSC00479_stzkns', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762130/DSC00479_stzkns.jpg', alt: 'Artista solista en presentación' },
  { id: 'DSC00653_ctprfh', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762143/DSC00653_ctprfh.jpg', alt: 'Concierto capturado con técnica profesional' },
  { id: 'DSC00663_qyjvz3', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762129/DSC00663_qyjvz3.jpg', alt: 'Momento emotivo de presentación en vivo' },
  { id: 'DSC00799_muw0sv', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762138/DSC00799_muw0sv.jpg', alt: 'Fotografía de concierto con gran composición' },
  { id: 'DSC00937_xhhurl', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762140/DSC00937_xhhurl.jpg', alt: 'Artista en el escenario con público' },
  { id: 'DSC00944-Enhanced-NR_jscfcx', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762141/DSC00944-Enhanced-NR_jscfcx.jpg', alt: 'Presentación con efectos de iluminación mejorados' },
  { id: 'DSC00979-Enhanced-NR_jc3sho', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762128/DSC00979-Enhanced-NR_jc3sho.jpg', alt: 'Concierto con postproducción profesional' },
  { id: 'DSC01229_ahnfdd', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762141/DSC01229_ahnfdd.jpg', alt: 'Momento capturado en presentación musical' },
  { id: 'DSC01232_umfwnn', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762134/DSC01232_umfwnn.jpg', alt: 'Fotografía profesional de evento en vivo' },
  { id: 'DSC01287_bxcwnl', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762143/DSC01287_bxcwnl.jpg', alt: 'Artista durante presentación emotiva' },
  { id: 'DSC01887_www5pk', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762144/DSC01887_www5pk.jpg', alt: 'Concierto documentado profesionalmente' },
  { id: 'DSC02680_wupelb', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762132/DSC02680_wupelb.jpg', alt: 'Presentación musical con gran ambiente' },
  { id: 'DSC02788_sle5mi', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762131/DSC02788_sle5mi.jpg', alt: 'Momento único en concierto en vivo' },
  { id: 'DSC03081_p7x2cv', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762141/DSC03081_p7x2cv.jpg', alt: 'Fotografía de concierto con excelente timing' },
  { id: 'DSC03570_wypjuu', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762131/DSC03570_wypjuu.jpg', alt: 'Artista en momento de conexión con público' },
  { id: 'DSC03693_a6ofhq', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762140/DSC03693_a6ofhq.jpg', alt: 'Presentación capturada con técnica avanzada' },
  { id: 'DSC03779_cxcexq', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762139/DSC03779_cxcexq.jpg', alt: 'Concierto con iluminación artística' },
  { id: 'DSC03811_mryaeu', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762138/DSC03811_mryaeu.jpg', alt: 'Momento emotivo de presentación en vivo' },
  { id: 'DSC04402_ixv9sz', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762138/DSC04402_ixv9sz.jpg', alt: 'Fotografía profesional de evento musical' },
  { id: 'DSC04466_dseyh6', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762133/DSC04466_dseyh6.jpg', alt: 'Artista durante performance energética' },
  { id: 'DSC06287_azkvdz', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762135/DSC06287_azkvdz.jpg', alt: 'Concierto documentado artísticamente' },
  { id: 'DSC06517_aodxjk', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762141/DSC06517_aodxjk.jpg', alt: 'Presentación con composición excepcional' },
  { id: 'DSC06623_k3qcar', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762128/DSC06623_k3qcar.jpg', alt: 'Momento capturado en concierto profesional' },
  { id: 'DSC06648_bdfijl', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762130/DSC06648_bdfijl.jpg', alt: 'Fotografía de evento musical en vivo' },
  { id: 'DSC06654_fr8ahn', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762134/DSC06654_fr8ahn.jpg', alt: 'Artista en presentación con gran energía' },
  { id: 'DSC06786_qpanoi', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762133/DSC06786_qpanoi.jpg', alt: 'Concierto capturado con técnica superior' },
  { id: 'DSC06896_i1zjbb', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762139/DSC06896_i1zjbb.jpg', alt: 'Momento único de conexión artística' },
  { id: 'DSC06928_2_nkwpsj', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762137/DSC06928_2_nkwpsj.jpg', alt: 'Presentación musical documentada profesionalmente' },
  { id: 'DSC07048_ucs39k', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762140/DSC07048_ucs39k.jpg', alt: 'Fotografía de concierto con excelente iluminación' },
  { id: 'DSC08427_znnrkg', src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/v1753762134/DSC08427_znnrkg.jpg', alt: 'Artista capturado en momento performático' }
];

export default function ConcertsGallery() {
  const [selectedImage, setSelectedImage] = useState<ConcertImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: ConcertImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
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

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-pure-white/95 backdrop-blur-sm border-b border-soft-grey">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-dark-grey hover:text-vibrant-yellow transition-colors">
              <ArrowLeft size={20} />
              <span className="font-montserrat font-medium">Volver al Inicio</span>
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
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-dark-grey mb-2">
                Fotografía de 
              </h1>
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
              Una colección de <span className="text-vibrant-yellow font-semibold">{concertGalleryImages.length} momentos únicos</span> que definen la experiencia musical.
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

      {/* Gallery Grid */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {concertGalleryImages.map((image, index) => {
              // Crear variaciones de altura para efecto masonry más dinámico
              const heightVariations = ['h-64', 'h-80', 'h-96', 'h-72', 'h-60', 'h-88'];
              const randomHeight = heightVariations[index % heightVariations.length];
              
              // Crear elementos destacados especiales cada 8 fotos
              const isFeatureImage = index % 8 === 0 && index > 0;
              const featureClass = isFeatureImage ? 'lg:col-span-2 h-96' : randomHeight;
              
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
                  className={`relative group cursor-pointer ${isFeatureImage ? 'h-96 ring-2 ring-vibrant-yellow/30' : randomHeight} mb-6 break-inside-avoid overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-rotate-1 hover:scale-105 ${isFeatureImage ? 'hover:ring-vibrant-yellow/60' : ''}`}
                  onClick={() => openLightbox(image, index)}
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_500,h_600,g_center,q_auto,f_auto/${image.id}.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Indicador visual */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-vibrant-yellow rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                  
                  {/* Texto overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="font-montserrat text-sm opacity-90">
                      Fotografía {index + 1} de {concertGalleryImages.length}
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

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-vibrant-yellow transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-vibrant-yellow transition-colors"
          >
            <ArrowLeft size={32} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-vibrant-yellow transition-colors rotate-180"
          >
            <ArrowLeft size={32} />
          </button>

          <div className="max-w-4xl max-h-[80vh] mx-auto px-6">
            <img
              src={`https://res.cloudinary.com/dq0ogehwz/image/upload/c_fit,w_1200,h_800,q_auto,f_auto/${selectedImage.id}.jpg`}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white/80 font-montserrat">
                {currentIndex + 1} de {concertGalleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

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
              <button className="bg-vibrant-yellow text-dark-grey font-montserrat font-semibold px-8 py-4 rounded-lg hover:bg-vibrant-yellow/90 transition-colors">
                Solicitar Cotización
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}