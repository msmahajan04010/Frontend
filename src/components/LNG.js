import React, { useState, useEffect } from 'react';
import { ChevronRight, Thermometer, Shield, Zap, Droplets, Truck, Ship, Factory, Globe, CheckCircle, ArrowRight, TrendingUp, Award, Users, Clock, Beaker, Settings, AlertTriangle, BarChart3, Gauge } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function LNG() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('liquefaction');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.title = "LNG | IcICon Consulting";
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
      benefits: ['Lower emissions', 'High efficiency', 'Flexible operation'],
      image: './grid.jfif',
      imageSrcSet: './grid2.jfif 400w, ./grid3.jfif 800w'
    },
    {
      title: 'Industrial Heating',
      description: 'High-temperature processes in steel, cement, and chemical industries',
      icon: Factory,
      benefits: ['Consistent supply', 'Clean burning', 'Cost effective'],
      image: './industrial.jfif',
      imageSrcSet: './ind2.jfif 400w, ./ind3.jfif 800w'
    },
    {
      title: 'Remote Areas',
      description: 'Gas supply to areas without pipeline infrastructure',
      icon: Truck,
      benefits: ['Pipeline alternative', 'Flexible transport', 'Remote access'],
      image: './rem.jfif',
      imageSrcSet: './rem2.jfif 400w, ./rem3.jfif 800w'
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
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-2 sm:p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
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
            <Droplets className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm">Liquefied Natural Gas Specialists</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">LNG</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-12 max-w-4xl leading-relaxed">
            Comprehensive engineering solutions for the entire LNG value chain - from liquefaction plants to regasification terminals, storage systems, and transportation infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center min-h-[44px] min-w-[200px]"
              aria-label="Explore our LNG services"
            >
              Explore Our LNG Services
              <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 min-h-[44px] min-w-[200px]"
              aria-label="View LNG projects"
            >
              <BarChart3 className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              View Projects
            </button>
          </div>
        </div>

        {/* Floating LNG stats (hidden on mobile) */}
        <div className="hidden sm:block absolute top-10 sm:top-20 left-6 sm:left-10 md:left-20 animate-pulse">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Thermometer className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400 mb-2" />
            <p className="text-xs sm:text-sm">-162°C Storage</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-20 sm:top-32 right-6 sm:right-10 md:right-20 animate-pulse delay-300">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mb-2" />
            <p className="text-xs sm:text-sm">600:1 Ratio</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 sm:bottom-20 left-1/4 animate-pulse delay-500">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Ship className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-400 mb-2" />
            <p className="text-xs sm:text-sm">Global Transport</p>
          </div>
        </div>
      </div>

      {/* LNG Process Steps */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                LNG Process Chain
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From natural gas to liquefied natural gas - understanding the complete process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group text-center relative">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <step.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                  <div className="absolute -top-2 -right-2 bg-white text-black text-xs sm:text-sm font-bold w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">{step.description}</p>
                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold text-base sm:text-lg">
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our LNG Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Complete engineering solutions across the entire LNG value chain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {lngServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-cyan-400">{service.projects}</div>
                          <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-blue-400">{service.capacity}</div>
                          <div className="text-xs sm:text-sm text-gray-400">Max Capacity</div>
                        </div>
                      </div>

                      <button
                        className="group bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center min-h-[44px]"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                LNG Applications
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Versatile energy solution across multiple industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:from-white/10 hover:to-white/15 transition-all duration-500"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={app.image}
                    srcSet={app.imageSrcSet}
                    sizes="(max-width: 640px) 400px, 800px"
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg mr-3">
                      <app.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{app.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{app.description}</p>

                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400 mr-2" />
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                LNG Properties
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Key technical specifications and properties of liquefied natural gas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{spec.parameter}</h3>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {spec.value}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Safety First
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
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

      {/* Competency Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technical Competency
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across regulations, standards, design, and engineering analysis for LNG projects
            </p>
          </div>

          {/* Competency Tabs */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { id: 'regulations', name: 'Regulations', icon: Shield },
                { id: 'standards', name: 'Standards', icon: Award },
                { id: 'cad', name: 'CAD Support', icon: Settings },
                { id: 'consulting', name: 'Consulting', icon: Users },
                { id: 'cae', name: 'CAE Support', icon: BarChart3 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 min-h-[44px] ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  aria-label={`View ${tab.name} details`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Regulations Content */}
          {activeTab === 'regulations' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Truck className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">ADR / RID</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Road/Rail Transport</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">European Agreement concerning the International Carriage of Dangerous Goods by Road and Rail</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Ship className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">IMDG</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Marine Transport</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">International Maritime Dangerous Goods Code for safe sea transport</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Factory className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">PED / TPED</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Pressure Equipment</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">European Pressure Equipment Directive for safe design and manufacture</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <AlertTriangle className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">NFPA</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Fire Protection</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">National Fire Protection Association codes and standards</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">PESO, INDIA</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Indian Standards</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">Petroleum and Explosives Safety Organisation regulations</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">KHK, JAPAN</h3>
                    <p className="text-xs sm:text-sm text-gray-400">Japanese Standards</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">Kanto Hi-pressure Gas Safety Association regulations</p>
              </div>
            </div>
          )}

          {/* Standards Content */}
          {activeTab === 'standards' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">ASME Section VIII</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-cyan-400 text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    Division I - Pressure Vessels
                  </div>
                  <div className="flex items-center text-cyan-400 text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    Division II - Alternative Rules
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">ASME B.31.3</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Process Piping Code for safe piping system design</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">HPGSA - Japan</h3>
                <p className="text-gray-300 text-xs sm:text-sm">High Pressure Gas Safety Association standards</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">European Standards</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-400 text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    EN 13530 - Cryogenic Vessels
                  </div>
                  <div className="flex items-center text-blue-400 text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    EN 13458 - Pressure Vessels
                  </div>
                  <div className="flex items-center text-blue-400 text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    EN 13648 - Gas Cylinders
                  </div>
                  <div className="flex items-center text-blue-400 text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                    EN 13445 - Unfired Pressure Vessels
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">CGA - S 1.2</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Compressed Gas Association safety standards</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">AD-2000</h3>
                <p className="text-gray-300 text-xs sm:text-sm">German pressure vessel design and construction rules</p>
              </div>
            </div>
          )}

          {/* CAD Support Content */}
          {activeTab === 'cad' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {[
                { title: 'Concept CAD Design', desc: 'Initial design concepts and feasibility studies', icon: Beaker },
                { title: 'Detail CAD Design', desc: 'Complete detailed engineering drawings', icon: Settings },
                { title: 'Manufacturing Drawings', desc: 'Production-ready technical drawings', icon: Factory },
                { title: 'As Built Drawings', desc: 'Final construction documentation', icon: CheckCircle },
                { title: 'Approval Drawings', desc: 'Regulatory approval documentation', icon: Award },
                { title: '3D Modeling', desc: 'Advanced 3D CAD modeling services', icon: Globe }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <service.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Consulting Content */}
          {activeTab === 'consulting' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Users className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">Product Development</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 mr-2 sm:mr-3" />
                    <span>New Product Development</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 mr-2 sm:mr-3" />
                    <span>Re-Engineering Solutions</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 mr-2 sm:mr-3" />
                    <span>Performance Optimization</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <Shield className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">Compliance Services</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 mr-2 sm:mr-3" />
                    <span>Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 mr-2 sm:mr-3" />
                    <span>Statutory Compliance</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 mr-2 sm:mr-3" />
                    <span>Code Calculations</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CAE Support Content */}
          {activeTab === 'cae' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {[
                { title: 'Static Structural Analysis', desc: 'Stress and deformation analysis under static loads', icon: BarChart3 },
                { title: 'Static Thermal Analysis', desc: 'Heat transfer and temperature distribution analysis', icon: Thermometer },
                { title: 'Modal Analysis', desc: 'Natural frequency and vibration mode analysis', icon: TrendingUp },
                { title: 'Pipe Stress Analysis', desc: 'Piping system stress and support design', icon: Settings },
                { title: 'Process Calculations', desc: 'Thermal and fluid flow calculations', icon: Beaker },
                { title: 'Safety Valve Calculations', desc: 'Relief valve sizing and selection', icon: Shield },
                { title: 'Wind & Seismic Analysis', desc: 'Environmental load analysis and design', icon: Globe },
                { title: 'Material Specifications', desc: 'Material selection and property analysis', icon: Award },
                { title: 'Quality Manual Preparation', desc: 'Quality assurance documentation', icon: CheckCircle },
                { title: 'Operating Manual Preparation', desc: 'Operation and maintenance procedures', icon: Users },
                { title: 'Jigs & Fixture Design', desc: 'Manufacturing tooling and fixture design', icon: Factory },
                { title: 'Fatigue Analysis', desc: 'Long-term durability and life assessment', icon: Clock }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <service.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Competency Summary */}
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Complete Engineering Solutions</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto">
              From initial concept to final commissioning, our comprehensive competency ensures your LNG project meets all regulatory requirements and industry standards while delivering optimal performance and safety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-400">Regulations & Codes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-xs sm:text-sm text-gray-400">Design Standards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-2">25+</div>
                <div className="text-xs sm:text-sm text-gray-400">CAD/CAE Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready for Your LNG Project?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-12 leading-relaxed">
            Partner with our LNG experts to design and implement world-class liquefied natural gas solutions tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-[44px] min-w-[200px]"
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

export default LNG;