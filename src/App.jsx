import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import PageTransition from './components/PageTransition.jsx';
import Home from './pages/Home';
import Games from './pages/Games';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { Container } from './utils/common.jsx';

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ink-20)] bg-[var(--paper)]/90 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}Assets/image.png`} alt="Bonehead Labs" className="h-8 w-8 rounded-full border-2 border-[var(--ink)] object-contain"/>
          <strong className="tracking-wide text-[var(--ink)]">Bonehead Labs</strong>
        </Link>
        <nav className="hidden gap-6 text-sm sm:flex text-[var(--ink-70)]">
          <Link to="/" className="hover:text-[var(--ink)]">Home</Link>
          <Link to="/games" className="hover:text-[var(--ink)]">Games</Link>
          <Link to="/projects" className="hover:text-[var(--ink)]">Projects</Link>
          <Link to="/about" className="hover:text-[var(--ink)]">About</Link>
          <Link to="/contact" className="hover:text-[var(--ink)]">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-[var(--ink)] bg-[var(--paper)]">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}Assets/image.png`} alt="Bonehead Labs" className="h-7 w-7 rounded-full border-2 border-[var(--ink)] object-contain"/>
          <span className="text-sm text-[var(--ink-70)]">© {new Date().getFullYear()} Bonehead Labs</span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-[var(--ink-70)]">
          <Link to="/" className="hover:text-[var(--ink)]">Home</Link>
          <Link to="/games" className="hover:text-[var(--ink)]">Games</Link>
          <Link to="/projects" className="hover:text-[var(--ink)]">Projects</Link>
          <Link to="/about" className="hover:text-[var(--ink)]">About</Link>
          <Link to="/contact" className="hover:text-[var(--ink)]">Contact</Link>
        </nav>
      </Container>
    </footer>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/games" element={<PageTransition><Games /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth" style={{
      '--paper': '#ffffff',
      '--ink': '#0b0d0f',
      '--ink-70': 'rgba(11,13,15,0.70)',
      '--ink-50': 'rgba(11,13,15,0.50)',
      '--ink-20': 'rgba(11,13,15,0.20)',
      '--cyan': '#22D3EE'
    }}>
      <Router>
        <Nav />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}
