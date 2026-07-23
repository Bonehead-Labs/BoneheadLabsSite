import { ArrowRight, Crosshair, Gamepad2, Layers3, Play, Sparkles, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, FadeIn } from "../utils/common.jsx";

import heroArt from "../assets/Apple Man Sam/v3/library-hero.png";
import gameLogo from "../assets/Apple Man Sam/v3/logo.png";
import awesomeScreenshot from "../assets/Apple Man Sam/v3/awesome.png";
import chaosScreenshot from "../assets/Apple Man Sam/v3/chaos.png";
import levelUpScreenshot from "../assets/Apple Man Sam/v3/level-up.png";
import shopScreenshot from "../assets/Apple Man Sam/v3/shop.png";
import verticalCapsule from "../assets/Apple Man Sam/v3/vertical-capsule.png";

const STEAM_URL = "https://store.steampowered.com/app/4293080/Apple_Man_Sam/";

const features = [
  {
    icon: Crosshair,
    number: "01",
    title: "Aim and fire",
    copy: "Manual aiming and active weapons keep combat hands-on from the first wave to the final boss.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Shape each run",
    copy: "Choose upgrades, combine items, and unlock new loadouts that change how each run plays.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Push further",
    copy: "Clear stages and bosses, continue in endless mode, and compete on the global leaderboards.",
  },
];

const gallery = [
  { src: awesomeScreenshot, alt: "Apple Man Sam firing into an enormous horde of vegetables", label: "619 KILLS" },
  { src: levelUpScreenshot, alt: "Apple Man Sam level-up choices during a run", label: "LEVEL UP" },
  { src: shopScreenshot, alt: "Apple Man Sam item shop and loadout screen", label: "GEAR UP" },
];

function SteamButton({ children, secondary = false, className = "" }) {
  return (
    <a
      href={STEAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`ams-button ${secondary ? "ams-button-secondary" : ""} ${className}`}
    >
      <Gamepad2 aria-hidden="true" className="h-5 w-5" />
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

export default function Home() {
  return (
    <div className="ams-page">
      <section className="ams-hero">
        <img className="ams-hero-art" src={heroArt} alt="" aria-hidden="true" />
        <div className="ams-hero-scrim" />
        <div className="ams-grain" />

        <Container className="relative z-10 flex min-h-[calc(100svh-3.5rem)] flex-col justify-end pb-12 pt-28 sm:pb-16 lg:justify-center lg:pb-20 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="ams-kicker">
              <span className="ams-live-dot" />
              Demo available now · Coming September 2026
            </div>

            <img
              src={gameLogo}
              alt="Apple Man Sam"
              className="mt-6 w-full max-w-[640px] drop-shadow-[0_12px_0_rgba(0,0,0,0.5)]"
            />

            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed text-white sm:text-xl">
              A top-down survivors-like roguelite with manual aiming,
              upgradeable weapons, quests, bosses, and endless mode.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SteamButton>Wishlist on Steam</SteamButton>
              <a href="#gameplay" className="ams-button ams-button-secondary">
                <Play aria-hidden="true" className="h-4 w-4 fill-current" />
                <span>See it in action</span>
              </a>
            </div>
          </motion.div>
        </Container>

        <div className="ams-scroll-cue" aria-hidden="true">
          <span>SCROLL TO START</span>
          <span className="ams-scroll-line" />
        </div>
      </section>

      <div className="ams-ticker" aria-label="Game highlights">
        <div className="ams-ticker-track">
          {Array.from({ length: 2 }).map((_, group) => (
            <div className="ams-ticker-group" aria-hidden={group === 1} key={group}>
              <span>MANUAL FIRE</span><Zap />
              <span>ROGUELITE BUILDS</span><Zap />
              <span>BOSS FIGHTS</span><Zap />
              <span>ENDLESS MODE</span><Zap />
              <span>GLOBAL LEADERBOARDS</span><Zap />
            </div>
          ))}
        </div>
      </div>

      <section id="gameplay" className="ams-section ams-intro">
        <Container className="grid items-center gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
          <FadeIn className="relative mx-auto max-w-md lg:mx-0">
            <div className="ams-poster-frame">
              <img src={verticalCapsule} alt="Apple Man Sam facing a horde of angry vegetables" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="ams-eyebrow">APPLE MAN SAM</p>
              <h1 className="ams-display mt-4 text-5xl leading-[0.92] sm:text-7xl">
                Aim. Upgrade.<br />
                <span className="ams-outline-text">Survive.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                Choose a loadout and fight through escalating waves of enemies.
                Level up, collect items, complete quests, and develop a new build
                each run.
              </p>
            </FadeIn>
            <FadeIn delay={2} className="mt-9 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15">
              {[
                ["~20", "MIN RUNS"],
                ["4", "WAVES / STAGE"],
                ["∞", "ENDLESS CHAOS"],
              ].map(([value, label]) => (
                <div className="bg-[#101912] px-3 py-5 text-center" key={label}>
                  <strong className="ams-display block text-3xl text-[#d8ff45] sm:text-4xl">{value}</strong>
                  <span className="mt-1 block text-[10px] font-black tracking-[0.18em] text-white/50 sm:text-xs">{label}</span>
                </div>
              ))}
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="ams-section border-y border-white/10 bg-[#0a0e0b]">
        <Container className="py-24 lg:py-32">
          <FadeIn className="max-w-3xl">
            <p className="ams-eyebrow">CORE GAMEPLAY</p>
            <h2 className="ams-display mt-4 text-5xl leading-none sm:text-7xl">
              Three parts.<br /><span className="text-[#d8ff45]">One complete run.</span>
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn delay={index} key={feature.title} className="h-full">
                  <article className="ams-feature-card">
                    <div className="flex items-start justify-between">
                      <span className="ams-feature-icon"><Icon aria-hidden="true" /></span>
                      <span className="ams-feature-number">{feature.number}</span>
                    </div>
                    <h3 className="ams-display mt-12 text-3xl leading-none text-white">{feature.title}</h3>
                    <p className="mt-5 leading-relaxed text-white/60">{feature.copy}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="ams-section overflow-hidden bg-[#d8ff45] text-[#10150f]">
        <Container className="py-24 lg:py-32">
          <FadeIn className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="ams-eyebrow !text-[#31530a]">IN-GAME SCREENSHOTS</p>
              <h2 className="ams-display mt-3 text-5xl leading-none sm:text-7xl">Gameplay.</h2>
            </div>
            <span className="hidden font-black tracking-widest sm:block">CAPTURED IN DEVELOPMENT</span>
          </FadeIn>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {gallery.map((item, index) => (
              <FadeIn
                delay={index}
                key={item.label}
                className={index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-12"}
              >
                <figure className="ams-gallery-card">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.label}</figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="ams-chaos-break" aria-label="Endless mode gameplay">
        <img src={chaosScreenshot} alt="Late-game Apple Man Sam combat with a large enemy horde" loading="lazy" />
        <div className="ams-chaos-overlay">
          <span>ENDLESS MODE</span>
        </div>
      </section>

      <section className="ams-final-cta">
        <div className="ams-grain" />
        <Container className="relative z-10 grid items-center gap-12 py-24 lg:grid-cols-[1fr_auto] lg:py-32">
          <FadeIn>
            <Sparkles className="mb-7 h-10 w-10 text-[#d8ff45]" aria-hidden="true" />
            <p className="ams-eyebrow">DEMO AVAILABLE NOW</p>
            <h2 className="ams-display mt-4 max-w-4xl text-6xl leading-[0.88] sm:text-8xl lg:text-9xl">
              Play the demo.<br /><span className="text-[#d8ff45]">Wishlist on Steam.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              Apple Man Sam is planned for Early Access in September 2026.
            </p>
            <div className="mt-9">
              <SteamButton>Play demo & wishlist</SteamButton>
            </div>
          </FadeIn>
          <FadeIn delay={1} className="hidden xl:block">
            <div className="ams-release-badge">
              <span>EARLY ACCESS</span>
              <strong>SEP</strong>
              <span>2026 · STEAM</span>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-[#090b09]">
        <Container className="flex flex-col items-start justify-between gap-7 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-white">Made by Bonehead Labs</p>
            <p className="mt-1 text-sm text-white/45">An independent game studio.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-bold text-white/65">
            <Link className="transition hover:text-[#d8ff45]" to="/games">Other games</Link>
            <Link className="transition hover:text-[#d8ff45]" to="/projects">The lab</Link>
            <Link className="transition hover:text-[#d8ff45]" to="/blog">Dev blog</Link>
            <Link className="transition hover:text-[#d8ff45]" to="/about">About us</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
