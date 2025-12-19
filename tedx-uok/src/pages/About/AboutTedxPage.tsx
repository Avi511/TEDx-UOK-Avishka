// pages/About/AboutTedxPage.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutTedxPage = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-white">TED</span>
                <span className="text-[#EB0028]">x</span>
                <span className="text-white">UOK</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/about" className="text-[#EB0028] font-bold transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Full Screen Hero */}
      <section className="pt-20 min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-8">
            <span className="text-white">TED</span>
            <span className="text-[#EB0028]">x</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Independently Organized TED Events
          </p>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            In the spirit of ideas worth spreading, TEDx is a program of local, 
            self-organized events that bring people together to share a TED-like experience.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 h-[400px] flex flex-col justify-center">
              <div className="text-6xl mb-6 text-center text-white">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">What is TEDx?</h3>
              <p className="text-gray-400 text-center text-lg">
                TEDx events are independently organized under a free license granted by TED.
                These events bring the spirit of TED to local communities around the globe.
              </p>
            </div>
            
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Community <span className="text-[#EB0028]">Driven</span>
              </h2>
              <div className="h-1 w-32 bg-[#EB0028] mb-6"></div>
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                At a TEDx event, TED Talk videos and live speakers combine 
                to spark deep discussion and connection.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Each event is organized by passionate volunteers who believe 
                in the power of ideas to transform their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TED vs TEDx Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-white">
            <span className="text-white">TED</span>
            <span className="text-gray-500 mx-4">vs</span>
            <span className="text-[#EB0028]">TEDx</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TED Column */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-300">
              <div className="text-center mb-8">
                <span className="text-[#EB0028] font-bold text-5xl">TED</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-xl mt-1">•</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Organized by TED</h4>
                    <p className="text-gray-400 text-sm">Directly organized by the TED organization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-xl mt-1">•</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Global Conferences</h4>
                    <p className="text-gray-400 text-sm">Major international events</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* TEDx Column */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-300">
              <div className="text-center mb-8">
                <span className="text-white font-medium text-4xl">TED</span>
                <span className="text-[#EB0028] font-bold text-5xl">x</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-white text-xl mt-1">•</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Independently Organized</h4>
                    <p className="text-gray-400 text-sm">Organized by local volunteers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-white text-xl mt-1">•</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Local Community Events</h4>
                    <p className="text-gray-400 text-sm">Held in communities worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              This independent TEDx event is operated under license from TED.
            </p>
            <div className="mt-4">
              <Link 
                to="/about"
                className="inline-flex items-center text-lg text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to About Overview
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutTedxPage;