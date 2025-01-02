import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, ExternalLink, 
  Github, Database, Brain, GitBranch, Award, Code, Search, Filter,
  Clock, Users, Zap, Tag, Layout, Cloud, AlertCircle, CheckCircle
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState(null);
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: Database },
    { id: 'data', label: 'Data Engineering', icon: Database },
    { id: 'ml', label: 'Machine Learning', icon: Brain },
    { id: 'academic', label: 'Academic Projects', icon: Award }
  ];

  // Enhanced project data
  const projects = [
    {
      id: 1,
      title: "Real-time Data Processing Pipeline",
      subtitle: "Scalable ETL System",
      category: "data",
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
      status: "Production",
      timeline: "6 months",
      team: "5 engineers",
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
      githubUrl: "https://github.com/example",
      tags: ["ETL", "Big Data", "Real-time Processing"]
    },
    {
    id: 2,
    title: "ML-Powered Anomaly Detection",
    subtitle: "Predictive Maintenance System",
    category: "ml",
    thumbnail: "/api/placeholder/400/300",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Built an ML-based anomaly detection system achieving 95% accuracy in predicting equipment failures.",
    fullDescription: `Engineered a sophisticated machine learning system for predictive maintenance that revolutionized equipment failure detection and maintenance scheduling.
  
  The system processes real-time sensor data from industrial equipment, using a hybrid approach combining traditional statistical methods with deep learning to detect anomalies before they lead to failures.
  
  Key achievements:
  - Developed ensemble model combining statistical and deep learning approaches
  - Created automated model retraining pipeline with drift detection
  - Implemented real-time processing of sensor data streams
  - Built interactive dashboard for maintenance team monitoring`,
    status: "Production",
    timeline: "8 months",
    team: "4 engineers",
    impact: [
      { metric: "95%", description: "Detection accuracy" },
      { metric: "$2.5M", description: "Maintenance savings" },
      { metric: "500K", description: "Daily predictions" },
      { metric: "85%", description: "False alarm reduction" }
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
      "Reduced false alarms by 85%",
      "Processed 500K predictions daily"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    tags: ["Machine Learning", "Anomaly Detection", "Predictive Maintenance"],
    // ... other projects
  },

  {
    id: 3, // Adjust ID as needed
    title: "University Event Management System",
    subtitle: "Full-Stack Next.js Application",
    category: "academic", // or whichever category fits best
    thumbnail: "/api/placeholder/400/300", // Replace with actual screenshot
    images: [
      "/images/login.png",
      "/images/user-management.png",
      "/images/venues.png",
      "/images/create-event.png",
      "/images/events-organizer.png",
      "/images/events-attendee.png"
    ],
    description: "A comprehensive event management system for universities with role-based access control and real-time updates.",
    fullDescription: `Developed a full-stack Next.js application for managing university events, providing a seamless experience for admins, organizers, and attendees.
  
  The system handles complete event lifecycle management including creation, registration, venue management, and user administration with role-based access control.
  
  Key features:
  - Role-based authentication (Admin, Organizer, Attendee)
  - Event creation and management
  - Venue capacity tracking and management
  - User registration and profile management
  - Real-time event registration updates
  - Administrative dashboard with analytics`,
    status: "Production",
    timeline: "3 months",
    team: "Solo Project",
    impact: [
      { metric: "1000+", description: "User capacity" },
      { metric: "100%", description: "Test coverage" },
      { metric: "50+", description: "API endpoints" },
      { metric: "<2s", description: "Page load time" }
    ],
    technologies: {
      frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      backend: ["Next.js API Routes", "MS SQL Server", "Node.js"],
      ui: ["shadcn/ui", "Tailwind CSS", "Geist Font"],
      tools: ["ESLint", "Docker", "Git"]
    },
    challenges: [
      "Implementing secure role-based access control",
      "Managing complex database relationships",
      "Handling real-time event registration updates",
      "Building responsive interfaces for all device sizes"
    ],
    solutions: [
      "Created middleware for route protection and role verification",
      "Designed efficient SQL schema with proper indexing",
      "Implemented optimistic UI updates with server validation",
      "Used Tailwind CSS for mobile-first responsive design"
    ],
    outcomes: [
      "Successfully deployed production-ready application",
      "Achieved 100% test coverage",
      "Implemented all core features with room for expansion",
      "Created comprehensive documentation for future maintenance"
    ],
    liveUrl: "https://university-event-management-system-m8s7.vercel.app/", 
    githubUrl: "https://github.com/SachinShet73/University-Event-Management-System", 
    tags: ["Next.js", "React", "TypeScript", "SQL Server", "Event Management", "Full Stack"]
  } ,

  ];

  const allTechnologies = [...new Set(
    projects.flatMap(project => 
      Object.values(project.technologies).flat()
    )
  )].sort();

  const filterProjects = () => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const searchMatch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const techMatch = !selectedTech || 
        Object.values(project.technologies)
          .flat()
          .includes(selectedTech);
      
      return categoryMatch && searchMatch && techMatch;
    });
  };

  const ProjectMetric = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <Icon className="w-4 h-4 text-amber-200/60" />
      <span>{label}:</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-200/20 hover:border-amber-200/40 transition-all duration-300 hover:transform hover:scale-102">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"/>
      <img 
        src={project.thumbnail} 
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative z-20 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
              {project.title}
            </h3>
            <p className="text-amber-200/60">{project.subtitle}</p>
          </div>
          <span className="px-3 py-1 bg-amber-200/10 rounded-full text-sm text-white">
            {project.status}
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <ProjectMetric icon={Clock} label="Timeline" value={project.timeline} />
          <ProjectMetric icon={Users} label="Team Size" value={project.team} />
          <ProjectMetric icon={Zap} label="Impact" value={project.impact[0].metric} />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-amber-200/10 rounded-full text-sm text-white hover:bg-amber-200/20 transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSearchQuery(tag);
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(project.technologies).slice(0, 1).map(([category, techs]) => (
              techs.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-amber-200/10 rounded-full text-sm text-white hover:bg-amber-200/20 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTech(tech);
                  }}
                >
                  {tech}
                </span>
              ))
            ))}
            <span className="px-3 py-1 bg-amber-200/10 rounded-full text-sm text-white">
              +{Object.values(project.technologies).flat().length - 3} more
            </span>
          </div>

          <button
            onClick={() => setSelectedProject(project)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-amber-200/20 rounded-full text-white hover:bg-amber-200/30 transition-all group"
          >
            View Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
      { id: 'overview', label: 'Overview', icon: Layout },
      { id: 'technical', label: 'Technical Details', icon: Code },
      { id: 'challenges', label: 'Challenges & Solutions', icon: AlertCircle },
      { id: 'impact', label: 'Impact & Outcomes', icon: Award }
    ];

    const renderTabContent = () => {
      switch (activeTab) {
        case 'overview':
          return (
            <div className="space-y-8">
              <div className="text-gray-300 whitespace-pre-line">
                {project.fullDescription}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.impact.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-900/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-amber-200 mb-2">{item.metric}</div>
                    <div className="text-sm text-gray-300">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        case 'technical':
          return (
            <div className="space-y-8">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="text-lg font-medium text-amber-200/80 mb-4 capitalize">
                    {category} Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-amber-200/10 rounded-lg text-white hover:bg-amber-200/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        case 'challenges':
          return (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-medium text-amber-200/80 mb-4">Challenges</h4>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-amber-200/60 mt-0.5" />
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-amber-200/80 mb-4">Solutions</h4>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-200/60 mt-0.5" />
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        case 'impact':
          return (
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-900/50 rounded-lg border border-amber-200/20"
                  >
                    <Award className="w-5 h-5 text-amber-200 mb-2" />
                    <p className="text-gray-300">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-gray-900/95 z-50 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <button 
            onClick={onClose}
            className="fixed top-4 right-4 p-2 bg-amber-200/20 rounded-full hover:bg-amber-200/30 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-gray-800/50 rounded-xl border border-amber-200/20 overflow-hidden">
            {/* Image Carousel */}
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-900"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === project.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-900"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-xl text-amber-200/80">{project.subtitle}</p>
              </div>
            </div>

            <div className="p-8">
              {/* Project Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber-200/20 rounded-full hover:bg-amber-200/30 text-white transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-amber-200/20 rounded-full hover:bg-amber-200/30 text-white transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-4 mb-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      activeTab === tab.id
                        ? 'bg-amber-200/20 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-96">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-10">
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-full border border-amber-200/20 text-white hover:bg-gray-800/70 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-amber-200/60 text-xl mb-8">Showcasing My Technical Journey</p>

          {/* Search and Filter Controls */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full px-6 py-3 bg-gray-800/50 rounded-full border border-amber-200/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-amber-200/40"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-amber-200/20 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Technology Filter */}
            <select
              value={selectedTech || ''}
              onChange={(e) => setSelectedTech(e.target.value || null)}
              className="px-4 py-2 bg-gray-800/50 rounded-full border border-amber-200/20 text-white focus:outline-none focus:border-amber-200/40"
            >
              <option value="">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterProjects().map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-200/20 rounded-full text-white hover:bg-amber-200/30 transition-colors group"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default AllProjects;