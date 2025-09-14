'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate fewer particles for minimalism
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 1 + 0.3,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(particle.y * 0.005) * 0.3,
      })).map(particle => 
        particle.y < -10 ? { ...particle, y: window.innerHeight + 10 } : particle
      ));
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black"></div>
      
      {/* Minimal Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-purple-800/20"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: `0 0 ${particle.size * 3}px rgba(88, 28, 135, 0.3)`,
          }}
        />
      ))}

      {/* Subtle Mouse Follower */}
      <div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-10 opacity-30"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: 'radial-gradient(circle, rgba(88, 28, 135, 0.1) 0%, transparent 60%)',
          transition: 'all 0.2s ease-out',
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Clean Title */}
        <div className="relative mb-12">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wider">
            COMING SOON
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-800 to-transparent"></div>
        </div>

        {/* Simple Subtitle */}
        <p className="text-lg md:text-xl text-purple-300/80 mb-16 text-center font-light tracking-wide ">
Codex of connections is on its way.
        </p>

        {/* Minimal Loading Animation */}
        <div className="relative mb-20">
          <div className="w-16 h-16 border border-purple-800/50 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-4 h-4 bg-purple-800 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent"></div>
    </div>
  );
}
