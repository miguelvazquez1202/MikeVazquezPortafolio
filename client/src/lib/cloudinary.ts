export function getCloudinaryUrl(originalUrl: string, transformation: string): string {
  if (!originalUrl.includes('cloudinary.com')) {
    return originalUrl;
  }

  const urlParts = originalUrl.split('/upload/');
  if (urlParts.length !== 2) {
    return originalUrl;
  }

  const [baseUrl, afterUpload] = urlParts;
  const publicIdParts = afterUpload.split('/');
  const publicIdWithParams = publicIdParts[publicIdParts.length - 1];
  const publicId = publicIdWithParams.split('.')[0];
  const extension = publicIdWithParams.split('.')[1] || 'jpg';
  
  const versionMatch = afterUpload.match(/v\d+/);
  const version = versionMatch ? `${versionMatch[0]}/` : '';
  
  return `${baseUrl}/upload/${transformation}/${version}${publicId}.${extension}`;
}

export const cloudinaryTransformations = {
  thumbnail: 'w_400,h_300,c_fill,g_center,q_auto:low,f_auto,fl_progressive',
  
  grid: 'w_800,h_600,c_fill,g_center,q_auto,f_auto,fl_progressive',
  
  lightboxFull: 'w_1920,q_auto:good,f_auto,c_limit,fl_progressive',
  
  portraitGrid: 'w_800,h_600,c_fill,g_face,q_auto,f_auto,fl_progressive',
  
  portraitLightbox: 'w_1920,q_auto:good,f_auto,c_limit,fl_progressive'
};
