import { useContext, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Code2, Gamepad2 } from "lucide-react";
import { MotionContext } from "./UI";
export default function StudioToy() {
  const enabled = useContext(MotionContext);
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 70, damping: 18 }),
    springY = useSpring(y, { stiffness: 70, damping: 18 });
  function move(event) {
    if (!enabled || event.pointerType === "touch") return;
    const r = ref.current.getBoundingClientRect();
    x.set((event.clientX - r.left - r.width / 2) * 0.04);
    y.set((event.clientY - r.top - r.height / 2) * 0.04);
  }
  return (
    <div
      className="studio-toy"
      ref={ref}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="toy-core"
        style={{ x: enabled ? springX : 0, y: enabled ? springY : 0 }}
      >
        <button
          className={`mascot-button ${active ? "is-active" : ""}`}
          onClick={() => setActive((value) => !value)}
          aria-label="Toggle mascot animation"
          aria-pressed={active}
        >
          <img
            src="/media/bonehead.webp"
            alt="Bonehead Labs mascot"
            width="420"
            height="420"
            fetchPriority="high"
          />
          <span className="mascot-wave" aria-hidden="true" />
        </button>
      </motion.div>
      <div className="toy-tag tag-games">
        <Gamepad2 size={19} />
        <span>GAMES</span>
      </div>
      <div className="toy-tag tag-tools">
        <Code2 size={19} />
        <span>SOFTWARE</span>
      </div>
    </div>
  );
}
