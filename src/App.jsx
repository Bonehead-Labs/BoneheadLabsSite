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
import ScrollArtifact from "./components/ScrollArtifact";
import AnimatedCursor from "./components/AnimatedCursor";
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
  const location = useLocation();
  const menuButton = useRef(null);
  useEffect(() => setOpen(false), [location]);
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
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link className="wordmark" to="/" aria-label="Bonehead Labs home">
          <img src="/media/bonehead.webp" alt="" width="44" height="44" />
          <span>
            BONEHEAD
            <span>LABS</span>
          </span>
        </Link>
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navItems.map(([to, label]) => (
            <NavLink to={to} key={to} onClick={() => setOpen(false)}>
              {label}
              <span className="nav-dot" />
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mobile-contact"
            onClick={() => setOpen(false)}
          >
            Contact <ArrowUpRight size={16} />
          </Link>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-button motion-toggle"
            onClick={toggleMotion}
            disabled={systemReducedMotion}
            aria-label={
              systemReducedMotion
                ? "Animations off to match your device settings"
                : motionEnabled
                  ? "Pause animations"
                  : "Enable animations"
            }
            title={
              systemReducedMotion
                ? "Animations off to match your device settings"
                : motionEnabled
                  ? "Pause animations"
                  : "Enable animations"
            }
          >
            {motionEnabled ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <Link to="/contact" className="header-contact">
            Contact <ArrowUpRight size={17} />
          </Link>
          <button
            type="button"
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> CONTACT BONEHEAD LABS
            </p>
            <Link to="/contact" className="footer-hello">
              Get in touch. <ArrowUpRight />
            </Link>
          </div>
          <div className="footer-links">
            <nav aria-label="Footer navigation">
              {navItems.map(([to, label]) => (
                <Link to={to} key={to}>
                  {label}
                </Link>
              ))}
              <Link to="/contact">Contact</Link>
            </nav>
            <nav aria-label="Social links">
              <a href={links.steam} target="_blank" rel="noreferrer">
                Steam <ArrowUpRight />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight />
              </a>
              <a href={links.youtube} target="_blank" rel="noreferrer">
                YouTube <ArrowUpRight />
              </a>
              <a href={links.x} target="_blank" rel="noreferrer">
                Follow on X <ArrowUpRight />
              </a>
            </nav>
          </div>
        </div>
        <Link
          to="/"
          className="footer-wordmark"
          aria-label="Bonehead Labs home"
        >
          BONEHEAD<span> LABS</span>
        </Link>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bonehead Labs</span>
          <span>Independent games & software.</span>
          <button
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
            Back to top <ArrowUp size={14} />
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
          <ScrollArtifact />
          <AnimatedCursor />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <PagePosition />
          <Nav
            motionEnabled={motionEnabled}
            toggleMotion={toggleMotion}
            systemReducedMotion={prefersReducedMotion}
          />
          <main id="main-content" tabIndex={-1}>
            <Suspense
              fallback={
                <div className="page-loading" role="status">
                  Loading<span>…</span>
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
