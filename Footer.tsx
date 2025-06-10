import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Umeed Network connects donors and volunteers with trusted organizations across Pakistan, 
              creating transparency and meaningful impact for communities in need.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#causes" className="text-gray-400 hover:text-white transition-colors">Our Causes</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Donation Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Causes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              </li>
              <li>
                <a href="#healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</a>
              </li>
              <li>
                <a href="#food-security" className="text-gray-400 hover:text-white transition-colors">Food Security</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Women Empowerment</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Clean Water</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Disaster Relief</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Office 12, 3rd Floor, Al-Hafeez Shopping Mall, Lahore, Pakistan
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+92 42 1234 5678</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@umeednetwork.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Umeed Network. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Donation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;