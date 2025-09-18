import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Target, Award, Zap, Shield, Clock, Globe, CheckCircle, ArrowRight, Wrench, Beaker, Factory, Truck } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    document.title = "Home | IcICon Consulting";
  }, []);

  useEffect(() => {
    setIsVisible(true);

    // Disable mouse-following effect on mobile for performance
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
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

  return (
  <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <Header />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center pt-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Award className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm">Cryogenic, LNG, and Hydrogen Experts</span>
          </div>

         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Engineering</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-12 max-w-4xl leading-relaxed">
            Custom-tailored engineering services delivered by experienced professionals. From project management to technical documentation, we provide innovative solutions that exceed expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center min-h-[44px] min-w-[200px]"
              aria-label="Start your project"
            >
              Start Your Project
              <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 min-h-[44px] min-w-[200px]"
              aria-label="Learn about our expertise"
            >
              <Globe className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              Our Expertise
            </button>
          </div>
        </div>

        {/* Floating expertise cards (hidden on mobile) */}
        <div className="hidden sm:block absolute top-10 sm:top-20 left-6 sm:left-10 md:left-20 animate-pulse">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Factory className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mb-2" />
            <p className="text-xs sm:text-sm">Process Equipment</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-20 sm:top-32 right-6 sm:right-10 md:right-20 animate-pulse delay-300">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <Beaker className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400 mb-2" />
            <p className="text-xs sm:text-sm">Cryogenics</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-1/4 animate-pulse delay-500">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Truck className="w-5 sm:w-6 h-5 sm:h-6 text-teal-400 mb-2" />
            <p className="text-xs sm:text-sm">Oil & Gas</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a wide variety of engineering services custom-tailored to meet your requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div id="about" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                We are a group of experts consisting of skilled Engineers and SMEs, who possess extensive global experience of more than 15 years in various fields.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" />
                  <span className="text-sm sm:text-base text-gray-300">15+ years of global experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" />
                  <span className="text-sm sm:text-base text-gray-300">Expert Engineers and SMEs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" />
                  <span className="text-sm sm:text-base text-gray-300">Complex project handling capability</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{industry.name}</h3>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Core values that guide us in all our endeavors and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Commitment
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Our commitment is rooted in delivering innovative solutions that exceed expectations. We pride ourselves on producing quality deliverables that are reliable and efficient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <Clock className="w-10 sm:w-12 h-10 sm:h-12 text-cyan-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">On-Time Delivery</h3>
              <p className="text-gray-400 text-sm sm:text-base">Meeting project timelines with consistent communication</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <Award className="w-10 sm:w-12 h-10 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Quality Excellence</h3>
              <p className="text-gray-400 text-sm sm:text-base">Reliable and efficient solutions that exceed expectations</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
              <Target className="w-10 sm:w-12 h-10 sm:h-12 text-teal-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Consistent Standards</h3>
              <p className="text-gray-400 text-sm sm:text-base">High standards maintained across all projects, large or small</p>
            </div>
          </div>

          <button
            className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto min-h-[44px] min-w-[200px]"
            aria-label="Start your project today"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
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

export default Home;