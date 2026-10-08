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
  Box,
  Monitor,
  MousePointer2,
  Heart,
} from "lucide-react";
import { Button, Kicker, Reveal, TextLink, useMotion } from "./UI";
import Mascot from "./Mascot";
import { links, software } from "../data/site";
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

function WardArt() {
  return (
    <div className="ward-art" aria-hidden="true">
      <div className="ward-monitor">
        <div className="ward-screen">
          <svg viewBox="0 0 400 120" preserveAspectRatio="none">
            <path
              className="ecg-trace"
              d="M0 64H90L104 56L118 72L134 62H160L176 64L194 14L212 106L230 44L246 64H300L312 58L324 68L334 64H400"
            />
          </svg>
          <span className="ward-bpm">
            <Heart size={14} strokeWidth={3} /> 72
          </span>
        </div>
      </div>
      <div className="ward-cross" />
      <div className="ward-pill ward-pill-a" />
      <div className="ward-pill ward-pill-b" />
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
          <Kicker>Early prototype · working title</Kicker>
          <h3>Ward Work</h3>
          <ul className="tag-row">
            <li>
              <UsersRound size={16} aria-hidden="true" /> Co-op
            </li>
            <li>
              <Stethoscope size={16} aria-hidden="true" /> Hospital
            </li>
            <li>
              <Box size={16} aria-hidden="true" /> Physics
            </li>
          </ul>
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
