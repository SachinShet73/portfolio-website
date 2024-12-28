import React from 'react';
import { Calendar, Building2, ArrowUpRight, Award, GitBranch, Code } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const experiences = [
    {
      title: "Senior Systems Engineer",
      company: "Infosys",
      location: "Bangalore, India",
      period: "October 2023 - February 2024",
      type: "Full-time",
      description: "Promoted from Systems Engineer (November 2021 – September 2023). Led development of enterprise ETL solutions and data pipelines.",
      achievements: [
        "Reduced data processing costs by 40% through design and implementation of Azure Data Factory ETL pipeline, automating 2GB+ daily data processing",
        "Saved 20+ person-hours weekly by developing Python automation scripts that processed 55,000+ daily records",
        "Achieved 99.9% data accuracy across 180+ tables by engineering resilient data migration workflows",
        "Decreased manual operations by 90% through Apache Airflow workflow orchestration",
        "Led cross-functional teams in delivering 3 major client projects ahead of schedule"
      ],
      technologies: [
        "Azure Data Factory",
        "Azure Blob Storage",
        "Snowflake",
        "Apache Airflow",
        "Python",
        "SQL"
      ],
      projects: [
        {
          name: "Enterprise ETL Pipeline",
          description: "Architected end-to-end data processing solution",
          impact: "40% cost reduction in data processing"
        },
        {
          name: "Data Migration Framework",
          description: "Built resilient workflow between Azure and Snowflake",
          impact: "99.9% data accuracy maintained"
        }
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "RoveLabs",
      location: "Davangere, India",
      period: "April 2020 - September 2020",
      type: "Internship",
      description: "Developed real-time verification systems using computer vision and machine learning.",
      achievements: [
        "Increased security system reliability with 95% face detection accuracy at 30 FPS",
        "Reduced system latency to under 2 seconds through concurrent processing",
        "Enhanced threat detection with 90% accuracy, reducing false positives by 40%"
      ],
      technologies: [
        "OpenCV",
        "dlib",
        "TensorFlow",
        "Python",
        "librosa"
      ],
      projects: [
        {
          name: "Real-time Verification System",
          description: "Developed face detection and audio analysis system",
          impact: "95% detection accuracy with 30 FPS performance"
        },
        {
          name: "Audio Anomaly Detection",
          description: "Created ML-based audio analysis system",
          impact: "40% reduction in false positives"
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