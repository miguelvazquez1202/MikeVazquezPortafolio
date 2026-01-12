import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoReelVideos, VideoItem } from "@/lib/data";
import { useState } from "react";
import { useLocation, Link } from "wouter";

export default function DemoReelSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [, setLocation] = useLocation();

  const handleNavigateToVideoclips = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked - navigating to videoclips...');
    try {
      window.location.href = '/videoclips';
    } catch (error) {
      console.error('Navigation error:', error);
      setLocation('/videoclips');
    }
  };

  const handleVideoClick = (videoId: string) => {
    const video = demoReelVideos.find(v => v.id === videoId);
    if (video && video.videoUrl) {
      setSelectedVideo(video);
    } else {
      console.log(`Playing video: ${videoId}`);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const mainVideo = demoReelVideos.find(v => v.id === 'video-1');
  const otherVideos = demoReelVideos.filter(v => v.id !== 'video-1');

  return (
    <section id="demo-reel" className="py-20 bg-dark-grey text-pure-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-vibrant-yellow">
            Demo Reel 2025
          </h2>
          <p className="font-montserrat text-xl text-light-grey max-w-3xl mx-auto">
            Narrativa cinematográfica a través de mis producciones más destacadas
          </p>
        </motion.div>

        {/* Featured Video */}
        {mainVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card
              className="group cursor-pointer overflow-hidden rounded-xl shadow-2xl border-4 border-vibrant-yellow/20 hover:border-vibrant-yellow transition-all duration-500 bg-black"
              onClick={() => handleVideoClick(mainVideo.id)}
            >
              <div className="relative aspect-video">
                <img
                  src={mainVideo.thumbnailSrc}
                  alt={mainVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-vibrant-yellow rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,194,15,0.4)] group-hover:shadow-[0_0_70px_rgba(255,194,15,0.6)] transition-all duration-300"
                  >
                    <Play size={36} fill="currentColor" className="text-dark-grey ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-8 left-8 text-pure-white max-w-2xl">
                  <h3 className="font-playfair font-bold text-3xl md:text-5xl mb-4 text-vibrant-yellow">{mainVideo.title}</h3>
                  <p className="font-montserrat text-lg md:text-xl opacity-90">{mainVideo.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-vibrant-yellow/30 bg-soft-grey/10"
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="relative aspect-video bg-dark-grey">
                  <img
                    src={video.thumbnailSrc}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-vibrant-yellow/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-vibrant-yellow transition-colors duration-300">
                      <Play size={20} fill="currentColor" className="text-dark-grey ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-pure-white">
                    <h3 className="font-montserrat font-semibold text-lg">{video.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg rounded-md cursor-not-allowed opacity-75"
            disabled
          >
            Ver Más Proyectos
          </Button>
          <p className="text-sm text-dark-grey/60 mt-2 font-montserrat">Próximamente</p>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-vibrant-yellow transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <video
                controls
                autoPlay
                controlsList="nodownload"
                disablePictureInPicture
                className="w-full h-auto"
                src={selectedVideo.videoUrl}
              >
                Tu navegador no soporta la reproducción de video.
              </video>
              <div className="p-6 text-white">
                <h3 className="font-playfair text-2xl font-semibold mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="font-montserrat text-lg opacity-90">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}