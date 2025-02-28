
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const campusImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Modern campus library",
    label: "Library",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Technology lab",
    label: "Tech Lab",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Student collaboration space",
    label: "Collaboration Hub",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Research center",
    label: "Research Center",
  },
];

const campusFeatures = [
  "State-of-the-art classrooms and labs",
  "Modern student housing options",
  "Olympic-sized swimming pool",
  "24/7 library and study spaces",
  "Innovation center for startups",
  "Art and performance venues",
];

const Campus = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="campus" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={titleRef}>
          <div className={`inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium mb-4 transition-all duration-700 ${
            titleInView ? "opacity-100" : "opacity-0"
          }`}>
            Our Environment
          </div>
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 transition-all duration-700 ${
            titleInView ? "opacity-100" : "opacity-0"
          }`}>
            Experience Our Inspiring Campus
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            titleInView ? "opacity-100" : "opacity-0"
          }`}>
            Our beautiful campus combines historic architecture with modern facilities to create the perfect environment for learning and growth.
          </p>
        </div>

        <div ref={gridRef}>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent z-10"></div>
              <img
                src={campusImages[activeImage].src}
                alt={campusImages[activeImage].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/70 backdrop-blur-sm text-white text-sm font-medium mb-2">
                  {campusImages[activeImage].label}
                </span>
                <h3 className="text-2xl font-serif font-semibold text-white">
                  {campusImages[activeImage].alt}
                </h3>
              </div>
            </div>

            <div className="flex flex-col space-y-8">
              {campusImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`rounded-2xl overflow-hidden h-36 relative cursor-pointer hover-lift ${
                    index === activeImage
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent z-10"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <h3 className="text-lg font-medium text-white">
                      {image.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Campus Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {campusFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 w-full group">
                <span>Schedule a Campus Tour</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="bg-accent rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Virtual Experience
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't visit in person? Take our immersive virtual tour to explore our campus from anywhere in the world.
              </p>
              <div className="rounded-xl overflow-hidden relative h-48">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                  <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-white transition-colors duration-300">
                    <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-primary ml-1"></div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Campus virtual tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <Button variant="outline" className="mt-6 w-full">
                Start Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
