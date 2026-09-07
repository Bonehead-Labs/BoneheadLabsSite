import { useContext, useEffect, useRef } from "react";
import { MotionContext } from "./UI";

export default function AnimatedCursor() {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  useEffect(() => {
    const cursor = ref.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!enabled || !fine.matches) return;
    const ring = cursor.querySelector(".cursor-ring"),
      dot = cursor.querySelector(".cursor-dot");
    let x = -100,
      y = -100,
      rx = -100,
      ry = -100,
      raf = 0,
      visible = false,
      activeTarget = null;
    function hide() {
      visible = false;
      cursor.dataset.visible = "false";
      document.documentElement.classList.remove("custom-cursor");
      cancelAnimationFrame(raf);
      raf = 0;
    }
    function tick() {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      if (visible && Math.abs(x - rx) + Math.abs(y - ry) > 0.08) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    }
    function move(event) {
      if (event.pointerType === "touch" || !fine.matches) {
        hide();
        return;
      }
      const target = event.target instanceof Element ? event.target : null;
      if (
        target?.closest(
          'input,textarea,select,[contenteditable="true"],pre,dialog',
        ) ||
        document.querySelector("dialog[open]")
      ) {
        hide();
        return;
      }
      if (!visible) {
        rx = event.clientX;
        ry = event.clientY;
      }
      x = event.clientX;
      y = event.clientY;
      visible = true;
      cursor.dataset.visible = "true";
      document.documentElement.classList.add("custom-cursor");
      dot.style.transform = `translate3d(${x}px,${y}px,0)`;
      const next = target?.closest('a,button,[role="button"]');
      if (next !== activeTarget) {
        activeTarget = next;
        cursor.dataset.interactive =
          next && !next.matches(":disabled") ? "true" : "false";
      }
      if (!raf) raf = requestAnimationFrame(tick);
    }
    function down() {
      cursor.dataset.down = "true";
    }
    function up() {
      cursor.dataset.down = "false";
    }
    function keyboard(event) {
      if (event.key === "Tab") hide();
    }
    function changed() {
      if (!fine.matches) hide();
    }
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", hide);
    document.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    document.addEventListener("keydown", keyboard);
    fine.addEventListener("change", changed);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", hide);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
      document.removeEventListener("keydown", keyboard);
      fine.removeEventListener("change", changed);
    };
  }, [enabled]);
  return (
    <div
      className="animated-cursor"
      ref={ref}
      aria-hidden="true"
      data-visible="false"
    >
      <div className="cursor-dot">
        <i />
      </div>
      <div className="cursor-ring">
        <i />
      </div>
    </div>
  );
}
