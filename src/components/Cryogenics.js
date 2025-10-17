import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Zap, Droplets, CheckCircle, ArrowRight, Wrench, Beaker, Factory, Microscope, TestTube, Thermometer } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

function CryoGenics() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    document.title = "CryoGenics | IcICon Consulting";
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
                CryoGenics
              </h1>
              <p className="text-xl text-slate-600 mt-4">Ultra-Low Temperature Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center pt-24 transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm">
            <Droplets className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm text-slate-700">Fueling Energy Transitions</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              CryoGenics
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leading experts in ultra-low temperature technologies, LNG systems, and hydrogen applications with a proven track record in complex cryogenic projects.
          </p>
        </div>

        {/* Floating expertise cards (hidden on mobile) */}
        <div className="hidden sm:block absolute top-20 sm:top-32 left-6 sm:left-10 md:left-20 animate-bounce">
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 sm:p-4 shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Thermometer className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">Ultra-Low Temps</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-20 sm:top-32 right-6 sm:right-10 md:right-20 animate-bounce" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-lg p-3 sm:p-4 shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <TestTube className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">Experiments</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-teal-200 rounded-lg p-3 sm:p-4 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Microscope className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">Research & Analysis</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 sm:p-4 shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <TestTube className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">Consultancy</p>
          </div>
        </div>
      </div>

      {/* Cryogenics Expertise Section */}
      <div id="cryogenics" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="mb-4 sm:mb-6 inline-flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full">
              <Beaker className="w-4 h-4 text-cyan-600 mr-2" />
              <span className="text-xs sm:text-sm text-slate-700">Specialized Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Cryogenic Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Leading experts in ultra-low temperature technologies, LNG systems, and hydrogen applications with proven track record in complex cryogenic projects
            </p>
          </div>

          {/* Cryogenic Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">LNG Systems</h3>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Comprehensive liquefied natural gas system design, from storage tanks to distribution networks, ensuring safety and efficiency at every stage.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-cyan-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Storage & Transfer Systems</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-cyan-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Vaporization Equipment</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-cyan-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Safety & Control Systems</span>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Hydrogen Technology</h3>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Advanced hydrogen storage, handling, and processing systems designed for the future of clean energy applications and industrial processes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-purple-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Liquid Hydrogen Storage</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-purple-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Fuel Cell Applications</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-purple-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Distribution Networks</span>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">Industrial Cryogenics</h3>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Specialized equipment and processes for medical, food processing, and manufacturing applications requiring ultra-low temperature solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-teal-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Medical Gas Systems</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-teal-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Food Freezing Systems</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-teal-600">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Research Applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Temperature Range Showcase */}
          <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-6 sm:p-12 mb-8 sm:mb-16 shadow-lg">
            <div className="text-center mb-6 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-slate-900">Ultra-Low Temperature Expertise</h3>
              <p className="text-base sm:text-lg text-slate-600">Operating across the full spectrum of cryogenic temperatures</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div className="group">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-lg sm:text-2xl font-bold text-cyan-600">-196°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Liquid Nitrogen</h4>
                <p className="text-xs sm:text-sm text-slate-600">Industrial applications</p>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-lg sm:text-2xl font-bold text-purple-600">-162°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">LNG</h4>
                <p className="text-xs sm:text-sm text-slate-600">Natural gas liquefaction</p>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-lg sm:text-2xl font-bold text-teal-600">-253°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Liquid Hydrogen</h4>
                <p className="text-xs sm:text-sm text-slate-600">Clean energy storage</p>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-teal-100 to-green-100 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-lg sm:text-2xl font-bold text-green-600">-269°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Liquid Helium</h4>
                <p className="text-xs sm:text-sm text-slate-600">Research & medical</p>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Proven Track Record
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">100+</div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">LNG Projects</h4>
                <p className="text-xs sm:text-sm text-slate-600">Successfully completed worldwide</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">50+</div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Hydrogen Systems</h4>
                <p className="text-xs sm:text-sm text-slate-600">Designed and implemented</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 shadow-lg">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">15+</div>
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Years Experience</h4>
                <p className="text-xs sm:text-sm text-slate-600">In cryogenic engineering</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center mx-auto min-h-[44px] min-w-[200px]"
              aria-label="Discuss your cryogenic project"
            >
              Discuss Your Cryogenic Project
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
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

export default CryoGenics;