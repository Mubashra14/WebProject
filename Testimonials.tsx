import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Umeed Network has transformed how I give back to my community. The transparency and impact tracking gives me confidence that my donations are making a real difference.",
      name: "Ahmed Khan",
      title: "Regular Donor",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 2,
      quote: "As a school principal, I've seen firsthand how Umeed Network's education initiatives have transformed our students' learning experience and improved attendance rates.",
      name: "Rabia Mahmood",
      title: "School Principal, Lahore",
      avatar: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      id: 3,
      quote: "The medical camp organized by Umeed Network in our village provided care to over 300 people who otherwise wouldn't have access to healthcare. Their impact is immeasurable.",
      name: "Dr. Saleem Akbar",
      title: "Healthcare Volunteer",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-teal-100">
            Hear from our donors, volunteers, and the communities we serve.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute text-teal-500/20 h-24 w-24 -top-10 -left-4" />
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-teal-400"
              />
              
              <div>
                <p className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-teal-300">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-teal-400' : 'bg-white/30'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;