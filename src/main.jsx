import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'; // Import the new component

// Case Study imports (UX/UI Projects)
import ScaffoldCaseStudy from './components/ScaffoldCaseStudy.jsx';
import PickiCaseStudy from './components/PickiCaseStudy.jsx';

// Graphic Design Project imports
import AuroreMenuProject from './components/AuroreMenuProject.jsx';
import DailyCoffeeProject from './components/DailyCoffeeProject.jsx';
import IcelandGuideProject from './components/IcelandGuideProject.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* Add this here */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        
        {/* Case Study Routes */}
        <Route path="/case-study/scaffold" element={<ScaffoldCaseStudy />} />
        <Route path="/case-study/picki" element={<PickiCaseStudy />} />
        
        {/* Graphic Design Project Routes */}
        <Route path="/design/aurore-menu" element={<AuroreMenuProject />} />
        <Route path="/design/daily-coffee" element={<DailyCoffeeProject />} />
        <Route path="/design/iceland-guide" element={<IcelandGuideProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);