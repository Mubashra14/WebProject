import React from 'react';
import { Users, School, Heart, Coffee } from 'lucide-react';
import ImpactCounter from './ImpactCounter';
import { useNavigate } from 'react-router-dom';

const Impact = () => {
  const navigate = useNavigate();
  
  const stats = [
    { 
      id: 1, 
      icon: <Users className="h-8 w-8 text-blue-600" />, 
      value: 45382, 
      label: 'Lives Impacted', 
      color: 'text-blue-600' 
    },
    { 
      id: 2, 
      icon: <School className="h-8 w-8 text-teal-600" />, 
      value: 128, 
      label: 'Schools Supported', 
      color: 'text-teal-600' 
    },
    { 
      id: 3, 
      icon: <Heart className="h-8 w-8 text-red-600" />, 
      value: 75, 
      label: 'Healthcare Projects', 
      color: 'text-red-600' 
    },
    { 
      id: 4, 
      icon: <Coffee className="h-8 w-8 text-amber-600" />, 
      value: 1250000, 
      label: 'Meals Provided', 
      color: 'text-amber-600' 
    }
  ];

  return (
    <section id="impact" className="py-20 bg-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-teal-100">
            Through the generosity of our donors and the dedication of our volunteers, 
            we're creating meaningful change across Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <ImpactCounter value={stat.value} color={stat.color} />
              <p className="text-teal-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/impact-dashboard')}
            className="inline-flex items-center px-6 py-3 bg-white text-teal-900 font-medium rounded-full transition-all duration-300 hover:bg-teal-100 shadow-lg"
          >
            View Impact Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;