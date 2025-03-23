import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import BookAppointmentPage from './components/BookAppointmentPage';
import PaymentPage from './components/PaymentPage';
import ActivitiesPage from './components/ActivitiesPage';
import LoginPage from './components/LoginPage';  
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthProvider } from './context/AuthContext';

import Header from './components/Header'; 
import Footer from './components/Footer'; 
import LocationDetailPage from './components/LocationDetailPage';  

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          
          <Header />

          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/book-appointment" element={<BookAppointmentPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/location/:id" element={<LocationDetailPage />} />  
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
