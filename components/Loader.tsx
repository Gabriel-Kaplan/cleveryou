import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
      {/* Book Formation Animation */}
      <div className="relative">
        {/* Book Cover */}
        <div className="relative w-48 h-32 perspective-1000">
          {/* Book spine and back */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-l-lg shadow-2xl transform-gpu animate-pulse">
            <div className="absolute top-4 left-4 w-8 h-1 bg-white/30 rounded"></div>
            <div className="absolute top-7 left-4 w-12 h-1 bg-white/20 rounded"></div>
          </div>
          
          {/* Animated Pages */}
          <div className="absolute inset-0">
            {/* Page layers with staggered animations */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-white rounded-r-lg border border-gray-200 shadow-lg transform-gpu origin-left"
                style={{
                  zIndex: 10 - i,
                  transform: `translateX(${i * 2}px) translateZ(${i * 1}px)`,
                  animation: `pageFlip 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                {/* Page content lines */}
                <div className="p-4 space-y-2">
                  <div className="h-2 bg-gradient-to-r from-blue-200 to-transparent rounded animate-pulse" style={{animationDelay: `${i * 0.3}s`}}></div>
                  <div className="h-2 bg-gradient-to-r from-purple-200 to-transparent rounded animate-pulse" style={{animationDelay: `${i * 0.4}s`}}></div>
                  <div className="h-2 bg-gradient-to-r from-pink-200 to-transparent rounded animate-pulse" style={{animationDelay: `${i * 0.5}s`}}></div>
                  <div className="h-2 bg-gradient-to-r from-blue-100 to-transparent rounded animate-pulse" style={{animationDelay: `${i * 0.6}s`}}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Magical particles around book */}
          <div className="absolute -inset-8">
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{top: '10%', left: '80%', animationDelay: '0s'}}></div>
            <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{top: '70%', left: '90%', animationDelay: '0.5s'}}></div>
            <div className="absolute w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce" style={{top: '30%', left: '85%', animationDelay: '1s'}}></div>
            <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-bounce" style={{top: '60%', left: '10%', animationDelay: '1.5s'}}></div>
            <div className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" style={{top: '20%', left: '5%', animationDelay: '2s'}}></div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl animate-pulse"></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="flex items-center space-x-1">
        {"Crafting Your Plans".split("").map((letter, i) => (
          <span
            key={i}
            className={`text-2xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
              letter === " " ? "w-2" : ""
            }`}
            style={{
              animation: `fadeInUp 0.6s ease-out forwards`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      
      {/* Progress indicator */}
      <div className="flex items-center space-x-2">
        <div className="text-sm text-gray-400">Pages</div>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-6 bg-gradient-to-t from-blue-200 to-blue-500 rounded-full overflow-hidden"
            >
              <div 
                className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                style={{
                  height: '100%',
                  animation: `fillUp 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pageFlip {
          0%, 80% { transform: translateX(0px) rotateY(0deg); }
          10%, 70% { transform: translateX(4px) rotateY(-15deg); }
          40% { transform: translateX(8px) rotateY(-25deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        
        @keyframes fillUp {
          0%, 20% { height: 0%; }
          60%, 100% { height: 100%; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};
export default Loader
