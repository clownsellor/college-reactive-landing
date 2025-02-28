
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Code, Database, Globe, Server, Cpu, VectorTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description: "Develop intelligent systems using machine learning, neural networks, and advanced algorithms.",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    featured: true,
  },
  {
    id: 2,
    title: "Software Engineering",
    description: "Master software development practices, architecture, and agile methodologies.",
    icon: <Code className="h-10 w-10 text-primary" />,
    featured: false,
  },
  {
    id: 3,
    title: "Data Science",
    description: "Extract insights from complex data using statistical analysis and visualization techniques.",
    icon: <Database className="h-10 w-10 text-primary" />,
    featured: false,
  },
  {
    id: 4,
    title: "Computer Graphics",
    description: "Create stunning visuals, 3D models, and interactive simulations using advanced rendering.",
    icon: <VectorTriangle className="h-10 w-10 text-primary" />,
    featured: false,
  },
];

const codeExamples = [
  {
    language: "Python",
    code: `def neural_network(inputs, weights):
    # Feedforward
    layer1 = sigmoid(np.dot(inputs, weights[0]))
    layer2 = sigmoid(np.dot(layer1, weights[1]))
    return layer2

def train_network(training_data):
    # Implementation details
    pass`,
  },
  {
    language: "JavaScript",
    code: `function createVirtualDOM(element) {
  if (typeof element === 'string') {
    return document.createTextNode(element);
  }
  
  const $el = document.createElement(element.type);
  
  for (const [key, value] of Object.entries(element.props || {})) {
    $el.setAttribute(key, value);
  }
  
  for (const child of element.children || []) {
    $el.appendChild(createVirtualDOM(child));
  }
  
  return $el;
}`,
  },
  {
    language: "Java",
    code: `public class BinarySearchTree<T extends Comparable<T>> {
    private Node<T> root;
    
    public void insert(T value) {
        root = insertRec(root, value);
    }
    
    private Node<T> insertRec(Node<T> root, T value) {
        if (root == null) {
            return new Node<>(value);
        }
        
        if (value.compareTo(root.value) < 0) {
            root.left = insertRec(root.left, value);
        } else if (value.compareTo(root.value) > 0) {
            root.right = insertRec(root.right, value);
        }
        
        return root;
    }
}`,
  },
];

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [codeIndex, setCodeIndex] = useState(0);
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

  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeExamples.length);
    }, 8000);

    return () => clearInterval(codeInterval);
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
            Academic Pathways
          </div>
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Specialized Computer Science Programs
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Our cutting-edge curriculum prepares you for the most in-demand tech careers with hands-on learning and industry partnerships.
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

          <div className="rounded-2xl overflow-hidden relative h-[500px] shadow-xl glass">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-destructive"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-medium opacity-60">
                  {codeExamples[codeIndex].language}
                </div>
              </div>
              
              <div className="code-block text-xs md:text-sm font-mono overflow-auto flex-1">
                <pre>{codeExamples[codeIndex].code}</pre>
              </div>
              
              <div className="glass rounded-xl p-6 mt-4">
                <h3 className="text-2xl font-serif font-semibold mb-3">
                  Program Highlights
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>Research opportunities with faculty</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>Internships at leading tech companies</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                    <span>State-of-the-art computing facilities</span>
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
