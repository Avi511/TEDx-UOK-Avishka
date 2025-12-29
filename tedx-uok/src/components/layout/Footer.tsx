import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EB0028] rounded-full blur-[200px] opacity-5"></div>

      <div className="relative max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">TEDxUOK</h3>
            <p className="text-gray-300">
              Ideas worth spreading at the University of Kelaniya.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/speakers" className="hover:text-white">Speakers</Link></li>
              <li><Link to="/agenda" className="hover:text-white">Agenda</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">
              University of Kelaniya<br />
              Sri Lanka
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TEDxUOK. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#EB0028] text-white p-3 rounded-full shadow-lg hover:bg-[#d10022] transition-colors"
      >
        ↑
      </button>
    </footer>
  );
}