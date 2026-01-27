import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About.jsx';

// Case Study imports (UX/UI Projects)
import ScaffoldCaseStudy from './components/ScaffoldCaseStudy.jsx';
import PickiCaseStudy from './components/PickiCaseStudy.jsx';

// Graphic Design Project imports
import AuroreMenuProject from './components/AuroreMenuProject.jsx';
// Add more graphic design projects as you create them
// import PosterDesignProject from './components/PosterDesignProject.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        
        {/* Case Study Routes */}
        <Route path="/case-study/scaffold" element={<ScaffoldCaseStudy />} />
        <Route path="/case-study/picki" element={<PickiCaseStudy />} />
        
        {/* Graphic Design Project Routes */}
        <Route path="/design/aurore-menu" element={<AuroreMenuProject />} />
        {/* <Route path="/design/posters" element={<PosterDesignProject />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);