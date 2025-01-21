import React from 'react';
import HeroSection from './components/HeroSection';
import { NavBar } from './components/ui/tubelight-navbar';

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Properties', url: '#' },
    { name: 'Contact Us', url: '#' },
  ];

  return (
    <div className="min-h-screen">
      <NavBar items={navItems} />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
