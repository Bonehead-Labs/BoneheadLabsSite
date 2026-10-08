import { Kicker, Reveal, SectionHead, SEO, Sticker } from "../components/UI";
import Mascot from "../components/Mascot";
import { SamShowcase, LabProjects } from "../components/Showcase";

export default function Games() {
  return (
    <>
      <SEO
        title="Games"
        description="Games from Bonehead Labs: Apple Man Sam and new projects in development."
      />
      <section className="page-hero wrap">
        <div className="page-hero-grid">
          <Reveal>
            <Kicker>Bonehead Labs</Kicker>
            <h1>
              Games<em>.</em>
            </h1>
            <p className="page-hero-line">
              Apple Man Sam is in early access on Steam, with a free demo. Two
              more games are in development.
            </p>
          </Reveal>
          <div className="page-hero-art games-art" aria-hidden="true">
            <Sticker rotate={-8} className="ga-logo sticker-plain">
              <img src="/media/sam-logo.webp" alt="" width="1000" height="563" draggable="false" />
            </Sticker>
            <Sticker rotate={7} className="ga-poster">
              <img src="/media/sam-action.webp" alt="" width="1800" height="1008" draggable="false" />
            </Sticker>
            <Sticker rotate={-4} className="ga-buddy">
              <Mascot sticker label="" />
            </Sticker>
          </div>
        </div>
      </section>
      <SamShowcase id="featured" />
      <section className="section wrap games-lab" id="in-development">
        <SectionHead kicker="Coming later" title="In development">
          <p>Early prototypes. More details when they are ready.</p>
        </SectionHead>
        <LabProjects />
      </section>
    </>
  );
}
