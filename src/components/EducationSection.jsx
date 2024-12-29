import React from 'react';
import { 
  BookOpen, MapPin, GraduationCap, Clock, Code, Award, Star
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EducationSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const education = [
    {
      degree: "Master of Science in Computer Software Engineering",
      institution: "Northeastern University",
      location: "Boston, MA",
      period: "September 2024 - Present",
      gpa: "3.667/4.0",
      type: "Graduate Studies",
      courses: [
        "Data Science Engineering Methods and Tools",
        "Program Structures and Algorithms",
        "Database Systems"
      ]
    },
    {
      degree: "Bachelor of Engineering in Information Science and Engineering",
      institution: "Visvesvaraya Technological University",
      location: "Karnataka, India",
      period: "August 2017 - August 2021",
      type: "Undergraduate Studies",
      achievements: [
        "Secured 2nd place in department for Final Year Project on Automated Guided Vehicle",
        "Secured first place in App Development Workshop Competition",
        "Participated in IBM Chatbot Hackathon",
        "Active member of regional Equestrian Club during academic years"
      ],

      courses: [
        "Data Mining and Data Warehousing",
        "Machine Learning",
        "Operating Systems",
        "Software Testing",
        "Data Structures and Applications",
        "Web Technology and Applications",
        "Software Architecture and Design Patterns",
        "Big Data Analytics"
      ]
    }
  ];

  const EducationCard = ({ edu }) => (
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
                <GraduationCap className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200/90 
                           transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="text-lg text-amber-200/60">{edu.institution}</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-amber-200/60" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-amber-200/60" />
                <span>{edu.location}</span>
              </div>
              <span className="inline-flex items-center px-4 py-1 bg-amber-200/10 
                           rounded-full text-amber-200 text-sm border border-amber-200/20 
                           group-hover:bg-amber-200/20 group-hover:border-amber-200/30 
                           transition-all duration-300">
                {edu.type}
              </span>
            </div>
          </div>

          {edu.gpa && (
            <div className="mt-4 sm:mt-0">
              <div className="px-4 py-3 bg-gradient-to-br from-amber-200/10 to-amber-200/5 
                           rounded-xl backdrop-blur-sm border border-amber-200/10 
                           group-hover:border-amber-200/20 transition-all duration-500">
                <span className="text-amber-200/80 text-sm font-medium block mb-1">GPA</span>
                <span className="text-white text-2xl font-bold tracking-tight">{edu.gpa}</span>
              </div>
            </div>
          )}
        </div>

        {/* Achievements Section */}
        {edu.achievements && (
          <div className="mb-8 bg-gray-900/30 rounded-xl p-6 space-y-4 
                       group-hover:bg-gray-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-200/80" />
              Key Achievements
            </h4>
            <div className="space-y-3">
              {edu.achievements.map((achievement, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 group/achievement"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-200/40 
                               group-hover/achievement:bg-amber-200/60 transition-colors duration-300" />
                  <span className="text-gray-300 group-hover/achievement:text-white 
                               transition-colors duration-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Courses Section */}
        {edu.courses && (
          <div className="bg-gray-900/30 rounded-xl p-6 space-y-4 
                       group-hover:bg-gray-900/40 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-200/80" />
              {edu.type === "Graduate Studies" ? "Advanced Coursework" : "Key Coursework"}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {edu.courses.map((course, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-800/50 rounded-lg p-4 border border-amber-200/10 
                           hover:border-amber-200/20 transition-all duration-300 
                           hover:bg-gray-800/70 group/course"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-200/40 
                                 group-hover/course:bg-amber-200/60 transition-colors duration-300" />
                    <span className="text-gray-300 group-hover/course:text-white 
                                 transition-colors duration-300">{course}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
      {education.map((edu, index) => (
        <EducationCard key={index} edu={edu} />
      ))}
    </div>
  );
};

export default EducationSection;