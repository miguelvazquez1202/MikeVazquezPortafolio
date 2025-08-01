import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import SEOHead from "@/components/seo-head";

interface VideoClip {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailSrc: string;
}

export default function VideoclipsPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoClip | null>(null);

  const videoclips: VideoClip[] = [
    {
      id: 'fierro-por-la-costera',
      title: 'Fierro Por La Costera - Alexis',
      description: 'Videoclip musical con estética cinematográfica y narrativa visual impactante',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770682/Fierro_Por_La_Costera_Alexis_Finalcut_1080P_zmwizb.mp4',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_5.0,w_800,h_450,c_fill,g_center,q_auto,f_jpg/v1753770682/Fierro_Por_La_Costera_Alexis_Finalcut_1080P_zmwizb.jpg'
    },
    {
      id: 'la-ciudad-del-amor',
      title: 'La Ciudad Del Amor',
      description: 'Producción audiovisual que captura la esencia del amor urbano',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770681/12._La_Ciudad_Del_Amor_i2yatz.mp4',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_5.0,w_800,h_450,c_fill,g_center,q_auto,f_jpg/v1753770681/12._La_Ciudad_Del_Amor_i2yatz.jpg'
    },
    {
      id: 'tan-iguales-tan-distintos',
      title: 'Tan Iguales Tan Distintos',
      description: 'Narrativa visual que explora los contrastes de la vida moderna',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753769584/11._Tan_Iguales_Tan_Distintos_fdyqs8.mp4',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_5.0,w_800,h_450,c_fill,g_center,q_auto,f_jpg/v1753769584/11._Tan_Iguales_Tan_Distintos_fdyqs8.jpg'
    },
    {
      id: 'mi-reina-maya',
      title: 'Mi Reina Maya - Videolyric',
      description: 'Video lírico con producción cinematográfica y dirección artística',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753769575/Mi_Reina_Maya_Videolyric_1080P_Finalcut_hlre8m.mp4',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_5.0,w_800,h_450,c_fill,g_center,q_auto,f_jpg/v1753769575/Mi_Reina_Maya_Videolyric_1080P_Finalcut_hlre8m.jpg'
    }
  ];

  const openVideo = (video: VideoClip) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-light-grey">
      <SEOHead
        title="Videoclips Musicales - Mike Vázquez | Producción Audiovisual Cinematográfica"
        description="Videoclips musicales y producciones audiovisuales con narrativa cinematográfica. Dirección artística y técnica profesional para artistas musicales."
        keywords="videoclips musicales, producción audiovisual, cineasta, dirección artística, Mike Vázquez"
        image="https://res.cloudinary.com/dq0ogehwz/image/upload/so_5.0,w_1200,h_630,c_fill,g_center,q_auto,f_jpg/v1753770682/Fierro_Por_La_Costera_Alexis_Finalcut_1080P_zmwizb.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGallery",
          "name": "Videoclips Musicales - Mike Vázquez",
          "description": "Videoclips musicales y producciones audiovisuales con narrativa cinematográfica",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez"
          },
          "genre": "Producción Audiovisual",
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
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-pure-white mb-6">
                <span className="text-vibrant-yellow">V</span>ideoclips
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
              Producción audiovisual cinematográfica con <span className="text-vibrant-yellow font-semibold">narrativa visual</span> y 
              <span className="text-vibrant-yellow font-semibold"> dirección artística</span> profesional
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoclips.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-vibrant-yellow/30"
                  onClick={() => openVideo(video)}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-soft-grey to-light-grey">
                    <img
                      src={video.thumbnailSrc}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-dark-grey/20 group-hover:bg-dark-grey/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-vibrant-yellow/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-vibrant-yellow transition-colors duration-300"
                      >
                        <Play size={24} className="text-dark-grey ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-pure-white">
                    <h3 className="font-playfair text-xl font-semibold text-dark-grey mb-3 group-hover:text-vibrant-yellow transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="font-montserrat text-charcoal text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-pure-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 p-3 bg-dark-grey/80 hover:bg-vibrant-yellow transition-colors duration-300 rounded-full z-10 group"
          >
            <X size={24} className="text-pure-white group-hover:text-dark-grey" />
          </button>

          {/* Video container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[80vh] w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo.videoUrl}
              controls
              controlsList="nodownload"
              disablePictureInPicture
              className="w-full h-full rounded-lg shadow-2xl"
              autoPlay
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </motion.div>

          {/* Video info */}
          <div className="absolute bottom-6 left-6 right-6 text-center z-10">
            <div className="bg-dark-grey/80 rounded-lg p-4 max-w-2xl mx-auto">
              <h3 className="font-playfair text-xl font-semibold text-pure-white mb-2">
                {selectedVideo.title}
              </h3>
              <p className="font-montserrat text-light-grey text-sm">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}