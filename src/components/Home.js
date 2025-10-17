import React, { useState, useEffect } from 'react';
import {ChevronLeft, ChevronRight, Users, Target, Award, Zap, Shield, Clock, Globe, CheckCircle, ArrowRight, Wrench, Beaker, Factory, Cog,Cpu,Package } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.title = "Home | IcICon Consulting";
  }, []);

  useEffect(() => {
    // Opening animation sequence
    const timer1 = setTimeout(() => setIsVisible(true), 300);
    const timer2 = setTimeout(() => setShowContent(true), 800);

    // Disable mouse-following effect on mobile for performance
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

  const services = [
    { icon: Wrench, title: "Project Management", desc: "Expert project oversight and execution" },
    { icon: Zap, title: "Process Improvement", desc: "Optimize your operations for efficiency" },
    { icon: Beaker, title: "Product Development", desc: "Innovative solutions from concept to reality" },
    { icon: Factory, title: "CAD Modeling & Drafting", desc: "Precision engineering documentation" }
  ];

  const industries = [
    { name: "Oil & Gas", years: "15+" },
    { name: "Cryogenics", years: "15+" },
    { name: "Medical", years: "15+" },
    { name: "Food & Beverage", years: "15+" },
    { name: "Process Equipment", years: "15+" }
  ];

  const values = [
    { icon: Target, title: "Leadership", desc: "Guiding projects to success with vision and expertise" },
    { icon: Users, title: "Collaboration", desc: "Working together to achieve exceptional results" },
    { icon: Shield, title: "Accountability", desc: "Taking responsibility for delivering excellence" },
    { icon: Award, title: "Integrity", desc: "Conducting business with the highest ethical standards" }
  ];


  const slides = [
  {
    icon: Factory,
    title: "Plant Engineering",
    description: "Comprehensive plant design, layout optimization, and industrial facility planning services for maximum efficiency and productivity.",
    color: "from-blue-600 to-blue-800",
    features: ["Facility Design", "Process Optimization", "Equipment Selection", "Safety Planning"],
    backgroundImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1920&q=80",
  },
  {
    icon: Package,
    title: "Product Engineering",
    description: "End-to-end product development from concept to manufacturing, ensuring quality, innovation, and market readiness.",
    color: "from-purple-600 to-purple-800",
    features: ["Design & Development", "Prototyping", "Testing & Validation", "Manufacturing Support"],
    backgroundImage: "https://images.unsplash.com/photo-1516321310762-479e93c67d70?fit=crop&w=1920&q=80",
  },
  {
    icon: Cpu,
    title: "Automation Solutions",
    description: "Advanced automation systems to streamline operations, reduce costs, and enhance production capabilities.",
    color: "from-green-600 to-green-800",
    features: ["PLC Programming", "SCADA Systems", "Robotics Integration", "IoT Solutions"],
    backgroundImage: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?fit=crop&w=1920&q=80",
  },
  {
    icon: Cog,
    title: "Process Engineering",
    description: "Optimize your manufacturing processes with our expert analysis, design, and implementation services.",
    color: "from-orange-600 to-orange-800",
    features: ["Process Design", "Efficiency Analysis", "Quality Control", "Continuous Improvement"],
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=1920&q=80",
  },
];


const handleTouchStart = (e) => {
    // Implement touch start logic
    console.log('Touch started', e);
  };

  const handleTouchMove = (e) => {
    // Implement touch move logic
    console.log('Touch moved', e);
  };

  const handleTouchEnd = () => {
    // Implement touch end logic
    console.log('Touch ended');
  };

  

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
                IcICon
              </h1>
              <p className="text-xl text-slate-600 mt-4">Engineering Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center pt-24 transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm">
            <Award className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm text-slate-700">Cryogenic, LNG, and Hydrogen Experts</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900">Engineering</span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-12 max-w-4xl leading-relaxed">
            Custom-tailored engineering services delivered by experienced professionals. From project management to technical documentation, we provide innovative solutions that exceed expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center min-h-[44px] min-w-[200px]"
            >
              Start Your Project
              <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300 min-h-[44px] min-w-[200px]"
            >
              <Globe className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              Our Expertise
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              We offer a wide variety of engineering services custom-tailored to meet your requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineering Slider Section */}
      <div className="relative z-10 py-12 sm:py-16 px-4">
        <div className="max-w-full mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-[500px] sm:h-[600px] md:h-[650px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeSlide ? 'opacity-100 translate-x-0' : index < activeSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                  }`}
                  style={{
                    backgroundImage: `url(${slide.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-40`}></div>
                  <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
                    <div className="text-center mb-6 sm:mb-8">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${slide.color} flex items-center justify-center mb-4 transform transition-transform duration-500 hover:scale-110 hover:rotate-12`}
                      >
                        <slide.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">{slide.title}</h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto">{slide.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm sm:max-w-md w-full">
                      {slide.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-4 sm:p-5 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                          style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.color} mb-2`}></div>
                          <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{feature}</h3>
                        </div>
                      ))}
                    </div>
                    <button
                      className={`mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r ${slide.color} text-white rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                 
                  className={`transition-all duration-300 rounded-full ${
                    index === activeSlide ? 'w-8 sm:w-10 h-2 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600' : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
            {slides.map((slide, index) => {
              const SlideIcon = slide.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                    onMouseEnter={() => setActiveSlide(index)} // <--- hover triggers slide
                  className={`cursor-pointer rounded-lg p-4 sm:p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${
                    index === activeSlide ? `bg-gradient-to-br ${slide.color} text-white shadow-md scale-105` : 'bg-white text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <SlideIcon className={`w-6 sm:w-7 h-6 sm:h-7 mb-2 sm:mb-3 ${index === activeSlide ? 'text-white' : 'text-gray-600'}`} />
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{slide.title}</h3>
                  <p className={`text-xs sm:text-sm ${index === activeSlide ? 'text-white opacity-90' : 'text-gray-600'}`}>Tap to explore</p>
                </div>
              );
            })}
          </div>

          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Who We Are Section */}
      <div id="about" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                We are a group of experts consisting of skilled Engineers and SMEs, who possess extensive global experience of more than 15 years in various fields.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600" />
                  <span className="text-sm sm:text-base text-slate-700">15+ years of global experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600" />
                  <span className="text-sm sm:text-base text-slate-700">Expert Engineers and SMEs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600" />
                  <span className="text-sm sm:text-base text-slate-700">Complex project handling capability</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-4 sm:p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">{industry.name}</h3>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {industry.years}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div id="values" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Core values that guide us in all our endeavors and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <value.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Commitment
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Our commitment is rooted in delivering innovative solutions that exceed expectations. We pride ourselves on producing quality deliverables that are reliable and efficient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <Clock className="w-10 sm:w-12 h-10 sm:h-12 text-cyan-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">On-Time Delivery</h3>
              <p className="text-slate-600 text-sm sm:text-base">Meeting project timelines with consistent communication</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <Award className="w-10 sm:w-12 h-10 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Quality Excellence</h3>
              <p className="text-slate-600 text-sm sm:text-base">Reliable and efficient solutions that exceed expectations</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <Target className="w-10 sm:w-12 h-10 sm:h-12 text-teal-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Consistent Standards</h3>
              <p className="text-slate-600 text-sm sm:text-base">High standards maintained across all projects, large or small</p>
            </div>
          </div>

          <button
            className="group bg-gradient-to-r from-cyan-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto min-h-[44px] min-w-[200px]"
            aria-label="Start your project today"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
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

export default Home;