import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown, Sun, Moon, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToPartners = () => {
    const partnersSection = document.getElementById('partners');
    if (partnersSection) {
      partnersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className={`font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Home
            </a>
            <div className="relative group">
              <button 
                className={`flex items-center font-medium transition-colors hover:text-teal-600 ${
                  scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
                }`}
              >
                Causes <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10 hidden group-hover:block transition-all duration-300">
                <a href="#education" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-600">Education</a>
                <a href="#healthcare" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-600">Healthcare</a>
                <a href="#food-security" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-600">Food Security</a>
              </div>
            </div>
            <a 
              href="#impact" 
              className={`font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Our Impact
            </a>
            <a 
              href="#partners" 
              className={`font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Partners
            </a>
            <a 
              href="#volunteer" 
              className={`font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              Volunteer
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
            >
              About Us
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={scrollToPartners}
              className="flex items-center px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Building2 className="mr-2 h-4 w-4" /> Become a Partner
            </button>
            <button 
              onClick={() => navigate('/donate')}
              className="flex items-center px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Heart className="mr-2 h-4 w-4" /> Donate Now
            </button> 
            <Link 
  to="/admin" 
  className={`font-medium transition-colors hover:text-teal-600 ${
    scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
  }`}
>
  Admin Panel
</Link>

          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <nav className="flex flex-col space-y-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <a 
              href="#home" 
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <div>
              <button className="flex items-center justify-between w-full font-medium text-gray-800 dark:text-gray-200 hover:text-teal-600">
                Causes <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <a 
                  href="#education" 
                  className="block text-gray-800 dark:text-gray-200 hover:text-teal-600"
                  onClick={() => setIsOpen(false)}
                >
                  Education
                </a>
                <a 
                  href="#healthcare" 
                  className="block text-gray-800 dark:text-gray-200 hover:text-teal-600"
                  onClick={() => setIsOpen(false)}
                >
                  Healthcare
                </a>
                <a 
                  href="#food-security" 
                  className="block text-gray-800 dark:text-gray-200 hover:text-teal-600"
                  onClick={() => setIsOpen(false)}
                >
                  Food Security
                </a>
              </div>
            </div>
            <a 
              href="#impact" 
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Our Impact
            </a>
            <a 
              href="#partners" 
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Partners
            </a>
            <a 
              href="#volunteer" 
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Volunteer
            </a>
            <a 
              href="#about" 
              className="font-medium text-gray-800 dark:text-gray-200 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <button 
              onClick={() => {
                scrollToPartners();
                setIsOpen(false);
              }}
              className="flex items-center justify-center px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300"
            >
              <Building2 className="mr-2 h-4 w-4" /> Become a Partner
            </button>
            <button 
              onClick={() => {
                navigate('/donate');
                setIsOpen(false);
              }}
              className="flex items-center justify-center px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300"
            >
              <Heart className="mr-2 h-4 w-4" /> Donate Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;