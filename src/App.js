import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load các trang
const HomePage = React.lazy(() => import('./components/HomePage'));
const ServicesPage = React.lazy(() => import('./components/ServicesPage'));
const BookAppointmentPage = React.lazy(() => import('./components/BookAppointmentPage'));
const PaymentPage = React.lazy(() => import('./components/PaymentPage'));
const ActivitiesPage = React.lazy(() => import('./components/ActivitiesPage'));
const LoginPage = React.lazy(() => import('./components/LoginPage'));
const LocationDetailPage = React.lazy(() => import('./components/LocationDetailPage'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));

// Trang Not Found
const NotFoundPage = () => (
  <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Header */}
          <Header />

          <main style={{ flexGrow: 1 }}>
            {/* Suspense cho lazy load */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/book-appointment" element={<BookAppointmentPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/activities" element={<ActivitiesPage />} />
                <Route path="/location/:id" element={<LocationDetailPage />} />
                <Route path="/about" element={<AboutPage />} /> {/* Thêm route cho About */}
                <Route path="*" element={<NotFoundPage />} /> {/* 404 Not Found */}
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
