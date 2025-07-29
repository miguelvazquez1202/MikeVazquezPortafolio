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
    src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_800,h_600,g_center,q_auto,f_auto/WEB-04_ehov0y.jpg',
    alt: 'Fotografía profesional de concierto capturando la energía del escenario',
    category: 'concert'
  },
  {
    id: 'concert-2',
    src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_800,h_600,g_center,q_auto,f_auto/DSC00165_varofk.jpg',
    alt: 'Artista en presentación en vivo con iluminación dramática',
    category: 'concert'
  },
  {
    id: 'concert-3',
    src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_800,h_600,g_center,q_auto,f_auto/v1753762141/DSC00944-Enhanced-NR_jscfcx.jpg',
    alt: 'Momento único de presentación musical con efectos de iluminación',
    category: 'concert'
  }
];

// Social Events Images
export const socialImages: GalleryImage[] = [
  {
    id: 'social-1',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Ceremonia de boda elegante',
    category: 'social'
  },
  {
    id: 'social-2',
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Evento profesional de networking',
    category: 'social'
  },
  {
    id: 'social-3',
    src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_800,h_600,g_center,q_auto,f_auto/v1753769823/WEB-14_fia6sz.jpg',
    alt: 'Evento social profesional capturado por Mike Vázquez',
    category: 'social'
  }
];

// Portrait Images
export const portraitImages: GalleryImage[] = [
  {
    id: 'portrait-1',
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    alt: 'Retrato profesional de negocios',
    category: 'portrait'
  },
  {
    id: 'portrait-2',
    src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_800,h_600,g_center,q_auto,f_auto/v1753765429/WEB-10_x9tqjp.jpg',
    alt: 'Fotografía profesional capturada por Mike Vázquez',
    category: 'portrait'
  },
  {
    id: 'portrait-3',
    src: 'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_800,h_600,g_center,q_auto,f_auto/v1753764610/WEB-09_si3utl.jpg',
    alt: 'Fotografía profesional capturada por Mike Vázquez',
    category: 'portrait'
  }
];

// Demo Reel Videos
export const demoReelVideos: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Demo Reel Destacado',
    description: 'Muestra cinematográfica de mi trabajo de filmación',
    thumbnailSrc: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  },
  {
    id: 'video-2',
    title: 'Demo Reel de Bodas',
    description: 'Muestra de narrativa romántica',
    thumbnailSrc: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  },
  {
    id: 'video-3',
    title: 'Video Corporativo',
    description: 'Narrativa profesional de marca',
    thumbnailSrc: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450'
  },
  {
    id: 'video-4',
    title: 'Aftermovie - Salvatierra',
    description: 'Resumen de un concierto de Reyli Barba',
    thumbnailSrc: 'https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_800,h_450,c_fill,q_auto,f_jpg/v1753770686/Salvatierra_V1_mncehb.jpg',
    videoUrl: 'https://res.cloudinary.com/dq0ogehwz/video/upload/v1753770686/Salvatierra_V1_mncehb.mp4'
  }
];
