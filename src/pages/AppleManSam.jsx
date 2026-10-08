import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Layers3,
  Maximize2,
  Trophy,
  Infinity as InfinityIcon,
  Skull,
  X,
} from "lucide-react";
import { Button, Kicker, Reveal, SectionHead, SEO, useMotion } from "../components/UI";
import { gallery, links } from "../data/site";

function GameplayGallery() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef(null);
  const openButton = useRef(null);
  const previous = () =>
    setActive((value) => (value + gallery.length - 1) % gallery.length);
  const next = () => setActive((value) => (value + 1) % gallery.length);
  useEffect(() => {
    if (expanded) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [expanded]);
  function close() {
    setExpanded(false);
    openButton.current?.focus();
  }
  return (
    <div className="game-gallery">
      <figure className="gallery-main">
        <button
          className="gallery-expand"
          ref={openButton}
          onClick={() => setExpanded(true)}
          aria-label="Enlarge gameplay screenshot"
        >
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            width="1800"
            height="1010"
            loading="lazy"
          />
          <span>
            <Maximize2 size={16} aria-hidden="true" /> Full screen
          </span>
        </button>
        <figcaption>
          <span>
            <b>{active + 1}</b> / {gallery.length}
          </span>
          <span aria-live="polite">{gallery[active].title}</span>
          <div className="gallery-controls">
            <button
              className="round-button"
              onClick={previous}
              aria-label="Previous screenshot"
            >
              <ChevronLeft />
            </button>
            <button
              className="round-button"
              onClick={next}
              aria-label="Next screenshot"
            >
              <ChevronRight />
            </button>
          </div>
        </figcaption>
      </figure>
      <div
        className="gallery-thumbnails"
        role="group"
        aria-label="Choose a gameplay screenshot"
      >
        {gallery.map((item, index) => (
          <button
            key={item.src}
            className={active === index ? "selected" : ""}
            onClick={() => setActive(index)}
            aria-label={item.title}
            aria-pressed={active === index}
          >
            <img
              src={item.src}
              alt=""
              width="450"
              height="253"
              loading="lazy"
            />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Apple Man Sam gameplay screenshots"
        onCancel={close}
        onClose={() => setExpanded(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") next();
          if (event.key === "ArrowLeft") previous();
        }}
      >
        <div className="lightbox-inner">
          <button
            className="round-button lightbox-close"
            onClick={close}
            aria-label="Close screenshot"
          >
            <X />
          </button>
          <img src={gallery[active].src} alt={gallery[active].alt} />
          <div className="lightbox-controls">
            <button
              className="round-button"
              onClick={previous}
              aria-label="Previous screenshot"
            >
              <ChevronLeft />
            </button>
            <p aria-live="polite">{gallery[active].title}</p>
            <button
              className="round-button"
              onClick={next}
              aria-label="Next screenshot"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

const features = [
  {
    icon: Crosshair,
    title: "Manual combat",
    copy: "Aim and fire your weapons directly while moving through enemy waves and using your abilities.",
  },
  {
    icon: Layers3,
    title: "Build progression",
    copy: "Upgrade weapons, combine items and unlock loadouts that change how each run plays.",
  },
  {
    icon: Trophy,
    title: "Bosses & endless mode",
    copy: "Complete stages and boss fights, then continue in endless mode and compare scores on the global leaderboards.",
  },
];

export default function AppleManSam() {
  const hero = useRef(null);
  const motionOn = useMotion();
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const artScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  return (
    <div className="sam-page">
      <SEO
        title="Apple Man Sam"
        description="Apple Man Sam is a survivors-like roguelite with manual aiming, weapon upgrades, bosses and endless mode. Demo available on Steam."
        image="/media/sam-hero.webp"
      />
      <section className="sam-hero" ref={hero}>
        <motion.img
          src="/media/sam-hero.webp"
          className="sam-hero-art"
          alt="Sam the apple, in sunglasses, takes on a horde of angry vegetables"
          width="2560"
          height="827"
          fetchPriority="high"
          style={motionOn ? { y: artY, scale: artScale } : undefined}
        />
        <div className="sam-hero-shade" />
        <div className="wrap sam-hero-inner">
          <Link to="/games" className="back-link">
            <ArrowLeft size={15} aria-hidden="true" /> All games
          </Link>
          <Reveal className="sam-hero-inner">
            <Kicker>
              <span className="live-dot" /> Demo out now on Steam
            </Kicker>
            <h1>
              <span className="sr-only">Apple Man Sam</span>
              <img src="/media/sam-logo.webp" alt="" width="1000" height="563" />
            </h1>
            <p className="sam-hero-line">A survivors-like with manual aiming.</p>
            <div className="button-row">
              <Button href={links.steam} variant="sam">
                Play demo & wishlist
              </Button>
              <a href="#gameplay" className="btn btn-ghost-light">
                <span>See gameplay</span>
              </a>
            </div>
            <div className="sam-hero-meta">
              <span>A Bonehead Labs game</span>
              <span>PC</span>
              <span>Single player</span>
              <span>Coming soon</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="wrap sam-stats">
        {[
          [<strong key="a">~20</strong>, "Minute runs"],
          [<strong key="b"><InfinityIcon aria-hidden="true" /></strong>, "Endless mode"],
          [<strong key="c"><Crosshair aria-hidden="true" /></strong>, "Manual aiming"],
          [<strong key="d"><Skull aria-hidden="true" /></strong>, "Boss fights"],
        ].map(([value, label]) => (
          <Reveal key={label}>
            {value}
            <span>{label}</span>
          </Reveal>
        ))}
      </div>

      <section className="section wrap sam-intro">
        <Reveal>
          <Kicker>About the game</Kicker>
          <h2>
            Survive the <span>horde.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="large">
            Play as Sam, an apple fighting through waves of vegetable enemies.
            You control the movement, aim and weapons.
          </p>
          <p>
            Choose upgrades as you level up, collect items and complete quests
            to unlock new loadouts. Finish a run by defeating the boss, or
            continue in endless mode.
          </p>
        </Reveal>
      </section>

      <section className="wrap" id="gameplay">
        <SectionHead kicker="Screenshots" title="Gameplay.">
          <p>Captured in development. Select a screenshot to view it full screen.</p>
        </SectionHead>
        <GameplayGallery />
      </section>

      <section className="section wrap">
        <SectionHead kicker="Gameplay features" title="Combat, upgrades and progression." />
        <div className="sam-features">
          {features.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article>
                <div className="sam-feature-icon">
                  <item.icon size={28} strokeWidth={2.4} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sam-cta">
        <Reveal className="sam-cta-panel">
          <div>
            <Kicker>Available on Steam</Kicker>
            <h2>Play the demo.</h2>
            <div className="button-row">
              <Button href={links.steam}>Play the demo on Steam</Button>
              <Button to="/games" variant="secondary">
                More games
              </Button>
            </div>
          </div>
          <img
            src="/media/sam-poster.webp"
            alt="Apple Man Sam poster: Sam in sunglasses holding a rifle"
            width="624"
            height="748"
            loading="lazy"
          />
        </Reveal>
      </section>
    </div>
  );
}
