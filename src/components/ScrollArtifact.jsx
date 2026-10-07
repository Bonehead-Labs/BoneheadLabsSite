import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MotionContext } from "./UI";

const vertexSource = `
attribute vec4 aParticle;
uniform vec2 uResolution;
uniform vec2 uCenter;
uniform vec3 uRotation;
uniform float uSize;
uniform float uDpr;
uniform float uTime;
varying float vLight;
varying float vAlpha;
mat3 turnX(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
mat3 turnY(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
mat3 turnZ(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
void main(){
  vec3 p=aParticle.xyz;
  p.y+=sin(atan(p.z,p.x)*4.+uTime*.23)*.035;
  p=turnZ(uRotation.z)*turnX(uRotation.x)*turnY(uRotation.y)*p;
  float perspective=4.8/(4.8+p.z);
  vec2 position=uCenter+vec2(p.x,-p.y)*uSize*perspective;
  gl_Position=vec4(position/uResolution*vec2(2.,-2.)+vec2(-1.,1.),0.,1.);
  gl_PointSize=clamp((1.+aParticle.w*2.)*uDpr*perspective,1.,6.);
  vLight=clamp(.48-p.z*.20+aParticle.w*.3,0.,1.);
  vAlpha=(.35+aParticle.w*.5)*clamp(1.15-p.z*.2,.4,1.);
}`;
const fragmentSource = `
precision mediump float;
uniform vec3 uColor;
varying float vLight;
varying float vAlpha;
void main(){
  float d=length(gl_PointCoord-vec2(.5))*2.;
  if(d>1.)discard;
  float glow=pow(1.-d,1.3);
  vec3 color=mix(uColor*.7,vec3(.78,.98,.91),vLight*.6);
  gl_FragColor=vec4(color,glow*vAlpha);
}`;

function sceneAt(progress) {
  const stops = [
    [0, 0.79, 0.48],
    [0.24, 0.13, 0.46],
    [0.5, 0.88, 0.47],
    [0.76, 0.2, 0.52],
    [1, 0.77, 0.6],
  ];
  const end = stops.findIndex((stop) => stop[0] >= progress);
  if (end <= 0) return stops[0].slice(1);
  const a = stops[end - 1],
    b = stops[end];
  let t = (progress - a[0]) / (b[0] - a[0]);
  t = t * t * (3 - 2 * t);
  return [a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

export default function ScrollArtifact() {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const enabled = useContext(MotionContext);
  const { pathname } = useLocation();
  useEffect(() => {
    const canvas = canvasRef.current,
      frame = frameRef.current;
    let gl;
    try {
      gl = canvas.getContext("webgl", {
        alpha: true,
        antialias: false,
        premultipliedAlpha: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }
    if (!gl) return;
    const resources = [];
    function shader(type, source) {
      const s = gl.createShader(type);
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      resources.push(s);
      return s;
    }
    const vertex = shader(gl.VERTEX_SHADER, vertexSource),
      fragment = shader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) {
      resources.forEach((s) => gl.deleteShader(s));
      return;
    }
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      resources.forEach((s) => gl.deleteShader(s));
      return;
    }
    gl.useProgram(program);
    let seed = 7413;
    const random = () => {
      seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const count = window.innerWidth < 700 ? 22000 : 55000,
      particles = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      const theta = random() * Math.PI * 2;
      const phi = random() * Math.PI * 2;
      const mist = i % 6 === 0;
      const tube = mist ? 0.33 + random() * 0.28 : 0.17 + random() * 0.1;
      const radius = 1.16 + 0.07 * Math.cos(theta * 3) + tube * Math.cos(phi);
      particles[i * 4] = radius * Math.cos(theta);
      particles[i * 4 + 1] = tube * Math.sin(phi) + 0.22 * Math.sin(theta * 3);
      particles[i * 4 + 2] = radius * Math.sin(theta);
      particles[i * 4 + 3] = mist ? random() * 0.3 : 0.3 + random() * 0.7;
    }
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, particles, gl.STATIC_DRAW);
    const attr = gl.getAttribLocation(program, "aParticle");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 4, gl.FLOAT, false, 0, 0);
    const uniforms = Object.fromEntries(
      ["Resolution", "Center", "Rotation", "Size", "Dpr", "Time", "Color"].map(
        (key) => [key, gl.getUniformLocation(program, "u" + key)],
      ),
    );
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
    gl.disable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);
    const tint = pathname.startsWith("/software")
      ? [0.84, 0.56, 0.0]
      : pathname.startsWith("/games")
        ? [0.52, 0.78, 0.3]
        : [0.12, 0.81, 0.77];
    gl.uniform3fv(uniforms.Color, tint);
    let width = 0,
      height = 0,
      dpr = 1,
      scrollRange = 1,
      scrollTarget = 0,
      scrollCurrent = 0,
      lastFrame = 0,
      raf = 0,
      disposed = false,
      elapsed = 0;
    function dimensions() {
      width = innerWidth;
      height = innerHeight;
      dpr = Math.min(devicePixelRatio || 1, width < 700 ? 1.25 : 1.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      scrollRange = Math.max(1, document.documentElement.scrollHeight - height);
      onScroll();
      if (!enabled) draw(0);
    }
    function onScroll() {
      scrollTarget = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    }
    function draw(time) {
      const dt = Math.min(time - lastFrame, 80);
      lastFrame = time;
      if (enabled) {
        elapsed += Math.max(dt, 0) * 0.001;
        scrollCurrent +=
          (scrollTarget - scrollCurrent) *
          (1 - Math.exp(-Math.max(dt, 16) / 140));
      }
      const p = enabled ? scrollCurrent : 0;
      const [cx, cy] = sceneAt(p);
      const size =
        (width < 700 ? width * 0.51 : Math.min(width * 0.3, height * 0.65)) *
        (1 + 0.18 * Math.sin(p * Math.PI * 3));
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uniforms.Resolution, width, height);
      gl.uniform2f(
        uniforms.Center,
        width * cx,
        height * (width < 700 ? cy + 0.18 : cy),
      );
      gl.uniform3f(
        uniforms.Rotation,
        0.7 + p * 1.65,
        -0.4 + p * 4.2 + elapsed * 0.025,
        -0.2 + p * 1.1,
      );
      gl.uniform1f(uniforms.Size, size);
      gl.uniform1f(uniforms.Dpr, dpr);
      gl.uniform1f(uniforms.Time, elapsed);
      gl.drawArrays(gl.POINTS, 0, count);
      frame.dataset.progress = p.toFixed(4);
    }
    function tick(time) {
      if (disposed || document.hidden) return;
      if (time - lastFrame >= 30) draw(time);
      raf = requestAnimationFrame(tick);
    }
    function visibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden && enabled) {
        lastFrame = performance.now();
        raf = requestAnimationFrame(tick);
      }
    }
    function lost(event) {
      event.preventDefault();
      disposed = true;
      cancelAnimationFrame(raf);
      frame.dataset.render = "fallback";
    }
    canvas.addEventListener("webglcontextlost", lost);
    window.addEventListener("resize", dimensions, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    const resizeObserver = new ResizeObserver(() => {
      scrollRange = Math.max(
        1,
        document.documentElement.scrollHeight - innerHeight,
      );
      onScroll();
    });
    resizeObserver.observe(document.body);
    dimensions();
    draw(0);
    frame.dataset.render = "webgl";
    if (enabled) raf = requestAnimationFrame(tick);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("resize", dimensions);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("webglcontextlost", lost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      resources.forEach((s) => gl.deleteShader(s));
    };
  }, [enabled, pathname]);
  return (
    <div
      className="scroll-artifact"
      ref={frameRef}
      aria-hidden="true"
      data-render="fallback"
    >
      <div className="artifact-fallback" />
      <canvas ref={canvasRef} />
      <div className="artifact-shade" />
    </div>
  );
}
