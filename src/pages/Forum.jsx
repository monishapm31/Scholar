import React from 'react';

// Import local images
import civilImage from '../assets/civil.jpg';
import mechanicsImage from '../assets/mech.jpg';
import computerScienceImage from '../assets/cs.jpg';

const Forum = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Forum</h2>
      <p className="text-center mb-6">This is the Forum section. Choose a field to explore.</p>

      {/* Grid layout for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Civil card with local background image */}
    <div className="bg-cover bg-center p-6 rounded-lg shadow-lg hover:shadow-xl opacity-80"
             style={{ backgroundImage: `url(${civilImage})` }}>
          <h3 className="text-3xl font-semibold text-white text-center mb-4">Civil Engineering</h3>
          <p className="text-white text-center">Join discussions on Civil Engineering topics and share your insights.</p>
        </div>

        {/* Mechanics card with local background image */}
        <div className="bg-cover bg-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
             style={{ backgroundImage: `url(${mechanicsImage})` }}>
          <h3 className="text-3xl font-semibold text-white text-center mb-4">Mechanical Engineering</h3>
          <p className="text-white text-center">Explore Mechanical Engineering concepts, problems, and solutions.</p>
        </div>

        {/* Computer Science card with local background image */}
        <div className="bg-cover bg-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
             style={{ backgroundImage: `url(${computerScienceImage})` }}>
          <h3 className="text-3xl font-semibold text-white text-center mb-4">Computer Science</h3>
          <p className="text-white text-center">Dive into Computer Science discussions, programming, and algorithms.</p>
        </div>
      </div>
    </div>
  );
};

export default Forum;
