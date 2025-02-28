
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, BookOpen, Globe, Building, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

// We'll simulate the framer-motion library for animation
const motionDiv = ({ children, ...props }: any) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={inViewRef}
      className={`transition-all duration-700 ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

const programs = [
  {
    id: 1,
    title: "Computer Science",
    description: "Develop cutting-edge skills in programming, AI, and software engineering.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    featured: true,
  },
  {
    id: 2,
    title: "Business Administration",
    description: "Build a foundation in management, finance, marketing, and entrepreneurship.",
    icon: <Building className="h-10 w-10 text-primary" />,
    featured: false,
  },
  {
    id: 3,
    title: "Global Studies",
    description: "Explore international relations, cultures, and global challenges.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    featured: false,
  },
  {
    id: 4,
    title: "Liberal Arts",
    description: "Gain a well-rounded education across humanities, sciences, and arts.",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    featured: false,
  },
];

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % programs.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium mb-4"
            ref={ref}
          >
            Academic Excellence
          </div>
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Discover Your Path with Our Premier Programs
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Our academically rigorous programs are designed to challenge, inspire, and prepare you for a successful future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {programs.map((program, i) => (
              <div
                key={program.id}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-accent shadow-lg scale-105"
                    : "hover:bg-accent/50 hover-lift"
                }`}
                onMouseEnter={() => {
                  setActiveIndex(i);
                  stopAutoPlay();
                }}
                onMouseLeave={() => startAutoPlay()}
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">{program.icon}</div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden relative h-[500px] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Technology classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <div className="glass rounded-xl p-6">
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  Program Highlights
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>Cutting-edge research opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>Industry-experienced faculty</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>State-of-the-art facilities</span>
                  </li>
                </ul>
                <Button className="w-full group">
                  <span>Browse All Programs</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
