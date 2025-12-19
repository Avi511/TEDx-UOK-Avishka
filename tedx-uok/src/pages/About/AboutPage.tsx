// pages/About/AboutPage.tsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const AboutPage = () => {
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
      <Navbar />
      
      {/* Full Screen Hero */}
      <section className="pt-20 min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white">
            About
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Discover the mission, history, and ideas behind TED, TEDx, and TEDxUOK.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            {/* TED Card */}
            <Link 
              to="/about/ted" 
              className="group relative h-[400px] bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-500 hover:scale-[1.02] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <span className="text-[#EB0028] font-bold text-6xl">TED</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">About TED</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Mission, history, and global initiatives of the world's leading ideas platform.
                </p>
              </div>
              
              <div className="flex items-center text-white text-lg font-bold group-hover:text-[#EB0028] transition-colors">
                Learn more
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>

            {/* TEDx Card */}
            <Link 
              to="/about/tedx" 
              className="group relative h-[400px] bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-500 hover:scale-[1.02] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <span className="text-white font-medium text-4xl">TED</span>
                  <span className="text-[#EB0028] font-bold text-6xl ml-2">x</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">About TEDx</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Learn about the TEDx program, licensing, and how it differs from TED conferences.
                </p>
              </div>
              
              <div className="flex items-center text-white text-lg font-bold group-hover:text-[#EB0028] transition-colors">
                Learn more
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>

            {/* TEDxUOK Card */}
            <Link 
              to="/about/tedx-uok" 
              className="group relative h-[400px] bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-500 hover:scale-[1.02] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="mb-6">
                  <span className="text-white font-medium text-4xl">TED</span>
                  <span className="text-[#EB0028] font-bold text-6xl ml-2">x</span>
                  <span className="text-white font-bold text-4xl ml-2">UOK</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">About TEDxUOK</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our story, mission, and commitment to spreading ideas at University of Kelaniya.
                </p>
              </div>
              
              <div className="flex items-center text-white text-lg font-bold group-hover:text-[#EB0028] transition-colors">
                Learn more
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA - All White Buttons */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Ready to <span className="text-[#EB0028]">Dive Deeper</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Select any of the sections above to explore the complete story behind each initiative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  <Link 
    to="/"
    className="px-10 py-4 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
    style={{ color: 'white' }}
  >
    Return Home
  </Link>
  <Link 
    to="/events"
    className="px-10 py-4 bg-[#EB0028] text-white rounded-full text-lg font-bold hover:bg-red-700 transition-colors duration-300"
    style={{ color: 'white' }}
  >
    View Events
  </Link>
</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;