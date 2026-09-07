import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Gamepad2,
  Code2,
  Bot,
} from "lucide-react";
import { PageIntro, Reveal, SectionHeading, SEO } from "../components/UI";
export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Bonehead Labs is an independent game and software studio founded by George Nizoridis."
      />
      <PageIntro eyebrow="THE STUDIO" title="About" accent="Bonehead Labs.">
        An independent studio developing games and software, founded and run by
        George Nizoridis.
      </PageIntro>
      <section className="founder-section wrap">
        <Reveal className="founder-photo">
          <img
            src="/media/george.webp"
            alt="George Nizoridis, founder of Bonehead Labs"
            width="1000"
            height="1000"
            fetchPriority="high"
          />
          <div>
            <span>GEORGE NIZORIDIS</span>
            <span>FOUNDER & DEVELOPER</span>
          </div>
        </Reveal>
        <Reveal className="founder-copy">
          <p className="eyebrow">FOUNDER</p>
          <h2>
            George
            <br />
            <span>Nizoridis.</span>
          </h2>
          <p className="large-copy">
            I started Bonehead Labs to develop my own games and software.
          </p>
          <p>
            I handle programming, design, art and the business. My background is
            in analytics and data engineering.
          </p>
          <a
            href="https://georgenizoridis.com"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            georgenizoridis.com <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </section>
      <section className="section paper">
        <div className="wrap story-layout">
          <div>
            <p className="eyebrow">BACKGROUND</p>
            <h2>
              How the studio
              <br />
              started.
            </h2>
            <figure className="studio-game-image">
              <img
                src="/media/sam-action.webp"
                alt="Apple Man Sam gameplay with Sam fighting a horde of vegetables"
                width="900"
                height="505"
                loading="lazy"
              />
              <figcaption>
                <Gamepad2 size={16} aria-hidden="true" />
                Apple Man Sam
              </figcaption>
            </figure>
          </div>
          <div className="story-chapters">
            {[
              {
                title: "From analytics to development",
                icon: ChartNoAxesCombined,
                copy: "I started Computer Science in 2016, switched to Finance, then returned to software through analytics engineering.",
              },
              {
                title: "The first games",
                icon: Gamepad2,
                copy: "Learning Godot with AI as a tutor helped me start making games. The first prototypes became the basis for Bonehead Labs.",
              },
              {
                title: "Bonehead Labs today",
                icon: Code2,
                copy: "I’m developing Apple Man Sam, new game prototypes and the Instrumenta software suite.",
              },
            ].map((chapter) => (
              <Reveal key={chapter.title} className="story-chapter">
                <div>
                  <h3>
                    <chapter.icon size={25} aria-hidden="true" />
                    {chapter.title}
                  </h3>
                  <p>{chapter.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading label="DEVELOPMENT" title="How I work." />
        <div className="studio-values">
          <Reveal>
            <Gamepad2
              className="studio-value-icon"
              size={38}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3>Games</h3>
            <p>Godot for development. Aseprite for pixel art.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Code2
              className="studio-value-icon"
              size={38}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3>Software</h3>
            <p>Tools I want to use myself, for creative work and learning.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Bot
              className="studio-value-icon"
              size={38}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3>AI-assisted development</h3>
            <p>
              AI helps with code, learning and art. I review and own the
              results.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
