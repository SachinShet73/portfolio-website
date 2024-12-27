import React from 'react';
import { 
  BookOpen, MapPin, GraduationCap, FileText, Link as LinkIcon, Clock
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EducationSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Machine Learning and Artificial Intelligence",
      institution: "University Name",
      location: "City, Country",
      period: "2022 - 2024",
      gpa: "3.92/4.0",
      courses: [
        "Deep Learning",
        "Distributed Systems",
        "Big Data Analytics",
        "Statistical Machine Learning",
        "Advanced Algorithms",
        "Cloud Computing"
      ],
      projects: [
        {
          title: "Distributed ML Pipeline",
          description: "Built a scalable machine learning pipeline for large-scale data processing"
        },
        {
          title: "Real-time Analytics Platform",
          description: "Developed a real-time data analytics platform using stream processing"
        }
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      specialization: "Data Science and Analytics",
      institution: "University Name",
      location: "City, Country",
      period: "2018 - 2022",
      gpa: "3.85/4.0",
      courses: [
        "Database Systems",
        "Data Mining",
        "Machine Learning Fundamentals",
        "Cloud Computing",
        "Software Engineering",
        "Web Development"
      ],
      projects: [
        {
          title: "Predictive Analytics System",
          description: "Developed a predictive analytics system for student performance"
        },
        {
          title: "Data Visualization Dashboard",
          description: "Created an interactive data visualization dashboard"
        }
      ]
    }
  ];

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-200/10">
      <Icon className="w-5 h-5 text-amber-200" />
      <h4 className="text-lg font-semibold text-white">{title}</h4>
    </div>
  );

  return (
    <div 
      ref={ref}
      className={`space-y-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {education.map((edu, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden
            border border-amber-200/5 hover:border-amber-200/10 transition-colors duration-500"
        >
          {/* Header Section */}
          <div className="bg-amber-200/5 p-8 border-b border-amber-200/10">
            <div className="flex items-start justify-between flex-wrap gap-6 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-200/10 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-amber-200" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-amber-200/80 text-lg">{edu.specialization}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="px-4 py-3 bg-amber-200/10 rounded-lg text-center min-w-32 
                             hover:bg-amber-200/20 transition-colors duration-300">
                  <span className="text-amber-200 font-semibold block mb-1">GPA</span>
                  <span className="text-white text-2xl font-bold">{edu.gpa}</span>
                </div>
                <div className="px-4 py-3 bg-amber-200/10 rounded-lg text-center min-w-32
                             hover:bg-amber-200/20 transition-colors duration-300">
                  <span className="text-amber-200 font-semibold block mb-1">Duration</span>
                  <span className="text-white text-lg font-medium">{edu.period}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <BookOpen className="w-4 h-4 text-amber-200/60" />
                <span>{edu.institution}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 text-amber-200/60" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Clock className="w-4 h-4 text-amber-200/60" />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Courses */}
              <div>
                <SectionHeader icon={BookOpen} title="Key Courses" />
                <div className="grid grid-cols-2 gap-3">
                  {edu.courses.map((course, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-3 bg-amber-200/5 rounded-lg text-gray-300 
                             hover:bg-amber-200/10 hover:text-white transition-all duration-300
                             cursor-default flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-200/40 
                                 group-hover:bg-amber-200/60 transition-colors duration-300" />
                      <span className="flex-1">{course}</span>
                      <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <SectionHeader icon={FileText} title="Notable Projects" />
                <div className="space-y-4">
                  {edu.projects.map((project, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-amber-200/5 rounded-xl text-gray-300 
                             hover:bg-amber-200/10 hover:text-white transition-all duration-300
                             border border-transparent hover:border-amber-200/20"
                    >
                      <h5 className="text-white font-medium mb-2 flex items-center gap-2">
                        {project.title}
                      </h5>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;