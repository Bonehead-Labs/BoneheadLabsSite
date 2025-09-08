import React from 'react';

const SimpleLottie = ({ src, width = 192, height = 192, speed = 1, loop = true, autoplay = true, className = "" }) => {
  // Adjust src for GitHub Pages base URL if it starts with a slash
  const adjustedSrc = src?.startsWith('/') ? `${import.meta.env.BASE_URL}${src.substring(1)}` : src;

  return (
    <dotlottie-player
      src={adjustedSrc}
      background="transparent"
      speed={speed}
      loop={loop}
      autoplay={autoplay}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={className}
    ></dotlottie-player>
  );
};

export default SimpleLottie;
