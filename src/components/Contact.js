import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Users, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import emailjs from "emailjs-com";

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
  const [showContent, setShowContent] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.title = "Contact | IcICon Consulting";
  }, []);

  useEffect(() => {
    // Opening animation sequence
    const timer1 = setTimeout(() => setIsVisible(true), 300);
    const timer2 = setTimeout(() => setShowContent(true), 800);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
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

  try {
    // ✅ Send email using EmailJS
    await emailjs.send(
      "service_svgnv9n",   // replace with your real EmailJS Service ID
      "template_996l8uh",  // replace with your real Template ID
      formData,            // includes name, email, subject, etc.
      "fUY_T9qFonkYqai84"    // replace with your Public Key
    );

    alert("✅ Message sent successfully! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      service: 'general'
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("❌ Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  const contactSlides = [
    {
      title: "Project Inquiries",
      description: "Tell us about your engineering project requirements and goals",
      color: "from-cyan-600 to-blue-800"
    },
    {
      title: "Technical Support",
      description: "Need assistance with ongoing projects or technical questions",
      color: "from-blue-600 to-purple-800"
    },
    {
      title: "Consultation",
      description: "Book a consultation with our expert engineers and consultants",
      color: "from-purple-600 to-cyan-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-slate-900 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-cyan-100/50 to-teal-100/50"></div>
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Opening animation overlay */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-all duration-1000 ${
          isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-pulse">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600 mt-4">Let's Connect</p>
            </div>
          </div>
        </div>
      </div>

      <Header />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header Section */}
        <div className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-4 sm:mb-6 inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full">
            <MessageSquare className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-xs sm:text-sm text-slate-700">We'd love to hear from you</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block text-slate-900">Get in</span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how our engineering solutions can help you achieve your goals.
          </p>
        </div>

        {/* Contact Type Slider */}
        <div className={`relative mb-8 sm:mb-16 transform transition-all duration-1000 delay-200 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[300px]">
              {contactSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeSlide ? 'opacity-100 translate-x-0' : index < activeSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-10`}></div>
                  <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{slide.title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setActiveSlide((prev) => (prev - 1 + contactSlides.length) % contactSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <button 
              onClick={() => setActiveSlide((prev) => (prev + 1) % contactSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {contactSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`transition-all duration-300 rounded-full ${index === activeSlide ? 'w-12 h-3 bg-gradient-to-r from-cyan-600 to-blue-600' : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${showContent ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Send us a message
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-blue-200 rounded-lg focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 transition-colors duration-300 text-slate-900 placeholder-slate-400 text-sm sm:text-base"
                      placeholder="Your full name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-blue-200 rounded-lg focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 transition-colors duration-300 text-slate-900 placeholder-slate-400 text-sm sm:text-base"
                      placeholder="your@email.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-2 text-slate-700">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-blue-200 rounded-lg focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 transition-colors duration-300 text-slate-900 placeholder-slate-400 text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium mb-2 text-slate-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-blue-200 rounded-lg focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 transition-colors duration-300 text-slate-900 text-sm sm:text-base"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="project-management">Project Management</option>
                    <option value="process-improvement">Process Improvement</option>
                    <option value="cad-modeling">CAD Modeling</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-2 text-slate-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-blue-200 rounded-lg focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 transition-colors duration-300 text-slate-900 placeholder-slate-400 text-sm sm:text-base"
                    placeholder="What's this about?"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2 text-slate-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-blue-200 rounded-lg focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 transition-colors duration-300 text-slate-900 placeholder-slate-400 resize-none text-sm sm:text-base"
                    placeholder="Tell us more about your project or inquiry..."
                    required
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-cyan-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold text-white hover:from-cyan-500 hover:to-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
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
          <div className={`transform transition-all duration-1000 delay-500 ${showContent ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Cards */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4 group hover:bg-slate-50 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 sm:p-3 rounded-lg">
                      <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Email Us</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">contact@icicon-consulting.com</p>
                      <p className="text-slate-600 text-xs sm:text-sm">johndoe77@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-slate-50 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-2 sm:p-3 rounded-lg">
                      <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Call Us</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">+1 (205) 470-1903</p>
                      <p className="text-slate-600 text-xs sm:text-sm">+91 99 98 69 30 36</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-slate-50 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 sm:p-3 rounded-lg">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Visit Us</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">1450 Market Street, Suite 2300</p>
                      <p className="text-slate-600 text-xs sm:text-sm">San Francisco, CA 94103, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900 flex items-center">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-cyan-600" />
                  Business Hours
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="text-slate-900 font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Saturday</span>
                    <span className="text-slate-900 font-medium">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Sunday</span>
                    <span className="text-slate-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900">Why Choose Us?</h3>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-3 sm:p-4 bg-slate-50 border border-blue-200 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      24/7
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">Support</p>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-slate-50 border border-blue-200 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      2h
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">Response</p>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-slate-50 border border-blue-200 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      99.9%
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">Uptime</p>
                  </div>

                  <div className="text-center p-3 sm:p-4 bg-slate-50 border border-blue-200 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-pulse"
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