import React, { useEffect } from 'react';
import { BarChart, PieChart, Activity, Users, School, Heart, Coffee, Droplet, Laptop, Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ImpactDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const impactStats = [
    {
      category: 'Education',
      beneficiaries: 15000,
      projects: 45,
      investment: 325000,
      icon: <School className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      category: 'Healthcare',
      beneficiaries: 12000,
      projects: 32,
      investment: 450000,
      icon: <Heart className="h-6 w-6" />,
      color: 'bg-teal-500'
    },
    {
      category: 'Food Security',
      beneficiaries: 8500,
      projects: 28,
      investment: 216000,
      icon: <Coffee className="h-6 w-6" />,
      color: 'bg-amber-500'
    },
    {
      category: 'Clean Water',
      beneficiaries: 5000,
      projects: 15,
      investment: 232000,
      icon: <Droplet className="h-6 w-6" />,
      color: 'bg-sky-500'
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Impact Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track our progress and see the real impact of your contributions across different causes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Impact</h3>
              <Activity className="h-6 w-6 text-teal-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">45,382</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Lives impacted</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Projects</h3>
              <BarChart className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">120</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ongoing initiatives</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Donations</h3>
              <PieChart className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">₨12.5M</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Funds raised</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Volunteers</h3>
              <Users className="h-6 w-6 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">850+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active volunteers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {impactStats.map((stat) => (
            <div key={stat.category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`${stat.color} p-3 rounded-lg text-white mr-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{stat.category}</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.beneficiaries.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Beneficiaries</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.projects}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ₨{(stat.investment/1000).toFixed(0)}K
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Invested</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className={`h-full ${stat.color} rounded-full`} 
                    style={{ width: `${(stat.beneficiaries/15000)*100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;