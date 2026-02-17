import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ServicesPage } from './pages/ServicesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { PaymentPage } from './pages/PaymentPage';
import { ResumePage } from './pages/ResumePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" dir="rtl">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}