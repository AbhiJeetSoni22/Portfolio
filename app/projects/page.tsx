'use client';

import React from 'react';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const ProjectPage = () => {

  // Falling stars
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div className="relative min-h-screen bg-black overflow-hidden px-4">

      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95" />

      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            initial={{ top: '-10px', opacity: 0 }}
            animate={{
              y: '100vh',
              opacity: [0, star.opacity, 0],
              transition: {
                delay: star.delay,
                duration: star.duration,
                repeat: Infinity,
              },
            }}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255,255,255,0.3)`,
            }}
          />
        ))}
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-20 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          My <span className="text-primary">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-3 max-w-xl mx-auto"
        >
          A collection of my work showcasing skills in full-stack development,
          UI/UX design, and real-world problem solving.
        </motion.p>
      </div>

      {/* Projects Section (Glass Effect) */}
      <div className="relative z-10 max-w-7xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 shadow-lg">
        <Projects />
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default ProjectPage;