import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Zap, Droplets, CheckCircle, ArrowRight, Wrench, Beaker, Factory, Microscope, TestTube, Thermometer } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';

function CryoGenics() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    document.title = "CryoGenics | IcICon Consulting";
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center pt-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Droplets className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm">Fueling Energy Transitions</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              CryoGenics
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading experts in ultra-low temperature technologies, LNG systems, and hydrogen applications with a proven track record in complex cryogenic projects.
          </p>
        </div>

        {/* Floating expertise cards (hidden on mobile) */}
        <div className="hidden sm:block absolute top-20 sm:top-32 left-6 sm:left-10 md:left-20 animate-pulse">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Thermometer className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mb-2" />
            <p className="text-xs sm:text-sm">Ultra-Low Temps</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-20 sm:top-32 right-6 sm:right-10 md:right-20 animate-pulse delay-300">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <TestTube className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400 mb-2" />
            <p className="text-xs sm:text-sm">Experiments</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-12 animate-pulse delay-500">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Microscope className="w-5 sm:w-6 h-5 sm:h-6 text-teal-400 mb-2" />
            <p className="text-xs sm:text-sm">Research & Analysis</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 right-20 animate-pulse delay-500">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <TestTube className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400 mb-2" />
            <p className="text-xs sm:text-sm">consultancy</p>
          </div>
        </div>

            
      </div>

      {/* Cryogenics Expertise Section */}
      <div id="cryogenics" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <div className="mb-4 sm:mb-6 inline-flex items-center px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <Beaker className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-xs sm:text-sm">Specialized Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Cryogenic Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading experts in ultra-low temperature technologies, LNG systems, and hydrogen applications with proven track record in complex cryogenic projects
            </p>
          </div>

          {/* Cryogenic Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="group bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:from-blue-800/30 hover:to-cyan-800/30 transition-all duration-500">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">LNG Systems</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Comprehensive liquefied natural gas system design, from storage tanks to distribution networks, ensuring safety and efficiency at every stage.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-cyan-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Storage & Transfer Systems</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-cyan-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Vaporization Equipment</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-cyan-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Safety & Control Systems</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:from-purple-800/30 hover:to-blue-800/30 transition-all duration-500">
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Hydrogen Technology</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Advanced hydrogen storage, handling, and processing systems designed for the future of clean energy applications and industrial processes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-purple-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Liquid Hydrogen Storage</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-purple-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Fuel Cell Applications</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-purple-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Distribution Networks</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-teal-900/20 to-green-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:from-teal-800/30 hover:to-green-800/30 transition-all duration-500">
              <div className="bg-gradient-to-r from-teal-400 to-green-400 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Industrial Cryogenics</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Specialized equipment and processes for medical, food processing, and manufacturing applications requiring ultra-low temperature solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-teal-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Medical Gas Systems</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-teal-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Food Freezing Systems</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-teal-400">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                  <span>Research Applications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Temperature Range Showcase */}
          <div className="bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-teal-900/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-12 mb-8 sm:mb-16">
            <div className="text-center mb-6 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Ultra-Low Temperature Expertise</h3>
              <p className="text-base sm:text-lg text-gray-300">Operating across the full spectrum of cryogenic temperatures</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div className="group">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-cyan-400">-196°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Liquid Nitrogen</h4>
                <p className="text-xs sm:text-sm text-gray-400">Industrial applications</p>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-purple-400">-162°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">LNG</h4>
                <p className="text-xs sm:text-sm text-gray-400">Natural gas liquefaction</p>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-teal-400">-253°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Liquid Hydrogen</h4>
                <p className="text-xs sm:text-sm text-gray-400">Clean energy storage</p>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-green-400">-269°C</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Liquid Helium</h4>
                <p className="text-xs sm:text-sm text-gray-400">Research & medical</p>
              </div>
            </div>
          </div>

          {/* Project Showcase */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Proven Track Record
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">LNG Projects</h4>
                <p className="text-xs sm:text-sm text-gray-400">Successfully completed worldwide</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50+</div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Hydrogen Systems</h4>
                <p className="text-xs sm:text-sm text-gray-400">Designed and implemented</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2">15+</div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Years Experience</h4>
                <p className="text-xs sm:text-sm text-gray-400">In cryogenic engineering</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto min-h-[44px] min-w-[200px]"
              aria-label="Discuss your cryogenic project"
            >
              Discuss Your Cryogenic Project
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
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

export default CryoGenics;