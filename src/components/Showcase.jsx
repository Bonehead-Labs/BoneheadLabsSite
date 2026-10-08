import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Crosshair,
  Layers3,
  Infinity as InfinityIcon,
  Skull,
  UsersRound,
  Stethoscope,
  Globe,
  Monitor,
  MousePointer2,
  Heart,
} from "lucide-react";
import { Button, Kicker, Reveal, TextLink, useMotion } from "./UI";
import Mascot from "./Mascot";
import Sprite from "./Sprite";
import { links, samLoadouts, software } from "../data/site";
import { InstrumentaIcon } from "../brand/instrumenta/InstrumentaIcon";

const samShots = [
  { src: "/media/sam-action.webp", label: "Combat", alt: "Sam firing into a wave of vegetable enemies at night" },
  { src: "/media/sam-chaos.webp", label: "Endless mode", alt: "A late-game run with huge hordes, fire and projectiles" },
  { src: "/media/sam-upgrades.webp", label: "Upgrades", alt: "A choice of three upgrades on the level-up screen" },
  { src: "/media/sam-shop.webp", label: "Shop", alt: "The weapon and item shop" },
];
const samTraits = [
  [Crosshair, "Manual aim"],
  [Layers3, "Weapon upgrades"],
  [Skull, "Boss fights"],
  [InfinityIcon, "Endless mode"],
];

function FanCard({ shot, index, progress, motionOn }) {
  // Cards start dealt into one pile and spread into a loose grid as the section scrolls in.
  const from = [
    ["40%", "45%", 8],
    ["-40%", "50%", -6],
    ["38%", "-40%", -10],
    ["-38%", "-45%", 12],
  ][index];
  const rest = [-5, 4, 3, -4][index];
  const x = useTransform(progress, [0.08, 0.42], [from[0], "0%"]);
  const y = useTransform(progress, [0.08, 0.42], [from[1], "0%"]);
  const rotate = useTransform(progress, [0.08, 0.42], [from[2], rest]);
  return (
    <motion.figure
      className="fan-card"
      style={motionOn ? { x, y, rotate } : { rotate: rest }}
    >
      <Link to="/games/apple-man-sam#gameplay" aria-label={`${shot.label}: view Apple Man Sam gameplay`}>
        <img src={shot.src} alt={shot.alt} width="900" height="505" loading="lazy" />
        <figcaption>{shot.label}</figcaption>
      </Link>
    </motion.figure>
  );
}

export function SamShowcase({ id = "apple-man-sam" }) {
  const ref = useRef(null);
  const motionOn = useMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const artScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const artY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <section className="sam-show" id={id} ref={ref}>
      <div className="sam-screen">
        <motion.img
          className="sam-show-art"
          src="/media/sam-hero.webp"
          alt=""
          width="2560"
          height="827"
          loading="lazy"
          style={motionOn ? { scale: artScale, y: artY } : undefined}
        />
        <div className="sam-show-shade" aria-hidden="true" />
        <div className="sam-show-body">
          <Reveal className="sam-show-copy">
            <Kicker className="kicker-sam">
              <span className="live-dot" /> Early access on Steam
            </Kicker>
            <h2 className="sam-logo-title">
              <img src="/media/sam-logo.webp" alt="Apple Man Sam" width="1000" height="563" />
            </h2>
            <p className="sam-show-line">
              A survivors-like with manual aiming. Free demo available.
            </p>
            <ul className="trait-row" aria-label="Game features">
              {samTraits.map(([Icon, label]) => (
                <li key={label}>
                  <Icon size={17} strokeWidth={2.4} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="button-row">
              <Button href={links.steam} variant="sam">
                Get it on Steam
              </Button>
              <Button to="/games/apple-man-sam" variant="ghost-light">
                About the game
              </Button>
            </div>
          </Reveal>
          <div className="fan" aria-label="Apple Man Sam screenshots">
            {samShots.map((shot, index) => (
              <FanCard key={shot.src} shot={shot} index={index} progress={scrollYProgress} motionOn={motionOn} />
            ))}
          </div>
          <div className="sam-parade" aria-hidden="true">
            {samLoadouts.map((loadout, index) => (
              <Sprite
                key={loadout.id}
                src={`/media/sam/${loadout.id}-run.png`}
                frames={8}
                fps={11 + (index % 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstrumentaShowcase() {
  return (
    <section className="ins-show" id="instrumenta">
      <div className="ins-show-panel ii-hover">
        <div className="ins-show-glow" aria-hidden="true" />
        <Reveal className="ins-show-organ ii-play">
          <InstrumentaIcon id="instrumenta" label="The Instrumenta organ" />
        </Reveal>
        <Reveal className="ins-show-copy" delay={0.1}>
          <p className="ins-show-kicker">
            <span /> Software by Bonehead Labs
          </p>
          <h2>Instrumenta</h2>
          <p className="ins-show-lede">
            A suite of local creative tools. Everything runs on your computer.
          </p>
          <div className="ins-show-links">
            <TextLink to="/software" className="ins-show-link">
              See the applications
            </TextLink>
            <TextLink href={links.instrumenta} className="ins-show-link ins-show-link-quiet">
              Source on GitHub
            </TextLink>
          </div>
        </Reveal>
        <ul className="ins-show-apps" aria-label="Instrumenta applications">
          {software.map((app, index) => (
            <Reveal
              as="li"
              key={app.id}
              delay={0.04 * index}
              className="ins-app ii-hover"
              style={{ "--accent": app.color }}
            >
              <Link to={`/software#app-${app.id}`}>
                <InstrumentaIcon id={app.id} size={52} />
                <strong>{app.name}</strong>
                <span>{app.discipline}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <p className="ins-show-status">In development · source on GitHub</p>
      </div>
    </section>
  );
}

// Top-down operating theatre: four players around a patient. Illustrated rather than captured,
// because the game is at an early prototype stage.
const wardPlayers = [
  { x: 318, y: 58, cap: "var(--teal)", tool: "scalpel", look: [0, 1] },
  { x: 150, y: 176, cap: "var(--pink)", tool: "paddles", look: [1, 0] },
  { x: 300, y: 290, cap: "var(--brass)", tool: "clamp", look: [0, -1] },
  { x: 482, y: 92, cap: "var(--violet)", tool: "syringe", look: [-0.7, 0.7] },
];

function WardArt() {
  return (
    <div className="ward-art" aria-hidden="true">
      <svg className="ward-scene" viewBox="0 0 640 340">
        <circle className="ward-lamp" cx="318" cy="176" r="118" />
        <g className="ward-monitor-svg">
          <rect x="22" y="22" width="112" height="72" rx="14" />
          <rect className="ward-monitor-screen" x="32" y="32" width="92" height="52" rx="7" />
          <path className="ecg-trace" pathLength="100" d="M36 60H58L64 55L70 64L76 58H84L90 38L97 78L104 50L110 60H120" />
        </g>
        <g className="ward-tray">
          <rect x="520" y="226" width="96" height="74" rx="14" />
          <path d="M538 248H592M538 264H580M538 280H598" />
        </g>
        <g className="ward-table">
          <rect x="198" y="112" width="250" height="128" rx="24" />
          <rect className="ward-sheet" x="214" y="128" width="168" height="96" rx="38" />
          <path className="ward-fold" d="M246 132V220" />
          <circle className="ward-patient-head" cx="408" cy="176" r="30" />
          <path className="ward-patient-hair" d="M396 150C414 142 434 152 436 170C428 162 412 160 400 166Z" />
        </g>
        {wardPlayers.map((player, index) => {
          const [lx, ly] = player.look;
          const angle = (Math.atan2(ly, lx) * 180) / Math.PI;
          return (
            <g key={player.cap} transform={`translate(${player.x} ${player.y})`}>
              <g className="ward-player" style={{ "--delay": `${index * -0.45}s` }}>
                <ellipse
                  className="ward-shoulders"
                  style={{ fill: player.cap }}
                  rx="44"
                  ry="22"
                  transform={`translate(${-lx * 10} ${-ly * 10}) rotate(${angle + 90})`}
                />
                <circle className="ward-hand" cx={lx * 30 - ly * 22} cy={ly * 30 + lx * 22} r="10" />
                <circle className="ward-hand" cx={lx * 30 + ly * 22} cy={ly * 30 - lx * 22} r="10" />
                <circle className="ward-head" r="27" />
                <path
                  className="ward-cap"
                  style={{ fill: player.cap }}
                  d="M-27 2A27 27 0 0 1 27 2C16 -4 -16 -4 -27 2Z"
                  transform={`rotate(${angle - 90})`}
                />
                <circle className="ward-eye" cx={lx * 11 - ly * 9} cy={ly * 11 + lx * 9} r="3.6" />
                <circle className="ward-eye" cx={lx * 11 + ly * 9} cy={ly * 11 - lx * 9} r="3.6" />
              </g>
            </g>
          );
        })}
      </svg>
      <span className="ward-stamp">Early prototype</span>
    </div>
  );
}

function FriendArt() {
  const area = useRef(null);
  const motionOn = useMotion();
  return (
    <div className="friend-art" ref={area}>
      <div className="friend-window" aria-hidden="true">
        <div className="friend-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="friend-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <MousePointer2 className="friend-cursor" aria-hidden="true" />
      <motion.div
        className="friend-buddy"
        drag={motionOn}
        dragConstraints={area}
        dragElastic={0.25}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 12 }}
        whileDrag={{ scale: 1.08, rotate: -8 }}
      >
        <Mascot sticker label="" />
      </motion.div>
    </div>
  );
}

export function LabProjects() {
  return (
    <div className="lab-grid">
      <Reveal as="article" className="lab-card lab-ward">
        <WardArt />
        <div className="lab-copy">
          <Kicker>Working title</Kicker>
          <h3>Ward Work</h3>
          <p className="lab-line">
            A co-op hospital game for one to four players. Run the hospital
            together and perform physics-based surgery on incoming patients.
          </p>
          <ul className="tag-row">
            <li>
              <UsersRound size={16} aria-hidden="true" /> 1–4 players
            </li>
            <li>
              <Globe size={16} aria-hidden="true" /> Online co-op
            </li>
            <li>
              <Stethoscope size={16} aria-hidden="true" /> Physics surgery
            </li>
          </ul>
          <p className="lab-note">Early in development. Details will change.</p>
        </div>
      </Reveal>
      <Reveal as="article" className="lab-card lab-friend" delay={0.08}>
        <FriendArt />
        <div className="lab-copy">
          <Kicker>New version · in development</Kicker>
          <h3>Bonehead Friend</h3>
          <ul className="tag-row">
            <li>
              <Monitor size={16} aria-hidden="true" /> Desktop companion
            </li>
            <li>
              <MousePointer2 size={16} aria-hidden="true" /> Physics play
            </li>
          </ul>
          <p className="lab-note">A new version, separate from the 2025 prototype.</p>
        </div>
      </Reveal>
    </div>
  );
}
