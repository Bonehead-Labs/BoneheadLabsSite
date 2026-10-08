import { useContext, useEffect, useRef, useState } from "react";
import { MotionContext } from "./UI";
import {
  VIEWBOX,
  silhouette,
  shadow,
  body,
  cups,
  outline,
  mouth,
} from "./mascotPaths";

// One pointer position shared by every mascot on the page.
const pointer = { x: 0, y: 0, moved: 0 };
let listening = false;
function listen() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  pointer.x = window.innerWidth / 2;
  pointer.y = window.innerHeight / 3;
  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.moved = performance.now();
    },
    { passive: true },
  );
}

// Eye centre in trace coordinates, used to aim the gaze.
const EYE_X = 1024;
const EYE_Y = 838;
const [VX, VY, VW, VH] = VIEWBOX.split(" ").map(Number);

function Layer({ paths, className, ...props }) {
  return (
    <g className={className} {...props}>
      {paths.map(([x, y, d], index) => (
        <path key={index} transform={`translate(${x} ${y})`} d={d} />
      ))}
    </g>
  );
}

const NOTES = ["♪", "♫", "♬"];

export default function Mascot({
  className = "",
  sticker = false,
  interactive = false,
  label = "The Bonehead Labs mascot",
  look,
}) {
  const motion = useContext(MotionContext);
  const root = useRef(null);
  const face = useRef(null);
  const eyes = useRef(null);
  const [blinking, setBlinking] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [notes, setNotes] = useState([]);

  // Gaze: follow the pointer while it moves, wander a little when it rests.
  useEffect(() => {
    if (!motion || look) return;
    listen();
    let frame;
    let visible = false;
    let current = { x: 0, y: 0 };
    let wander = { x: 0, y: 0, until: 0 };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) frame = requestAnimationFrame(tick);
    });
    observer.observe(root.current);
    function tick(now) {
      if (!visible || !root.current) return;
      const rect = root.current.getBoundingClientRect();
      const scale = rect.width / VW;
      const cx = rect.left + (EYE_X - VX) * scale;
      const cy = rect.top + (EYE_Y - VY) * scale;
      let target;
      if (now - pointer.moved < 3500) {
        const dx = pointer.x - cx;
        const dy = pointer.y - cy;
        const distance = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, distance / (rect.width * 0.9));
        target = { x: (dx / distance) * 26 * reach, y: (dy / distance) * 20 * reach };
      } else {
        if (now > wander.until) {
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() < 0.35 ? 0 : 12 + Math.random() * 12;
          wander = { x: Math.cos(angle) * r, y: Math.sin(angle) * r * 0.75, until: now + 900 + Math.random() * 2200 };
        }
        target = wander;
      }
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      eyes.current?.setAttribute("transform", `translate(${current.x.toFixed(2)} ${current.y.toFixed(2)})`);
      face.current?.setAttribute("transform", `translate(${(current.x * 0.45).toFixed(2)} ${(current.y * 0.4).toFixed(2)})`);
      frame = requestAnimationFrame(tick);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [motion, look]);

  useEffect(() => {
    if (!look) return;
    eyes.current?.setAttribute("transform", `translate(${look[0]} ${look[1]})`);
    face.current?.setAttribute("transform", `translate(${look[0] * 0.45} ${look[1] * 0.4})`);
  }, [look]);

  // Blink at irregular intervals, with the occasional double blink.
  useEffect(() => {
    if (!motion) return;
    let timer;
    const schedule = () => {
      timer = setTimeout(() => {
        setBlinking(true);
        timer = setTimeout(() => {
          setBlinking(false);
          if (Math.random() < 0.2) {
            timer = setTimeout(() => {
              setBlinking(true);
              timer = setTimeout(() => {
                setBlinking(false);
                schedule();
              }, 120);
            }, 160);
          } else schedule();
        }, 130);
      }, 2200 + Math.random() * 3800);
    };
    schedule();
    return () => clearTimeout(timer);
  }, [motion]);

  function poke() {
    if (!interactive) return;
    const id = performance.now();
    setNotes((list) => [
      ...list.slice(-6),
      ...[0, 1].map((i) => ({
        id: `${id}-${i}`,
        glyph: NOTES[Math.floor(Math.random() * NOTES.length)],
        side: i === 0 ? "left" : "right",
        drift: Math.round((Math.random() - 0.5) * 60),
      })),
    ]);
    setTimeout(() => setNotes((list) => list.filter((note) => !note.id.startsWith(`${id}-`))), 1600);
    if (!motion) return;
    setJumping(false);
    requestAnimationFrame(() => setJumping(true));
  }

  const happy = jumping;
  const svg = (
    <svg viewBox={VIEWBOX} className="mascot-svg" aria-hidden="true" focusable="false">
      <g className="mascot-ground">
        <Layer paths={shadow} className="mascot-shadow" />
      </g>
      <g className="mascot-figure" onAnimationEnd={() => setJumping(false)}>
        {sticker && <Layer paths={silhouette} className="mascot-sticker" />}
        <Layer paths={body} className="mascot-body" />
        <Layer paths={cups} className="mascot-cups" />
        <Layer paths={outline} className="mascot-ink" />
        <g ref={face}>
          {happy ? (
            <path
              className="mascot-ink"
              d="M934 982 Q1024 1000 1114 982 Q1104 1094 1024 1098 Q944 1094 934 982Z"
            />
          ) : (
            <Layer paths={mouth} className="mascot-ink" />
          )}
        </g>
        <g ref={eyes}>
          {happy ? (
            <g className="mascot-happy-eyes">
              <path d="M862 866 Q905 774 948 866" />
              <path d="M1099 866 Q1142 774 1185 866" />
            </g>
          ) : (
            <g className="mascot-eyes mascot-ink">
              <ellipse cx="905.5" cy="838" rx="46" ry="66" />
              <ellipse cx="1142" cy="838" rx="45.5" ry="66" />
            </g>
          )}
        </g>
      </g>
    </svg>
  );

  const classes = `mascot ${blinking ? "is-blinking" : ""} ${jumping ? "is-jumping" : ""} ${className}`;
  const noteLayer = notes.map((note) => (
    <span
      key={note.id}
      className={`mascot-note note-${note.side}`}
      style={{ "--drift": `${note.drift}px` }}
      aria-hidden="true"
    >
      {note.glyph}
    </span>
  ));

  if (interactive)
    return (
      <button
        type="button"
        ref={root}
        className={`${classes} mascot-button`}
        onClick={poke}
        aria-label={`${label}. Press to make it dance.`}
        style={{ aspectRatio: `${VW} / ${VH}` }}
      >
        {svg}
        {noteLayer}
      </button>
    );
  return (
    <div
      ref={root}
      className={classes}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      style={{ aspectRatio: `${VW} / ${VH}` }}
    >
      {svg}
    </div>
  );
}
