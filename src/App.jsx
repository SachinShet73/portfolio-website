import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './components/AllProjects';
import AllArticles from './components/AllArticles';
import AllCertifications from './components/AllCertifications';
import LifeBeyondCodeAll from './components/LifeBeyondCodeAll';
import emailjs from '@emailjs/browser';
emailjs.init('YOUR_PUBLIC_KEY');


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/articles" element={<AllArticles />} />
      <Route path="/certifications" element={<AllCertifications />} />
      <Route path="/life" element={<LifeBeyondCodeAll />} />
    </Routes>
  );
};

export default App;