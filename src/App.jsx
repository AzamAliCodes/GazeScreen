import { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import ConsentPage from './pages/ConsentPage';
import CalibrationPage from './pages/CalibrationPage';
import StimulusPage from './pages/StimulusPage';
import AnalysisPage from './pages/AnalysisPage';
import ReportPage from './pages/ReportPage';
import { SessionProvider } from './context/SessionContext';
import './App.css';

function RedirectOnHardLoad() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (pathname !== '/') {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <RedirectOnHardLoad />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/"            element={<LandingPage />} />
            <Route path="/consent"     element={<ConsentPage />} />
            <Route path="/calibration" element={<CalibrationPage />} />
            <Route path="/stimulus"    element={<StimulusPage />} />
            <Route path="/analysis"    element={<AnalysisPage />} />
            <Route path="/report"      element={<ReportPage />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
