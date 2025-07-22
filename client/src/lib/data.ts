export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'concert' | 'social' | 'portrait' | 'demo-reel';
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
  videoUrl?: string;
}

// Concert Photography Images
export const concertImages: GalleryImage[] = [
  {
    id: 'concert-1',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Rock concert with guitarist silhouetted against stage lights',
    category: 'concert'
  },
  {
    id: 'concert-2',
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Solo performer on stage with spotlight',
    category: 'concert'
  },
  {
    id: 'concert-3',
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Concert crowd with raised hands',
    category: 'concert'
  },
  {
    id: 'concert-4',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'DJ performance with colorful stage lighting',
    category: 'concert'
  }
];

// Social Events Images
export const socialImages: GalleryImage[] = [
  {
    id: 'social-1',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Elegant wedding ceremony',
    category: 'social'
  },
  {
    id: 'social-2',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Professional networking event',
    category: 'social'
  },
  {
    id: 'social-3',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Birthday celebration with cake',
    category: 'social'
  },
  {
    id: 'social-4',
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Graduation ceremony celebration',
    category: 'social'
  }
];

// Portrait Images
export const portraitImages: GalleryImage[] = [
  {
    id: 'portrait-1',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Professional business headshot',
    category: 'portrait'
  },
  {
    id: 'portrait-2',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Creative portrait with artistic lighting',
    category: 'portrait'
  },
  {
    id: 'portrait-3',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Natural lifestyle portrait',
    category: 'portrait'
  },
  {
    id: 'portrait-4',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Professional corporate portrait',
    category: 'portrait'
  }
];

// Demo Reel Videos
export const demoReelVideos: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Featured Demo Reel',
    description: 'Cinematic showcase of my filmmaking work',
    thumbnailSrc: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  },
  {
    id: 'video-2',
    title: 'Wedding Highlight Reel',
    description: 'Romantic storytelling showcase',
    thumbnailSrc: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  },
  {
    id: 'video-3',
    title: 'Corporate Video',
    description: 'Professional brand storytelling',
    thumbnailSrc: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  },
  {
    id: 'video-4',
    title: 'Music Video',
    description: 'Artistic visual collaboration',
    thumbnailSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  }
];
