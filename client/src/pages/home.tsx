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
        title="Fotografía de Conciertos"
        description="Capturando la energía, emoción y arte de las presentaciones musicales en vivo"
        images={concertImages}
        bgColor="bg-soft-grey"
      />
      
      <VideoclipsSection />
      
      <div id="corporate" className="py-20 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-grey mb-6">
            Para Empresas
          </h2>
          <p className="font-montserrat text-xl text-charcoal max-w-4xl mx-auto mb-12">
            Contenido corporativo y campañas comerciales que elevan la presencia visual de tu marca con narrativa profesional y técnica cinematográfica
          </p>
          <div className="bg-gradient-to-r from-vibrant-yellow/10 to-transparent p-8 rounded-lg">
            <p className="font-montserrat text-lg text-charcoal italic">
              "Próximamente - Galería corporativa en desarrollo"
            </p>
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
