import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home/HomePage';
import { Speakers } from './components/layout/Speakers';
import { SpeakersListPage } from './pages/Speakers/SpeakersListPage';
import { SpeakerDetailPage } from './pages/Speakers/SpeakerDetailPage';
import { BlogListPage } from './pages/Blog/BlogListPage';
import { BlogDetailPage } from './pages/Blog/BlogDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="grow">
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Speakers />
              </>
            } />
            <Route path="/speakers" element={<SpeakersListPage />} />
            <Route path="/speakers/:id" element={<SpeakerDetailPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
