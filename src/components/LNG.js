import React, { useState, useEffect } from 'react';
import { ChevronRight, Thermometer, Shield, Zap, Droplets, Truck, Ship, Factory, Globe, CheckCircle, ArrowRight, TrendingUp, Award, Users, Clock, Beaker, Settings, AlertTriangle, BarChart3, Gauge } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function LNG() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState('liquefaction');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.title = "LNG | IcICon Consulting";
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

  const lngServices = [
    {
      id: 'liquefaction',
      title: 'Liquefaction Plants',
      icon: Factory,
      description: 'Complete design and engineering of natural gas liquefaction facilities from feed gas treatment to LNG storage.',
      capabilities: [
        'Process design and optimization',
        'Equipment selection and specification',
        'Heat exchanger design',
        'Refrigeration cycle optimization',
        'Feed gas pre-treatment systems',
        'Process control and automation'
      ],
      projects: '25+',
      capacity: 'Up to 15 MTPA'
    },
    {
      id: 'storage',
      title: 'Storage & Terminals',
      icon: Droplets,
      description: 'Design of cryogenic storage tanks, loading/unloading systems, and complete terminal facilities.',
      capabilities: [
        'Cryogenic tank design',
        'Insulation system optimization',
        'Loading arm systems',
        'Vapor handling systems',
        'Fire protection systems',
        'Terminal layout optimization'
      ],
      projects: '40+',
      capacity: '500K m³ tanks'
    },
    {
      id: 'transport',
      title: 'Transportation Systems',
      icon: Ship,
      description: 'Marine and road transport solutions including ship loading, truck loading stations, and transfer systems.',
      capabilities: [
        'Marine loading systems',
        'Truck loading stations',
        'Pipeline systems',
        'Transfer line design',
        'Containment systems',
        'Emergency shutdown systems'
      ],
      projects: '30+',
      capacity: 'All vessel sizes'
    },
    {
      id: 'regasification',
      title: 'Regasification',
      icon: Thermometer,
      description: 'Vaporization systems for converting LNG back to natural gas including heat exchangers and pressure systems.',
      capabilities: [
        'Vaporizer design',
        'Heat exchanger optimization',
        'Pressure regulation systems',
        'Odorization systems',
        'Gas quality control',
        'Send-out metering'
      ],
      projects: '35+',
      capacity: 'Up to 20 MMSCFD'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Feed Gas Treatment',
      description: 'Removal of impurities including CO₂, H₂S, water, and heavy hydrocarbons',
      temperature: 'Ambient',
      icon: Settings
    },
    {
      step: 2,
      title: 'Pre-cooling',
      description: 'Initial cooling using propane refrigeration cycle',
      temperature: '-40°C',
      icon: Thermometer
    },
    {
      step: 3,
      title: 'Liquefaction',
      description: 'Final cooling and liquefaction using mixed refrigerant',
      temperature: '-162°C',
      icon: Droplets
    },
    {
      step: 4,
      title: 'Storage',
      description: 'Cryogenic storage in insulated tanks at atmospheric pressure',
      temperature: '-162°C',
      icon: Factory
    }
  ];

  const applications = [
    {
      title: 'Power Generation',
      description: 'Clean fuel for gas turbines and combined cycle plants',
      icon: Zap,
      benefits: ['Lower emissions', 'High efficiency', 'Flexible operation']
    },
    {
      title: 'Industrial Heating',
      description: 'High-temperature processes in steel, cement, and chemical industries',
      icon: Factory,
      benefits: ['Consistent supply', 'Clean burning', 'Cost effective']
    },
    {
      title: 'Remote Areas',
      description: 'Gas supply to areas without pipeline infrastructure',
      icon: Truck,
      benefits: ['Pipeline alternative', 'Flexible transport', 'Remote access']
    }
  ];

  const specifications = [
    { parameter: 'Storage Temperature', value: '-162°C', description: 'At atmospheric pressure' },
    { parameter: 'Density Ratio', value: '1:600', description: 'Liquid vs gas volume' },
    { parameter: 'Typical Composition', value: '85-95% CH₄', description: 'Methane content' },
    { parameter: 'Energy Density', value: '22 GJ/m³', description: 'Lower heating value' },
    { parameter: 'Boiling Point', value: '-162°C', description: 'At 1 atm pressure' },
    { parameter: 'Auto-ignition', value: '538°C', description: 'In air at 1 atm' }
  ];

  const SafetyFeature = ({ title, description, icon: Icon }) => (
    <div className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">{title}</h3>
          <p className="text-slate-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

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
                LNG
              </h1>
              <p className="text-xl text-slate-600 mt-4">Liquefied Natural Gas Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center pt-24 transition-all duration-1000 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm">
            <Droplets className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-sm text-slate-700">Liquefied Natural Gas Specialists</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900">LNG</span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive engineering solutions for the entire LNG value chain - from liquefaction plants to regasification terminals, storage systems, and transportation infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center min-h-[44px] min-w-[200px]"
              aria-label="Explore our LNG services"
            >
              Explore Our LNG Services
              <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300 min-h-[44px] min-w-[200px]"
              aria-label="View LNG projects"
            >
              <BarChart3 className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              View Projects
            </button>
          </div>
        </div>

        {/* Floating LNG stats (hidden on mobile) */}
        <div className="hidden sm:block absolute top-20 sm:top-32 left-6 sm:left-10 md:left-20 animate-bounce">
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 sm:p-4 shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Thermometer className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">-162°C Storage</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-20 sm:top-32 right-6 sm:right-10 md:right-20 animate-bounce" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 sm:p-4 shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">600:1 Ratio</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-32 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-teal-200 rounded-lg p-3 sm:p-4 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Ship className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">Global Transport</p>
          </div>
        </div>
      </div>

      {/* LNG Process Steps */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                LNG Process Chain
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              From natural gas to liquefied natural gas - understanding the complete process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group text-center relative">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative shadow-lg">
                  <step.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs sm:text-sm font-bold w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">{step.description}</p>
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold text-base sm:text-lg">
                  {step.temperature}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LNG Services */}
      <div id="services" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Our LNG Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Complete engineering solutions across the entire LNG value chain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {lngServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-600 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{service.projects}</div>
                          <div className="text-xs text-slate-600">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-slate-900">{service.capacity}</div>
                          <div className="text-xs text-slate-600">Max Capacity</div>
                        </div>
                      </div>

                      <button
                        className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center min-h-[44px] text-white font-semibold text-sm"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LNG Applications */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                LNG Applications
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Versatile energy solution across multiple industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <app.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{app.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm sm:text-base">{app.description}</p>

                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-cyan-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                LNG Properties
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Key technical specifications and properties of liquefied natural gas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{spec.parameter}</h3>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {spec.value}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Safety First
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive safety systems and protocols for all LNG operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <SafetyFeature
              icon={Shield}
              title="Containment Systems"
              description="Multiple barrier containment with leak detection and automated isolation systems"
            />
            <SafetyFeature
              icon={AlertTriangle}
              title="Emergency Response"
              description="Comprehensive emergency shutdown systems and gas detection networks"
            />
            <SafetyFeature
              icon={Gauge}
              title="Pressure Relief"
              description="Advanced pressure relief and venting systems to prevent over-pressurization"
            />
            <SafetyFeature
              icon={Thermometer}
              title="Temperature Monitoring"
              description="Continuous temperature monitoring with automated alarms and control systems"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Ready for Your LNG Project?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed">
            Partner with our LNG experts to design and implement world-class liquefied natural gas solutions tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center min-h-[44px] min-w-[200px]"
              aria-label="Start your LNG project"
            >
              Start Your LNG Project
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Particle effects */}
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

export default LNG;