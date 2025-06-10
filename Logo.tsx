import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-600 text-white">
        <Heart className="h-5 w-5" />
      </div>
      <div className="ml-2">
        <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Umeed Network
        </h1>
      </div>
    </div>
  );
};

export default Logo;