import React, { useState, useEffect } from 'react';

interface ImpactCounterProps {
  value: number;
  color: string;
}

const ImpactCounter = ({ value, color }: ImpactCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // This controls the speed of the count animation
    const duration = 2000; // ms
    const steps = 50;
    const stepTime = duration / steps;
    const increment = value / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(increment * currentStep), value));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <h3 className={`text-3xl lg:text-4xl font-bold mb-2 ${color}`}>
      {count.toLocaleString()}
    </h3>
  );
};

export default ImpactCounter;