"use client"
import { useState } from 'react';
import { Minus, Plus, RefreshCw } from 'lucide-react';

// The main application component for the Counter App
const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // Prevent counting below zero just for practical appeal
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  // Dynamically determine the color class for the count display
  const countColorClass = count > 0 
    ? 'text-teal-400' 
    : count < 0 
      ? 'text-red-400' 
      : 'text-gray-200';

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-sans">
      {/* Counter Card Container */}
      <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_80px_0_rgba(20,184,166,0.2)] p-8 sm:p-10 transition-all duration-500 ease-in-out">
        
        <h1 className="text-4xl font-extrabold text-center mb-10 text-white tracking-wider flex items-center justify-center">
          <RefreshCw className="w-6 h-6 mr-3 text-teal-400 animate-spin-slow" />
          The Modern Counter
        </h1>

        {/* Count Display */}
        <div className={`text-center mb-12 p-6 rounded-2xl border-4 border-gray-700/50 transition-colors duration-300 ${countColorClass}`}>
          <p className="text-8xl font-black tabular-nums transition-transform duration-300 ease-out transform hover:scale-105">
            {count}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          
          {/* Increment Button (Primary Action) */}
          <button
            onClick={increment}
            className="w-full flex items-center justify-center py-4 text-xl font-bold rounded-xl bg-teal-600 text-white shadow-lg shadow-teal-600/30 hover:bg-teal-500 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
          >
            <Plus className="w-6 h-6 mr-2" />
            Increment
          </button>

          {/* Decrement Button */}
          <button
            onClick={decrement}
            className="w-full flex items-center justify-center py-3 text-lg font-semibold rounded-xl border border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 transition-all duration-300 transform hover:scale-[1.005] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-30"
          >
            <Minus className="w-5 h-5 mr-2" />
            Decrement
          </button>
          
          {/* Reset Button (Secondary Action) */}
          <button
            onClick={reset}
            className="w-full flex items-center justify-center py-2 text-sm font-medium rounded-xl text-red-400 hover:text-red-300 transition-colors duration-300"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset Count
          </button>
        </div>
      </div>

      {/* Custom CSS for a gentle, slow spin effect */}
      <style>{`
        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: slowSpin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;