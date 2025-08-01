import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoReelVideos, VideoItem } from "@/lib/data";
import { useState } from "react";
import { useLocation } from "wouter";

export default function DemoReelSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [, setLocation] = useLocation();

  const handleNavigateToVideoclips = () => {
    console.log('Navigating to videoclips...');
    setLocation('/videoclips');
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

  return (
    <section id="demo-reel" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Demo Reel
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-3xl mx-auto">
            Narrativa cinematográfica a través de producciones audiovisuales y videos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demoReelVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-vibrant-yellow/30"
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="relative aspect-video bg-gradient-to-br from-soft-grey to-light-grey">
                  <img
                    src={video.thumbnailSrc}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-grey/20 group-hover:bg-dark-grey/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-vibrant-yellow/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-vibrant-yellow transition-colors duration-300"
                    >
                      <Play size={24} className="text-dark-grey ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-pure-white">
                    <h3 className="font-montserrat font-semibold text-lg">{video.title}</h3>
                    <p className="font-source text-sm opacity-90">{video.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={handleNavigateToVideoclips}
            className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto"
          >
            Ver Más Videoclips
          </Button>
        </motion.div>
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