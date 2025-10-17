import React, { useState, useEffect } from 'react';
import { Ship, ChevronRight, Thermometer, Shield, Zap, Droplets, Truck, Battery, Factory, Globe, CheckCircle, ArrowRight, TrendingUp, Award, Users, Clock, Beaker, Settings, AlertTriangle, BarChart3, Gauge, Wind, Fuel, Atom } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

function Hydrogen() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('production');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.title = "Hydrogen | IcICon Consulting";
  }, []);


  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const hydrogenServices = [
    {
      id: 'production',
      title: 'Hydrogen Production',
      icon: Factory,
      description: 'Complete design of electrolysis plants, steam methane reforming, and advanced production technologies.',
      capabilities: [
        'Alkaline electrolysis systems',
        'PEM electrolysis design',
        'Steam methane reforming (SMR)',
        'Auto thermal reforming (ATR)',
        'Process optimization',
        'Renewable integration'
      ],
      projects: '30+',
      capacity: 'Up to 100 MW'
    },
    {
      id: 'storage',
      title: 'Storage Systems',
      icon: Battery,
      description: 'Comprehensive hydrogen storage solutions including compressed gas, liquid hydrogen, and solid-state storage.',
      capabilities: [
        'High-pressure storage (350-700 bar)',
        'Liquid hydrogen storage (-253°C)',
        'Metal hydride storage',
        'Underground cavern storage',
        'Composite pressure vessels',
        'Safety and monitoring systems'
      ],
      projects: '25+',
      capacity: '700 bar systems'
    },
    {
      id: 'transport',
      title: 'Transportation & Distribution',
      icon: Truck,
      description: 'Design of hydrogen transport systems including pipelines, tube trailers, and mobile refueling solutions.',
      capabilities: [
        'Pipeline design and analysis',
        'Tube trailer systems',
        'Mobile refueling stations',
        'Compression systems',
        'Material selection',
        'Leak detection systems'
      ],
      projects: '20+',
      capacity: 'All pressure ranges'
    },
    {
      id: 'applications',
      title: 'End-Use Applications',
      icon: Fuel,
      description: 'Fuel cell systems, industrial heating, mobility applications, and power-to-gas solutions.',
      capabilities: [
        'Fuel cell system integration',
        'Industrial burner design',
        'Hydrogen refueling stations',
        'Power-to-gas systems',
        'Blending applications',
        'Process heat applications'
      ],
      projects: '35+',
      capacity: 'MW scale systems'
    }
  ];

  const productionMethods = [
    {
      method: 'Electrolysis',
      description: 'Water splitting using renewable electricity',
      efficiency: '70-80%',
      purity: '99.9%+',
      icon: Zap,
      color: 'green'
    },
    {
      method: 'Steam Methane Reforming',
      description: 'Natural gas reformation with steam',
      efficiency: '65-75%',
      purity: '99.99%',
      icon: Factory,
      color: 'blue'
    },
    {
      method: 'Auto Thermal Reforming',
      description: 'Combined partial oxidation and reforming',
      efficiency: '60-70%',
      purity: '99.9%',
      icon: Thermometer,
      color: 'orange'
    },
    {
      method: 'Biomass Gasification',
      description: 'Renewable hydrogen from biomass',
      efficiency: '50-60%',
      purity: '99%+',
      icon: Wind,
      color: 'teal'
    }
  ];

  const applications = [

    {
      title: 'Industrial Heating',
      description: 'High-temperature processes in steel and chemical industries',
      icon: Factory,
      benefits: ['High temperature', 'Clean burning', 'Process flexibility'],
      image: '/Industrial.jfif'
    },
    {
      title: 'Power Generation',
      description: 'Grid-scale fuel cells and gas turbines',
      icon: Zap,
      benefits: ['Grid stabilization', 'High efficiency', 'Load following'],
      image: '/grid.jfif'
    },

    {
      title: 'Energy Storage',
      description: 'Long-term renewable energy storage solution',
      icon: Battery,
      benefits: ['Seasonal storage', 'High capacity', 'Long duration'],
      image: '/solar.jfif'
    }
  ];

  const specifications = [
    { parameter: 'Liquid H₂ Temperature', value: '-253°C', description: 'At atmospheric pressure' },
    { parameter: 'Energy Density (LHV)', value: '120 MJ/kg', description: 'Lower heating value' },
    { parameter: 'Storage Pressure', value: '350-700 bar', description: 'Compressed gas storage' },
    { parameter: 'Density Ratio', value: '1:800', description: 'Liquid vs gas volume' },
    { parameter: 'Ignition Energy', value: '0.02 mJ', description: 'Minimum ignition energy' },
    { parameter: 'Flame Velocity', value: '2.65 m/s', description: 'In air at STP' }
  ];

  const hydrogenColors = [
    {
      type: 'Green Hydrogen',
      description: 'Produced from renewable energy via electrolysis',
      color: 'from-green-500 to-emerald-500',
      icon: Wind,
      co2: '0 kg CO₂/kg H₂'
    },
    {
      type: 'Blue Hydrogen',
      description: 'Natural gas with carbon capture and storage',
      color: 'from-blue-500 to-cyan-500',
      icon: Factory,
      co2: '1-3 kg CO₂/kg H₂'
    },
    {
      type: 'Gray Hydrogen',
      description: 'Steam methane reforming without CCS',
      color: 'from-gray-500 to-slate-500',
      icon: Beaker,
      co2: '9-12 kg CO₂/kg H₂'
    },
    {
      type: 'Turquoise Hydrogen',
      description: 'Methane pyrolysis producing solid carbon',
      color: 'from-teal-500 to-cyan-500',
      icon: Atom,
      co2: '0-1 kg CO₂/kg H₂'
    }
  ];

  const SafetyFeature = ({ title, description, icon: Icon }) => (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Hydrogen
              </h1>
              <p className="text-xl text-slate-600 mt-4">Clean Energy Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <Header />

      {/* Hero Section */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center pt-24 transition-all duration-1000 
      }`}>
        <div>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full shadow-sm">
            <Atom className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm text-slate-700">Clean Energy Future with Hydrogen</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900">Hydrogen</span>
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            End-to-end hydrogen engineering solutions from production to applications. Pioneering the clean energy transition with cutting-edge hydrogen technologies and comprehensive system design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center min-h-[44px] min-w-[200px]">
              Explore Hydrogen Services
              <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-slate-700 bg-white border border-slate-300 rounded-full hover:bg-slate-50 hover:shadow-lg transition-all duration-300 min-h-[44px] min-w-[200px]">
              <BarChart3 className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              View Projects
            </button>
          </div>
        </div>

        {/* Floating hydrogen stats */}
        <div className="hidden sm:block absolute top-32 left-10 md:left-20 animate-bounce">
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 sm:p-4 shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Thermometer className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">-253°C Storage</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-32 right-10 md:right-20 animate-bounce" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg p-3 sm:p-4 shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">Zero Emissions</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-20 left-1/4 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/90 backdrop-blur-sm border border-teal-200 rounded-lg p-3 sm:p-4 shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Battery className="w-5 sm:w-6 h-5 sm:h-6 text-teal-600 mb-2" />
            <p className="text-xs sm:text-sm text-slate-700">700 bar Storage</p>
          </div>
        </div>
      </div>

      {/* Hydrogen Colors Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Hydrogen Rainbow
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Different production methods defining the hydrogen economy and carbon footprint
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {hydrogenColors.map((hydrogen, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className={`bg-gradient-to-r ${hydrogen.color} w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <hydrogen.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 text-center">{hydrogen.type}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base text-center">{hydrogen.description}</p>
                <div className={`text-center font-semibold bg-gradient-to-r ${hydrogen.color} bg-clip-text text-transparent text-sm sm:text-base`}>
                  {hydrogen.co2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Methods */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Production Technologies
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced hydrogen production methods for various applications and scales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {productionMethods.map((method, index) => (
              <div key={index} className="group text-center bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${method.color} w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <method.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">{method.method}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm sm:text-base">{method.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Efficiency:</span>
                    <span className="text-green-600 font-semibold">{method.efficiency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Purity:</span>
                    <span className="text-green-600 font-semibold">{method.purity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Our Hydrogen Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Complete engineering solutions across the entire hydrogen value chain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {hydrogenServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-600 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{service.projects}</div>
                          <div className="text-xs text-slate-600">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-slate-900">{service.capacity}</div>
                          <div className="text-xs text-slate-600">Max Capacity</div>
                        </div>
                      </div>

                      <button className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center min-w-[120px] justify-center text-sm sm:text-base text-white font-semibold">
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

      {/* Applications */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Hydrogen Applications
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Versatile clean energy solutions across transportation, industry, and power generation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {applications.map((app, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      <app.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{app.title}</h3>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm sm:text-base">{app.description}</p>

                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
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
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Hydrogen Properties
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Key technical specifications and properties of hydrogen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{spec.parameter}</h3>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {spec.value}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Hydrogen Safety
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced safety systems and protocols specifically designed for hydrogen applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <SafetyFeature
              icon={Shield}
              title="Leak Detection Systems"
              description="Advanced hydrogen-specific leak detection with real-time monitoring and automated response"
            />
            <SafetyFeature
              icon={AlertTriangle}
              title="Emergency Venting"
              description="Safe hydrogen venting systems with flame arrestors and proper dispersion design"
            />
            <SafetyFeature
              icon={Thermometer}
              title="Thermal Protection"
              description="Fire-resistant design and thermal insulation for hydrogen equipment protection"
            />
            <SafetyFeature
              icon={Gauge}
              title="Pressure Management"
              
             description="Multi-stage pressure relief systems designed for hydrogen service conditions"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Ready for Your Hydrogen Project?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed">
            Partner with our hydrogen experts to design and implement cutting-edge clean energy solutions for the hydrogen economy of tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-green-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center min-h-[44px] min-w-[200px]">
              Start Your Hydrogen Project
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
            className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse"
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

export default Hydrogen;