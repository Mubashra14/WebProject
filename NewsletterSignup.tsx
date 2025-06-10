import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { newsletterApi } from '../lib/api'; // Make sure this path matches your project

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await newsletterApi.apply(formData);
      toast.success('Successfully subscribed to the newsletter!');
      setFormData({ name: '', email: '' });
    } catch (error: any) {
      console.error('Error subscribing:', error);
      toast.error(error?.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-teal-600 to-blue-700 p-8 md:p-12 text-white">
              <Mail className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-teal-100 mb-6">
                Subscribe to our newsletter to receive updates on our impact, stories from the field,
                and opportunities to get involved.
              </p>
              <ul className="space-y-2 text-teal-100">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="..." clipRule="evenodd" />
                  </svg>
                  Monthly impact reports
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="..." clipRule="evenodd" />
                  </svg>
                  Inspiring beneficiary stories
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="..." clipRule="evenodd" />
                  </svg>
                  Volunteer opportunities
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg dark:bg-gray-700"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg dark:bg-gray-700"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      required
                      className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      I agree to receive emails from Umeed Network
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
