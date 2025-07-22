import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = Math.random() * 15 + 10 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const container = document.querySelector('.particles');
      if (container) {
        container.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 25000);
      }
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return <div className="particles"></div>;
};

export default ParticleBackground;