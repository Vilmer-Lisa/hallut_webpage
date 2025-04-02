
import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Have questions about the book or interested in booking a speaking engagement? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-medium mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Book Inquiry">Book Inquiry</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Seminar Registration">Seminar Registration</option>
                    <option value="Media Request">Media Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-muted-foreground hover:text-primary animated-underline"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a 
                      href="tel:+467712345678" 
                      className="text-muted-foreground hover:text-primary animated-underline"
                    >
                      +46 771 234 5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/authorname" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary animated-underline"
                    >
                      linkedin.com/in/authorname
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-secondary">
        <div className="content-wrapper">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Common questions about the book and our services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg font-medium mb-3">Is the book available internationally?</h3>
              <p className="text-muted-foreground">Yes, the book is available for shipping worldwide through our publisher's website and major online book retailers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg font-medium mb-3">Do you offer bulk discounts for organizations?</h3>
              <p className="text-muted-foreground">Yes, we offer special pricing for bulk orders of 10 or more books. Please contact us directly for a quote.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg font-medium mb-3">How can I book the author for a speaking engagement?</h3>
              <p className="text-muted-foreground">You can submit a request through our contact form, specifying the event details, date, and topic you'd like the author to address.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg font-medium mb-3">Are seminars available as virtual events?</h3>
              <p className="text-muted-foreground">Yes, many of our seminars are offered in both in-person and virtual formats to accommodate different preferences and locations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
