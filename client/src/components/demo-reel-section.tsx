import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoReelVideos } from "@/lib/data";

export default function DemoReelSection() {
  const handleVideoClick = (videoId: string) => {
    // In a real implementation, this would open a video player modal
    console.log(`Playing video: ${videoId}`);
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
            Cinematic storytelling through motion pictures and video production
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
                  <div className="absolute top-4 right-4 w-3 h-3 bg-vibrant-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <Button className="bg-vibrant-yellow text-dark-grey px-8 py-4 font-montserrat font-semibold hover:bg-yellow-400 transition-all duration-300 text-lg h-auto">
            View All Videos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}