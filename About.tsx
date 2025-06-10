import React from 'react';
import { Users, Globe, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Umeed Network</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            A web-based platform dedicated to connecting donors and volunteers with trusted organizations in Pakistan, 
            enhancing transparency and meaningful engagement across causes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Community Connection</h3>
                <p className="text-gray-600 dark:text-gray-300">Bridging the gap between donors, volunteers, and organizations.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">National Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">Serving communities across Pakistan with targeted support.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Trust & Transparency</h3>
                <p className="text-gray-600 dark:text-gray-300">Ensuring all donations reach verified and trusted organizations.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Measurable Results</h3>
                <p className="text-gray-600 dark:text-gray-300">Track your contribution's impact with transparent reporting.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Umeed Network was founded with a simple yet powerful vision: to create a transparent bridge between those who want to help and those who need it most. Our platform enhances transparency and engagement by offering impact dashboards, donation tracking, and volunteer participation features.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe in the power of collective action. By connecting generous hearts with reliable organizations, we're building a network of hope that spans across Pakistan, focusing on critical causes like education, healthcare, and food security.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Every donation and volunteer hour creates ripples of positive change. With Umeed Network, you can see exactly how your contribution makes a difference in communities across Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;