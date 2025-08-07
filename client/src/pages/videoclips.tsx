import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo-head';

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
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});

  const openFullscreen = (video: VideoClip) => {
    setSelectedVideo(video);
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
        title="Videoclips Musicales - Mike Vázquez | Producción Audiovisual Profesional"
        description="Galería de videoclips musicales producidos profesionalmente. Narrativa cinematográfica, estética contemporánea y producción audiovisual de alta calidad."
        keywords="videoclips musicales, producción audiovisual, video musical, cinematografía, Mike Vázquez, producción musical"
        image="https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_1200,h_630,c_fill,q_auto,f_jpg/v1753770686/06._Pido_Perdon_mrqgih.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGallery",
          "name": "Videoclips Musicales - Mike Vázquez",
          "description": "Galería de videoclips musicales producidos profesionalmente",
          "author": {
            "@type": "Person",
            "name": "Mike Vázquez"
          },
          "genre": "Video Musical",
          "url": window.location.href
        }}
      />

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
                Videoclips
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-vibrant-yellow rounded-full" />
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-montserrat text-xl text-dark-grey/80 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Producción audiovisual profesional que combina narrativa cinematográfica con 
              <span className="text-vibrant-yellow font-semibold"> estética contemporánea</span>. 
              Cada videoclip cuenta una historia única a través del lenguaje audiovisual.
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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-soft-grey rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onClick={() => openFullscreen(video)}
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-vibrant-yellow text-dark-grey px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                      {video.category}
                    </span>
                  </div>

                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/60 via-transparent to-dark-grey/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={(e) => togglePlay(video.id, e)}
                        className="bg-vibrant-yellow hover:bg-vibrant-yellow/90 text-dark-grey rounded-full w-16 h-16 flex items-center justify-center transform scale-100 hover:scale-110 transition-transform duration-200"
                      >
                        {playingVideos.has(video.id) ? (
                          <Pause size={24} />
                        ) : (
                          <Play size={24} className="ml-1" />
                        )}
                      </Button>
                    </div>

                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={(e) => toggleMute(video.id, e)}
                          className="bg-pure-white/20 hover:bg-pure-white/30 text-pure-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
                        >
                          {mutedVideos.has(video.id) ? (
                            <VolumeX size={16} />
                          ) : (
                            <Volume2 size={16} />
                          )}
                        </Button>
                        {video.duration && (
                          <span className="text-pure-white text-sm font-montserrat bg-pure-white/20 px-2 py-1 rounded backdrop-blur-sm">
                            {video.duration}
                          </span>
                        )}
                      </div>
                      
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          openFullscreen(video);
                        }}
                        className="bg-pure-white/20 hover:bg-pure-white/30 text-pure-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
                      >
                        <Maximize size={16} />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 bg-pure-white">
                  <h3 className="font-playfair text-xl font-semibold text-dark-grey mb-2 group-hover:text-vibrant-yellow transition-colors">
                    {video.title}
                  </h3>
                </div>
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
    </div>
  );
}