
import { useState, useEffect } from "react";
import { ArrowRight, Code, Terminal, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const StarField = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    const animationDuration = Math.random() * 5 + 2;
    const delay = Math.random() * 5;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return <div className="star-field">{stars}</div>;
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <StarField />
      </div>
      <div className="absolute top-0 right-0 w-3/4 h-full bg-accent opacity-10 -skew-x-12 translate-x-1/4 z-0 pegasus-wing" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className={`opacity-0 ${
              isVisible ? "animate-fade-in animate-delay-1" : ""
            }`}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium mb-6">
              Innovate • Create • Elevate
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Soar with 
              <span className="text-shine"> Pegasus</span> Computer Science
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
              Where innovation takes flight. Join our department of visionaries, builders, and problem-solvers shaping the digital frontier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                <span>Explore Programs</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Meet Our Faculty
              </Button>
            </div>
            <div className="flex items-center mt-12 space-x-8">
              <div className="text-center opacity-0 animate-fade-in animate-delay-2">
                <div className="text-3xl font-bold">98%</div>
                <p className="text-sm text-muted-foreground">Graduate Employment</p>
              </div>
              <div className="w-px h-12 bg-border opacity-0 animate-fade-in animate-delay-3"></div>
              <div className="text-center opacity-0 animate-fade-in animate-delay-3">
                <div className="text-3xl font-bold">12:1</div>
                <p className="text-sm text-muted-foreground">Student-Faculty Ratio</p>
              </div>
              <div className="w-px h-12 bg-border opacity-0 animate-fade-in animate-delay-4"></div>
              <div className="text-center opacity-0 animate-fade-in animate-delay-4">
                <div className="text-3xl font-bold">$105K</div>
                <p className="text-sm text-muted-foreground">Median Starting Salary</p>
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
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              alt="Computer Science student coding" 
              className="w-full h-[500px] object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 glass rounded-t-xl">
              <div className="code-block text-xs sm:text-sm font-mono">
                <div>
                  <span className="keyword">class</span> <span className="function">Pegasus</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="keyword">constructor</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="keyword">this</span>.wings = <span className="string">"innovation"</span>;
                </div>
                <div className="pl-8">
                  <span className="keyword">this</span>.flight = <span className="string">"excellence"</span>;
                </div>
                <div className="pl-4">{"}"}</div>
                <div className="pl-4">
                  <span className="function">soar</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="keyword">return</span> <span className="string">"Limitless possibilities"</span>;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute left-[5%] top-[20%] animate-float opacity-20">
        <Code className="h-12 w-12 text-primary" />
      </div>
      <div className="absolute right-[10%] top-[30%] animate-float animation-delay-2 opacity-20">
        <Terminal className="h-10 w-10 text-primary" />
      </div>
      <div className="absolute left-[15%] bottom-[20%] animate-float animation-delay-3 opacity-20">
        <Database className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute right-[5%] bottom-[35%] animate-float animation-delay-4 opacity-20">
        <Server className="h-14 w-14 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
