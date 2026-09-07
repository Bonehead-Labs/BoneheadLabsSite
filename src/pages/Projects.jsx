import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  FolderOpen,
  SlidersHorizontal,
  Layers3,
  Image,
  Clapperboard,
  PenLine,
  AudioLines,
  GraduationCap,
} from "lucide-react";
import { SoftwareDisciplines } from "../components/ProjectFeatures";
import { Reveal, SectionHeading, SEO, TextLink } from "../components/UI";
import { links, software } from "../data/site";
const categories = [
  "All tools",
  "Visuals",
  "Video",
  "Writing",
  "Audio",
  "Learning",
];
const categoryIcons = {
  "All tools": Layers3,
  Visuals: Image,
  Video: Clapperboard,
  Writing: PenLine,
  Audio: AudioLines,
  Learning: GraduationCap,
};
export default function Projects() {
  const [category, setCategory] = useState("All tools");
  const visible =
    category === "All tools"
      ? software
      : software.filter((app) => app.category === category);
  return (
    <div className="software-page">
      <SEO
        title="Instrumenta & software"
        description="Instrumenta is a software suite for graphics, video, screenwriting, audio, 3D and learning. In development, with an open source release planned."
      />
      <section className="instrumenta-hero wrap">
        <Reveal className="instrumenta-hero-copy">
          <p className="eyebrow">
            <span className="status-dot orange" /> SOFTWARE BY BONEHEAD LABS
          </p>
          <h1>
            Instrumenta.
            <br />
            Software for
            <br />
            <span>creators.</span>
          </h1>
          <SoftwareDisciplines />
          <a href="#the-suite" className="button button-orange">
            View the applications <ArrowUpRight size={18} />
          </a>
          <span className="release-label">
            IN DEVELOPMENT · OPEN SOURCE RELEASE PLANNED
          </span>
        </Reveal>
        <div className="instrumenta-hero-art">
          <div className="instrumenta-orbit" />
          <img
            src="/media/instrumenta.webp"
            alt="The sculptural Instrumenta mark"
            width="512"
            height="512"
          />
          <span className="instrumenta-wordmark">
            Instrumenta<span>SOFTWARE SUITE</span>
          </span>
        </div>
      </section>
      <section className="suite-principles">
        <div className="wrap">
          <div>
            <FolderOpen />
            <p>
              <strong>Local projects</strong>
            </p>
          </div>
          <div>
            <SlidersHorizontal />
            <p>
              <strong>Separate applications</strong>
            </p>
          </div>
          <div>
            <Code2 />
            <p>
              <strong>Open source planned</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap" id="the-suite">
        <SectionHeading label="THE SUITE" title={<>The applications.</>}>
          <p>All applications are in development.</p>
        </SectionHeading>
        <div
          className="filter-bar"
          role="group"
          aria-label="Filter software by purpose"
        >
          {categories.map((item) => {
            const Icon = categoryIcons[item];
            return (
              <button
                key={item}
                className={category === item ? "active" : ""}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                <Icon size={16} aria-hidden="true" />
                {item}
                {item === "All tools" && <span>{software.length}</span>}
              </button>
            );
          })}
        </div>
        <p className="sr-only" role="status">
          Showing {visible.length} tools
        </p>
        <div className="software-grid">
          {visible.map((app) => (
            <article
              className="software-card"
              key={app.id}
              style={{ "--app-color": app.color }}
            >
              <div className="software-card-art">
                <span>{app.category}</span>
                <img
                  src={`/media/${app.id}.webp`}
                  alt={`${app.name} application mark`}
                  width="512"
                  height="512"
                  loading="lazy"
                />
              </div>
              <div className="software-card-copy">
                <p className="eyebrow">{app.discipline}</p>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <span className="app-status">
                  <i /> In development
                </span>
              </div>
            </article>
          ))}
        </div>
        <aside className="release-note">
          <div>
            <h3>Release status</h3>
            <p>
              Instrumenta is in development, with an open source release
              planned. Names, features and release plans may change. Source code
              and licence details will be published with the release.
            </p>
          </div>
        </aside>
      </section>
      <section className="section paper" id="open-source">
        <div className="wrap">
          <SectionHeading label="EXISTING SOFTWARE" title="On GitHub." light>
            <TextLink href={links.github}>View our repositories</TextLink>
          </SectionHeading>
          <div className="repository-list">
            <a
              href="https://github.com/Bonehead-Labs/bonehead-labs-official-systems"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 />
              <div>
                <p className="eyebrow">GDSCRIPT / GAME DEVELOPMENT</p>
                <h3>Bonehead Labs systems</h3>
                <p>Reusable Godot systems and modules for building games.</p>
              </div>
              <ArrowUpRight />
            </a>
            <a
              href="https://github.com/Bonehead-Labs/PBIP-Factory"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 />
              <div>
                <p className="eyebrow">PYTHON / DEVELOPER TOOL</p>
                <h3>PBIP Factory</h3>
                <p>
                  Generate Power BI projects from a template and a table of
                  parameter values.
                </p>
              </div>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
