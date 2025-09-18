import React, { useState, useEffect } from 'react';
import { Droplets, Calendar, MapPin, Users, DollarSign, Clock, TrendingUp, Award, CheckCircle, ArrowRight, Filter, Search, Beaker, Factory, Truck, Zap, Building, Globe } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const MetricBar = React.memo(({ value, label, color }) => (
  <div className="mb-3 sm:mb-4">
    <div className="flex justify-between text-xs sm:text-sm mb-1">
      <span className="text-gray-300">{label}</span>
      <span className={`text-${color}-400 font-semibold`}>{value}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
      <div
        className={`bg-gradient-to-r from-${color}-500 to-${color}-400 h-1.5 sm:h-2 rounded-full transition-all duration-1000`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
));

function ProjectCaseStudies() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    document.title = "Project Case Studies | IcICon Consulting";
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

  const caseStudies = [
 
    {
      id: 2,
      title: "Hydrogen Production Facility",
      category: "hydrogen",
      industry: "Clean Energy",
      client: "Green Energy Solutions Inc.",
      location: "California, USA",
      duration: "24 months",
      teamSize: "8 engineers",
      budget: "$1.8M",
      image: "./grid.jfif",
      imageSrcSet: "./grid2.jfif 400w, ./grid3.jfif 800w",
      description: "Design and implementation of a 10 MW electrolysis-based hydrogen production facility with liquid hydrogen storage capabilities.",
      challenge: "Integrating renewable energy sources with hydrogen production while ensuring consistent output and safe storage.",
      solution: "Advanced control systems with battery backup and optimized electrolysis process design for variable renewable input.",
      results: [
        "99.5% system uptime achieved",
        "30% reduction in energy consumption vs. industry standard",
        "Successful integration with solar farm",
        "Zero environmental incidents"
      ],
      technologies: ["Electrolysis Systems", "Liquid H2 Storage", "Renewable Integration", "Safety Controls"],
      metrics: {
        efficiency: 98,
        safety: 100,
        timeline: 95
      }
    },
  
    {
      id: 4,
      title: "Food Processing Cryogenic System",
      category: "food",
      industry: "Food & Beverage",
      client: "Premium Foods Manufacturing",
      location: "Wisconsin, USA",
      duration: "10 months",
      teamSize: "5 engineers",
      budget: "$1.2M",
      image: "./rem.jfif",
      imageSrcSet: "./rem2.jfif 400w, ./rem3.jfif 800w",
      description: "Implementation of liquid nitrogen flash freezing system for premium seafood processing facility with capacity for 500 tons/day.",
      challenge: "Achieving precise temperature control for premium product quality while maintaining high throughput and energy efficiency.",
      solution: "Multi-zone freezing system with advanced temperature monitoring and automated conveyor integration.",
      results: [
        "25% improvement in product quality scores",
        "20% reduction in processing time",
        "30% energy savings compared to conventional freezing",
        "ROI achieved in 14 months"
      ],
      technologies: ["Liquid Nitrogen Systems", "Temperature Control", "Automation", "Quality Monitoring"],
      metrics: {
        efficiency: 88,
        safety: 98,
        timeline: 105
      }
    },
    {
      id: 5,
      title: "Industrial Gas Plant Optimization",
      category: "industrial",
      industry: "Chemical Processing",
      client: "Industrial Gases Corp",
      location: "Louisiana, USA",
      duration: "15 months",
      teamSize: "10 engineers",
      budget: "$2.1M",
      image: "./industrial.jfif",
      imageSrcSet: "./ind2.jfif 400w, ./ind3.jfif 800w",
      description: "Complete process optimization and equipment upgrade for air separation unit producing oxygen, nitrogen, and argon.",
      challenge: "Increasing production capacity by 35% while reducing energy consumption and maintaining product purity standards.",
      solution: "Heat integration optimization, advanced distillation column design, and implementation of waste heat recovery systems.",
      results: [
        "35% increase in production capacity",
        "22% reduction in energy consumption",
        "Maintained 99.99% product purity",
        "Payback period of 2.1 years"
      ],
      technologies: ["Air Separation", "Heat Recovery", "Process Control", "Distillation Systems"],
      metrics: {
        efficiency: 94,
        safety: 99,
        timeline: 98
      }
    },
    {
      id: 6,
      title: "Research Facility Helium Recovery",
      category: "research",
      industry: "Research & Development",
      client: "National Research Laboratory",
      location: "Colorado, USA",
      duration: "8 months",
      teamSize: "4 engineers",
      budget: "$600K",
      image: "./res.jfif",
      imageSrcSet: "./res2.jfif 400w, ./res3.jfif 800w",
      description: "Design and installation of helium recovery and purification system for quantum research facility with 95% recovery efficiency.",
      challenge: "Maximizing helium recovery from research equipment while maintaining ultra-high purity levels required for quantum applications.",
      solution: "Multi-stage purification system with molecular sieves and cryogenic separation for achieving 99.999% purity.",
      results: [
        "95% helium recovery rate achieved",
        "99.999% purity maintained",
        "80% reduction in helium procurement costs",
        "System recognized for innovation excellence"
      ],
      technologies: ["Helium Recovery", "Purification Systems", "Cryogenic Separation", "Purity Analysis"],
      metrics: {
        efficiency: 96,
        safety: 100,
        timeline: 102
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe, count: caseStudies.length },
    { id: 'lng', name: 'LNG', icon: Truck, count: caseStudies.filter(c => c.category === 'lng').length },
    { id: 'hydrogen', name: 'Hydrogen', icon: Zap, count: caseStudies.filter(c => c.category === 'hydrogen').length },
    { id: 'medical', name: 'Medical', icon: Building, count: caseStudies.filter(c => c.category === 'medical').length },
    { id: 'food', name: 'Food & Beverage', icon: Factory, count: caseStudies.filter(c => c.category === 'food').length },
    { id: 'industrial', name: 'Industrial', icon: Beaker, count: caseStudies.filter(c => c.category === 'industrial').length },
    { id: 'research', name: 'Research', icon: Award, count: caseStudies.filter(c => c.category === 'research').length }
  ];

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20"></div>
        <div
          className="hidden md:block absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <Header />

      {/* Header Section */}
         <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-6 text-center pt-24">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Droplets className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm">Proven Excellence in Engineerings</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Project</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Explore our portfolio of successful engineering projects across cryogenic systems, industrial processes, and specialized applications
            </p>
          </div>
        </div>
      

      {/* Filter Section */}
      <div className="relative z-10 px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-wrap sm:flex-row gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 min-h-[44px] ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300'
                  }`}
                  aria-label={`Filter by ${category.name}`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  <span className="font-medium text-xs sm:text-sm">{category.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="relative z-10 px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {filteredCases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    srcSet={caseStudy.imageSrcSet}
                    sizes="(max-width: 640px) 400px, 800px"
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-medium rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-3 sm:mr-4">{caseStudy.location}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{caseStudy.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4 sm:p-8">
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{caseStudy.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                      <Users className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm text-gray-400">Team Size</div>
                      <div className="font-semibold text-white text-sm sm:text-base">{caseStudy.teamSize}</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                      <DollarSign className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm text-gray-400">Budget</div>
                      <div className="font-semibold text-white text-sm sm:text-base">{caseStudy.budget}</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                      <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm text-gray-400">Client</div>
                      <div className="font-semibold text-white text-xs sm:text-sm">{caseStudy.client}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-white/10 text-gray-300 text-xs sm:text-sm rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-3 sm:mb-4">PROJECT METRICS</h4>
                    <MetricBar value={caseStudy.metrics.efficiency} label="Efficiency" color="cyan" />
                    <MetricBar value={caseStudy.metrics.safety} label="Safety Score" color="green" />
                    <MetricBar value={caseStudy.metrics.timeline} label="Timeline Performance" color="blue" />
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="group w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center min-h-[44px]"
                    aria-label={`View case study details for ${caseStudy.title}`}
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="bg-gray-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedCase.title}</h2>
                  <p className="text-cyan-400 text-sm sm:text-base">{selectedCase.industry} • {selectedCase.location}</p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="Close case study modal"
                >
                  <svg className="w-8 sm:w-10 h-8 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                <div>
                  <img
                    src={selectedCase.image}
                    srcSet={selectedCase.imageSrcSet}
                    sizes="(max-width: 640px) 400px, 800px"
                    alt={selectedCase.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4 sm:mb-6"
                    loading="lazy"
                  />

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Challenge</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{selectedCase.challenge}</p>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Solution</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{selectedCase.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Key Results</h3>
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {selectedCase.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base">{result}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Project Metrics</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <MetricBar value={selectedCase.metrics.efficiency} label="Efficiency" color="cyan" />
                    <MetricBar value={selectedCase.metrics.safety} label="Safety Score" color="green" />
                    <MetricBar value={selectedCase.metrics.timeline} label="Timeline Performance" color="blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative z-10 py-12 sm:py-20 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-12 leading-relaxed">
            Let's discuss how our proven expertise can help you achieve exceptional results in your next engineering project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-[44px] min-w-[200px]"
              aria-label="Discuss your project"
            >
              Discuss Your Project
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

export default ProjectCaseStudies;