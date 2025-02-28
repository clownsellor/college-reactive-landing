
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.interest) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, you would submit the form to your backend here
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Information received!",
      description: "We'll be in touch with you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" ref={ref}>
          <div className={`inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium mb-4 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Get Started
          </div>
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Begin Your Journey at Athena University
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}>
            Have questions or ready to apply? We're here to help you take the next step toward your future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`glass rounded-2xl p-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Campus Address</h4>
                  <p className="text-muted-foreground">
                    123 University Avenue, Athena City, AC 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-muted-foreground">
                    admissions@athena.edu
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-muted-foreground">
                    (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-64">
              {/* In a real application, you would include a map here */}
              <div className="w-full h-full bg-accent flex items-center justify-center text-muted-foreground">
                Interactive Campus Map
              </div>
            </div>
          </div>

          <div className={`glass rounded-2xl p-8 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Request Information
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-1">
                    Area of Interest <span className="text-primary">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="undergraduate">Undergraduate Programs</option>
                    <option value="graduate">Graduate Programs</option>
                    <option value="online">Online Learning</option>
                    <option value="research">Research Opportunities</option>
                    <option value="campus">Campus Visit</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full group">
                  <span>Submit Request</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
