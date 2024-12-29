import React from 'react';
import {
  Database, Code, Brain,
  Cloud, Server, ArrowLeftRight, Clock,
  Box, Container, Terminal,
  FileCode, Network, CircuitBoard,
  BarChart2, Binary, 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const skillCategories = {
    dataEngineering: {
      icon: Database,
      title: "Data Engineering & Cloud",
      description: "Expertise in ETL pipelines and cloud platforms",
      skills: [
        { name: 'Azure Data Factory', icon: Cloud },
        { name: 'Azure Blob Storage', icon: Container },
        { name: 'Snowflake', icon: Database },
        { name: 'Apache Airflow', icon: Clock },
        { name: 'Apache Kafka', icon: ArrowLeftRight },
        { name: 'Apache Spark', icon: Server }
      ]
    },
    databases: {
      icon: Server,
      title: "Databases & Storage",
      description: "Database management and search solutions",
      skills: [
        { name: 'PostgreSQL', icon: Database },
        { name: 'Elasticsearch', icon: Network },
        { name: 'MongoDB', icon: Container },
        { name: 'SQL', icon: FileCode }
      ]
    },
    development: {
      icon: Code,
      title: "Development & ML",
      description: "Programming languages and ML frameworks",
      skills: [
        { name: 'Python', icon: Terminal },
        { name: 'TensorFlow', icon: Brain },
        { name: 'OpenCV', icon: CircuitBoard },
        { name: 'NumPy', icon: Binary },
        { name: 'Pandas', icon: BarChart2 },
        { name: 'Docker', icon: Box }
      ]
    }
  };

  const SkillCard = ({ category, data }) => {
    const Icon = data.icon;
    
    return (
      <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl 
                    border border-amber-200/10 hover:border-amber-200/30 transition-all duration-500 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/0 to-amber-200/5 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-amber-200/10 
                      group-hover:border-amber-200/20 transition-colors duration-500"></div>
        
        {/* Content */}
        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-amber-200/5 rounded-xl group-hover:bg-amber-200/10 
                          transition-colors duration-500">
              <Icon className="w-8 h-8 text-amber-200" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
              <p className="text-amber-200/60 text-sm">{data.description}</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-3">
            {data.skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-amber-200/5 rounded-lg 
                           hover:bg-amber-200/10 transition-all duration-300 group/skill"
                >
                  <SkillIcon className="w-4 h-4 text-amber-200/60 group-hover/skill:text-amber-200 
                                    transition-colors duration-300" />
                  <span className="text-sm text-gray-300 group-hover/skill:text-white 
                                transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Hover Decoration */}
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent 
                       via-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 
                       transition-opacity duration-500"></div>
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
      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(([category, data], index) => (
          <div
            key={category}
            className="transform transition-all duration-500"
            style={{
              transitionDelay: `${index * 100}ms`,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0
            }}
          >
            <SkillCard category={category} data={data} />
          </div>
        ))}
      </div>

      {/* Background Decorations */}
      <div className="fixed pointer-events-none inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default SkillsSection;