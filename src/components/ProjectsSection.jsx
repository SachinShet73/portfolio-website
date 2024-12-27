import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, X, ChevronLeft, ChevronRight, ExternalLink, Github, 
  Award, GitBranch, Code, Layers, CircuitBoard, Gauge, Star, Timer, Users,
  BarChart, CheckCircle, AlertTriangle
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [activeSection, setActiveSection] = useState('overview');
  const modalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Real-time Data Processing Pipeline",
      subtitle: "Scalable ETL System",
      thumbnail: "/api/placeholder/400/300",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Designed and implemented a high-throughput data pipeline processing 10TB+ daily data.",
      fullDescription: `Developed an end-to-end data processing pipeline that transformed the company's ability to process and analyze large-scale data in real-time.

The system handles diverse data sources including user interactions, transaction logs, and inventory updates, processing over 10TB of data daily with sub-second latency.

Key achievements:
• Reduced data processing latency from hours to seconds
• Implemented exactly-once processing guarantees
• Built auto-scaling mechanisms for handling traffic spikes
• Developed comprehensive monitoring and alerting system`,
      impact: [
        { metric: "10TB+", description: "Daily data processed" },
        { metric: "99.99%", description: "Pipeline uptime" },
        { metric: "60%", description: "Cost reduction" },
        { metric: "<1s", description: "Processing latency" }
      ],
      technologies: {
        core: ["Apache Spark", "Kafka", "Airflow"],
        infrastructure: ["AWS EMR", "Docker", "Kubernetes"],
        monitoring: ["Prometheus", "Grafana", "ELK Stack"],
        storage: ["Delta Lake", "PostgreSQL", "Redis"]
      },
      challenges: [
        "Handling data skew in distributed processing",
        "Ensuring exactly-once processing guarantees",
        "Managing costs while maintaining performance"
      ],
      solutions: [
        "Implemented dynamic partition optimization",
        "Developed idempotent consumers with deduplication",
        "Built auto-scaling infrastructure with cost monitoring"
      ],
      outcomes: [
        "Reduced operational costs by 60%",
        "Improved data freshness from hours to seconds",
        "Enabled real-time analytics capabilities"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "ML-Powered Anomaly Detection",
      subtitle: "Predictive Maintenance System",
      thumbnail: "/api/placeholder/400/300",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description: "Built an anomaly detection system using machine learning for IoT sensor data.",
      fullDescription: `Developed a machine learning-based anomaly detection system for predictive maintenance of industrial equipment. The system processes real-time sensor data to detect potential failures before they occur.

The solution combines traditional statistical methods with deep learning approaches to achieve high accuracy while maintaining low latency requirements.

Key features:
• Real-time sensor data processing
• Multi-model ensemble approach
• Automated model retraining pipeline
• Interactive monitoring dashboard`,
      impact: [
        { metric: "95%", description: "Detection accuracy" },
        { metric: "$2.5M", description: "Maintenance savings" },
        { metric: "500K", description: "Daily predictions" }
      ],
      technologies: {
        core: ["PyTorch", "scikit-learn", "FastAPI"],
        infrastructure: ["Kubernetes", "Docker", "AWS"],
        monitoring: ["MLflow", "Prometheus", "Grafana"],
        storage: ["Redis", "PostgreSQL", "S3"]
      },
      challenges: [
        "Balancing model accuracy with real-time requirements",
        "Handling noisy and missing sensor data",
        "Managing model drift in production",
        "Scaling inference to handle peak loads"
      ],
      solutions: [
        "Implemented hybrid statistical/ML approach",
        "Developed robust data preprocessing pipeline",
        "Created automated model performance monitoring",
        "Built elastic inference infrastructure"
      ],
      outcomes: [
        "Achieved 95% detection accuracy",
        "Saved $2.5M in maintenance costs",
        "Processed 500K predictions daily"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  // Your existing projects array...

  const ProjectStats = ({ icon: Icon, label, value }) => (
    <div className="px-4 py-3 bg-amber-200/5 rounded-lg border border-amber-200/10 
                  hover:bg-amber-200/10 hover:border-amber-200/20 transition-all duration-300">
      <div className="flex items-center gap-2 text-amber-200/60 mb-1">
        <Icon className="w-4 h-4" />
        <span className="text-sm">{label}</span>
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
                  backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200/10 
                  hover:border-amber-200/30 transition-all duration-500 hover:scale-102">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/0 to-amber-200/5 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/5 rounded-full blur-3xl 
                     transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-700"></div>
      </div>
      
      {/* Image Container with Enhanced Hover Effects */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/80"></div>
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 
                       border-amber-200/10 group-hover:border-amber-200/20 
                       transition-colors duration-500 rounded-tr-xl"></div>
        </div>
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <div className="px-4 py-2 bg-amber-200/10 backdrop-blur-sm rounded-full 
                       border border-amber-200/20 text-white text-sm">
            {project.technologies.core[0]}
          </div>
        </div>
      </div>

      <div className="relative p-8 space-y-6">
        {/* Project Info with Enhanced Typography */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-200/90 
                       transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-lg text-amber-200/60">{project.subtitle}</p>
        </div>
        
        {/* Enhanced Impact Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {project.impact.slice(0, 3).map((item, index) => (
            <div key={index} className="group/metric text-center p-4 bg-amber-200/5 rounded-lg 
                                    border border-amber-200/10 hover:bg-amber-200/10 
                                    hover:border-amber-200/20 transition-all duration-300">
              <div className="text-2xl font-bold text-amber-200 mb-2 
                           group-hover/metric:scale-110 transition-transform duration-300">
                {item.metric}
              </div>
              <div className="text-sm text-gray-400 group-hover/metric:text-white transition-colors">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Tech Stack Display */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-amber-200/60">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.core.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 bg-amber-200/5 border border-amber-200/10 rounded-lg 
                         text-sm text-white hover:bg-amber-200/10 hover:border-amber-200/20 
                         transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
            <span className="px-3 py-1.5 bg-amber-200/5 border border-amber-200/10 rounded-lg 
                          text-sm text-white hover:bg-amber-200/10 hover:border-amber-200/20 
                          transition-all duration-300 cursor-pointer hover:scale-105">
              +{Object.values(project.technologies).flat().length - 3} more
            </span>
          </div>
        </div>

        {/* Enhanced Call-to-Action Button */}
        <button
          onClick={() => setSelectedProject(project)}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 
                   bg-gradient-to-r from-amber-200/20 to-amber-200/10
                   hover:from-amber-200/30 hover:to-amber-200/20
                   rounded-xl text-white transition-all duration-300 group/btn
                   border border-amber-200/10 hover:border-amber-200/20"
        >
          <span className="text-lg">View Details</span>
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* Enhanced Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent 
                       transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalSections = [
      { id: 'overview', label: 'Overview', icon: Layers },
      { id: 'technical', label: 'Technical', icon: CircuitBoard },
      { id: 'impact', label: 'Impact', icon: BarChart },
      { id: 'challenges', label: 'Challenges', icon: AlertTriangle }
    ];

    const renderModalContent = () => {
      switch (activeSection) {
        case 'overview':
          return (
            <div className="space-y-8">
              <div className="prose prose-amber prose-lg text-gray-300">
                {project.fullDescription}
              </div>
              <div className="grid grid-cols-3 gap-6">
                <ProjectStats icon={Timer} label="Timeline" value="6 months" />
                <ProjectStats icon={Users} label="Team Size" value="5 engineers" />
                <ProjectStats icon={Star} label="Success Rate" value="99.9%" />
              </div>
            </div>
          );
        case 'technical':
          return (
            <div className="space-y-8">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-medium text-amber-200/80 capitalize">{category}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {techs.map((tech, index) => (
                      <div 
                        key={index}
                        className="px-4 py-3 bg-amber-200/5 rounded-lg border border-amber-200/10 
                                 hover:bg-amber-200/10 hover:border-amber-200/20 
                                 transition-all duration-300 group"
                      >
                        <span className="text-white group-hover:text-amber-200 transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        case 'impact':
          return (
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-amber-200/80">Key Metrics</h4>
                <div className="grid gap-4">
                  {project.impact.map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-amber-200/5 rounded-lg border border-amber-200/10 
                               hover:bg-amber-200/10 hover:border-amber-200/20 
                               transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-amber-200 mb-2">{item.metric}</div>
                      <div className="text-gray-300">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-lg font-medium text-amber-200/80">Project Outcomes</h4>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-amber-200/5 rounded-lg 
                               border border-amber-200/10 hover:bg-amber-200/10 
                               hover:border-amber-200/20 transition-all duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-200/60 mt-1" />
                      <span className="text-gray-300">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        case 'challenges':
          return (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-amber-200/80 mb-6">Challenges</h4>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-amber-200/5 rounded-lg 
                               border border-amber-200/10 group hover:bg-amber-200/10 
                               hover:border-amber-200/20 transition-all duration-300"
                    >
                      <AlertTriangle className="w-5 h-5 text-amber-200/60 mt-1" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-amber-200/80 mb-6">Solutions</h4>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-amber-200/5 rounded-lg 
                               border border-amber-200/10 group hover:bg-amber-200/10 
                               hover:border-amber-200/20 transition-all duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-200/60 mt-1" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div 
        ref={modalRef}
        className="fixed inset-0 bg-gray-900/95 z-50 overflow-y-auto backdrop-blur-sm"
        onClick={(e) => e.target === modalRef.current && onClose()}
      >
        <div className="max-w-5xl mx-auto px-4 py-8">
          <button 
            onClick={onClose}
            className="fixed top-4 right-4 p-3 bg-amber-200/20 rounded-full 
                     hover:bg-amber-200/30 text-white transition-colors duration-300
                     border border-amber-200/10 hover:border-amber-200/20"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
                       rounded-xl border border-amber-200/20 overflow-hidden">
            {/* Enhanced Image Carousel */}
            <div className="relative aspect-video group">
              <img 
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? project.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 
                             bg-gray-900/80 rounded-full text-white opacity-0 
                             group-hover:opacity-100 transition-all duration-300 
                             hover:bg-gray-900/90 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === project.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 
                             bg-gray-900/80 rounded-full text-white opacity-0 
                             group-hover:opacity-100 transition-all duration-300 
                             hover:bg-gray-900/90 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              {/* Enhanced Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                           px-4 py-2 bg-gray-900/80 rounded-full text-white 
                           text-sm backdrop-blur-sm border border-amber-200/10">
                {currentImageIndex + 1} / {project.images.length}
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            </div>

            <div className="p-8">
              {/* Project Navigation */}
              <div className="flex justify-center gap-4 mb-8">
                {modalSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl 
                             transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-amber-200/20 text-white border border-amber-200/20'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 mb-8">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber-200/20 
                         rounded-xl hover:bg-amber-200/30 text-white 
                         transition-all duration-300 border border-amber-200/10 
                         hover:border-amber-200/20 group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber-200/20 
                         rounded-xl hover:bg-amber-200/30 text-white 
                         transition-all duration-300 border border-amber-200/10 
                         hover:border-amber-200/20 group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              </div>

              {/* Dynamic Content */}
              <div className="min-h-[400px]">
                {renderModalContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Enhanced Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="transform transition-all duration-500"
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Enhanced View All Projects Button */}
      <div className="text-center mt-16">
        <Link 
          to="/projects"
          className="group inline-flex items-center gap-3 px-8 py-4 
                   bg-gradient-to-r from-amber-200/20 to-amber-200/10
                   hover:from-amber-200/30 hover:to-amber-200/20
                   rounded-xl text-white transition-all duration-300
                   border border-amber-200/10 hover:border-amber-200/20"
        >
          <span className="text-lg">View All Projects</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Enhanced Background Elements */}
      <div className="fixed pointer-events-none inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 
                     bg-amber-200/5 rounded-full blur-3xl 
                     animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 
                     bg-amber-200/5 rounded-full blur-3xl 
                     animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;