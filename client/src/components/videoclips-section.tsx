import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Videoclip {
  id: string;
  title: string;
  artist: string;
  category: string;
  thumbnailSrc: string;
  videoUrl?: string;
}

export default function VideoclipsSection() {
  const videoclips: Videoclip[] = [
    {
      id: 'clip-1',
      title: 'Midnight Dreams',
      artist: 'Luna Vega',
      category: 'Artista Independiente',
      thumbnailSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
    },
    {
      id: 'clip-2',
      title: 'Electric Nights',
      artist: 'The Neon Collective',
      category: 'Banda Emergente',
      thumbnailSrc: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
    },
    {
      id: 'clip-3',
      title: 'Rise Up',
      artist: 'Global Star',
      category: 'Artista Internacional',
      thumbnailSrc: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
    },
    {
      id: 'clip-4',
      title: 'Summer Vibes',
      artist: 'Tropical Beats',
      category: 'Producción Regional',
      thumbnailSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
    },
    {
      id: 'clip-5',
      title: 'Urban Symphony',
      artist: 'City Lights Orchestra',
      category: 'Artista Establecido',
      thumbnailSrc: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
    },
    {
      id: 'clip-6',
      title: 'Acoustic Soul',
      artist: 'Maria Rodriguez',
      category: 'Artista Independiente',
      thumbnailSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
    }
  ];

  const handlePlayVideo = (videoId: string) => {
    console.log(`Playing videoclip: ${videoId}`);
    // In a real implementation, this would open a video player modal
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
                  <p className="font-montserrat text-charcoal">
                    {clip.artist}
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
          <Button className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto">
            Ver Más Videoclips
          </Button>
        </motion.div>
      </div>
    </section>
  );
}