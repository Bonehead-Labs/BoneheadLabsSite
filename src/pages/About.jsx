import Reveal from "../components/Reveal.jsx";
import Parallax from "../components/Parallax.jsx";
import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function About() {
  const values = [
    {
      title: "Playful Innovation",
      description: "We believe the best ideas come from experimentation and play. Every project starts with a 'what if' moment.",
      icon: "🎯"
    },
    {
      title: "Quality Over Quantity",
      description: "We'd rather make one game that players love than ten that are just okay. Polish matters.",
      icon: "✨"
    },
    {
      title: "Community First",
      description: "Our players and fellow developers are our biggest inspiration. We build with them, not just for them.",
      icon: "🤝"
    },
    {
      title: "Sustainable Development",
      description: "Fair pricing, no crunch, no dark patterns. We're building for the long term.",
      icon: "🌱"
    }
  ];

  const team = [
    {
      name: "The Team",
      role: "Small but mighty",
      description: "We're a tiny studio that punches above our weight. Each member wears multiple hats and brings unique perspectives to every project.",
      image: "/Assets/image.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Page Header (full-height like Home hero) */}
      <section className="bg-[var(--paper)]">
        <Container className="grid min-h-screen grid-cols-1 items-center gap-10 py-20 sm:grid-cols-2">
          <FadeInInitial>
            <h1 className="text-5xl font-extrabold text-[var(--ink)] sm:text-7xl">About Bonehead Labs</h1>
            <p className="mt-4 max-w-prose text-[var(--ink-70)]">A tiny studio from Australia with big dreams and even bigger ambitions.</p>
          </FadeInInitial>
          <Parallax offset={80}>
            <img src="/Assets/bc9171fd-31f9-4b54-966c-7e2fd1a0afec.png" alt="Bonehead mark" className="h-[50vh] w-auto object-contain"/>
          </Parallax>
        </Container>
      </section>

      {/* Story Section (page-height) */}
      <section className="bg-[var(--paper)]">
        <Container className="grid min-h-screen items-center gap-10 py-16 sm:grid-cols-2">
            <FadeIn>
              <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">Our Story</h2>
              <p className="mt-3 max-w-prose text-[var(--ink-70)]">
                Bonehead Labs was born from a simple idea: what if we could make games that feel as good to play as they look? 
                We started as a group of friends experimenting with game mechanics in our spare time, and somehow it turned into a studio.
              </p>
              <p className="mt-3 max-w-prose text-[var(--ink-70)]">
                We make playful, polished things—mostly games, sometimes tools, occasionally experiments that escape the lab and become products. 
                Our approach is simple: start with a solid foundation, iterate quickly, and never stop playing.
              </p>
            </FadeIn>
          <FadeIn className="flex items-center justify-center">
            <div className="rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)] p-6">
              <img src="/Assets/bc9171fd-31f9-4b54-966c-7e2fd1a0afec.png" alt="Bonehead mark" className="h-[50vh] w-auto object-contain"/>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--paper)]">
        <Container className="py-24">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">What We Believe In</h2>
            <p className="mt-2 max-w-prose mx-auto text-[var(--ink-70)]">These core values guide everything we do.</p>
          </FadeIn>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn 
                key={value.title} 
                delay={i} 
                className="rounded-3xl border-2 border-[var(--ink)] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--ink)]">{value.title}</h3>
                    <p className="mt-2 text-sm text-[var(--ink-70)]">{value.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="bg-[var(--paper)]">
        <Container className="py-24">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">Meet the Team</h2>
            <p className="mt-2 text-[var(--ink-70)]">The brains behind the operation.</p>
          </FadeIn>
          
          <div className="grid gap-8 sm:grid-cols-2">
            {team.map((member, i) => (
              <FadeIn 
                key={member.name} 
                delay={i} 
                className="text-center"
              >
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full border-2 border-[var(--ink)] mx-auto mb-4 object-cover"/>
                <h3 className="text-xl font-bold text-[var(--ink)]">{member.name}</h3>
                <p className="text-sm text-[var(--cyan)]">{member.role}</p>
                <p className="mt-2 text-sm text-[var(--ink-70)]">{member.description}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold text-[var(--ink)]">Want to Know More?</h2>
            <p className="mt-2 text-[var(--ink-70)]">We love talking about games, development, and our crazy ideas.</p>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                Get in touch
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
