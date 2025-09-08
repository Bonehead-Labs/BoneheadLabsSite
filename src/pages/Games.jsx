import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";
import { Gamepad2 } from 'lucide-react';

// Import game images
import peteBanner from "../assets/Pete the Pig/BANNER V2.png";
import peteSplash from "../assets/Pete the Pig/SPLASH SCREEN.webp";
import peteJump from "../assets/Pete the Pig/Jump.png";
import peteScreenshot from "../assets/Pete the Pig/Screenshot 2025-08-22 174113.png";
import boneheadBanner from "../assets/Bonehead Friend/BONEHEAD BANNER.png";
import boneheadIcon from "../assets/Bonehead Friend/base-bonehead-ICON.png";

export default function Games() {
  const [expandedGame, setExpandedGame] = useState(null);

  const games = [
    { 
      id: "pete-the-pig",
      title: "Pete the Pig", 
      tag: "Demo", 
      art: peteBanner, 
      blurb: "A classic platformer featuring a pig heading to the bank!",
      description: "Pete the pig is a simple platformer with the goal of collecting briefcases of money to complete levels in the fastest time.",
      status: "Demo Available on Itch.io",
      platforms: ["PC"],
      releaseDate: "2025 (Demo)",
      developmentHistory: [
        "Demo Developed and Released - 2025"
      ],
      features: [
        "Snappy platformer controls.",
        "Double jumping and wall-jumping.",
        "Hand crafted levels.",
        "Wolf enemies to defeat.",
        "Level timer, and best time tracker."
      ],
      artwork: [
        peteSplash,
        peteJump,
        peteScreenshot
      ],
      links: {
        demo: "https://itch.io/pete-the-pig-demo",
        discord: "https://discord.gg/boneheadlabs",
        twitter: "https://twitter.com/boneheadlabs"
      }
    },
    { 
      id: "bonehead-friend",
      title: "Bonehead Friend", 
      tag: "Demo", 
      art: boneheadBanner, 
      blurb: "A physics-based fidget game that lets you have fun whilst doing other tasks.",
      description: "Bonehead friend is a physics-based game with a bonehead mascot that you can interact with. You can throw objects, pick them up and hit him with them, use explosives and more! It has a transparent background, so it can be overlayed over any other program on your computer.",
      status: "Demo Available on Itch.io",
      platforms: ["PC", "Web"],
      releaseDate: "2025 (Demo)",
      developmentHistory: [
        "Demo Developed and Released - 2025"
      ],
      features: [
        "Physics based draggable system.",
        "Melee Weapons.",
        "Explosives.",
        "Cursor Powers."
      ],
      artwork: [
        boneheadIcon
      ],
      links: {
        demo: "https://itch.io/bonehead-friend-demo",
        discord: "https://discord.gg/boneheadlabs",
        twitter: "https://twitter.com/boneheadlabs"
      }
    }
  ];

  const toggleExpanded = (gameId) => {
    setExpandedGame(expandedGame === gameId ? null : gameId);
  };

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Page Header */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <div className="text-center">
            <div className="mx-auto w-48 h-48 mb-4 flex items-center justify-center">
              <Gamepad2 className="w-48 h-48 text-[var(--ink)]" />
            </div>
            <h1 className="text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Games</h1>
            <FadeInInitial>
              <p className="mt-2 max-w-prose text-[var(--ink-70)] mx-auto">Small scope, strong identity, great feel. Each game is crafted with care and attention to detail.</p>
            </FadeInInitial>
          </div>
        </Container>
      </section>

      {/* Games Grid */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <div className="grid gap-8">
            {games.map((game, i) => (
              <FadeIn 
                key={game.id} 
                delay={i} 
                className="group overflow-hidden rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)]"
              >
                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="relative aspect-[16/9] p-4">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-[var(--ink-20)]">
                      <img src={game.art} alt={game.title} className="h-full w-full object-cover"/>
                      <span className="absolute left-3 top-3 rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                        {game.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-[var(--ink)]">{game.title}</h2>
                      <p className="mt-2 text-sm text-[var(--ink-70)]">{game.blurb}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-[var(--ink)]">Status:</span>
                        <span className="ml-2 text-[var(--ink-70)]">{game.status}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--ink)]">Platforms:</span>
                        <span className="ml-2 text-[var(--ink-70)]">{game.platforms.join(", ")}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--ink)]">Release:</span>
                        <span className="ml-2 text-[var(--ink-70)]">{game.releaseDate}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-[var(--ink-70)]">{game.description}</p>
                    
                    <div className="mt-6 flex gap-3">
                      <button 
                        onClick={() => toggleExpanded(game.id)}
                        className="rounded-xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--cyan)]/90 transition-colors"
                      >
                        {expandedGame === game.id ? 'Show Less' : 'Learn More'}
                      </button>
                      <a 
                        href={game.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl border-2 border-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--ink-20)] transition-colors"
                      >
                        Play Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedGame === game.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden border-t-2 border-[var(--ink-20)]"
                    >
                      <div className="p-6 space-y-8">
                        {/* Development History */}
                        <div>
                          <h3 className="text-lg font-bold text-[var(--ink)] mb-3">Development History</h3>
                          <ul className="space-y-2">
                            {game.developmentHistory.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-[var(--cyan)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm text-[var(--ink-70)]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Features */}
                        <div>
                          <h3 className="text-lg font-bold text-[var(--ink)] mb-3">Key Features</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {game.features.map((feature, index) => (
                              <div key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full mr-2"></span>
                                <span className="text-sm text-[var(--ink-70)]">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Artwork Gallery */}
                        {game.artwork.length > 1 && (
                          <div>
                            <h3 className="text-lg font-bold text-[var(--ink)] mb-3">Artwork</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              {game.artwork.map((art, index) => (
                                <div key={index} className="aspect-square rounded-lg overflow-hidden border border-[var(--ink-20)]">
                                  <img 
                                    src={art} 
                                    alt={`${game.title} artwork ${index + 1}`} 
                                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-200"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Links */}
                        <div>
                          <h3 className="text-lg font-bold text-[var(--ink)] mb-3">Stay Connected</h3>
                          <div className="flex flex-wrap gap-3">
                            <a 
                              href={game.links.discord} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-xl border-2 border-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--ink-20)] transition-colors"
                            >
                              Join Discord
                            </a>
                            <a 
                              href={game.links.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-xl border-2 border-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--ink-20)] transition-colors"
                            >
                              Follow on Twitter
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold text-[var(--ink)]">More Games Coming Soon</h2>
            <p className="mt-2 text-[var(--ink-70)]">We're always experimenting with new ideas and mechanics.</p>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
