import Reveal from "../components/Reveal.jsx";
import Parallax from "../components/Parallax.jsx";
import ScrollBackground from "../components/ScrollBackground.jsx";
import LabAnimation from "../components/LabAnimation.jsx";
import { Container, FadeIn } from "../utils/common.jsx";
import { Link } from 'react-router-dom';
import { Code, Zap, Search, Beaker, FileText } from 'lucide-react';
// Removed animated icons; using static Lucide icons instead
import mascotImage from '../assets/bc9171fd-31f9-4b54-966c-7e2fd1a0afec.png';
import peteBanner from '../assets/Pete the Pig/BANNER V2.png';
import boneheadBanner from '../assets/Bonehead Friend/BONEHEAD BANNER.png';
import appleManSamBanner from '/Assets/APPLE-MAN-SAM-ART.png';
import { getRecentPosts, resolvePostImage } from '../blog/blogUtils.js';

export default function Home() {
  const [latestPost] = getRecentPosts(1);
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Hero Section */}
      <section className="bg-[var(--paper)]">
        <Container className="grid min-h-[95vh] grid-cols-1 items-center gap-10 py-16 sm:grid-cols-2">
          <div>
            <Reveal delay={0.06} bidirectional>
              <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-[var(--ink)] sm:text-7xl lg:text-8xl">
                Bonehead Labs
              </h1>
            </Reveal>
            <Reveal delay={0.12} bidirectional>
              <p className="mt-4 max-w-prose text-xl text-[var(--ink-70)]">
                We make games, build tools, and conduct research.
              </p>
            </Reveal>
            <Reveal delay={0.18} bidirectional>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/games" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px] active:translate-y-[0]">
                  Play our Games
                </Link>
                <Link to="/projects" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                  Explore The Lab
                </Link>
                <Link to="/blog" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                  Read the Blog
                </Link>
              </div>
            </Reveal>
          </div>
          <Parallax offset={80}>
            <img src={mascotImage} alt="Bonehead mascot" className="h-[60vh] w-auto object-contain"/>
          </Parallax>
        </Container>
      </section>

      {/* Featured Games - full-bleed sections */}
      <section className="relative min-h-[90vh] w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <ScrollBackground src={boneheadBanner} alt="Bonehead Friend" direction="right" sizePercent={70} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/90 via-[var(--paper)]/40 to-transparent"/>
        <Container className="relative flex min-h-[90vh] items-end pb-12">
          <div className="max-w-xl rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] px-6 py-5 ml-auto text-right">
            <Reveal bidirectional>
              <span className="inline-flex items-center rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">Demo</span>
            </Reveal>
            <Reveal delay={0.08} bidirectional>
              <h2 className="mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Bonehead Friend</h2>
            </Reveal>
            <Reveal delay={0.14} bidirectional>
              <p className="mt-3 text-[var(--ink-70)]">A physics-based fidget game that lets you have fun whilst doing other tasks.</p>
            </Reveal>
            <Reveal delay={0.20} bidirectional>
              <div className="mt-6 space-y-4">
                <a href="https://bonehead-labs.itch.io/bonehead-friend" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] hover:translate-y-[-1px] transition">Play Demo</a>
                <div className="mt-4">
                  <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[var(--ink-20)]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/udO6Zvwv9Hs"
                      title="Bonehead Friend Gameplay"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="h-6 bg-[var(--deep)]"></div>

      <section className="relative min-h-[80vh] w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <ScrollBackground src={peteBanner} alt="Pete the Pig" direction="left" sizePercent={70} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/90 via-[var(--paper)]/40 to-transparent"/>
        <Container className="relative flex min-h-[90vh] items-end pb-12">
          <div className="max-w-xl rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] px-6 py-5">
            <Reveal bidirectional>
              <span className="inline-flex items-center rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">Demo</span>
            </Reveal>
            <Reveal delay={0.08} bidirectional>
              <h2 className="mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Pete the Pig</h2>
            </Reveal>
            <Reveal delay={0.14} bidirectional>
              <p className="mt-3 text-[var(--ink-70)]">A classic platformer featuring a pig heading to the bank!</p>
            </Reveal>
            <Reveal delay={0.20} bidirectional>
              <div className="mt-6 space-y-4">
                <Link to="/games" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-3 font-semibold text-[var(--ink)]">View Game</Link>
                <div className="mt-4">
                  <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[var(--ink-20)]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/2GcVkwc27sI?start=192"
                      title="Pete the Pig Gameplay"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="h-6 bg-[var(--deep)]"></div>

      {/* Apple Man Sam - full-bleed section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <ScrollBackground src={appleManSamBanner} alt="Apple Man Sam" direction="right" sizePercent={70} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/90 via-[var(--paper)]/40 to-transparent"/>
        <Container className="relative flex min-h-[90vh] items-end pb-12">
          <div className="max-w-xl rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] px-6 py-5 ml-auto text-right">
            <Reveal bidirectional>
              <span className="inline-flex items-center rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">Demo</span>
            </Reveal>
            <Reveal delay={0.08} bidirectional>
              <h2 className="mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Apple Man Sam</h2>
            </Reveal>
            <Reveal delay={0.14} bidirectional>
              <p className="mt-3 text-[var(--ink-70)]">Apple Man Sam is a top-down shooter where our hero Sam the Apple battles an endless horde of vegetables.</p>
            </Reveal>
            <Reveal delay={0.20} bidirectional>
              <div className="mt-6 space-y-4">
                <a href="https://bonehead-labs.itch.io/apple-man-sam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] hover:translate-y-[-1px] transition">Play Demo</a>
                <div className="mt-4">
                  <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[var(--ink-20)]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/1gxtZbFFvAc"
                      title="Apple Man Sam Gameplay"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The Lab - inverted */}
      <section className="relative min-h-[90vh] w-full overflow-hidden border-t-2 border-[var(--ink)] bg-[var(--deep)]">
        <div className="absolute inset-0 opacity-10" style={{background:"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 40%)"}}/>
        <Container className="relative flex min-h-[90vh] flex-col items-center justify-center py-16">
          <div className="text-center mb-10">
            <div className="mx-auto w-48 h-48 mb-4 flex items-center justify-center">
              <Beaker className="w-48 h-48 text-white" />
            </div>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">The Lab</h2>
          </div>
          <Reveal delay={0.10} bidirectional>
            <p className="mt-3 text-white/70 max-w-prose text-center mb-8">Explore our GitHub for reusable systems, production tools, and R&D.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
            <Reveal delay={0.06} bidirectional>
              <Link to="/projects#premium-tools" className="flex flex-col items-center justify-center rounded-3xl border-2 border-white/20 bg-white/5 p-6 hover:border-[var(--cyan)] transition-colors text-center h-full">
                <Zap className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Premium Tools</h3>
                <p className="text-sm text-white/70 mt-2">Enterprise-grade workflow solutions</p>
              </Link>
            </Reveal>
            <Reveal bidirectional>
              <Link to="/projects#github" className="flex flex-col items-center justify-center rounded-3xl border-2 border-white/20 bg-white/5 p-6 hover:border-[var(--cyan)] transition-colors text-center h-full">
                <Code className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Open Source Codebases</h3>
                <p className="text-sm text-white/70 mt-2">Reusable solutions for developers</p>
              </Link>
            </Reveal>
            <Reveal delay={0.12} bidirectional>
              <Link to="/projects#research" className="flex flex-col items-center justify-center rounded-3xl border-2 border-white/20 bg-white/5 p-6 hover:border-[var(--cyan)] transition-colors text-center h-full">
                <Search className="w-12 h-12 text-white mb-3" />
                <h3 className="text-xl font-bold text-white">Research</h3>
                <p className="text-sm text-white/70 mt-2">Data-driven industry insights</p>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Latest Blog Post (below The Lab) */}
      {latestPost && (
        <section className="bg-[var(--paper)] border-t-2 border-[var(--ink)]">
          <Container className="py-16">
            <div className="text-center mb-10">
              <Reveal bidirectional>
                <div className="mx-auto w-48 h-48 mb-4 flex items-center justify-center">
                  <FileText className="w-48 h-48 text-[var(--ink)]" />
                </div>
              </Reveal>
              <Reveal delay={0.08} bidirectional>
                <h2 className="text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Latest Blog Post</h2>
              </Reveal>
            </div>
            <FadeIn>
              <article className="group rounded-3xl border-2 border-[var(--ink-20)] bg-[var(--paper)] p-6 hover:border-[var(--cyan)] transition-colors max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-6">
                  {latestPost.frontmatter.image && (
                    <Reveal bidirectional>
                      <div className="sm:w-64 aspect-video rounded-2xl overflow-hidden border-2 border-[var(--ink-20)]">
                        <img
                          src={resolvePostImage(latestPost.frontmatter.image)}
                          alt={latestPost.frontmatter.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Reveal>
                  )}
                  <div className="flex-1">
                    <Reveal delay={0.06} bidirectional>
                      <div className="flex items-center gap-4 text-sm text-[var(--ink-50)] mb-2">
                        <div className="flex items-center gap-1">
                          {latestPost.date.toLocaleDateString()}
                        </div>
                        {latestPost.frontmatter.readTime && (
                          <div className="flex items-center gap-1">
                            {latestPost.frontmatter.readTime}
                          </div>
                        )}
                      </div>
                    </Reveal>
                    <Reveal delay={0.12} bidirectional>
                      <h3 className="text-2xl font-bold text-[var(--ink)] mb-3 group-hover:text-[var(--cyan)] transition-colors">
                        {latestPost.frontmatter.title}
                      </h3>
                    </Reveal>
                    <Reveal delay={0.18} bidirectional>
                      <p className="text-[var(--ink-70)] mb-4">
                        {latestPost.frontmatter.excerpt}
                      </p>
                    </Reveal>
                    <Reveal delay={0.24} bidirectional>
                      <Link
                        to={`/blog/${latestPost.slug}`}
                        className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]"
                      >
                        Read Post
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </article>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Studio Highlight (footnote) */}
      <section className="bg-[var(--paper)] border-t-2 border-[var(--ink)]">
        <Container className="py-16">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[var(--ink)] sm:text-3xl">Learn More</h2>
            <p className="mt-3 text-[var(--ink-70)]">
              Check out our about page for more info about us, thank you for staying.
            </p>
            <div className="mt-6">
              <Link to="/about" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                About
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
