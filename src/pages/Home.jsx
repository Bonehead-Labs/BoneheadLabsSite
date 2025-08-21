import Reveal from "../components/Reveal.jsx";
import Parallax from "../components/Parallax.jsx";
import { Container, FadeIn } from "../utils/common.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Hero Section */}
      <section className="bg-[var(--paper)]">
        <Container className="grid min-h-screen grid-cols-1 items-center gap-10 py-24 sm:grid-cols-2">
          <div>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-[var(--ink)] sm:text-7xl">
                Bonehead Labs
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-prose text-[var(--ink-70)]">
                A micro‑studio building joyful, high‑polish <span className="text-[var(--ink)]">games</span> and pragmatic <span className="text-[var(--ink)]">tools</span>.
                Minimal by design; playful at heart.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/games" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px] active:translate-y-[0]">
                  Play our stuff
                </a>
                <a href="/projects" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                  Explore the tech
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
      <section className="relative min-h-screen w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <img src="/Assets/42649192-310d-4cfe-a932-b381ad026869.png" alt="Pete the Pig" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/90 via-[var(--paper)]/40 to-transparent"/>
        <Container className="relative flex min-h-screen items-end pb-16">
          <div className="max-w-xl rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] px-6 py-5">
            <Reveal>
              <span className="inline-flex items-center rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">In development</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Pete the Pig</h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-3 text-[var(--ink-70)]">Action‑platformer with crunchy combat and cheeky charm.</p>
            </Reveal>
            <Reveal delay={0.26}>
              <a href="/games" className="mt-6 inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-3 font-semibold text-[var(--ink)]">View all games</a>
            </Reveal>
          </div>
        </Container>
      </section>

      <div className="h-6 bg-[var(--ink)]"></div>

      <section className="relative min-h-screen w-full overflow-hidden border-t-2 border-[var(--ink)]">
        <img src="/Assets/image.png" alt="Prototype #7" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)]/90 via-[var(--paper)]/40 to-transparent"/>
        <Container className="relative flex min-h-screen items-end pb-16">
          <div className="max-w-xl rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] px-6 py-5 ml-auto text-right">
            <Reveal>
              <span className="inline-flex items-center rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">Prototype</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Prototype #7</h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-3 text-[var(--ink-70)]">Physics‑toy sandbox exploring grabby interactions.</p>
            </Reveal>
            <Reveal delay={0.26}>
              <a href="/projects" className="mt-6 inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--paper)] px-5 py-3 font-semibold text-[var(--ink)]">View all projects</a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured Projects - inverted */}
      <section className="relative min-h-screen w-full overflow-hidden border-t-2 border-[var(--ink)] bg-[var(--ink)]">
        <div className="absolute inset-0 opacity-10" style={{background:"radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 40%)"}}/>
        <Container className="relative flex min-h-screen items-center">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Featured Projects</h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-3 text-white/70 max-w-prose">Technical capabilities and tools that power our workflow. Built for speed, maintainability, and feel.</p>
              </Reveal>
            </div>
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-3xl border-2 border-white/20 bg-white/5 p-6">
                  <div className="text-sm font-semibold text-[var(--cyan)]">Pipeline</div>
                  <div className="mt-2 text-lg font-bold text-white">AI‑assisted tagging and testing</div>
                  <p className="mt-2 text-white/70 text-sm">Automation where it helps; human control where it matters.</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="rounded-3xl border-2 border-white/20 bg-white/5 p-6">
                  <div className="text-sm font-semibold text-[var(--cyan)]">Gameplay</div>
                  <div className="mt-2 text-lg font-bold text-white">Feel‑first camera and hit‑pause kit</div>
                  <p className="mt-2 text-white/70 text-sm">A reusable kit for punchy, readable action.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Studio Highlight (footnote) */}
      <section className="bg-[var(--paper)] border-t-2 border-[var(--ink)]">
        <Container className="py-12">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[var(--ink)] sm:text-3xl">Tiny Studio, Big Dreams</h2>
            <p className="mt-3 text-[var(--ink-70)]">
              Bonehead Labs is a tiny studio from Australia. We make playful, polished things—mostly games, sometimes tools, occasionally experiments that escape the lab and become products. Fair pricing, no dark patterns.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                Learn more about us
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
