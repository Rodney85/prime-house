import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Home, InfoIcon, BookOpen, Building2, PhoneCall } from 'lucide-react';
import HeroSection from './components/HeroSection';
import { NavBar } from './components/ui/tubelight-navbar';

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: InfoIcon },
    { name: 'Blog', url: '#', icon: BookOpen },
    { name: 'Properties', url: '#', icon: Building2 },
    { name: 'Contact Us', url: '#', icon: PhoneCall },
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
