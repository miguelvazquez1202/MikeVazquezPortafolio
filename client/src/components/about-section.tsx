import { motion } from "framer-motion";
import { Music, Heart, User, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const specializations = [
    { icon: Music, label: "Concert Photography" },
    { icon: Heart, label: "Wedding & Events" },
    { icon: User, label: "Portrait Sessions" },
    { icon: Video, label: "Cinematic Videos" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadPortfolio = () => {
    // In a real implementation, this would trigger a portfolio PDF download
    console.log("Downloading portfolio...");
  };

  return (
    <section id="about" className="py-20 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Alex Martinez professional photographer headshot"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-black mb-6">
                About Alex Martinez
              </h2>
              <div className="space-y-6 font-source text-lg text-charcoal leading-relaxed">
                <p>
                  With over 8 years of experience in photography and filmmaking, I specialize in capturing the authentic emotions and memorable moments that define life's most important events.
                </p>
                <p>
                  My work spans from intimate portrait sessions to large-scale concert productions, always with a focus on storytelling through visual artistry. I believe every photograph should tell a story and every video should evoke emotion.
                </p>
                <p>
                  Based in Los Angeles, I've had the privilege of working with diverse clients, from emerging musicians to Fortune 500 companies, always delivering creative excellence and professional service.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-playfair text-2xl font-semibold text-deep-black">
                Specializations
              </h3>
              <div className="grid grid-cols-2 gap-4 font-montserrat text-charcoal">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <spec.icon size={20} className="text-deep-black" />
                    <span>{spec.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToContact}
                className="bg-deep-black text-pure-white px-8 py-4 font-montserrat font-semibold hover:bg-charcoal transition-all duration-300 text-lg h-auto"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                onClick={handleDownloadPortfolio}
                className="border-2 border-deep-black text-deep-black px-8 py-4 font-montserrat font-semibold hover:bg-deep-black hover:text-pure-white transition-all duration-300 text-lg h-auto"
              >
                <Download size={20} className="mr-2" />
                Download Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
