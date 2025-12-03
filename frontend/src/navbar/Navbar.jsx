import { SignedIn, SignedOut, SignInButton, useAuth, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-2xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                className="h-16 w-16 md:h-20 md:w-20 relative z-10 rounded-full border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300" 
                src="./logo.png" 
                alt="Gym Bros Logo" 
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-black text-white">GYM</span>
                <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">BROS</span>
              </div>
              <p className="text-xs text-gray-300 font-medium">Strength & Unity</p>
            </div>
          </div>

          {/* Center Title Section */}
          <div className="flex-1 flex flex-col items-center mx-4">
            <div className="relative">
              <h2 className="text-xl md:text-3xl font-black bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent text-center drop-shadow-lg">
                Welcome to Gym-Bros
              </h2>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="mt-2 flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
              <span className="text-yellow-400 text-sm">🏛️</span>
              <h3 className="text-sm text-center md:text-base font-semibold text-white">
                College Gym of JGEC
              </h3>
              <span className="text-yellow-400 text-sm">💪</span>
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex items-center">
            <SignedOut>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <span className="relative flex items-center space-x-2">
                  <span>🔐</span>
                  <SignInButton />
                </span>
              </button>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
                <span className="hidden md:block text-white font-medium text-sm">Account</span>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 ring-2 ring-white shadow-lg"
                      }
                    }}
                  />
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </nav>
  );
};

export default Navbar;