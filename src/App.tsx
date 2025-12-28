import { useState } from 'react';
import { Home } from './pages/Home';
import { Web3GameJourney } from './pages/Web3GameJourney';
import { SpiritualPath } from './pages/SpiritualPath';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => handleNavigate('home')}
            className="w-full flex justify-center py-6 hover:opacity-80 transition-opacity"
          >
            <h1 className="text-3xl sm:text-4xl tracking-[0.1em] text-gray-100" style={{ fontFamily: 'Gochi Hand, cursive' }}>
              ALIFSYAH
            </h1>
          </button>
        </div>
      </header>

      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'web3' && <Web3GameJourney onNavigate={handleNavigate} />}
      {currentPage === 'spiritual' && <SpiritualPath onNavigate={handleNavigate} />}

      <footer className="border-t border-gray-800/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm font-light">
            Copyright © Alifsyah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
