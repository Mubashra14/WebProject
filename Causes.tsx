import React from 'react';
import { BookOpen, Heart, Coffee } from 'lucide-react';
import CauseCard from './CauseCard';
import { useNavigate } from 'react-router-dom';

const Causes = () => {
  const navigate = useNavigate();
  
  const causes = [
    {
      id: 1,
      title: 'Education',
      description: 'Support access to quality education for underprivileged children across Pakistan.',
      icon: <BookOpen className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-blue-500 to-blue-700',
      colorLight: 'bg-blue-100',
      progress: 65,
      goal: 50000,
      raised: 32500
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Help provide essential medical services and supplies to communities in need.',
      icon: <Heart className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-teal-500 to-teal-700',
      colorLight: 'bg-teal-100',
      progress: 45,
      goal: 75000,
      raised: 33750
    },
    {
      id: 3,
      title: 'Food Security',
      description: 'Ensure families have access to nutritious food and sustainable food sources.',
      icon: <Coffee className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/6647121/pexels-photo-6647121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-amber-500 to-amber-700',
      colorLight: 'bg-amber-100',
      progress: 72,
      goal: 30000,
      raised: 21600
    }
  ];

  return (
    <section id="causes" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Causes</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Discover the causes we support and how your contributions are making a real difference 
            in the lives of people across Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div key={cause.id} onClick={() => navigate('/donate', { state: { cause: cause.title }})}>
              <CauseCard cause={cause} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/all-causes')}
            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full transition-all duration-300"
          >
            View All Causes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Causes;