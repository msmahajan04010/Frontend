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
      image: '/industrial.jfif'
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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <Header> </Header>
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center pt-24">

        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`mb-6 inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full relative z-50 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Atom className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm">Clean Energy Future with Hydrogen</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Hydrogen</span>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl leading-relaxed">
            End-to-end hydrogen engineering solutions from production to applications. Pioneering the clean energy transition with cutting-edge hydrogen technologies and comprehensive system design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center">
              Explore Hydrogen Services
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="group flex items-center px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300">
              <BarChart3 className="mr-2 w-5 h-5" />
              View Projects
            </button>
          </div>
        </div>

        {/* Floating hydrogen stats */}
        <div className="absolute top-20 left-10 md:left-20 animate-pulse">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <Thermometer className="w-6 h-6 text-green-400 mb-2" />
            <p className="text-sm">-253°C Storage</p>
          </div>
        </div>

        <div className="absolute top-32 right-10 md:right-20 animate-pulse delay-300">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            <Zap className="w-6 h-6 text-blue-400 mb-2" />
            <p className="text-sm">Zero Emissions</p>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/4 animate-pulse delay-500">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 transform rotate-6 hover:rotate-3 transition-transform duration-500">
            <Battery className="w-6 h-6 text-purple-400 mb-2" />
            <p className="text-sm">700 bar Storage</p>
          </div>
        </div>
      </div>

      {/* Hydrogen Colors Section */}
      <div className="relative z-10 py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hydrogen Rainbow
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Different production methods defining the hydrogen economy and carbon footprint
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hydrogenColors.map((hydrogen, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                <div className={`bg-gradient-to-r ${hydrogen.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <hydrogen.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white text-center">{hydrogen.type}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-center">{hydrogen.description}</p>
                <div className={`text-center font-semibold bg-gradient-to-r ${hydrogen.color} bg-clip-text text-transparent`}>
                  {hydrogen.co2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Methods */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Production Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced hydrogen production methods for various applications and scales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionMethods.map((method, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-r from-${method.color}-500 to-${method.color}-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{method.method}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{method.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Efficiency:</span>
                    <span className={`text-${method.color}-400 font-semibold`}>{method.efficiency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Purity:</span>
                    <span className={`text-${method.color}-400 font-semibold`}>{method.purity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="services" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Our Hydrogen Services
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Complete engineering solutions across the entire hydrogen value chain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {hydrogenServices.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 sm:w-16 h-12 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 mr-2 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-green-400">{service.projects}</div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold text-blue-400">{service.capacity}</div>
                          <div className="text-xs text-gray-400">Max Capacity</div>
                        </div>
                      </div>

                      <button className="group bg-white/10 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center min-w-[120px] justify-center text-sm sm:text-base">
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
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hydrogen Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Versatile clean energy solutions across transportation, industry, and power generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:from-white/10 hover:to-white/15 transition-all duration-500">
                <div className="h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg mr-3">
                      <app.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{app.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-4">{app.description}</p>

                  <div className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <div className="relative z-10 py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Hydrogen Properties
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key technical specifications and properties of hydrogen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{spec.parameter}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {spec.value}
                </div>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competency Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Technical Competency
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across regulations, standards, design, and engineering analysis for hydrogen projects
            </p>
          </div>

          {/* Competency Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
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
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Same competency content as LNG page but with hydrogen focus */}
          {activeTab === 'regulations' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">ADR / RID</h3>
                    <p className="text-sm text-gray-400">Hydrogen Transport</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Regulations for hydrogen transport by road and rail</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Ship className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">IMDG</h3>
                    <p className="text-sm text-gray-400">Marine Hydrogen</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">International regulations for hydrogen shipping</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">PED / TPED</h3>
                    <p className="text-sm text-gray-400">Pressure Equipment</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">European regulations for hydrogen pressure systems</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">NFPA</h3>
                    <p className="text-sm text-gray-400">Hydrogen Safety</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Fire protection codes for hydrogen facilities</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">CSA B620</h3>
                    <p className="text-sm text-gray-400">Canadian Standards</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Highway tanks and portable tanks for hydrogen</p>
              </div>
            </div>
          )}

          {/* Standards Content */}
          {activeTab === 'standards' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">ASME Section VIII</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Division I - Hydrogen Vessels
                  </div>
                  <div className="flex items-center text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Division II - High Pressure Systems
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">ASME B.31.3</h3>
                <p className="text-gray-300 text-sm">Hydrogen piping systems and process piping</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">ASME B31.12</h3>
                <p className="text-gray-300 text-sm">Hydrogen piping and pipelines specific code</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">European Standards</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    EN 17127 - Hydrogen Refueling Stations
                  </div>
                  <div className="flex items-center text-blue-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    EN 13458 - Hydrogen Storage Systems
                  </div>
                  <div className="flex items-center text-blue-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    EN 17124 - Mobile Hydrogen Systems
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">ISO Standards</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-purple-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    ISO 14687 - Hydrogen Quality
                  </div>
                  <div className="flex items-center text-purple-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    ISO 17268 - Gaseous Hydrogen
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">SAE Standards</h3>
                <p className="text-gray-300 text-sm">Hydrogen vehicle fueling and safety standards</p>
              </div>
            </div>
          )}

          {/* CAD Support Content */}
          {activeTab === 'cad' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Concept CAD Design', desc: 'Hydrogen system conceptual design and layouts', icon: Beaker },
                { title: 'Detail CAD Design', desc: 'Complete hydrogen facility engineering drawings', icon: Settings },
                { title: 'Manufacturing Drawings', desc: 'Hydrogen equipment production drawings', icon: Factory },
                { title: 'As Built Drawings', desc: 'Final hydrogen installation documentation', icon: CheckCircle },
                { title: 'Approval Drawings', desc: 'Regulatory approval for hydrogen systems', icon: Award },
                { title: '3D Modeling', desc: 'Advanced 3D modeling for hydrogen facilities', icon: Globe }
              ].map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Consulting Content */}
          {activeTab === 'consulting' && (
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Hydrogen Development</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Hydrogen Economy Strategy</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Technology Selection & Optimization</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Feasibility Studies</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Regulatory Compliance</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Hydrogen Safety Regulations</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Environmental Compliance</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Code Calculations & Verification</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CAE Support Content */}
          {activeTab === 'cae' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Hydrogen Compatibility Analysis', desc: 'Material compatibility with hydrogen service', icon: BarChart3 },
                { title: 'Pressure Vessel Analysis', desc: 'High-pressure hydrogen storage analysis', icon: Gauge },
                { title: 'Thermal Analysis', desc: 'Hydrogen liquefaction and storage thermal design', icon: Thermometer },
                { title: 'Pipe Stress Analysis', desc: 'Hydrogen piping system stress analysis', icon: Settings },
                { title: 'Electrolyzer Modeling', desc: 'Electrolysis system performance modeling', icon: Zap },
                { title: 'Safety System Design', desc: 'Hydrogen leak detection and safety systems', icon: Shield },
                { title: 'Dispenser Analysis', desc: 'Hydrogen refueling equipment analysis', icon: Fuel },
                { title: 'Storage Tank Design', desc: 'Composite and steel hydrogen tank design', icon: Battery },
                { title: 'Flow Analysis', desc: 'Hydrogen flow and distribution modeling', icon: TrendingUp },
                { title: 'Fatigue Analysis', desc: 'Hydrogen embrittlement and fatigue assessment', icon: Clock },
                { title: 'Fire & Explosion Modeling', desc: 'Hydrogen safety and risk analysis', icon: AlertTriangle },
                { title: 'System Integration', desc: 'Complete hydrogen system integration analysis', icon: Globe }
              ].map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Competency Summary */}
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Complete Hydrogen Solutions</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From green hydrogen production to end-use applications, our comprehensive expertise ensures your hydrogen project meets all safety standards and delivers optimal performance across the entire value chain.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">12+</div>
                <div className="text-gray-400">Hydrogen Regulations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Technical Standards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">30+</div>
                <div className="text-gray-400">Engineering Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-gray-400">Safety Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Features */}
      <div className="relative z-10 py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Hydrogen Safety
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced safety systems and protocols specifically designed for hydrogen applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready for Your Hydrogen Project?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Partner with our hydrogen experts to design and implement cutting-edge clean energy solutions for the hydrogen economy of tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Your Hydrogen Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <Footer> </Footer>

    </div>
  );
}

export default Hydrogen;