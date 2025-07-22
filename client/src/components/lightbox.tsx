import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "@/lib/data";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const handleOpenLightbox = (event: CustomEvent) => {
      const { images: newImages, currentIndex: index } = event.detail;
      setImages(newImages);
      setCurrentIndex(index);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openLightbox', handleOpenLightbox as EventListener);

    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage(-1);
          break;
        case 'ArrowRight':
          navigateImage(1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length]);

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const navigateImage = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] bg-deep-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-pure-white hover:text-light-grey transition-colors duration-200 z-10 h-12 w-12"
          >
            <X size={24} />
          </Button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage(-1)}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-pure-white hover:text-light-grey transition-colors duration-200 h-12 w-12"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateImage(1)}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-pure-white hover:text-light-grey transition-colors duration-200 h-12 w-12"
              >
                <ChevronRight size={24} />
              </Button>
            </>
          )}

          {/* Image */}
          {currentImage && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          )}

          {/* Caption */}
          {currentImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-6 left-6 text-pure-white"
            >
              <p className="font-montserrat text-lg">{currentImage.alt}</p>
              {images.length > 1 && (
                <p className="font-source text-sm opacity-70 mt-1">
                  {currentIndex + 1} of {images.length}
                </p>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
