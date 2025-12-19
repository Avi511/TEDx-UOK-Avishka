// pages/About/AboutTedPage.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const AboutTedPage = () => {
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
            <span className="text-[#EB0028]">TED</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Ideas Worth Spreading
          </p>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            A global community welcoming people from every discipline and culture 
            who seek a deeper understanding of the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                Our <span className="text-[#EB0028]">Mission</span>
              </h2>
              <div className="h-1 w-32 bg-[#EB0028] mb-6"></div>
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                TED's mission is to spread ideas. We believe passionately in the 
                power of ideas to change attitudes, lives and, ultimately, the world.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                On TED.com, we're building a clearinghouse of free knowledge from 
                the world's most inspired thinkers — and a community of curious 
                souls to engage with ideas and each other.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 h-[400px] flex flex-col justify-center">
              <div className="text-6xl mb-6 text-center text-white">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Global Impact</h3>
              <p className="text-gray-400 text-center text-lg">
                Reaching millions across 100+ languages through talks, podcasts, and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - All White Buttons */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Explore <span className="text-[#EB0028]">More</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Dive deeper into the world of ideas worth spreading.
          </p>
          
          <div className="space-y-8">
  <a 
    href="https://www.ted.com/about"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-full max-w-md bg-[#EB0028] !text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-colors duration-300 mx-auto"
  >
    Visit TED.com
    <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </a>
  
  <div className="pt-8 border-t border-gray-800">
    <Link 
      to="/about"
      className="inline-flex items-center text-lg !text-white hover:text-gray-300 transition-colors duration-300"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to About Overview
    </Link>
  </div>
</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutTedPage;