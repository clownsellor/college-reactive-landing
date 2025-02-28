
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-accent opacity-70 -skew-x-12 translate-x-1/4 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`opacity-0 ${
              isVisible ? "animate-fade-in animate-delay-1" : ""
            }`}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium mb-6">
              Fall 2024 Applications Open
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Shape Your Future with 
              <span className="text-shine"> Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
              Experience a transformative education that prepares you for success in a rapidly changing world. Join our community of innovators and leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <span>Explore Programs</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Visit
              </Button>
            </div>
            <div className="flex items-center mt-12 space-x-8">
              <div className="text-center opacity-0 animate-fade-in animate-delay-2">
                <div className="text-3xl font-bold">94%</div>
                <p className="text-sm text-muted-foreground">Graduate Employment</p>
              </div>
              <div className="w-px h-12 bg-border opacity-0 animate-fade-in animate-delay-3"></div>
              <div className="text-center opacity-0 animate-fade-in animate-delay-3">
                <div className="text-3xl font-bold">15:1</div>
                <p className="text-sm text-muted-foreground">Student-Faculty Ratio</p>
              </div>
              <div className="w-px h-12 bg-border opacity-0 animate-fade-in animate-delay-4"></div>
              <div className="text-center opacity-0 animate-fade-in animate-delay-4">
                <div className="text-3xl font-bold">120+</div>
                <p className="text-sm text-muted-foreground">Academic Programs</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative rounded-2xl overflow-hidden shadow-2xl opacity-0 ${
              isVisible ? "animate-fade-in animate-delay-2" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Students on campus" 
              className="w-full h-[500px] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 glass rounded-t-xl">
              <div className="flex items-start space-x-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-medium">Live Virtual Tour</h3>
                  <p className="text-sm text-muted-foreground">Join our next campus tour on June 15th.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
