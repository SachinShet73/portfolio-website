import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './components/AllProjects';
import AllArticles from './components/AllArticles';
import LifeBeyondCodeAll from './components/LifeBeyondCodeAll'; // Add this import
import emailjs from '@emailjs/browser';
emailjs.init('YOUR_PUBLIC_KEY');


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/articles" element={<AllArticles />} />
      <Route path="/life" element={<LifeBeyondCodeAll />} /> {/* Add this route */}
    
    </Routes>
  );
};

export default App;