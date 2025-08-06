import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import BookService from './pages/BookService';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/CartContext';
import CheckoutForm from './pages/CheckoutForm';
import Confirmation from './pages/confirmation';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancelled from './pages/PaymentCancelled';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/book" element={<BookService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-cancelled" element={<PaymentCancelled />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
