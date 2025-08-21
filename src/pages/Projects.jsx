import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function Projects() {
  const projects = [
    {
      title: "Feel‑first Gameplay",
      description: "Input response, hit‑pause, camera, juice.",
      details: "We focus on making games that feel incredible to play. Every input, every animation, every sound is crafted to create satisfying feedback loops.",
      icon: "🎮"
    },
    {
      title: "AI‑assisted Pipelines",
      description: "Tagging, testing, generation where it helps.",
      details: "We use AI tools to streamline development workflows, from automated testing to content generation, allowing us to focus on what matters most.",
      icon: "🤖"
    },
    {
      title: "Rapid Prototyping",
      description: "Vertical slices in weeks; playtest early.",
      details: "We believe in getting playable prototypes in front of players quickly. This iterative approach helps us validate ideas and refine mechanics faster.",
      icon: "⚡"
    },
    {
      title: "Clean Ports",
      description: "PC first; console/mobile when it makes sense.",
      details: "We start with a solid PC foundation and carefully consider which platforms make sense for each project, ensuring quality across all releases.",
      icon: "🖥️"
    },
    {
      title: "Open Source Tools",
      description: "Sharing what we learn with the community.",
      details: "We believe in giving back to the game development community by open-sourcing tools and sharing knowledge that others might find useful.",
      icon: "🔧"
    },
    {
      title: "Performance First",
      description: "Optimized code that runs smoothly everywhere.",
      details: "We prioritize performance and optimization, ensuring our games run smoothly on a wide range of hardware without sacrificing visual quality.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--ink)]">
      {/* Page Header */}
      <section className="bg-[var(--ink)]">
        <Container className="py-20">
          <FadeInInitial>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Projects & Tools</h1>
            <p className="mt-4 max-w-prose text-white/70">Technical capabilities, tools, and experiments that help us build better games.</p>
          </FadeInInitial>
        </Container>
      </section>

      {/* Projects Grid - inverted cards */}
      <section className="bg-[var(--ink)]">
        <Container className="py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn 
                key={project.title} 
                delay={i} 
                className="rounded-3xl border-2 border-white/20 bg-white/5 p-6 hover:border-[var(--cyan)]/60 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{project.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--cyan)]">{project.description}</p>
                    <p className="mt-3 text-sm text-white/70">{project.details}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Blog - inverted */}
      <section className="bg-[var(--ink)]">
        <Container className="py-16">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold text-white">Technical Insights</h2>
            <p className="mt-2 text-white/70">We occasionally share technical deep-dives and lessons learned.</p>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center rounded-2xl border-2 border-white px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px]">
                Subscribe to updates
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
