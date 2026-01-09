import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWorks from './components/FeaturedWorks';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Hero />
      <FeaturedWorks />
    </div>
  );
}

export default App;
