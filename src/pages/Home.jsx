import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Gamepad2, Code2, Sparkles } from "lucide-react";
import {
  Button,
  Kicker,
  Reveal,
  SectionHead,
  SEO,
  Sticker,
  TextLink,
  formatDate,
  useMotion,
} from "../components/UI";
import Mascot from "../components/Mascot";
import {
  SamShowcase,
  InstrumentaShowcase,
  LabProjects,
  DemoArchive,
} from "../components/Showcase";
import { InstrumentaIcon } from "../brand/instrumenta/InstrumentaIcon";
import { getRecentPosts, resolvePostImage } from "../blog/blogUtils";
import { links } from "../data/site";

// Pointer and scroll parallax for the hero's floating objects, written to CSS variables.
function useHeroParallax(ref) {
  const motionOn = useMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node || !motionOn) {
      node?.style.setProperty("--px", 0);
      node?.style.setProperty("--py", 0);
      node?.style.setProperty("--sy", 0);
      return;
    }
    let frame;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    const onMove = (event) => {
      target = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      node.style.setProperty("--px", current.x.toFixed(3));
      node.style.setProperty("--py", current.y.toFixed(3));
      node.style.setProperty("--sy", Math.min(window.scrollY, 1200).toFixed(0));
      frame = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [ref, motionOn]);
}

function Float({ depth, className, children }) {
  return (
    <div className={`float ${className}`} style={{ "--depth": depth }}>
      {children}
    </div>
  );
}

function HeroStickers() {
  return (
    <div className="hero-stickers">
      <Float depth={1.2} className="f-sam">
        <Sticker rotate={-9} className="sticker-plain">
          <img src="/media/sam-logo.webp" alt="" width="1000" height="563" draggable="false" />
        </Sticker>
      </Float>
      <Float depth={0.8} className="f-organ">
        <Sticker rotate={8} className="sticker-plain ii-play">
          <InstrumentaIcon id="instrumenta" />
        </Sticker>
      </Float>
      <Float depth={1.6} className="f-pad">
        <Sticker rotate={-14} className="sticker-chip chip-lime">
          <Gamepad2 strokeWidth={2.2} />
        </Sticker>
      </Float>
      <Float depth={0.6} className="f-code">
        <Sticker rotate={12} className="sticker-chip chip-pink">
          <Code2 strokeWidth={2.4} />
        </Sticker>
      </Float>
      <Float depth={1.4} className="f-imago">
        <Sticker rotate={-6} className="sticker-plain ii-hover">
          <InstrumentaIcon id="imago" />
        </Sticker>
      </Float>
      <Float depth={1} className="f-forge">
        <Sticker rotate={10} className="sticker-plain ii-hover">
          <InstrumentaIcon id="forge3d" />
        </Sticker>
      </Float>
      <Float depth={2} className="f-spark">
        <Sticker rotate={0} className="sticker-chip chip-brass">
          <Sparkles strokeWidth={2.4} />
        </Sticker>
      </Float>
    </div>
  );
}

function SpinBadge() {
  return (
    <a className="spin-badge" href={links.steam} target="_blank" rel="noreferrer" aria-label="Play the Apple Man Sam demo on Steam">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
        </defs>
        <text>
          <textPath href="#badge-circle" textLength="462" lengthAdjust="spacing">
            Free demo on Steam · Apple Man Sam ·
          </textPath>
        </text>
      </svg>
      <span className="spin-badge-core">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5.5v13l10.5-6.5z" />
        </svg>
      </span>
    </a>
  );
}

export default function Home() {
  const hero = useRef(null);
  useHeroParallax(hero);
  const posts = getRecentPosts(3);
  return (
    <>
      <SEO description="Bonehead Labs is an independent game and software studio. Explore Apple Man Sam, the Instrumenta suite and projects in development." />
      <section className="hero" ref={hero}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <HeroStickers />
        <div className="hero-stage">
          <h1 className="hero-title" aria-label="Bonehead Labs">
            <span className="ht-word ht-bone" aria-hidden="true">Bone</span>
            <span className="ht-gap" aria-hidden="true" />
            <span className="ht-word ht-head" aria-hidden="true">
              head<span className="ht-labs">Labs</span>
            </span>
          </h1>
          <div className="hero-mascot">
            <Mascot interactive />
            <span className="hero-hint" aria-hidden="true">
              <svg viewBox="0 0 120 60">
                <path d="M112 8C86 6 52 14 30 44" />
                <path d="M24 30L28 48L46 44" />
              </svg>
              <span className="hint-fine">click the bone</span>
              <span className="hint-coarse">tap the bone</span>
            </span>
          </div>
        </div>
        <Reveal className="hero-foot" delay={0.15}>
          <p className="hero-tagline">
            Independent <mark className="mk-lime">games</mark> and{" "}
            <mark className="mk-brass">software</mark>, made by one person and a bone.
          </p>
          <div className="button-row">
            <Button to="/games/apple-man-sam">Play Apple Man Sam</Button>
            <Button to="/software" variant="secondary">
              Explore Instrumenta
            </Button>
          </div>
        </Reveal>
        <SpinBadge />
      </section>

      <SamShowcase />

      <InstrumentaShowcase />

      <section className="section wrap" id="in-the-lab">
        <SectionHead kicker="In development" title="Fresh out of the lab.">
          <p>Two projects in progress. Details when they are ready.</p>
        </SectionHead>
        <LabProjects />
      </section>

      <section className="section wrap archive-section" id="demos">
        <SectionHead kicker="Earlier releases" title="Free demos to play.">
          <TextLink to="/games">All games</TextLink>
        </SectionHead>
        <DemoArchive />
      </section>

      <section className="studio-band">
        <div className="wrap studio-band-grid">
          <Reveal className="studio-band-art">
            <img
              src="/media/bonehead-working.webp"
              alt="The Bonehead mascot coding at a laptop with a mug of coffee"
              width="1024"
              height="629"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="studio-band-copy" delay={0.1}>
            <Kicker>The studio</Kicker>
            <h2>One developer. Games, tools and a lot of coffee.</h2>
            <p>
              Bonehead Labs is an independent studio founded and run by George
              Nizoridis: programming, design, art and the business.
            </p>
            <TextLink to="/about">About the studio</TextLink>
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <SectionHead kicker="Development blog" title="Notes from the bench.">
          <TextLink to="/blog">All posts</TextLink>
        </SectionHead>
        <div className="post-row">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.07}>
              <Link to={`/blog/${post.slug}`} className="post-card">
                <div className="post-card-art">
                  <img
                    src={resolvePostImage(post.frontmatter.image)}
                    alt=""
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="post-card-copy">
                  <Kicker>
                    {post.frontmatter.tags?.[0]} · {formatDate(post.date)}
                  </Kicker>
                  <h3>{post.frontmatter.title}</h3>
                  <span className="post-card-go" aria-hidden="true">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
