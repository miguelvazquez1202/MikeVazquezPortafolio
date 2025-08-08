import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export default function LazyImage({ src, alt, className, placeholder }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <>
          {/* Placeholder while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-soft-grey animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-vibrant-yellow border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          
          {/* Actual image */}
          <motion.img
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
      
      {/* Default placeholder when not in view */}
      {!isInView && (
        <div className="absolute inset-0 bg-soft-grey flex items-center justify-center">
          <div className="w-6 h-6 bg-vibrant-yellow/20 rounded-full" />
        </div>
      )}
    </div>
  );
}