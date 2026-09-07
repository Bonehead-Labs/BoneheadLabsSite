import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Layers3,
  Maximize2,
  Trophy,
  X,
} from "lucide-react";
import { Button, Reveal, SectionHeading, SEO } from "../components/UI";
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
            <Maximize2 size={18} /> FULL SCREEN
          </span>
        </button>
        <figcaption>
          <span>
            <b>{active + 1}</b> / {gallery.length}
          </span>
          <span aria-live="polite">{gallery[active].title}</span>
          <div className="gallery-controls">
            <button
              className="icon-button"
              onClick={previous}
              aria-label="Previous screenshot"
            >
              <ChevronLeft />
            </button>
            <button
              className="icon-button"
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
            className="icon-button lightbox-close"
            onClick={close}
            aria-label="Close screenshot"
          >
            <X />
          </button>
          <img src={gallery[active].src} alt={gallery[active].alt} />
          <div className="lightbox-controls">
            <button
              className="icon-button"
              onClick={previous}
              aria-label="Previous screenshot"
            >
              <ChevronLeft />
            </button>
            <p aria-live="polite">{gallery[active].title}</p>
            <button
              className="icon-button"
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
export default function AppleManSam() {
  return (
    <div className="sam-page">
      <SEO
        title="Apple Man Sam"
        description="Apple Man Sam is a survivors-like roguelite with manual aiming, weapon upgrades, bosses and endless mode. Demo available on Steam."
        image="/media/sam-hero.webp"
      />
      <section className="sam-hero">
        <img
          src="/media/sam-hero.webp"
          className="sam-hero-art"
          alt="Sam the Apple takes on a horde of angry vegetables"
          width="2560"
          height="827"
          fetchPriority="high"
        />
        <div className="sam-hero-shade" />
        <div className="wrap sam-hero-inner">
          <Link to="/games" className="back-link">
            <ArrowLeft size={16} /> ALL GAMES
          </Link>
          <Reveal className="sam-hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> DEMO AVAILABLE ON STEAM
            </p>
            <h1>
              <span className="sr-only">Apple Man Sam</span>
              <img
                src="/media/sam-logo.webp"
                alt=""
                width="1000"
                height="563"
              />
            </h1>
            <p>A survivors-like with manual aiming.</p>
            <p className="sam-description">
              Fight waves of enemies, upgrade your weapons and build your
              loadout as you go. Play the demo on Steam.
            </p>
            <div className="button-row">
              <Button href={links.steam}>Play demo & wishlist</Button>
              <a href="#gameplay" className="button button-secondary">
                View gameplay <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>
          <div className="sam-hero-meta">
            <span>A BONEHEAD LABS GAME</span>
            <span>PC / SINGLE PLAYER / COMING SOON</span>
          </div>
        </div>
      </section>
      <div className="sam-strip">
        <span>MANUAL AIM</span>
        <i aria-hidden="true" />
        <span>WEAPON UPGRADES</span>
        <i aria-hidden="true" />
        <span>ENDLESS MODE</span>
        <i aria-hidden="true" />
        <span>BOSS FIGHTS</span>
      </div>
      <section className="section wrap sam-intro">
        <Reveal>
          <p className="eyebrow">ABOUT THE GAME</p>
          <h2>
            Survive
            <br />
            the <span>horde.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="large-copy">
            Play as Sam, an apple fighting through waves of vegetable enemies.
            You control the movement, aim and weapons.
          </p>
          <p>
            Choose upgrades as you level up, collect items and complete quests
            to unlock new loadouts. Finish a run by defeating the boss, or
            continue in endless mode.
          </p>
          <div className="sam-stats">
            <div>
              <strong>~20</strong>
              <span>MINUTE RUNS</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>ENDLESS MODE</span>
            </div>
            <div>
              <Crosshair size={38} />
              <span>MANUAL AIMING</span>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section sam-gameplay" id="gameplay">
        <div className="wrap">
          <SectionHeading label="SCREENSHOTS" title="Gameplay.">
            <p>
              Captured in development.
              <br />
              Select a screenshot to view it full screen.
            </p>
          </SectionHeading>
          <GameplayGallery />
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          label="GAMEPLAY FEATURES"
          title={
            <>
              Combat, upgrades
              <br />& <span className="lime">progression.</span>
            </>
          }
        />
        <div className="game-features">
          {[
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
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article>
                <div className="game-feature-top">
                  <item.icon size={30} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="sam-cta">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">AVAILABLE ON STEAM</p>
            <h2>
              Play the
              <br />
              <span>demo.</span>
            </h2>
            <div className="button-row">
              <Button href={links.steam}>Play the demo on Steam</Button>
              <span>EARLY ACCESS / COMING SOON</span>
            </div>
          </Reveal>
          <img
            src="/media/sam-poster.webp"
            alt="Apple Man Sam illustrated poster"
            width="748"
            height="896"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
