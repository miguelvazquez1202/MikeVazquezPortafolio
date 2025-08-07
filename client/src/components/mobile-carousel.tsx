import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

interface MobileCarouselProps {
  images: CarouselImage[];
  initialIndex: number;
  onClose: () => void;
  isOpen: boolean;
}

export default function MobileCarousel({ images, initialIndex, onClose, isOpen }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < images.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold && currentIndex < images.length - 1) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold && currentIndex > 0) {
      paginate(-1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.3,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0.3,
    }),
  };

  const currentImage = images[currentIndex];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <X size={24} />
          </Button>
          <span className="text-white font-montserrat">
            {currentIndex + 1} de {images.length}
          </span>
        </div>
      </div>

      {/* Main Carousel Area */}
      <div className="flex-1 relative overflow-hidden" ref={constraintsRef}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            {currentImage?.type === 'video' ? (
              <video
                className="max-w-full max-h-full object-contain"
                controls
                controlsList="nodownload"
                disablePictureInPicture
                poster={currentImage.src.replace('.mp4', '.jpg')}
              >
                <source src={currentImage.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={currentImage?.src}
                alt={currentImage?.alt}
                className="max-w-full max-h-full object-contain"
                draggable={false}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <Button
            onClick={() => paginate(-1)}
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
          >
            <ChevronLeft size={28} />
          </Button>
        )}

        {currentIndex < images.length - 1 && (
          <Button
            onClick={() => paginate(1)}
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
          >
            <ChevronRight size={28} />
          </Button>
        )}
      </div>

      {/* Bottom Info */}
      <div className="p-4 bg-black/80 backdrop-blur-sm">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-sm font-montserrat text-center"
        >
          {currentImage?.alt}
        </motion.p>
      </div>

      {/* Swipe Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-vibrant-yellow w-6'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}