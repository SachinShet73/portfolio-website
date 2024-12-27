import React from 'react';
import { Calendar, Building2, ArrowUpRight, Award, GitBranch, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading data infrastructure and ML platforms development for enterprise clients.",
      achievements: [
        "Architected and implemented a real-time data processing pipeline handling 10TB+ daily data",
        "Reduced cloud infrastructure costs by 45% through optimization and auto-scaling",
        "Led a team of 5 engineers in modernizing the data warehouse architecture"
      ],
      technologies: [
        "Apache Spark",
        "Airflow",
        "Kubernetes",
        "AWS",
        "Snowflake",
        "Terraform"
      ],
      projects: [
        {
          name: "Data Lake Migration",
          description: "Led the migration from legacy data warehouse to modern data lake architecture",
          impact: "60% improvement in query performance"
        },
        {
          name: "ML Pipeline Automation",
          description: "Built automated ML training and deployment pipeline",
          impact: "Reduced model deployment time from days to hours"
        }
      ]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Inc",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained data pipelines and analytics infrastructure.",
      achievements: [
        "Implemented streaming analytics platform processing 1M+ events per second",
        "Improved data pipeline reliability from 92% to 99.9%",
        "Developed automated data quality monitoring system"
      ],
      technologies: [
        "Python",
        "Kafka",
        "Docker",
        "GCP",
        "BigQuery",
        "dbt"
      ],
      projects: [
        {
          name: "Real-time Analytics Platform",
          description: "Built real-time analytics system for e-commerce platform",
          impact: "Enabled real-time personalization for 2M+ users"
        },
        {
          name: "Data Quality Framework",
          description: "Developed comprehensive data quality monitoring system",
          impact: "Reduced data incidents by 75%"
        }
      ]
    },
    {
      title: "ML Engineering Intern",
      company: "AI Solutions Lab",
      location: "Remote",
      period: "Summer 2020",
      type: "Internship",
      description: "Worked on machine learning model deployment and optimization.",
      achievements: [
        "Developed automated model retraining pipeline",
        "Implemented A/B testing framework for model deployment",
        "Created monitoring dashboard for model performance"
      ],
      technologies: [
        "PyTorch",
        "MLflow",
        "FastAPI",
        "Redis",
        "PostgreSQL"
      ],
      projects: [
        {
          name: "Model Monitoring System",
          description: "Built comprehensive monitoring system for ML models",
          impact: "Reduced model degradation detection time by 80%"
        }
      ]
    }
  ];

  const ExperienceCard = ({ exp }) => (
    <div className="relative group">
      {/* Background gradient effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/10 via-amber-100/5 to-amber-200/10 
                    rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 
                    backdrop-blur-sm rounded-lg border border-amber-200/20 p-6 sm:p-8 
                    transition-all duration-500 hover:border-amber-200/40 
                    hover:bg-gray-800/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.1)]">
        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-amber-200/10 
                      group-hover:border-amber-200/20 transition-all duration-500"></div>
        
        {/* Header */}
        <div className="sm:flex justify-between items-start mb-8">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-200/5 rounded-lg group-hover:bg-amber-200/10 
                           transition-colors duration-500">
                <Building2 className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200/90 
                           transition-colors duration-300">
                  {exp.title}
                </h3>
                <div className="text-lg text-amber-200/60">{exp.company}</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-4 h-4 text-amber-200/60" />
                <span>{exp.period}</span>
              </div>
              <span className="inline-flex items-center px-4 py-1 bg-amber-200/10 
                           rounded-full text-amber-200 text-sm border border-amber-200/20 
                           group-hover:bg-amber-200/20 group-hover:border-amber-200/30 
                           transition-all duration-300">
                {exp.type}
              </span>
            </div>
          </div>
        </div>
  
        <div className="relative">
          {/* Description */}
          <p className="text-gray-300 mb-8 leading-relaxed">{exp.description}</p>
  
          {/* Key Achievements */}
          <div className="mb-8 bg-gray-900/30 rounded-xl p-6 space-y-4 
                       group-hover:bg-gray-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-200/80" />
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 group/item">
                  <span className="text-amber-200/40 mt-1.5 group-hover/item:text-amber-200/60 
                               transition-colors">•</span>
                  <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Projects */}
          {exp.projects.length > 0 && (
            <div className="mb-8 bg-gray-900/30 rounded-xl p-6 space-y-4 
                         group-hover:bg-gray-900/40 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-amber-200/80" />
                Notable Projects
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {exp.projects.map((project, idx) => (
                  <div 
                    key={idx}
                    className="bg-gray-800/50 rounded-lg p-4 border border-amber-200/10 
                             hover:border-amber-200/20 transition-all duration-300 
                             hover:bg-gray-800/70 group/project"
                  >
                    <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                      {project.name}
                      <ArrowUpRight className="w-4 h-4 text-amber-200/60 
                                           group-hover/project:translate-x-0.5 
                                           group-hover/project:-translate-y-0.5 
                                           transition-transform" />
                    </h5>
                    <p className="text-gray-400 text-sm mb-2 group-hover/project:text-gray-300 
                               transition-colors">{project.description}</p>
                    <p className="text-amber-200/80 text-sm font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-200/40"></span>
                      {project.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {/* Technologies */}
          <div className="bg-gray-900/30 rounded-xl p-6 space-y-4 
                       group-hover:bg-gray-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-amber-200/80" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-amber-200/5 rounded-lg text-sm text-white 
                           border border-amber-200/10 hover:bg-amber-200/10 
                           hover:border-amber-200/20 transition-all duration-300 
                           cursor-default group-hover:shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      ref={ref}
      className={`space-y-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} exp={exp} />
      ))}
    </div>
  );
};

export default ExperienceSection;