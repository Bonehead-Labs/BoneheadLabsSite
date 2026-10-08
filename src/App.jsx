import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ArrowUpRight, Menu, X, Pause, Play, ArrowUp } from "lucide-react";
import { MotionConfig } from "framer-motion";
import { MotionContext } from "./components/UI";
import Mascot from "./components/Mascot";
import { links } from "./data/site";

const Home = lazy(() => import("./pages/Home"));
const Games = lazy(() => import("./pages/Games"));
const AppleManSam = lazy(() => import("./pages/AppleManSam"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const navItems = [
  ["/games", "Games"],
  ["/software", "Software"],
  ["/about", "About"],
  ["/blog", "Blog"],
];

function Nav({ motionEnabled, toggleMotion, systemReducedMotion }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuButton = useRef(null);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  const motionLabel = systemReducedMotion
    ? "Animations off to match your device settings"
    : motionEnabled
      ? "Pause animations"
      : "Play animations";
  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
    >
      <div className="nav-pill">
        <Link className="brand" to="/" aria-label="Bonehead Labs home">
          <span className="brand-mark">
            <Mascot label="" />
          </span>
          <span className="brand-name">
            Bonehead<span>Labs</span>
          </span>
        </Link>
        <nav
          className="nav-links"
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navItems.map(([to, label]) => (
            <NavLink to={to} key={to}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-contact-mobile">
            Contact
          </NavLink>
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="round-button motion-toggle"
            onClick={toggleMotion}
            disabled={systemReducedMotion}
            aria-label={motionLabel}
            title={motionLabel}
          >
            {motionEnabled ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <Link to="/contact" className="btn btn-primary btn-small nav-contact">
            <span>Contact</span>
          </Link>
          <button
            type="button"
            ref={menuButton}
            className="round-button menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-peek" aria-hidden="true">
        <Mascot sticker label="" />
      </div>
      <div className="wrap footer-inner">
        <div className="footer-call">
          <p className="kicker">Contact</p>
          <a className="footer-email" href={`mailto:${links.email}`}>
            contact@<wbr />
            boneheadlabs.org
          </a>
          <p className="footer-note">
            Game feedback, software, support and press.
          </p>
        </div>
        <div className="footer-columns">
          <nav aria-label="Footer navigation">
            <p className="kicker">Pages</p>
            {navItems.map(([to, label]) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
            <Link to="/contact">Contact</Link>
          </nav>
          <nav aria-label="Social links">
            <p className="kicker">Follow</p>
            {[
              ["Steam", links.steam],
              ["YouTube", links.youtube],
              ["GitHub", links.github],
              ["X", links.x],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="wrap footer-base">
        <Link to="/" className="footer-wordmark" aria-label="Bonehead Labs home">
          Bonehead Labs
        </Link>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Bonehead Labs</span>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior:
                  document.documentElement.dataset.motion === "off"
                    ? "instant"
                    : "smooth",
              })
            }
          >
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
function PagePosition() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let id;
    try {
      id = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }
    let observer;
    const scroll = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ block: "start" });
      observer?.disconnect();
      return true;
    };
    if (!scroll()) {
      observer = new MutationObserver(scroll);
      observer.observe(document.getElementById("main-content"), {
        childList: true,
        subtree: true,
      });
    }
    return () => observer?.disconnect();
  }, [pathname, hash]);
  return null;
}
function PageTheme() {
  const { pathname } = useLocation();
  useEffect(() => {
    const theme = pathname.startsWith("/games/apple-man-sam")
      ? "sam"
      : pathname.startsWith("/software")
        ? "ins"
        : "studio";
    document.documentElement.dataset.theme = theme;
  }, [pathname]);
  return null;
}
export default function App() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  const [paused, setPaused] = useState(() => {
    try {
      return localStorage.getItem("bhl-motion") === "paused";
    } catch {
      return false;
    }
  });
  const motionEnabled = !paused && !prefersReducedMotion;
  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
  }, [motionEnabled]);
  function toggleMotion() {
    setPaused((value) => {
      try {
        localStorage.setItem("bhl-motion", !value ? "paused" : "on");
      } catch {}
      return !value;
    });
  }
  return (
    <MotionContext.Provider value={motionEnabled}>
      <MotionConfig reducedMotion={motionEnabled ? "user" : "always"}>
        <BrowserRouter>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <PagePosition />
          <PageTheme />
          <Nav
            motionEnabled={motionEnabled}
            toggleMotion={toggleMotion}
            systemReducedMotion={prefersReducedMotion}
          />
          <main id="main-content" tabIndex={-1}>
            <Suspense
              fallback={
                <div className="page-loading" role="status">
                  Loading
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/apple-man-sam" element={<AppleManSam />} />
                <Route
                  path="/apple-man-sam"
                  element={<Navigate to="/games/apple-man-sam" replace />}
                />
                <Route path="/software" element={<Projects />} />
                <Route
                  path="/projects"
                  element={<Navigate to="/software" replace />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </MotionConfig>
    </MotionContext.Provider>
  );
}
