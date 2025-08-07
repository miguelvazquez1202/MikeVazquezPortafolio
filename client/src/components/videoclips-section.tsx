import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface Videoclip {
  id: string;
  title: string;
  artist: string;
  description: string;
  category: string;
  thumbnailSrc: string;
  videoUrl: string;
}

export default function VideoclipsSection() {
  const [selectedVideo, setSelectedVideo] = useState<Videoclip | null>(null);

  const videoclips: Videoclip[] = [
    {
      id: 'clip-2',
      title: 'Contigo Quiero',
      artist: 'Videoclip',
      description: 'Dirección, fotografía, edición y post producción',
      category: 'Reyli Barba',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_41,w_800,h_450,c_fill,q_auto,f_jpg/v1753768228/01._Contigo_Quiero_ovikin.jpg',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753768228/01._Contigo_Quiero_ovikin.mp4'
    },
    {
      id: 'clip-3',
      title: 'Me Salió Cara La Peda',
      artist: 'Videoclip',
      description: 'Dirección, fotografía, edición y post producción',
      category: 'SanJuan',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_800,h_450,c_fill,q_auto,f_jpg/v1753770682/Me_Salio_Cara_La_Peda_Sanjuan_Finalcut_1080P_rcgp8c.jpg',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770682/Me_Salio_Cara_La_Peda_Sanjuan_Finalcut_1080P_rcgp8c.mp4'
    },
    {
      id: 'clip-4',
      title: 'Volvería A Nacer En Pueblo',
      artist: 'Disco en vivo',
      description: 'Dirección, fotografía, edición y post producción',
      category: 'Alexis Cristóbal',
      thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_800,h_450,c_fill,q_auto,f_jpg/v1753770679/01._Volveria_A_Nacer_En_Pueblo_Finalcut_xuvrsb.jpg',
      videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770679/01._Volveria_A_Nacer_En_Pueblo_Finalcut_xuvrsb.mp4'
    }
  ];

  const handlePlayVideo = (videoId: string) => {
    const video = videoclips.find(v => v.id === videoId);
    if (video) {
      setSelectedVideo(video);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videoclips" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Videoclips
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-4xl mx-auto">
            Producciones musicales que abarcan desde artistas independientes emergentes hasta reconocidas figuras del panorama musical global, creando contenido visual que potencia la narrativa artística de cada proyecto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoclips.map((clip, index) => (
            <motion.div
              key={clip.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-light-grey hover:border-vibrant-yellow/30">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={clip.thumbnailSrc}
                    alt={`Videoclip ${clip.title} de ${clip.artist}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark-grey/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => handlePlayVideo(clip.id)}
                      className="bg-vibrant-yellow text-dark-grey p-4 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play size={24} fill="currentColor" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-vibrant-yellow text-dark-grey px-3 py-1 rounded-full text-sm font-montserrat font-semibold">
                      {clip.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-dark-grey mb-2">
                    {clip.title}
                  </h3>
                  <p className="font-montserrat text-charcoal mb-1">
                    {clip.artist}
                  </p>
                  <p className="font-montserrat text-charcoal italic text-sm">
                    {clip.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/videoclips">
            <Button className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto">
              Ver Más Videoclips
            </Button>
          </Link>
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
                  {selectedVideo.artist}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}