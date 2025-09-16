import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { AnimatePresence } from "framer-motion";
import PageTransition from './components/PageTransition.jsx';
import Home from './pages/Home';
import Games from './pages/Games';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { Container } from './utils/common.jsx';
import logoImage from './assets/image.png';

function Nav({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--ink-20)] bg-[var(--paper-elevated)] shadow-sm backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImage} alt="Bonehead Labs" className="h-8 w-8 rounded-full border-2 border-[var(--ink)] object-contain"/>
          <strong className="tracking-wide text-[var(--ink)]">Bonehead Labs</strong>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden gap-6 text-sm sm:flex text-[var(--ink-70)]">
            <Link to="/" className="hover:text-[var(--ink)]">Home</Link>
            <Link to="/games" className="hover:text-[var(--ink)]">Games</Link>
            <Link to="/projects" className="hover:text-[var(--ink)]">The Lab</Link>
            <Link to="/blog" className="hover:text-[var(--ink)]">Blog</Link>
            <Link to="/about" className="hover:text-[var(--ink)]">About</Link>
            <Link to="/contact" className="hover:text-[var(--ink)]">Contact</Link>
          </nav>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--ink-20)] px-2.5 py-1.5 text-[var(--ink-70)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </Container>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-[var(--ink)] bg-[var(--paper)]">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Bonehead Labs" className="h-7 w-7 rounded-full border-2 border-[var(--ink)] object-contain"/>
          <span className="text-sm text-[var(--ink-70)]">© {new Date().getFullYear()} Bonehead Labs</span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-[var(--ink-70)]">
          <Link to="/" className="hover:text-[var(--ink)]">Home</Link>
          <Link to="/games" className="hover:text-[var(--ink)]">Games</Link>
          <Link to="/projects" className="hover:text-[var(--ink)]">The Lab</Link>
          <Link to="/blog" className="hover:text-[var(--ink)]">Blog</Link>
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
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch {}
    // Helps some native UI (e.g., inputs, scrollbars) adapt where supported
    document.documentElement.style.colorScheme = theme;
    
    // Apply theme variables to document root so html/body can access them
    const themeVars = theme === 'dark' ? darkTheme : lightTheme;
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [theme]);

  const lightTheme = {
    '--paper': '#ffffff',
    '--paper-elevated': 'rgba(255, 255, 255, 0.95)',
    '--ink': '#0b0d0f',
    '--ink-70': 'rgba(11,13,15,0.70)',
    '--ink-50': 'rgba(11,13,15,0.50)',
    '--ink-20': 'rgba(11,13,15,0.20)',
    '--cyan': '#22D3EE',
    '--cyan-20': 'rgba(34,211,238,0.20)',
    '--deep': '#0b0d0f',
    '--code-bg': '#0f1418',
  };

  const darkTheme = {
    '--paper': '#0f1418',
    '--paper-elevated': 'rgba(15, 20, 24, 0.85)',
    '--ink': '#e6edf3',
    '--ink-70': 'rgba(230,237,243,0.70)',
    '--ink-50': 'rgba(230,237,243,0.50)',
    '--ink-20': 'rgba(230,237,243,0.20)',
    '--cyan': '#22D3EE',
    '--cyan-20': 'rgba(34,211,238,0.20)',
    '--deep': '#0b0d0f',
    '--code-bg': '#0b0d0f',
  };

  const themeVars = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <div className="min-h-screen scroll-smooth">
      <Router>
        <ScrollToTop />
        <Nav theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}



