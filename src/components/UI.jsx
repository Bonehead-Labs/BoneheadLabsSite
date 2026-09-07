import { createContext, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
export const MotionContext = createContext(true);
export function Reveal({ children, className = "", delay = 0, ...props }) {
  const enabled = useContext(MotionContext);
  return (
    <motion.div
      className={className}
      initial={enabled ? { opacity: 0, y: 26 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
export function Button({
  children,
  to,
  href,
  secondary = false,
  light = false,
  className = "",
  ...props
}) {
  const classes = `button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""} ${className}`;
  if (to)
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        <ArrowUpRight size={18} />
      </Link>
    );
  return (
    <a
      href={href}
      className={classes}
      target={href?.startsWith("https:") ? "_blank" : undefined}
      rel={href?.startsWith("https:") ? "noreferrer" : undefined}
      {...props}
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export function TextLink({ children, to, href, className = "", ...props }) {
  if (to)
    return (
      <Link to={to} className={`text-link ${className}`} {...props}>
        {children}
        <ArrowRight size={18} />
      </Link>
    );
  return (
    <a
      href={href}
      className={`text-link ${className}`}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export function SectionHeading({ label, title, children, light = false }) {
  return (
    <Reveal className={`section-heading ${light ? "on-paper" : ""}`}>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}
export function PageIntro({
  eyebrow,
  title,
  accent,
  children,
  className = "",
}) {
  return (
    <section className={`page-intro wrap ${className}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          <span>{accent}</span>
        </h1>
        {children && <p className="intro-copy">{children}</p>}
      </Reveal>
    </section>
  );
}
export function SEO({
  title,
  description,
  image = "/Assets/Official-banner.png",
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    const canonicalPath = pathname.replace(/\/+$/, "") || "/";
    document.title = title
      ? `${title} — Bonehead Labs`
      : "Bonehead Labs — Independent games & software";
    const values = {
      description,
      "og:title": document.title,
      "og:description": description,
      "og:image": `https://boneheadlabs.org${image}`,
      "og:url": `https://boneheadlabs.org${canonicalPath}`,
    };
    Object.entries(values).forEach(([name, content]) => {
      if (!content) return;
      const attribute = name.startsWith("og:") ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    });
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://boneheadlabs.org${canonicalPath}`;
  }, [title, description, image, pathname]);
  return null;
}
export function formatDate(date) {
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
