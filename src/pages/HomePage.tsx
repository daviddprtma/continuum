import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { useWalletTracking } from '../hooks/useWalletTracking';

const HomePage: React.FC = () => {
  const { isConnected } = useWalletTracking();

  const handleWalletRequired = () => {
    open();
  };

  return (
    <>
      <Header isConnected={isConnected} onWalletRequired={handleWalletRequired} />
      <div className="flex-1">
        <Hero />
      </div>
      
      {/* Description and Footer Container */}
      <div className="w-full py-16 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          {/* Description Text - Transparent */}
          <div className="self-end">
            <p className="text-sm text-black-300">
              {/* make a dynamic year */}
              &copy; {new Date().getFullYear()} Continuum. All rights reserved.
            </p>
          </div>
          
          <div className="max-w-md text-black ml-8">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-black">Continuum</span> is the seamless flow of assets from one state or person to another 
              — a new paradigm for how we manage and transfer wealth in the digital age.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;