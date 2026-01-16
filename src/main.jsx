import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About.jsx';
import ScaffoldCaseStudy from './components/ScaffoldCaseStudy.jsx'; // ADD THIS
import PickiCaseStudy from './components/PickiCaseStudy.jsx'; // ADD THIS (optional)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study/scaffold" element={<ScaffoldCaseStudy />} /> {/* FIX THIS */}
        <Route path="/case-study/picki" element={<PickiCaseStudy />} /> {/* ADD THIS */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);