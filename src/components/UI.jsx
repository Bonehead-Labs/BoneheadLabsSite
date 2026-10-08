import { createContext, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
export const MotionContext = createContext(true);
export function useMotion() {
  return useContext(MotionContext);
}
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  y = 34,
  ...props
}) {
  const enabled = useContext(MotionContext);
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={enabled ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </Tag>
  );
}
const external = (href) => href?.startsWith("http");
export function Button({
  children,
  to,
  href,
  variant = "primary",
  icon = true,
  className = "",
  ...props
}) {
  const classes = `btn btn-${variant} ${className}`;
  const Icon = to ? ArrowRight : ArrowUpRight;
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon size={19} strokeWidth={2.4} aria-hidden="true" />}
    </>
  );
  if (to)
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  return (
    <a
      href={href}
      className={classes}
      target={external(href) ? "_blank" : undefined}
      rel={external(href) ? "noreferrer" : undefined}
      {...props}
    >
      {content}
    </a>
  );
}
export function TextLink({ children, to, href, className = "", ...props }) {
  if (to)
    return (
      <Link to={to} className={`text-link ${className}`} {...props}>
        {children}
        <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
      </Link>
    );
  return (
    <a
      href={href}
      className={`text-link ${className}`}
      target={external(href) ? "_blank" : undefined}
      rel={external(href) ? "noreferrer" : undefined}
      {...props}
    >
      {children}
      <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}
export function Kicker({ children, className = "" }) {
  return <p className={`kicker ${className}`}>{children}</p>;
}
export function SectionHead({ kicker, title, children, className = "" }) {
  return (
    <Reveal className={`section-head ${className}`}>
      <div>
        {kicker && <Kicker>{kicker}</Kicker>}
        <h2>{title}</h2>
      </div>
      {children && <div className="section-head-aside">{children}</div>}
    </Reveal>
  );
}
// Decorative object that can be picked up and springs back to its place.
export function Sticker({ children, className = "", style, rotate = 0, label }) {
  const enabled = useContext(MotionContext);
  return (
    <motion.div
      className={`sticker ${className}`}
      style={{ rotate, ...style }}
      drag={enabled}
      dragSnapToOrigin
      dragElastic={0.6}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 14 }}
      whileHover={enabled ? { scale: 1.06, rotate: rotate * 0.4 } : undefined}
      whileDrag={{ scale: 1.14, rotate: 0, zIndex: 40 }}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      {children}
    </motion.div>
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
      : "Bonehead Labs";
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
