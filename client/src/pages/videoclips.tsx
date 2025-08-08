import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo-head';
import MobileCarousel from '@/components/mobile-carousel';
import { useMobileDetect } from '@/hooks/use-mobile-detect';

interface VideoClip {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration?: string;
  category: string;
}

const videoclips: VideoClip[] = [
  {
    id: 'hoy_me_alejo',
    title: 'Hoy Me Alejo - Reyli Barba',
    description: 'Dirección, edición y post producción',
    videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753769477/09._Hoy_Me_Alejo_pvn1fj.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_20,w_800,h_450,c_fill,q_auto,f_jpg/v1753769477/09._Hoy_Me_Alejo_pvn1fj.jpg',
    duration: '4:15',
    category: 'Videoclip'
  },
  {
    id: 'pido_perdon',
    title: 'Pido Perdón - Reyli Barba',
    description: '',
    videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770686/06._Pido_Perdon_mrqgih.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_86,w_800,h_450,c_fill,q_auto,f_jpg/v1753770686/06._Pido_Perdon_mrqgih.jpg',
    duration: '3:45',
    category: 'Videolyric'
  },
  {
    id: 'fierro_costera',
    title: 'Fierro Por La Costera - Alexis Cristóbal',
    description: '',
    videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770682/Fierro_Por_La_Costera_Alexis_Finalcut_1080P_zmwizb.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_85,w_800,h_450,c_fill,q_auto,f_jpg/v1753770682/Fierro_Por_La_Costera_Alexis_Finalcut_1080P_zmwizb.jpg',
    duration: '4:12',
    category: 'Videoclip'
  },
  {
    id: 'mi_reina_maya',
    title: 'Mi Reina Maya - Reyli Barba',
    description: '',
    videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753769575/Mi_Reina_Maya_Videolyric_1080P_Finalcut_hlre8m.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_56,w_800,h_450,c_fill,q_auto,f_jpg/v1753769575/Mi_Reina_Maya_Videolyric_1080P_Finalcut_hlre8m.jpg',
    duration: '3:28',
    category: 'Videolyric'
  },
  {
    id: '730_dias',
    title: '730 Días - Reyli Barba',
    description: '',
    videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753769586/730_Dias_V4_1080P_flafqg.mp4',
    thumbnailUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_800,h_450,c_fill,q_auto,f_jpg/v1753769586/730_Dias_V4_1080P_flafqg.jpg',
    duration: '4:03',
    category: 'Live session'
  }
];

export default function VideoclipsGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoClip | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set(['all']));
  const [isMobileCarouselOpen, setIsMobileCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});
  const isMobile = useMobileDetect();

  const openFullscreen = (video: VideoClip, index: number = 0) => {
    if (isMobile) {
      setIsMobileCarouselOpen(true);
      setCurrentIndex(index);
    } else {
      setSelectedVideo(video);
    }
  };

  const closeFullscreen = () => {
    setSelectedVideo(null);
    // Pause all videos when closing fullscreen
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.pause();
    });
    setPlayingVideos(new Set());
  };

  const togglePlay = (videoId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRefs.current[videoId];
    if (!video) {
      console.error(`Video not found for ID: ${videoId}`);
      return;
    }

    console.log(`Toggle play for video: ${videoId}`, { 
      currentTime: video.currentTime, 
      duration: video.duration,
      readyState: video.readyState,
      paused: video.paused 
    });

    if (playingVideos.has(videoId)) {
      video.pause();
      setPlayingVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(videoId);
        return newSet;
      });
    } else {
      // Pause all other videos first
      Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
        if (id !== videoId && videoEl) {
          videoEl.pause();
        }
      });
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log(`Video ${videoId} started playing successfully`);
            setPlayingVideos(new Set([videoId]));
          })
          .catch(error => {
            console.error(`Error playing video ${videoId}:`, error);
          });
      } else {
        setPlayingVideos(new Set([videoId]));
      }
    }
  };

  const toggleMute = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (mutedVideos.has(videoId)) {
      video.muted = false;
      setMutedVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(videoId);
        return newSet;
      });
    } else {
      video.muted = true;
      setMutedVideos(prev => new Set(Array.from(prev).concat([videoId])));
    }
  };

  const setVideoRef = (videoId: string, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current[videoId] = el;
      // Start muted by default
      el.muted = true;
    }
  };

  return (
    <div className="min-h-screen bg-pure-white">
      <SEOHead
        title="Videoclips Musicales - Mike Vázquez | Director y Productor Audiovisual México"
        description="Producción profesional de videoclips musicales en México. Narrativa cinematográfica, dirección creativa y producción audiovisual de alta calidad. Especialista en videolyrics, videoclips y live sessions."
        keywords="videoclips musicales México, producción audiovisual, director de videoclips, videolyrics, live session, cinematografía musical, Ciudad de México, Hello Hi Producciones, Mike Vázquez director"
        image="https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_1200,h_630,c_fill,q_auto,f_jpg/v1753770686/06._Pido_Perdon_mrqgih.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGallery",
          "name": "Videoclips Musicales - Mike Vázquez",
          "description": "Galería profesional de videoclips musicales con narrativa cinematográfica y producción audiovisual de alta calidad",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez",
            "jobTitle": "Director y Productor Audiovisual",
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
          "genre": "Videoclips Musicales",
          "url": window.location.href,
          "mainEntity": {
            "@type": "Service",
            "name": "Producción de Videoclips Musicales",
            "description": "Producción audiovisual profesional de videoclips, videolyrics y live sessions con narrativa cinematográfica",
            "serviceType": "Producción Audiovisual",
            "category": ["Videolyric", "Videoclip", "Live session"],
            "areaServed": {
              "@type": "Place",
              "name": "México"
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-grey via-pure-white to-soft-grey relative overflow-hidden">
        {/* Animated Background Elements */}
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
        <motion.div 
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2 
          }}
          className="absolute bottom-0 right-0 w-40 h-40 bg-vibrant-yellow/5 rounded-full blur-2xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4 
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-vibrant-yellow/5 rounded-full blur-xl" 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                damping: 10 
              }}
              className="mb-6"
            >
              <motion.h1 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-playfair text-5xl md:text-7xl font-bold text-vibrant-yellow relative"
              >
                Videoclips
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-vibrant-yellow rounded-full" 
                />
              </motion.h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-montserrat text-xl text-dark-grey/80 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Producción audiovisual profesional que combina narrativa cinematográfica con 
              <motion.span 
                initial={{ backgroundColor: "transparent" }}
                animate={{ backgroundColor: "#ffc20f20" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-vibrant-yellow font-semibold px-1 rounded"
              > 
                estética contemporánea
              </motion.span>. 
              Cada videoclip cuenta una historia única a través del lenguaje audiovisual.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center space-x-2 text-dark-grey/60 font-montserrat"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="h-px bg-vibrant-yellow" 
              />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Scroll para explorar
              </motion.span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="h-px bg-vibrant-yellow" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-grey mb-4">
              Galería de Videoclips
            </h2>
            <p className="font-montserrat text-dark-grey/70 max-w-2xl mx-auto">
              {videoclips.length} producciones audiovisuales con narrativa cinematográfica y técnica profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoclips.map((video, index) => (
              <motion.div
                key={video.id}
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
                  y: -8,
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 1
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-soft-grey rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => openFullscreen(video, index)}
              >
                <div className="relative aspect-video bg-dark-grey/10">
                  <video
                    ref={(el) => setVideoRef(video.id, el)}
                    className="w-full h-full object-cover"
                    poster={video.thumbnailUrl}
                    controlsList="nodownload"
                    disablePictureInPicture
                    preload="metadata"
                    onError={(e) => {
                      console.error(`Video error for ${video.id}:`, e.currentTarget.error);
                    }}
                    onLoadStart={() => {
                      console.log(`Loading video: ${video.id}`);
                    }}
                    onCanPlay={() => {
                      console.log(`Video can play: ${video.id}`);
                    }}
                    onEnded={() => {
                      setPlayingVideos(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(video.id);
                        return newSet;
                      });
                    }}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>

                  {/* Category Tag */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute top-4 left-4"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="bg-vibrant-yellow text-dark-grey px-3 py-1 rounded-full text-sm font-montserrat font-semibold shadow-md"
                    >
                      {video.category}
                    </motion.span>
                  </motion.div>

                  {/* Video Controls Overlay - Hover Effect */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-dark-grey/30"
                  />

                  {/* Play Button - Always Visible */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ 
                          boxShadow: "0 0 30px rgba(255, 194, 15, 0.4)",
                          scale: 1.05
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-vibrant-yellow hover:bg-vibrant-yellow/90 text-dark-grey rounded-full w-16 h-16 flex items-center justify-center shadow-xl cursor-pointer border-2 border-vibrant-yellow/20"
                        onClick={(e) => togglePlay(video.id, e)}
                      >
                        <motion.div
                          animate={playingVideos.has(video.id) ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {playingVideos.has(video.id) ? (
                            <Pause size={24} />
                          ) : (
                            <Play size={24} className="ml-1" />
                          )}
                        </motion.div>
                      </motion.div>
                      
                      {/* Pulsing Ring Animation */}
                      <motion.div
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 0.3, 0.8]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-full border-2 border-vibrant-yellow"
                      />
                    </motion.div>
                  </div>

                    {/* Video Controls */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={(e) => toggleMute(video.id, e)}
                            className="bg-pure-white/20 hover:bg-pure-white/30 text-pure-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
                          >
                            <motion.div
                              animate={mutedVideos.has(video.id) ? { scale: [1, 0.8, 1] } : { scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {mutedVideos.has(video.id) ? (
                                <VolumeX size={16} />
                              ) : (
                                <Volume2 size={16} />
                              )}
                            </motion.div>
                          </Button>
                        </motion.div>
                        {video.duration && (
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-pure-white text-sm font-montserrat bg-pure-white/20 px-2 py-1 rounded backdrop-blur-sm"
                          >
                            {video.duration}
                          </motion.span>
                        )}
                      </div>
                      
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            openFullscreen(video);
                          }}
                          className="bg-pure-white/20 hover:bg-pure-white/30 text-pure-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
                        >
                          <motion.div whileHover={{ rotate: 15 }}>
                            <Maximize size={16} />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                </div>

                {/* Video Info */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-pure-white"
                >
                  <motion.h3 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="font-playfair text-xl font-semibold text-dark-grey mb-2 group-hover:text-vibrant-yellow transition-colors duration-300"
                  >
                    {video.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl aspect-video bg-deep-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                controlsList="nodownload"
                disablePictureInPicture
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>

              <Button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 bg-pure-white/20 hover:bg-pure-white/30 text-pure-white rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm"
              >
                <X size={20} />
              </Button>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-playfair text-xl font-semibold text-pure-white mb-1">
                  {selectedVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Carousel */}
      <MobileCarousel
        images={videoclips.map(video => ({ 
          id: video.id, 
          src: video.thumbnailUrl, 
          alt: video.title 
        }))}
        initialIndex={currentIndex}
        isOpen={isMobileCarouselOpen}
        onClose={() => setIsMobileCarouselOpen(false)}
      />
    </div>
  );
}