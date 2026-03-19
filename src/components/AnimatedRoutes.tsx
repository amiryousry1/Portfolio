import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage';
import { ServicesPage } from '../pages/ServicesPage';
import { TestimonialsPage } from '../pages/TestimonialsPage';
import { ContactPage } from '../pages/ContactPage';
import { PaymentPage } from '../pages/PaymentPage';
import { ResumePage } from '../pages/ResumePage';
import { ArticlesPage } from '../pages/ArticlesPage';
import { ArticleDetailsPage } from '../pages/ArticleDetailsPage';

export function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/portfolio/:id" element={<ProjectDetailsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/blog" element={<ArticlesPage />} />
                <Route path="/blog/:id" element={<ArticleDetailsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="*" element={<div className="p-10 text-center text-2xl">404 - Page Not Found (Router Working)</div>} />
            </Routes>
        </AnimatePresence>
    );
}
