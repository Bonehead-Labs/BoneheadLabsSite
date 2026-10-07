import { useRef, useState } from "react";
import { AppWindow, ArrowDown, ArrowUpRight, Code2, HardDrive } from "lucide-react";
import { InstrumentaIcon } from "../brand/instrumenta/InstrumentaIcon";
import { Reveal, SectionHeading, SEO, TextLink } from "../components/UI";
import { links, software } from "../data/site";
import "../styles/instrumenta.css";

const principles = [
  {
    icon: HardDrive,
    title: "Runs on your computer",
    copy: "Projects and files are kept on your machine, not in an online account.",
  },
  {
    icon: AppWindow,
    title: "Separate applications",
    copy: "Each tool is its own program with its own repository, releases and data.",
  },
  {
    icon: Code2,
    title: "Open source planned",
    copy: "Source code and licence details will be published with the release.",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(software[0].id);
  const tabs = useRef({});
  const selected = software.find((app) => app.id === selectedId);

  function onRailKey(event, index) {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    let next;
    if (step) next = (index + step + software.length) % software.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = software.length - 1;
    else return;
    event.preventDefault();
    setSelectedId(software[next].id);
    tabs.current[software[next].id]?.focus();
  }

  return (
    <div className="software-page ins">
      <SEO
        title="Instrumenta & software"
        description="Instrumenta is a suite of local creative tools for video, graphics, screenwriting, learning, chess, voice and 3D. In development, with an open source release planned."
        image="/media/instrumenta-organ.png"
      />
      <section className="ins-hero">
        <div className="ins-ambient" aria-hidden="true" />
        <div className="wrap ins-hero-grid">
          <Reveal className="ins-hero-copy">
            <p className="ins-kicker">
              <span className="ins-dot" /> Software by Bonehead Labs
            </p>
            <h1 className="ins-wordmark">Instrumenta</h1>
            <p className="ins-lede">
              A suite of local creative tools. Everything runs on your
              computer.
            </p>
            <p className="ins-body">
              Video, graphics, screenwriting, learning, chess, voice and 3D.
              Seven applications, each its own program, gathered behind one
              launcher that installs, updates and opens them.
            </p>
            <div className="ins-actions">
              <a href="#the-suite" className="ins-button">
                Meet the applications <ArrowDown size={17} aria-hidden="true" />
              </a>
              <span className="ins-status">
                In development · open source release planned
              </span>
            </div>
          </Reveal>
          <figure className="ins-organ ii-play">
            <InstrumentaIcon id="instrumenta" label="The Instrumenta organ" />
            <figcaption>
              The organ: one pipe for each application, in its colour.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ins-principles">
        <div className="wrap">
          {principles.map(({ icon: Icon, title, copy }) => (
            <div key={title}>
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              <p>
                <strong>{title}</strong>
                <span>{copy}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="ins-suite" id="the-suite">
        <div className="wrap">
          <Reveal className="ins-heading">
            <p className="ins-kicker">The suite</p>
            <h2>The applications.</h2>
            <p>Seven tools, one family. All are in development.</p>
          </Reveal>
          <div className="ins-console" style={{ "--accent": selected.color }}>
            <div
              className="ins-stage"
              role="tabpanel"
              id="ins-stage"
              aria-labelledby={`ins-tab-${selected.id}`}
            >
              <div className="ins-stage-glow" aria-hidden="true" />
              <div className="ins-stage-art ii-play" key={selected.id}>
                <InstrumentaIcon id={selected.id} />
              </div>
              <div className="ins-stage-copy" key={`${selected.id}-copy`}>
                <p className="ins-discipline">{selected.discipline}</p>
                <h3>{selected.name}</h3>
                <p className="ins-line">{selected.line}</p>
                <p className="ins-description">{selected.description}</p>
                <p className="ins-glyph">
                  <span>Mark</span> {selected.glyph}
                </p>
              </div>
            </div>
            <div
              className="ins-rail"
              role="tablist"
              aria-label="Instrumenta applications"
              aria-orientation="vertical"
            >
              {software.map((app, index) => {
                const active = app.id === selectedId;
                return (
                  <button
                    key={app.id}
                    ref={(node) => (tabs.current[app.id] = node)}
                    id={`ins-tab-${app.id}`}
                    role="tab"
                    aria-selected={active}
                    aria-controls="ins-stage"
                    tabIndex={active ? 0 : -1}
                    className={`ins-rail-item ii-hover${active ? " is-active" : ""}`}
                    style={{ "--accent": app.color }}
                    onClick={() => setSelectedId(app.id)}
                    onKeyDown={(event) => onRailKey(event, index)}
                  >
                    <InstrumentaIcon id={app.id} size={40} />
                    <span className="ins-rail-name">{app.name}</span>
                    <span className="ins-rail-discipline">{app.discipline}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <aside className="ins-note">
            <h3>Release status</h3>
            <p>
              Instrumenta is in development, with an open source release
              planned. Names, features and release plans may change. Source code
              and licence details will be published with the release.
            </p>
          </aside>
        </div>
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
