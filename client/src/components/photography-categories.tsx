import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mountain, Heart, Plus } from "lucide-react";

interface PhotoCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  images: string[];
  color: string;
}

export default function PhotographyCategories() {
  const categories: PhotoCategory[] = [
    {
      id: 'retratos',
      title: 'Retratos',
      description: 'Fotografía profesional que captura la personalidad y esencia única de cada persona',
      icon: User,
      color: 'bg-vibrant-yellow',
      images: [
        'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_400,g_face,q_auto,f_auto/v1753771091/WEB-22_ln3kgw.jpg'
      ]
    },
    {
      id: 'paisajes',
      title: 'Paisajes',
      description: 'Capturando la majestuosidad de la naturaleza y la belleza de los espacios naturales',
      icon: Mountain,
      color: 'bg-dark-grey',
      images: [
        'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_north,q_auto,f_auto/v1753766608/WEB-13_c86og5.jpg'
      ]
    },
    {
      id: 'animales',
      title: 'Animales',
      description: 'Fotografía que celebra la vida salvaje y la conexión especial entre humanos y animales',
      icon: Heart,
      color: 'bg-vibrant-yellow',
      images: [
        'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753764518/Imagen_de_WhatsApp_2025-02-08_a_las_16.48.20_a6a9ab5e_irfwl5.jpg'
      ]
    },
    {
      id: 'mas',
      title: 'Y Más',
      description: 'Arquitectura, street photography, macro y muchos otros estilos fotográficos',
      icon: Plus,
      color: 'bg-dark-grey',
      images: [
        'https://res.cloudinary.com/dq0ogehwz/image/upload/c_fill,w_400,h_300,g_center,q_auto,f_auto/v1753766549/WEB-11_im0av4.jpg'
      ]
    }
  ];

  const handleViewCategory = (categoryId: string) => {
    if (categoryId === 'retratos') {
      window.location.href = '/retratos';
    } else if (categoryId === 'paisajes') {
      window.location.href = '/paisajes';
    } else {
      console.log(`Viewing category: ${categoryId}`);
    }
  };

  return (
    <section className="py-12 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-dark-grey mb-4">
            Categorías de Fotografía
          </h3>
          <p className="font-montserrat text-lg text-charcoal max-w-2xl mx-auto">
            Explora los diferentes estilos y enfoques fotográficos que ofrezco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-light-grey hover:border-vibrant-yellow/30">
                <div className="relative">
                  {/* Main image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.images[0]}
                      alt={`Fotografía de ${category.title.toLowerCase()}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Icon overlay */}
                  <div className={`absolute top-4 left-4 ${category.color} p-3 rounded-full`}>
                    <category.icon 
                      size={20} 
                      className={category.color === 'bg-vibrant-yellow' ? 'text-dark-grey' : 'text-vibrant-yellow'} 
                    />
                  </div>

                  {/* Small preview images */}
                  <div className="absolute bottom-4 right-4 flex space-x-1">
                    {category.images.slice(1, 3).map((img, imgIndex) => (
                      <div key={imgIndex} className="w-8 h-8 rounded border-2 border-white overflow-hidden">
                        <img
                          src={img}
                          alt={`Preview ${imgIndex + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-playfair text-xl font-semibold text-dark-grey mb-3">
                    {category.title}
                  </h4>
                  <p className="font-montserrat text-charcoal text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Button
                    onClick={() => handleViewCategory(category.id)}
                    variant="outline"
                    className="w-full border-vibrant-yellow text-vibrant-yellow hover:bg-vibrant-yellow hover:text-dark-grey transition-all duration-300"
                  >
                    Ver {category.title}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}