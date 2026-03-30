import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { FAQPage } from './pages/FAQ';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { GetStarted } from './pages/GetStarted';
import { Blog } from './pages/Blog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
