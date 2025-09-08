import React, { useEffect, useRef } from 'react';

const LottieEmbed = ({ src, width = 144, height = 144, loop = true, autoplay = true, speed = 1, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.setAttribute('src', src);
    el.setAttribute('background', 'transparent');
    el.setAttribute('speed', String(speed));
    if (loop) el.setAttribute('loop', ''); else el.removeAttribute('loop');
    if (autoplay) el.setAttribute('autoplay', ''); else el.removeAttribute('autoplay');
  }, [src, loop, autoplay, speed]);

  return (
    <div className={className}>
      <lottie-player ref={ref} style={{ width, height }} />
    </div>
  );
};

export default LottieEmbed;


