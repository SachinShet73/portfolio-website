import React from 'react';
import Layout from '../components/Layout';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import CertificationsSection from '../components/CertificationsSection';
import ProjectsSection from '../components/ProjectsSection';
import ArticlesPreview from '../components/ArticlesPreview';
import LifeBeyondCodePreview from '../components/LifeBeyondCodePreview';
import ContactSection from '../components/ContactSection';
import { Code, Award, BookOpen, Briefcase, FileText, Compass, Mail } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      <div className="space-y-20">
        <AnimatedSection id="home" className="min-h-screen flex items-center">
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection id="skills">
          <SectionHeader 
            icon={Code}
            title="Technical Skills"
            subtitle="Technologies & Expertise"
          />
          <SkillsSection />
        </AnimatedSection>

        <AnimatedSection id="experience">
          <SectionHeader 
            icon={Award}
            title="Experience"
            subtitle="Professional Journey"
          />
          <ExperienceSection />
        </AnimatedSection>

        <AnimatedSection id="education">
          <SectionHeader 
            icon={BookOpen}
            title="Education"
            subtitle="Academic Background"
          />
          <EducationSection />
        </AnimatedSection>

        <AnimatedSection id="certifications">
          <SectionHeader 
            icon={Award}
            title="Certifications"
            subtitle="Professional Qualifications"
          />
          <CertificationsSection />
        </AnimatedSection>

        <AnimatedSection id="projects">
          <SectionHeader 
            icon={Briefcase}
            title="Projects"
            subtitle="Featured Work"
          />
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection id="articles">
          <SectionHeader 
            icon={FileText}
            title="Articles"
            subtitle="Technical Writing"
          />
          <ArticlesPreview />
        </AnimatedSection>

        <AnimatedSection id="life">
          <SectionHeader 
            icon={Compass}
            title="Life Beyond Code"
            subtitle="Interests & Activities"
          />
          <LifeBeyondCodePreview />
        </AnimatedSection>

        <AnimatedSection id="contact">
          <SectionHeader 
            icon={Mail}
            title="Get in Touch"
            subtitle="Let's Connect"
          />
          <ContactSection />
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default Home;