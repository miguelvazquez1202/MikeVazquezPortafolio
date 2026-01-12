import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import GallerySection from "@/components/gallery-section";
import PhotographyCategories from "@/components/photography-categories";
import VideoclipsSection from "@/components/videoclips-section";
import DemoReelSection from "@/components/demo-reel-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Lightbox from "@/components/lightbox";
import { concertImages, socialImages, portraitImages } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-pure-white">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      
      <GallerySection
        id="concerts"
        title="Conciertos"
        description="Capturando la energía, emoción y arte de las presentaciones musicales en vivo"
        images={concertImages}
        bgColor="bg-soft-grey"
      />
      
      <VideoclipsSection />
      
      <div id="corporate" className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
              Para Empresas
            </h2>
            <p className="font-montserrat text-xl text-charcoal max-w-4xl mx-auto">
              Contenido corporativo y campañas comerciales que elevan la presencia visual de tu marca con narrativa profesional y técnica cinematográfica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Video 1 - Medical Production */}
            <div className="bg-soft-grey rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div 
                className="aspect-video bg-dark-grey relative overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    if (video.paused) {
                      video.play();
                      e.currentTarget.querySelector('.play-button-overlay')?.classList.add('opacity-0');
                    } else {
                      video.pause();
                      e.currentTarget.querySelector('.play-button-overlay')?.classList.remove('opacity-0');
                    }
                  }
                }}
              >
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  preload="none"
                  poster="https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_400,h_225,q_auto,f_jpg/v1753772026/Prod_Medical_Lanzamientomano_Videomemoria_Primercorte_03_v5nno5.jpg"
                >
                  <source src="https://res.cloudinary.com/dq0ogehwz/video/upload/q_auto:low/v1753772026/Prod_Medical_Lanzamientomano_Videomemoria_Primercorte_03_v5nno5.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                
                {/* Play Button - Always Visible until play */}
                <div className="absolute inset-0 flex items-center justify-center play-button-overlay transition-opacity duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 bg-vibrant-yellow rounded-full flex items-center justify-center shadow-xl border-2 border-vibrant-yellow/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,194,15,0.4)] transition-all duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-dark-grey border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    
                    {/* Pulsing Ring Animation */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-vibrant-yellow animate-ping opacity-75"
                      style={{
                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-dark-grey text-lg mb-2">
                  Producción Médica
                </h3>
                <p className="font-source text-charcoal text-sm">
                  Video memoria corporativo con enfoque profesional para la industria de la salud
                </p>
              </div>
            </div>

            {/* Video 2 - Johnson & Johnson */}
            <div className="bg-soft-grey rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div 
                className="aspect-video bg-dark-grey relative overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    if (video.paused) {
                      video.play();
                      e.currentTarget.querySelector('.play-button-overlay')?.classList.add('opacity-0');
                    } else {
                      video.pause();
                      e.currentTarget.querySelector('.play-button-overlay')?.classList.remove('opacity-0');
                    }
                  }
                }}
              >
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  preload="none"
                  poster="https://res.cloudinary.com/dq0ogehwz/video/upload/so_178,w_400,h_225,q_auto,f_jpg/v1753772037/Prod_Jnj_Crosssector_Credoday2019_Primercorte04_svkyuv.jpg"
                >
                  <source src="https://res.cloudinary.com/dq0ogehwz/video/upload/q_auto:low/v1753772037/Prod_Jnj_Crosssector_Credoday2019_Primercorte04_svkyuv.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                
                {/* Play Button - Always Visible until play */}
                <div className="absolute inset-0 flex items-center justify-center play-button-overlay transition-opacity duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 bg-vibrant-yellow rounded-full flex items-center justify-center shadow-xl border-2 border-vibrant-yellow/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,194,15,0.4)] transition-all duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-dark-grey border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    
                    {/* Pulsing Ring Animation */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-vibrant-yellow animate-ping opacity-75"
                      style={{
                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-dark-grey text-lg mb-2">
                  Evento Corporativo J&J
                </h3>
                <p className="font-source text-charcoal text-sm">
                  Producción para evento empresarial Credo Day 2019 con cobertura integral
                </p>
              </div>
            </div>

            {/* Video 3 - Commercial Production */}
            <div className="bg-soft-grey rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div 
                className="aspect-video bg-dark-grey relative overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    if (video.paused) {
                      video.play();
                      e.currentTarget.querySelector('.play-button-overlay')?.classList.add('opacity-0');
                    } else {
                      video.pause();
                      e.currentTarget.querySelector('.play-button-overlay')?.classList.remove('opacity-0');
                    }
                  }
                }}
              >
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  preload="none"
                  poster="https://res.cloudinary.com/dq0ogehwz/video/upload/so_3,w_400,h_225,q_auto,f_jpg/v1753772564/MyUsage_1080p_s8hgom.jpg"
                >
                  <source src="https://res.cloudinary.com/dq0ogehwz/video/upload/q_auto:low/v1753772564/MyUsage_1080p_s8hgom.mov" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                
                {/* Play Button - Always Visible until play */}
                <div className="absolute inset-0 flex items-center justify-center play-button-overlay transition-opacity duration-300">
                  <div className="relative">
                    <div className="w-16 h-16 bg-vibrant-yellow rounded-full flex items-center justify-center shadow-xl border-2 border-vibrant-yellow/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,194,15,0.4)] transition-all duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-dark-grey border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    
                    {/* Pulsing Ring Animation */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-vibrant-yellow animate-ping opacity-75"
                      style={{
                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-dark-grey text-lg mb-2">
                  Campaña Comercial
                </h3>
                <p className="font-source text-charcoal text-sm">
                  Producción publicitaria con narrativa cinematográfica y técnica profesional
                </p>
              </div>
            </div>

            {/* Photo 4 - Ranch Corporate Photography */}
            <div className="bg-soft-grey rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-dark-grey relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dq0ogehwz/image/upload/w_800,q_auto,f_auto/v1754604583/FOTOS_RANCHOSANJUAN_DIA01_34_samnjq.jpg"
                  alt="Fotografía corporativa para empresas por Mike Vázquez"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-dark-grey text-lg mb-2">
                  Fotografía Corporativa
                </h3>
                <p className="font-source text-charcoal text-sm">
                  Sesión fotográfica corporativa con enfoque profesional y composición artística
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <GallerySection
        id="portraits"
        title="Fotografía"
        description="Retratos profesionales y hasta paisajes hermosos, capturando la esencia de cada momento"
        images={portraitImages}
        bgColor="bg-soft-grey"
      />
      
      <GallerySection
        id="socials"
        title="Eventos Sociales"
        description="Documentando las celebraciones más preciosas de la vida con elegancia y autenticidad"
        images={socialImages}
        bgColor="bg-pure-white"
      />
      
      <PhotographyCategories />
      <DemoReelSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="bg-dark-grey text-pure-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="font-playfair text-3xl font-semibold">
              Mike Vázquez
            </div>
            <p className="font-source text-light-grey max-w-2xl mx-auto">
              Fotógrafo y cineasta capturando los momentos únicos de la vida con visión artística y experiencia técnica.
            </p>
            <div className="border-t border-vibrant-yellow/30 pt-6 text-sm text-light-grey">
              <p>&copy; 2025 Hello Hi Producciones. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
      
      <Lightbox />
    </div>
  );
}
