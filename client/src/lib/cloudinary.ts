export function getCloudinaryUrl(originalUrl: string, transformation: string): string {
  if (!originalUrl.includes('cloudinary.com')) {
    return originalUrl;
  }

  const urlParts = originalUrl.split('/upload/');
  if (urlParts.length !== 2) {
    return originalUrl;
  }

  const [baseUrl, afterUpload] = urlParts;
  const segments = afterUpload.split('/');
  
  if (segments[0]?.match(/^s--[A-Za-z0-9_-]+--$/)) {
    return originalUrl;
  }
  
  let i = 0;
  while (i < segments.length && segments[i].includes(',')) {
    i++;
  }
  
  let version = '';
  if (i < segments.length && segments[i].match(/^v\d+$/)) {
    version = segments[i] + '/';
    i++;
  }
  
  const remainingSegments = segments.slice(i);
  const publicPathWithExt = remainingSegments.join('/');
  
  return `${baseUrl}/upload/${transformation}/${version}${publicPathWithExt}`;
}

export const cloudinaryTransformations = {
  thumbnail: 'w_400,h_300,c_fill,g_center,q_auto:low,f_auto,fl_progressive',
  
  grid: 'w_800,h_600,c_fill,g_center,q_auto,f_auto,fl_progressive',
  
  lightboxFull: 'w_1920,q_auto:good,f_auto,c_limit,fl_progressive',
  
  portraitGrid: 'w_800,h_600,c_fill,g_face,q_auto,f_auto,fl_progressive',
  
  portraitLightbox: 'w_1920,q_auto:good,f_auto,c_limit,fl_progressive'
};
