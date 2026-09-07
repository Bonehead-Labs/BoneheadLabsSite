import {
  PageIntro,
  Reveal,
  SectionHeading,
  SEO,
  TextLink,
} from "../components/UI";
import { SamFeature, PrototypeCards } from "../components/ProjectFeatures";
import { links } from "../data/site";
export default function Games() {
  return (
    <>
      <SEO
        title="Games"
        description="Games from Bonehead Labs: Apple Man Sam, earlier playable demos and new projects in development."
      />
      <PageIntro eyebrow="BONEHEAD LABS" title="Our" accent="games.">
        Apple Man Sam, playable demos and upcoming projects.
      </PageIntro>
      <section className="wrap games-feature">
        <SamFeature />
      </section>
      <section className="section wrap" id="in-development">
        <SectionHeading label="UPCOMING PROJECTS" title="In development." />
        <PrototypeCards />
      </section>
      <section className="section paper" id="demos">
        <div className="wrap">
          <SectionHeading
            label="EARLIER PROJECTS"
            title="Playable demos."
            light
          >
            <p>Earlier releases, available on itch.io.</p>
          </SectionHeading>
          <div className="archive-grid">
            <Reveal>
              <article className="archive-card">
                <a
                  href={links.pete}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Play the Pete the Pig demo on itch.io"
                >
                  <img
                    src="/media/pete-banner.webp"
                    alt="Pete the Pig platformer artwork"
                    width="1200"
                    height="675"
                    loading="lazy"
                  />
                </a>
                <div>
                  <p className="eyebrow">2025 / PLATFORMER DEMO</p>
                  <h3>Pete the Pig</h3>
                  <p>
                    Collect cash, wall-jump through levels and beat your best
                    time.
                  </p>
                  <TextLink href={links.pete}>
                    Play the demo on itch.io
                  </TextLink>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="archive-card">
                <a
                  href={links.friendDemo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Play the original Bonehead Friend demo on itch.io"
                >
                  <img
                    src="/media/friend-archive.webp"
                    alt="Artwork from the original Bonehead Friend demo"
                    width="1200"
                    height="675"
                    loading="lazy"
                  />
                </a>
                <div>
                  <p className="eyebrow">2025 / ORIGINAL PHYSICS DEMO</p>
                  <h3>
                    Bonehead Friend{" "}
                    <span className="title-note">The original demo</span>
                  </h3>
                  <p>
                    The original desktop physics toy. Separate from the new
                    version in development.
                  </p>
                  <TextLink href={links.friendDemo}>
                    Play the original demo on itch.io
                  </TextLink>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
