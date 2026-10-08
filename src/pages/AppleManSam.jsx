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
  X,
} from "lucide-react";
import { Button, Kicker, Reveal, SectionHead, SEO, useMotion } from "../components/UI";
import Sprite from "../components/Sprite";
import {
  gallery,
  links,
  samBosses,
  samLoadouts,
  samMaps,
  samPlannedLoadouts,
  samRequirements,
} from "../data/site";

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
        description="Apple Man Sam is a survivors-like roguelite with manual aiming, weapon upgrades, bosses and endless mode. In early access on Steam, with a free demo."
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
              <span className="live-dot" /> Early access on Steam
            </Kicker>
            <h1>
              <span className="sr-only">Apple Man Sam</span>
              <img src="/media/sam-logo.webp" alt="" width="1000" height="563" />
            </h1>
            <p className="sam-hero-line">A survivors-like with manual aiming.</p>
            <div className="button-row">
              <Button href={links.steam} variant="sam">
                Get it on Steam
              </Button>
              <a href="#gameplay" className="btn btn-ghost-light">
                <span>Screenshots</span>
              </a>
            </div>
            <div className="sam-hero-meta">
              <span>A Bonehead Labs game</span>
              <span>PC</span>
              <span>Single player</span>
              <span>Early access</span>
              <span>Free demo</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="wrap sam-stats">
        {[
          [<strong key="a">6</strong>, "Loadouts"],
          [<strong key="b">2</strong>, "Maps"],
          [<strong key="c">4</strong>, "Bosses"],
          [<strong key="d">280+</strong>, "Quests"],
        ].map(([value, label]) => (
          <Reveal key={label}>
            {value}
            <span>{label}</span>
          </Reveal>
        ))}
      </div>

      <section className="section wrap sam-intro">
        <Reveal>
          <Kicker>Apple Man Sam</Kicker>
          <h2>About the game</h2>
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

      <section className="wrap sam-features-section">
        <SectionHead kicker="Gameplay" title="Features" />
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

      <section className="wrap" id="gameplay">
        <SectionHead kicker="Gameplay" title="Screenshots">
          <p>Captured in development. Select a screenshot to view it full screen.</p>
        </SectionHead>
        <GameplayGallery />
      </section>

      <section className="section wrap" id="loadouts">
        <SectionHead kicker="Play as Sam" title="Loadouts">
          <p>Each loadout has three weapons, and each weapon has its own ability.</p>
        </SectionHead>
        <div className="loadout-grid">
          {samLoadouts.map((loadout, index) => (
            <Reveal key={loadout.id} delay={Math.min(index, 5) * 0.05} className="loadout-card">
              <div className="loadout-stage">
                <Sprite src={`/media/sam/${loadout.id}-idle.png`} frames={7} fps={8} className="sprite-idle" />
                <Sprite src={`/media/sam/${loadout.id}-run.png`} frames={8} fps={12} className="sprite-run" />
              </div>
              <div className="loadout-copy">
                <span className="loadout-type">{loadout.type}</span>
                <h3>{loadout.name}</h3>
                <ul>
                  {loadout.weapons.map((weapon) => (
                    <li key={weapon}>{weapon}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="loadout-planned">
          <div className="loadout-planned-sprites">
            {samPlannedLoadouts.map((loadout) => (
              <Sprite key={loadout.id} src={`/media/sam/${loadout.id}-idle.png`} frames={7} fps={6} />
            ))}
          </div>
          <p>
            {samPlannedLoadouts.map((loadout) => loadout.name).join(", ").replace(/, ([^,]*)$/, " and $1")}{" "}
            are planned for the full release.
          </p>
        </Reveal>
      </section>

      <section className="wrap" id="bosses">
        <SectionHead kicker="Enemies" title="Bosses">
          <p>Four bosses in early access. Each map ends in a boss arena.</p>
        </SectionHead>
        <div className="boss-grid">
          {samBosses.map((boss, index) => (
            <Reveal key={boss.id} delay={index * 0.06} className="boss-card">
              <div className="boss-stage">
                <Sprite src={`/media/sam/boss-${boss.id}.png`} frames={boss.frames} fps={7} />
              </div>
              <h3>{boss.name}</h3>
              <p>{boss.arena ? `${boss.arena} arena` : "Appears during runs"}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap" id="maps">
        <SectionHead kicker="Maps" title="Where you fight">
          <p>The Dusty Town and The Space Station are planned for the full release.</p>
        </SectionHead>
        <div className="map-grid">
          {samMaps.map((map, index) => (
            <Reveal key={map.id} delay={index * 0.08} as="figure" className="map-card">
              <img src={map.image} alt={map.alt} width="1600" height="720" loading="lazy" />
              <figcaption>
                <strong>{map.name}</strong>
                <span>{map.unlock}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap sam-requirements" id="requirements">
        <SectionHead kicker="PC" title="System requirements" />
        <Reveal className="req-table-wrap" tabIndex={0} role="region" aria-label="System requirements">
          <table className="req-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Component</span>
                </th>
                <th scope="col">Minimum</th>
                <th scope="col">Recommended</th>
              </tr>
            </thead>
            <tbody>
              {samRequirements.map(([label, minimum, recommended]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{minimum}</td>
                  <td>{recommended}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      <section className="sam-cta">
        <Reveal className="sam-cta-panel">
          <div>
            <Kicker>Early access</Kicker>
            <h2>Apple Man Sam on Steam</h2>
            <p className="sam-cta-line">Available now in early access, with a free demo.</p>
            <div className="button-row">
              <Button href={links.steam}>Get it on Steam</Button>
              <Button to="/games" variant="secondary">
                All games
              </Button>
            </div>
            <iframe
              className="steam-widget"
              src="https://store.steampowered.com/widget/4293080/"
              title="Apple Man Sam on the Steam store"
              width="646"
              height="190"
              loading="lazy"
            />
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
