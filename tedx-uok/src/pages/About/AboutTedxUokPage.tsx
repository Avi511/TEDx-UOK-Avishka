// pages/About/AboutTedxUokPage.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutTedxUokPage = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  const currentTheme = "The Ripple Effect";
  const eventYear = "2024";

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
            <span className="text-white ml-4">UOK</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Spreading Ideas at University of Kelaniya
          </p>
          <div className="inline-block bg-gradient-to-r from-[#EB0028]/20 to-transparent border-l-4 border-[#EB0028] px-6 py-3 mb-12">
            <p className="text-xl md:text-2xl text-white">
              {eventYear} Theme: <span className="text-[#EB0028] font-bold">{currentTheme}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-white">
            Our <span className="text-[#EB0028]">Story</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-32 bg-[#EB0028] mb-6"></div>
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                TEDxUOK was founded with a simple yet powerful vision: to create a platform 
                where innovative ideas from the University of Kelaniya community could be 
                shared with the world.
              </p>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                As the first officially licensed TEDx event at University of Kelaniya, 
                we're committed to fostering intellectual curiosity, interdisciplinary 
                dialogue, and transformative thinking.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 h-[400px] flex flex-col justify-center items-center">
              <div className="text-6xl mb-6 text-white">🏛️</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">University of Kelaniya</h3>
              <p className="text-gray-400 text-center text-lg">
                A premier institution fostering innovation, research, and community leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              TEDxUOK {eventYear}: <span className="text-[#EB0028]">{currentTheme}</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              What is the Ripple Effect?
            </h3>
            <p className="text-xl text-gray-300 mb-6 text-center leading-relaxed">
              Every idea, no matter how small, has the potential to create waves of change.
            </p>
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
            <div className="mt-4 space-y-4">
              <Link 
                to="/about/ted"
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mr-4"
              >
                About TED
              </Link>
              <Link 
                to="/about/tedx"
                className="inline-block border-2 border-[#EB0028] text-white px-6 py-3 rounded-full hover:bg-[#EB0028] transition-all duration-300"
              >
                About TEDx
              </Link>
              <div className="mt-8">
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
        </div>
      </footer>
    </div>
  );
};

export default AboutTedxUokPage;