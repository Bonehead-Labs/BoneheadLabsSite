import Reveal from "../components/Reveal.jsx";
import Parallax from "../components/Parallax.jsx";
import ScrollBackground from "../components/ScrollBackground.jsx";
import { Container, FadeIn } from "../utils/common.jsx";

export default function Home() {
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
                A small software lab building fun games and useful tools.
              </p>
            </Reveal>
            <Reveal delay={0.18} bidirectional>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/games" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px] active:translate-y-[0]">
                  Play our Games
                </a>
                <a href="/projects" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                  Explore our Projects
                </a>
              </div>
            </Reveal>
          </div>
          <Parallax offset={80}>
            <img src="/Assets/bc9171fd-31f9-4b54-966c-7e2fd1a0afec.png" alt="Bonehead mascot" className="h-[60vh] w-auto object-contain"/>
          </Parallax>
        </Container>
      </section>

      {/* Featured Games - full-bleed sections */}
      <section className="relative min-h-[80vh] w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <ScrollBackground src="/Assets/Pete the Pig/BANNER V2.png" alt="Pete the Pig" direction="left" sizePercent={70} />
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
              <a href="/games" className="mt-6 inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-3 font-semibold text-[var(--ink)]">View Game</a>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="h-6 bg-[var(--ink)]"></div>

      <section className="relative min-h-[90vh] w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <ScrollBackground src="/Assets/Bonehead Friend/BONEHEAD BANNER.png" alt="Bonehead Friend" direction="right" sizePercent={70} />
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
              <a href="/projects" className="mt-6 inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-3 font-semibold text-[var(--ink)]">View Game</a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured Projects - inverted */}
      <section className="relative min-h-[90vh] w-full overflow-hidden border-t-2 border-[var(--ink)] bg-[var(--ink)]">
        <div className="absolute inset-0 opacity-10" style={{background:"radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 40%)"}}/>
        <Container className="relative flex min-h-[90vh] items-center py-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <Reveal bidirectional>
                <div className="text-center mb-8">
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    {/* Animated floating code block */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan)] to-[var(--cyan-20)] rounded-2xl animate-pulse"></div>
                    <div className="absolute inset-2 bg-[var(--ink)] rounded-xl flex items-center justify-center animate-heartbeat">
                      <span className="text-4xl">⚡</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Featured Projects</h2>
                </div>
              </Reveal>
              <Reveal delay={0.10} bidirectional>
                <p className="mt-3 text-white/70 max-w-prose">Open source libraries and diverse tools to make your life easier.</p>
              </Reveal>
            </div>
            <div className="space-y-6">
              <Reveal bidirectional>
                <div className="rounded-3xl border-2 border-white/20 bg-white/5 p-6">
                  <div className="text-sm font-semibold text-[var(--cyan)]">Open Source</div>
                  <div className="mt-2 text-lg font-bold text-white">Open source libraries</div>
                  <p className="mt-2 text-white/70 text-sm">Community-driven tools and libraries for developers.</p>
                </div>
              </Reveal>
              <Reveal delay={0.09} bidirectional>
                <div className="rounded-3xl border-2 border-white/20 bg-white/5 p-6">
                  <div className="text-sm font-semibold text-[var(--cyan)]">Premium</div>
                  <div className="mt-2 text-lg font-bold text-white">Premium tools</div>
                  <p className="mt-2 text-white/70 text-sm">Professional-grade tools designed for productivity and efficiency.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Studio Highlight (footnote) */}
      <section className="bg-[var(--paper)] border-t-2 border-[var(--ink)]">
        <Container className="py-16">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[var(--ink)] sm:text-3xl">Learn More</h2>
            <p className="mt-3 text-[var(--ink-70)]">
              Check out our about page for more info about us, thank you for staying.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                About
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
