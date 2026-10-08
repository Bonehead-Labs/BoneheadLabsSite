import { ChartNoAxesCombined, Gamepad2, Code2, Bot } from "lucide-react";
import { Kicker, Reveal, SectionHead, SEO, TextLink } from "../components/UI";
import Mascot from "../components/Mascot";

const chapters = [
  {
    title: "From analytics to development",
    icon: ChartNoAxesCombined,
    color: "var(--sky)",
    copy: "I started Computer Science in 2016, switched to Finance, then returned to software through analytics engineering.",
  },
  {
    title: "The first games",
    icon: Gamepad2,
    color: "var(--lime)",
    copy: "Learning Godot with AI as a tutor helped me start making games. The first prototypes became the basis for Bonehead Labs.",
  },
  {
    title: "Bonehead Labs today",
    icon: Code2,
    color: "var(--brass)",
    copy: "I'm developing Apple Man Sam, new game prototypes and the Instrumenta software suite.",
  },
];
const values = [
  {
    title: "Games",
    icon: Gamepad2,
    color: "var(--lime)",
    copy: "Godot for development. Aseprite for pixel art.",
  },
  {
    title: "Software",
    icon: Code2,
    color: "var(--brass)",
    copy: "Tools I want to use myself, for creative work and learning.",
  },
  {
    title: "AI-assisted development",
    icon: Bot,
    color: "var(--pink)",
    copy: "AI helps with code, learning and art. I review and own the results.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Bonehead Labs is an independent game and software studio founded by George Nizoridis."
      />
      <section className="page-hero wrap">
        <div className="page-hero-grid">
          <Reveal>
            <Kicker>The studio</Kicker>
            <h1>
              About<em>.</em>
            </h1>
            <p className="page-hero-line">
              Bonehead Labs is an independent game and software studio, founded
              and run by George Nizoridis.
            </p>
            <p className="about-intro">
              I handle programming, design, art and the business. My background
              is in analytics and data engineering.
            </p>
            <TextLink href="https://georgenizoridis.com">georgenizoridis.com</TextLink>
          </Reveal>
          <Reveal className="page-hero-art about-hero-art" delay={0.1}>
            <div className="about-photo">
              <img
                src="/media/george.webp"
                alt="George Nizoridis, founder of Bonehead Labs"
                width="1000"
                height="667"
                fetchPriority="high"
              />
            </div>
            <span className="about-name">
              George Nizoridis
              <br />
              Founder & developer
            </span>
            <div className="about-buddy">
              <Mascot sticker label="" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <SectionHead kicker="Background" title="How the studio started." />
        <div className="timeline">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.title} className="timeline-item" delay={index * 0.06}>
              <span className="timeline-icon" style={{ background: chapter.color }}>
                <chapter.icon strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="about-gameplay">
          <img
            src="/media/sam-chaos.webp"
            alt="A late-game Apple Man Sam run with huge hordes, fire and projectiles"
            width="1800"
            height="1009"
            loading="lazy"
          />
        </Reveal>
      </section>

      <section className="wrap">
        <SectionHead kicker="Development" title="How I work." />
        <div className="values">
          {values.map((value, index) => (
            <Reveal key={value.title} className="value-card" delay={index * 0.08}>
              <span className="timeline-icon" style={{ background: value.color }}>
                <value.icon strokeWidth={2.2} aria-hidden="true" />
              </span>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
