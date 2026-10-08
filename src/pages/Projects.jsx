import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppWindow, ArrowDown, ArrowUpRight, Code2, HardDrive } from "lucide-react";
import { InstrumentaIcon } from "../brand/instrumenta/InstrumentaIcon";
import { Reveal, SEO } from "../components/UI";
import { links, repositories, software } from "../data/site";
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
    title: "Source on GitHub",
    copy: "Every application and the launcher have a public repository.",
  },
];

export default function Projects() {
  const { hash } = useLocation();
  const fromHash = software.find((app) => hash === `#app-${app.id}`);
  const [selectedId, setSelectedId] = useState(fromHash?.id ?? software[0].id);
  const tabs = useRef({});
  const selected = software.find((app) => app.id === selectedId);

  useEffect(() => {
    if (fromHash) setSelectedId(fromHash.id);
  }, [fromHash]);

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
        description="Instrumenta is a suite of local creative tools for video, graphics, screenwriting, learning, chess, voice and 3D. In development, with source on GitHub."
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
              <a href="#the-suite" className="btn btn-brass">
                <span>See the applications</span>
                <ArrowDown size={18} strokeWidth={2.4} aria-hidden="true" />
              </a>
              <a href={links.instrumenta} className="ins-ghost" target="_blank" rel="noreferrer">
                Instrumenta on GitHub <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="ins-status">In development</p>
          </Reveal>
          <figure className="ins-organ ii-play">
            <InstrumentaIcon id="instrumenta" label="The Instrumenta organ" />
            <figcaption>
              The organ: one pipe for each application, in its colour.
            </figcaption>
          </figure>
        </div>
        <ul className="wrap ins-pipes" aria-hidden="true">
          {software.map((app) => (
            <li key={app.id} style={{ "--accent": app.color }}>
              <InstrumentaIcon id={app.id} size={34} />
              <span>{app.name}</span>
            </li>
          ))}
        </ul>
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
            <h2>The applications</h2>
            <p>Seven applications, each in development.</p>
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
                <a className="ins-repo-link" href={selected.repo} target="_blank" rel="noreferrer">
                  {selected.name} on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
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
              Instrumenta is in development. Names and features may change.
            </p>
          </aside>
        </div>
      </section>

      <section className="ins-repos" id="open-source">
        <div className="wrap">
          <Reveal className="ins-heading ins-repos-head">
            <div>
              <p className="ins-kicker">Source code</p>
              <h2>On GitHub</h2>
            </div>
          </Reveal>
          <div className="ins-repo-grid">
            {[
              { id: "instrumenta", name: "Instrumenta", discipline: "Launcher", repo: links.instrumenta, color: "#d58e00" },
              ...software,
            ].map((app, index) => (
              <Reveal key={app.id} delay={Math.min(index, 4) * 0.04}>
                <a
                  href={app.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="ins-repo-tile ii-hover"
                  style={{ "--accent": app.color }}
                >
                  <InstrumentaIcon id={app.id} size={40} />
                  <span>
                    <strong>{app.name}</strong>
                    <span>{app.repo.replace("https://github.com/", "")}</span>
                  </span>
                  <ArrowUpRight className="ins-repo-go" size={18} aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="ins-heading ins-repos-head ins-repos-other">
            <div>
              <p className="ins-kicker">Bonehead Labs</p>
              <h3>Other repositories</h3>
            </div>
            <a href={links.github} className="text-link" target="_blank" rel="noreferrer">
              Bonehead Labs on GitHub <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
          <div className="ins-repo-list">
            {repositories.map((repo, index) => (
              <Reveal key={repo.name} delay={index * 0.08}>
                <a href={repo.href} target="_blank" rel="noreferrer" className="ins-repo">
                  <span className="ins-repo-icon">
                    <Code2 size={24} aria-hidden="true" />
                  </span>
                  <span className="ins-repo-copy">
                    <span className="ins-repo-lang">{repo.language}</span>
                    <strong>{repo.name}</strong>
                    <span>{repo.line}</span>
                  </span>
                  <ArrowUpRight className="ins-repo-go" aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
