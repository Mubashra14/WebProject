import React, { useState } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { donationApi } from '../lib/api'; // Adjust the path as needed

const DonationForm = () => {
   console.log('donationApi:', donationApi);
  console.log('donationApi.apply:', donationApi.apply);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCause = location.state?.cause || '';

  const [formData, setFormData] = useState({
  full_name: '',
  email: '',
  amount: '',
  donation_type: 'one-time',
  cause: selectedCause,
  payment_method: '',
  account_number: '',
  message: '',
  anonymous: false
});


  const [isSubmitting, setIsSubmitting] = useState(false);

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const target = e.target as HTMLInputElement;  // cast to input element
  const { name, value, type } = target;
  const checked = target.checked; // now TypeScript knows checked exists

  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await donationApi.apply(formData);
      toast.success('Thank you for your donation!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Failed to process donation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAccountLabel = () => {
    switch (formData.payment_method) {
      case 'bank':
        return 'Bank Account Number';
      case 'paypal':
        return 'PayPal Email';
      case 'easypaisa':
      case 'jazzcash':
        return 'Mobile Number';
      default:
        return 'Account Number';
    }
  };

  const getAccountPlaceholder = () => {
    switch (formData.payment_method) {
      case 'bank':
        return 'Enter bank account number';
      case 'paypal':
        return 'Enter PayPal email';
      case 'easypaisa':
      case 'jazzcash':
        return 'Enter mobile number';
      default:
        return 'Enter account number';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-8 text-white">
            <Heart className="h-12 w-12 mb-4" />
            <h2 className="text-3xl font-bold mb-2">Make a Donation</h2>
            <p className="text-teal-100">Your generosity can change lives. Every contribution counts.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Donation Amount (PKR)
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  placeholder="Enter amount in PKR"
                />
              </div>

              <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  name="payment_method"
                  value={formData.payment_method}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                >
                  <option value="">Select payment method</option>
                  <option value="bank">Bank Account</option>
                  <option value="easypaisa">Easypaisa</option>
                  <option value="jazzcash">JazzCash</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {getAccountLabel()}
                </label>
                <input
                  type={formData.payment_method === 'paypal' ? 'email' : 'text'}
                  id="accountNumber"
                  name="account_number"
                  value={formData.account_number}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                  placeholder={getAccountPlaceholder()}
                />
              </div>

              <div>
                <label htmlFor="donationType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Donation Type
                </label>
                <select
                  id="donationType"
                  name="donationType"
                  value={formData.donation_type}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                >
                  <option value="one-time">One-time Donation</option>
                  <option value="monthly">Monthly Donation</option>
                  <option value="quarterly">Quarterly Donation</option>
                  <option value="yearly">Yearly Donation</option>
                </select>
              </div>

              <div>
                <label htmlFor="cause" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Cause
                </label>
                <select
                  id="cause"
                  name="cause"
                  value={formData.cause}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                >
                  <option value="">Select a cause</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="food-security">Food Security</option>
                  <option value="emergency-relief">Emergency Relief</option>
                  <option value="clean-water">Clean Water</option>
                  <option value="women-empowerment">Women Empowerment</option>
                  <option value="digital-literacy">Digital Literacy</option>
                  <option value="housing-support">Housing Support</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:text-white"
                placeholder="Leave a message with your donation"
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  Make this donation anonymous
                </span>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Processing...'
                ) : (
                  <>
                    <Heart className="h-5 w-5 mr-2" />
                    Complete Donation
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              Your donation is secure and encrypted. By donating, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
