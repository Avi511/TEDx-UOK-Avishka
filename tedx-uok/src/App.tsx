import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home/HomePage';
import { Speakers } from './components/layout/Speakers';
import { SpeakersListPage } from './pages/Speakers/SpeakersListPage';
import { SpeakerDetailPage } from './pages/Speakers/SpeakerDetailPage';
import { BlogListPage } from './pages/Blog/BlogListPage';
import { BlogDetailPage } from './pages/Blog/BlogDetailPage';
import { AgendaPage } from './pages/Agenda/AgendaPage';
import { RegistrationPage } from './pages/Registration/RegistrationPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { TeamPage } from './pages/Team/TeamPage';
import { PartnersPage } from './pages/Partners/PartnersPage';

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
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
