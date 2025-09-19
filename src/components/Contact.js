import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, Globe, Users, MessageSquare } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    service: 'general'
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


      useEffect(() => {
      document.title = "Contact | IcICon Consulting";
    }, []);
  


  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      service: 'general'
    });
    
    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div 
        className="hidden md:block absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl transition-all duration-1000 ease-out"
         
         
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

 <Header />


     <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header Section */}
       <div className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-4 sm:mb-6 inline-flex items-center px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <MessageSquare className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-xs sm:text-sm">We'd love to hear from you</span>
          </div>
          
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Get in</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
           <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how our AI solutions can help you achieve your goals.
          </p>
        </div>

        {/* Main Contact Content */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
           <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
               <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Send us a message
              </h2>
              
             <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400
                       transition-colors duration-300 text-black placeholder-gray-400 text-sm sm:text-base"
                      placeholder="Your full name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 text-black placeholder-gray-400 text-sm sm:text-base"
                      placeholder="your@email.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 text-black placeholder-gray-400 text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 text-white text-sm sm:text-base"
                  >
                    <option value="general" className="bg-gray-800">General Inquiry</option>
                    <option value="ai-solutions" className="bg-gray-800">AI Solutions</option>
                    <option value="automation" className="bg-gray-800">Automation</option>
                    <option value="consulting" className="bg-gray-800">Consulting</option>
                    <option value="support" className="bg-gray-800">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 text-black placeholder-gray-400 text-sm sm:text-base"
                    placeholder="What's this about?"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2 text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4 sm:rows-5"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 text-black placeholder-gray-400 resize-none text-sm sm:text-base"
                    placeholder="Tell us more about your project or inquiry..."
                    required
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                  aria-label={isSubmitting ? 'Submitting form' : 'Send message'}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Cards */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 sm:p-3 rounded-lg">
                      <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Email Us</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">contact@icicon-consulting.com</p>
                      <p className="text-gray-400 text-xs sm:text-sm">johndoe77@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 rounded-lg">
                      <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Call Us</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">+1 (205) 470-1903</p>
                      <p className="text-gray-400 text-xs sm:text-sm">+91 99 98 69 30 36</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-2 sm:p-3 rounded-lg">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Visit Us</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">1450 Market Street, Suite 2300</p>
                      <p className="text-gray-400 text-xs sm:text-sm">San Francisco, CA 94103, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white flex items-center">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-cyan-400" />
                  Business Hours
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Why Choose Us?</h3>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">Support</p>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      2h
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">Response</p>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      99.9%
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">Uptime</p>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Contact;