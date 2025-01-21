import { motion } from 'framer-motion';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#FFF9F5] min-h-screen w-full overflow-x-hidden flex items-center">
      {/* Decorative elements */}
      <motion.div 
        className="absolute left-4 sm:left-10 top-10 text-[#FFE6D6] text-4xl sm:text-6xl opacity-50"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.5, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        ✱
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
          {/* Main heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-center lg:text-left">
              <span className="block mb-1">Transforming</span>
              <span className="block mb-1">Spaces,</span>
              <span className="block">Realizing <span className="text-[#FF5A1F]">Dreams</span></span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              Turning your vision into reality by transforming spaces into perfect
              dream homes with expert care.
            </p>
          </motion.div>

          {/* Rating section */}
          <motion.div 
            className="flex items-center space-x-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex -space-x-3">
              {[
                '/download.jpg',
                '/download (1).jpg',
                '/Fishtail Braid.jpg'
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white relative overflow-hidden"
                  style={{ zIndex: 3 - index }}
                >
                  <img 
                    src={src} 
                    alt={`Customer ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">12K Rating</span>
              <span className="text-sm text-gray-500">(4.9 average)</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <a
              href="#properties"
              className="inline-flex items-center px-6 py-3 bg-[#FF5A1F] text-white rounded-lg font-medium transition-all duration-200 hover:bg-[#FF4500] transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF5A1F]"
            >
              Explore Properties
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right content - Image */}
        <motion.div 
          className="w-full lg:w-1/2 relative flex items-center justify-center px-4 lg:px-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[500px] mx-auto">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Gallery of Zaferaniye Garden Complex _ Olgooco  - 3.jpg"
                alt="Modern architectural building"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
