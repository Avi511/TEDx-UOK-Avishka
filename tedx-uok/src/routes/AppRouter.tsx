import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";

import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import AboutTedPage from "../pages/About/AboutTedPage";
import AboutTedxPage from "../pages/About/AboutTedxPage";
import AboutTedxUokPage from "../pages/About/AboutTedxUokPage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import AgendaPage from "../pages/Agenda/AgendaPage";
import SpeakersPage from "../pages/Speakers/SpeakersPage";
import SpeakerDetailPage from "../pages/Speakers/SpeakerDetailPage";
import ContactPage from "../pages/Contact/ContactPage";
import BlogListPage from "../pages/Blog/BlogListPage";
import BlogPostPage from "../pages/Blog/BlogPostPage";
import FAQPage from "../pages/FAQ/FAQPage";
import ImpactPage from "../pages/Impact/ImpactPage";
import PartnersPage from "../pages/Partners/PartnersPage";
import PastEventsPage from "../pages/PastEvents/PastEventsPage";
import PressAndMediaPage from "../pages/PressAndMedia/PressAndMediaPage";
import TeamPage from "../pages/Team/TeamPage";
import VenuePage from "../pages/Venue/VenuePage";
import VolunteersPage from "../pages/Volunteers/VolunteersPage";
import VolunteerApplicationPage from "../pages/Volunteers/VolunteerApplicationPage";
import AccessibilityPage from "../pages/Legal/AccessibilityPage";
import CodeOfConductPage from "../pages/Legal/CodeOfConductPage";
import LicensingPage from "../pages/Legal/LicensingPage";
import PrivacyPolicyPage from "../pages/Legal/PrivacyPolicyPage";

function AnimatedRoutes() {
  const location = useLocation();

  // Dummy data
  const partners = [
    { id: '1', name: 'Partner 1', tier: 'Title', logo_url: 'https://via.placeholder.com/200' },
    { id: '2', name: 'Partner 2', tier: 'Gold', logo_url: 'https://via.placeholder.com/200' },
  ] as any[];

  const teamMembers = [
    { id: '1', full_name: 'John Doe', role: 'Organizer', type: 'Licensee', photo_url: 'https://via.placeholder.com/300' }
  ] as any[];

  const venueProps = {
    event: "TEDxUOK 2026",
    name: "University Amphitheatre",
    addressLine1: "University of Kelaniya",
    city: "Kelaniya",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.226077616196!2d79.91370367504443!3d6.982621393018258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e3db4d1c50fc!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1703055555555!5m2!1sen!2slk",
    googleMapsDirUrl: "https://www.google.com/maps/dir/?api=1&destination=University+of+Kelaniya",
    transportInfo: "Bus route 138 from Pettah stops directly in front of the university.",
    parkingInfo: "Ample parking available at the faculty grounds.",
    accessibilityInfo: "Wheelchair accessible entrances and ramps are available throughout the venue."
  } as any;

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <div key={location.pathname} className="page-transition">
            <HomePage />
          </div>
        }
      />
      <Route
        path="/about"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutPage />
          </div>
        }
      />
      <Route
        path="/about/ted"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutTedPage />
          </div>
        }
      />
      <Route
        path="/about/tedx"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutTedxPage />
          </div>
        }
      />
      <Route
        path="/about/tedx-uok"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutTedxUokPage />
          </div>
        }
      />
      <Route
        path="/speakers"
        element={
          <div key={location.pathname} className="page-transition">
            <SpeakersPage />
          </div>
        }
      />
      <Route
        path="/speakers/:id"
        element={
          <div key={location.pathname} className="page-transition">
            <SpeakerDetailPage />
          </div>
        }
      />
      <Route
        path="/agenda"
        element={
          <div key={location.pathname} className="page-transition">
            <AgendaPage />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div key={location.pathname} className="page-transition">
            <RegistrationPage />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div key={location.pathname} className="page-transition">
            <ContactPage />
          </div>
        }
      />
      <Route
        path="/blog"
        element={
          <div key={location.pathname} className="page-transition">
            <BlogListPage />
          </div>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <div key={location.pathname} className="page-transition">
            <BlogPostPage />
          </div>
        }
      />
      <Route
        path="/faq"
        element={
          <div key={location.pathname} className="page-transition">
            <FAQPage />
          </div>
        }
      />
      <Route
        path="/impact"
        element={
          <div key={location.pathname} className="page-transition">
            <ImpactPage />
          </div>
        }
      />
      <Route
        path="/partners"
        element={
          <div key={location.pathname} className="page-transition">
            <PartnersPage partners={partners} />
          </div>
        }
      />
      <Route
        path="/past-events"
        element={
          <div key={location.pathname} className="page-transition">
            <PastEventsPage />
          </div>
        }
      />
      <Route
        path="/press"
        element={
          <div key={location.pathname} className="page-transition">
            <PressAndMediaPage />
          </div>
        }
      />
      <Route
        path="/team"
        element={
          <div key={location.pathname} className="page-transition">
            <TeamPage teamMembers={teamMembers} />
          </div>
        }
      />
      <Route
        path="/venue"
        element={
          <div key={location.pathname} className="page-transition">
            <VenuePage {...venueProps} />
          </div>
        }
      />
      <Route
        path="/volunteers"
        element={
          <div key={location.pathname} className="page-transition">
            <VolunteersPage />
          </div>
        }
      />
      <Route
        path="/volunteers/apply"
        element={
          <div key={location.pathname} className="page-transition">
            <VolunteerApplicationPage />
          </div>
        }
      />
      <Route
        path="/legal/accessibility"
        element={
          <div key={location.pathname} className="page-transition">
            <AccessibilityPage />
          </div>
        }
      />
      <Route
        path="/legal/code-of-conduct"
        element={
          <div key={location.pathname} className="page-transition">
            <CodeOfConductPage />
          </div>
        }
      />
      <Route
        path="/legal/licensing"
        element={
          <div key={location.pathname} className="page-transition">
            <LicensingPage />
          </div>
        }
      />
      <Route
        path="/legal/privacy-policy"
        element={
          <div key={location.pathname} className="page-transition">
            <PrivacyPolicyPage />
          </div>
        }
      />
    </Routes>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}