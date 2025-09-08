import React, { useEffect, useRef, useState } from 'react';

const LottieDirect = ({ src, width = 144, height = 144, loop = true, autoplay = true, speed = 1, className = "" }) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const base = import.meta?.env?.BASE_URL || '/';
    const resolvedSrc = src?.startsWith('/') ? `${base}${src.replace(/^\//, '')}` : src;

    let cancelled = false;
    const init = () => {
      try {
        const lottie = window?.lottie;
        if (!lottie || !containerRef.current) return false;
        if (animRef.current) {
          animRef.current.destroy();
          animRef.current = null;
        }
        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          path: resolvedSrc,
        });
        anim.addEventListener('data_failed', () => {
          if (!cancelled) setError(true);
        });
        anim.addEventListener('DOMLoaded', () => {
          try { anim.setSpeed(speed); } catch {}
        });
        animRef.current = anim;
        setError(false);
        return true;
      } catch (e) {
        if (!cancelled) setError(true);
        return false;
      }
    };

    // Try immediately; if lottie not yet loaded, retry shortly
    if (!init()) {
      const id = setTimeout(() => { init(); }, 100);
      return () => { clearTimeout(id); cancelled = true; };
    }
    return () => {
      cancelled = true;
      if (animRef.current) {
        try { animRef.current.destroy(); } catch {}
        animRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, loop, autoplay, speed]);

  return (
    <div className={className} style={{ width, height, position: 'relative' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      {error && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, opacity: 0.7 }}>
          Animation failed to load
        </div>
      )}
    </div>
  );
};

export default LottieDirect;


