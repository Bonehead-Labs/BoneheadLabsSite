import { Kicker, Reveal, SectionHead, SEO, Sticker } from "../components/UI";
import Mascot from "../components/Mascot";
import { SamShowcase, LabProjects, DemoArchive } from "../components/Showcase";

export default function Games() {
  return (
    <>
      <SEO
        title="Games"
        description="Games from Bonehead Labs: Apple Man Sam, earlier playable demos and new projects in development."
      />
      <section className="page-hero wrap">
        <div className="page-hero-grid">
          <Reveal>
            <Kicker>Bonehead Labs</Kicker>
            <h1>
              Games<em>.</em>
            </h1>
            <p className="page-hero-line">
              Apple Man Sam, free demos and two projects still in the lab.
            </p>
          </Reveal>
          <div className="page-hero-art games-art" aria-hidden="true">
            <Sticker rotate={-8} className="ga-logo sticker-plain">
              <img src="/media/sam-logo.webp" alt="" width="1000" height="563" draggable="false" />
            </Sticker>
            <Sticker rotate={7} className="ga-pig">
              <img src="/media/pete-banner.webp" alt="" width="1200" height="800" draggable="false" />
            </Sticker>
            <Sticker rotate={-4} className="ga-buddy">
              <Mascot sticker label="" />
            </Sticker>
          </div>
        </div>
      </section>
      <SamShowcase id="featured" />
      <section className="section wrap" id="in-development">
        <SectionHead kicker="In development" title="Still in the lab.">
          <p>Early prototypes. Details when they are ready.</p>
        </SectionHead>
        <LabProjects />
      </section>
      <section className="wrap" id="demos">
        <SectionHead kicker="Earlier releases" title="Free demos to play.">
          <p>Our earlier games, available on itch.io.</p>
        </SectionHead>
        <DemoArchive />
      </section>
    </>
  );
}
