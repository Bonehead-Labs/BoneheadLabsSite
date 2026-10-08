// Plays a horizontal pixel-art sprite strip with CSS steps. Frames are square unless `ratio` says
// otherwise. With motion off, the first frame shows still.
export default function Sprite({ src, frames, fps = 10, className = "", ratio = 1 }) {
  return (
    <span
      className={`sprite ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url(${src})`,
        "--frames": frames,
        "--duration": `${frames / fps}s`,
        aspectRatio: ratio,
      }}
    />
  );
}
