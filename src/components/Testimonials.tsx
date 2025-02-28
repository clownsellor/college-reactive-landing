
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Computer Science '22",
    quote: "My experience at Athena University transformed my career trajectory. The professors were invested in my success and the hands-on learning prepared me for my role at a leading tech company.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Business Administration '23",
    quote: "The connections I made and the real-world experience I gained through Athena's business program gave me a competitive edge. I was able to secure my dream job before graduation.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: 3,
    name: "Jordan Taylor",
    role: "Global Studies '21",
    quote: "Studying at Athena opened doors to international opportunities I never thought possible. The diverse campus community and global perspective in every class prepared me for a career in diplomacy.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goToNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-24 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 -skew-x-12 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/5 skew-x-12 translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={ref}>
          <div className={`inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium mb-4 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Student Stories
          </div>
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Hear from Our Exceptional Alumni
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Our graduates go on to achieve remarkable success in their fields and make meaningful contributions to society.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial slider */}
          <div className="overflow-hidden relative rounded-2xl shadow-lg">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${
                isAnimating
                  ? direction === "next"
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : ""
              }`}
              style={{ transform: "translateX(0)" }}
            >
              <div className="w-full shrink-0 grid md:grid-cols-5 bg-background">
                <div className="md:col-span-2 h-full">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-primary/30 mb-6" />
                  <blockquote className="text-xl md:text-2xl font-serif mb-6 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-primary w-8"
                      : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
