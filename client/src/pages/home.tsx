import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import GallerySection from "@/components/gallery-section";
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
        title="Concert Photography"
        description="Capturing the energy, emotion, and artistry of live musical performances"
        images={concertImages}
        bgColor="bg-soft-grey"
      />
      
      <GallerySection
        id="socials"
        title="Social Events"
        description="Documenting life's most precious celebrations with elegance and authenticity"
        images={socialImages}
        bgColor="bg-pure-white"
      />
      
      <GallerySection
        id="portraits"
        title="Portrait Photography"
        description="Professional headshots and personal branding photography that tells your unique story"
        images={portraitImages}
        bgColor="bg-soft-grey"
      />
      
      <DemoReelSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="bg-deep-black text-pure-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="font-playfair text-3xl font-semibold">
              Alex Martinez
            </div>
            <p className="font-source text-light-grey max-w-2xl mx-auto">
              Professional photographer and filmmaker capturing life's most beautiful moments with artistic vision and technical expertise.
            </p>
            <div className="border-t border-charcoal pt-6 text-sm text-light-grey">
              <p>&copy; 2024 Alex Martinez Photography. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
      <Lightbox />
    </div>
  );
}
