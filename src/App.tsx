import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFoundPage from "./pages/http/NotFoundPage";
import DownloadPage from "./pages/DownloadPage/DownloadPage";
import TryOnPage from "./pages/tryOn/TryOnPage";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/try-on" element={<TryOnPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
