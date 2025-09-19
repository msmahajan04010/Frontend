import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Contact from './components/Contact';
import Home from './components/Home';
import CryoGenics from './components/Cryogenics';
import ProjectCaseStudies from './components/ProjectCaseStudies';
import LNG from './components/LNG';
import Hydrogen from './components/Hydrogen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />  {/* 👈 No Router here, just this */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CryoGenics" element={<CryoGenics />} />
        <Route path="/PCS" element={<ProjectCaseStudies />} />
        <Route path="/LNG" element={<LNG />} />
        <Route path="/Hydrogen" element={<Hydrogen />} />
      </Routes>
    </>
  );
}

export default App;
