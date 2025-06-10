import React, { useState } from 'react';
import { Building2, Award } from 'lucide-react';
import toast from 'react-hot-toast';
import { partnerApi } from '../lib/api'; // Adjust the path as needed

const Partners = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_name: '',
    email: '',
    phone: '',
    focus_area: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await partnerApi.apply(formData);
      toast.success('Partner application submitted successfully!');
      setFormData({
        organization_name: '',
        contact_name: '',
        email: '',
        phone: '',
        focus_area: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const partners = [
    {
      id: 1,
      name: "Care Foundation Pakistan",
      logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Leading education initiatives across rural Pakistan",
      focus: "Education"
    },
    {
      id: 2,
      name: "Health Bridge",
      logo: "https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Providing healthcare services to underserved communities",
      focus: "Healthcare"
    },
    {
      id: 3,
      name: "Food For All Pakistan",
      logo: "https://images.pexels.com/photos/6646866/pexels-photo-6646866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Fighting hunger through sustainable food programs",
      focus: "Food Security"
    },
    {
      id: 4,
      name: "Digital Pakistan Foundation",
      logo: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      description: "Empowering communities through digital literacy",
      focus: "Education"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Trusted Partners</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Working together with trusted organizations to create lasting impact across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{partner.description}</p>
                <div className="flex items-center text-teal-600 dark:text-teal-400">
                  <Building2 className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{partner.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {!showForm ? (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <Award className="h-12 w-12 text-teal-600 dark:text-teal-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Become a Partner</h3>
                  <p className="text-gray-600 dark:text-gray-300">Join our network of trusted organizations</p>
                </div>
              </div>
              <button 
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Partner Application</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close partner application form"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="organization_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization_name"
                    value={formData.organization_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Contact Person Name
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
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
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="focus_area" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Focus Area
                  </label>
                  <select
                    id="focus_area"
                    value={formData.focus_area}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  >
                    <option value="">Select focus area</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Food Security">Food Security</option>
                    <option value="Digital Literacy">Digital Literacy</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Clean Water">Clean Water</option>
                    <option value="Disaster Relief">Disaster Relief</option>
                  </select>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Partners;
