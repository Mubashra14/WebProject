import { volunteerApi } from '../lib/api'; 
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    interests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await volunteerApi.apply(formData); // ✅ actual backend call
    toast.success('Application submitted successfully!');
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      interests: '',
      message: ''
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Failed to submit application. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const volunteerAreas = [
    'Education mentorship',
    'Healthcare assistance',
    'Food distribution',
    'Digital skills training',
    'Event coordination',
    'Content creation',
    'Fundraising support',
    'Community outreach'
  ];

  return (
    <section id="volunteer" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Volunteer With Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Join our network of dedicated volunteers making a difference across Pakistan. 
              Whether you can offer a few hours a week or specialized skills, there's a place 
              for you in the Umeed Network family.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {volunteerAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{area}</span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="full_name" 
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 dark:text-white"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Areas of Interest
                </label>
                <select 
                  id="interests" 
                  value={formData.interests}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 dark:text-white"
                >
                  <option value="">Select an area</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="food">Food Security</option>
                  <option value="digital">Digital Skills</option>
                  <option value="events">Event Management</option>
                  <option value="content">Content Creation</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="outreach">Community Outreach</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Why do you want to volunteer?
                </label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 dark:text-white"
                  placeholder="Tell us a bit about yourself and why you'd like to volunteer"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Volunteers helping in community" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-gray-900 dark:text-white font-medium">"Volunteering with Umeed Network has been one of the most rewarding experiences of my life."</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">- Fatima K., Volunteer since 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;