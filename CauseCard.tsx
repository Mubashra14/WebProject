import React from 'react';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CauseProps {
  cause: {
    id: number;
    title: string;
    description: string;
    icon: ReactNode;
    image: string;
    color: string;
    colorLight: string;
    progress: number;
    goal: number;
    raised: number;
  }
}

const CauseCard = ({ cause }: CauseProps) => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate', { state: { cause: cause.title } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48">
        <img 
          src={cause.image} 
          alt={cause.title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 left-4 w-12 h-12 ${cause.colorLight} rounded-full flex items-center justify-center text-white`}>
          {cause.icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cause.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{cause.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Raised: ${cause.raised.toLocaleString()}
            </span>
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Goal: ${cause.goal.toLocaleString()}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${cause.color} rounded-full`} 
              style={{ width: `${cause.progress}%` }}
            ></div>
          </div>
          <div className="mt-1 text-right text-sm font-medium text-gray-500 dark:text-gray-400">
            {cause.progress}% Complete
          </div>
        </div>
        
        <button 
          onClick={handleDonateClick}
          className={`w-full inline-block text-center py-3 bg-gradient-to-r ${cause.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default CauseCard;