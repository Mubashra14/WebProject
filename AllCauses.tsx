import React, { useEffect } from 'react';
import { BookOpen, Heart, Coffee, Droplet, Users, Laptop, Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import CauseCard from './CauseCard';
import { useNavigate } from 'react-router-dom';

const AllCauses = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    },
    {
      id: 4,
      title: 'Clean Water',
      description: 'Provide clean drinking water and sanitation facilities to rural communities.',
      icon: <Droplet className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-sky-500 to-sky-700',
      colorLight: 'bg-sky-100',
      progress: 58,
      goal: 40000,
      raised: 23200
    },
    {
      id: 5,
      title: 'Women Empowerment',
      description: 'Support programs that provide skills training and opportunities for women.',
      icon: <Users className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/6457391/pexels-photo-6457391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-purple-500 to-purple-700',
      colorLight: 'bg-purple-100',
      progress: 35,
      goal: 60000,
      raised: 21000
    },
    {
      id: 6,
      title: 'Digital Literacy',
      description: 'Enable access to technology education and digital skills training.',
      icon: <Laptop className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-indigo-500 to-indigo-700',
      colorLight: 'bg-indigo-100',
      progress: 42,
      goal: 45000,
      raised: 18900
    },
    {
      id: 7,
      title: 'Housing Support',
      description: 'Help provide shelter and housing assistance to homeless families.',
      icon: <Home className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-orange-500 to-orange-700',
      colorLight: 'bg-orange-100',
      progress: 28,
      goal: 80000,
      raised: 22400
    },
    {
      id: 8,
      title: 'Emergency Relief',
      description: 'Provide immediate assistance during natural disasters and emergencies.',
      icon: <AlertTriangle className="h-6 w-6" />,
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      color: 'from-red-500 to-red-700',
      colorLight: 'bg-red-100',
      progress: 85,
      goal: 100000,
      raised: 85000
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">All Causes</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore all our active causes and choose where you'd like to make an impact. 
            Every contribution brings us closer to our goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {causes.map((cause) => (
            <div key={cause.id} onClick={() => navigate('/donate', { state: { cause: cause.title }})}>
              <CauseCard cause={cause} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCauses;