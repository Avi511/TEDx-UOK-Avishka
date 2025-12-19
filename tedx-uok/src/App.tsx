// App.tsx - Fixed version
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import AboutTedPage from "./pages/About/AboutTedPage";
import AboutTedxPage from "./pages/About/AboutTedxPage";
import AboutTedxUokPage from "./pages/About/AboutTedxUokPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home redirects to About Page */}
        <Route path="/" element={<AboutPage />} />
        
        {/* About Pages - IMPORTANT: Use exact paths */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/ted" element={<AboutTedPage />} />
        <Route path="/about/tedx" element={<AboutTedxPage />} />
        <Route path="/about/tedx-uok" element={<AboutTedxUokPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;