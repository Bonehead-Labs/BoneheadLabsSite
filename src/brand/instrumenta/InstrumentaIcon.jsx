import { useMemo } from "react";
import "./instrumenta-icons.js";
import "./instrumenta-icons.css";

const icons = globalThis.InstrumentaIcons;

// Renders a brand v2 glyph inline so instrumenta-icons.css can animate its parts. The icon moves
// while an ancestor has `ii-play`, or while an `ii-hover` ancestor is hovered or focused.
export function InstrumentaIcon({ id, size, label = "", className = "" }) {
  const markup = useMemo(() => icons.render(id, { size, label }), [id, size, label]);
  return (
    <span
      className={`ii-icon ${className}`}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
