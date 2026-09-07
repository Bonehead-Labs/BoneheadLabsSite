import {
  ArrowUpRight,
  MoveUpRight,
  Heart,
  MousePointer2,
  Plus,
  Crosshair,
  Layers3,
  ShoppingBag,
  Image,
  Clapperboard,
  PenLine,
  AudioLines,
  Box,
  GraduationCap,
  UsersRound,
  Stethoscope,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Reveal, TextLink } from "./UI";
import { links, software } from "../data/site";
export function SamFeature() {
  return (
    <Reveal>
      <article className="sam-feature">
        <img
          className="sam-feature-bg"
          src="/media/sam-hero.webp"
          alt="Sam, an apple in sunglasses, facing an army of vegetables"
          width="2560"
          height="827"
          loading="lazy"
        />
        <div className="sam-feature-content">
          <p className="eyebrow">FEATURED GAME</p>
          <h3>
            Apple Man
            <br />
            <span>Sam.</span>
          </h3>
          <p>A survivors-like with manual aiming.</p>
          <div className="button-row">
            <Button to="/games/apple-man-sam">View the game</Button>
            <a
              href={links.steam}
              className="feature-steam"
              target="_blank"
              rel="noreferrer"
            >
              Wishlist on Steam <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="sam-feature-bottom">
          <span>SURVIVORS-LIKE ROGUELITE</span>
          <span>
            PC / DEMO AVAILABLE <MoveUpRight size={16} />
          </span>
        </div>
      </article>
      <div
        className="sam-preview-grid"
        aria-label="Apple Man Sam gameplay previews"
      >
        {[
          {
            src: "/media/sam-action.webp",
            label: "Combat",
            icon: Crosshair,
            alt: "Sam firing into a wave of vegetable enemies",
          },
          {
            src: "/media/sam-upgrades.webp",
            label: "Upgrades",
            icon: Layers3,
            alt: "Weapon and ability choices on the level-up screen",
          },
          {
            src: "/media/sam-shop.webp",
            label: "Weapons & items",
            icon: ShoppingBag,
            alt: "The Apple Man Sam equipment shop",
          },
        ].map((item) => (
          <Link
            to="/games/apple-man-sam#gameplay"
            key={item.src}
            className="sam-preview"
          >
            <img
              src={item.src}
              alt={item.alt}
              width="600"
              height="337"
              loading="lazy"
            />
            <span>
              <item.icon size={17} aria-hidden="true" />
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
export function SoftwareDisciplines() {
  return (
    <ul className="software-disciplines" aria-label="Instrumenta disciplines">
      {[
        [Image, "Graphics"],
        [Clapperboard, "Video"],
        [PenLine, "Writing"],
        [AudioLines, "Audio"],
        [Box, "3D"],
        [GraduationCap, "Learning"],
      ].map(([Icon, label]) => (
        <li key={label}>
          <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
export function SoftwareFeature() {
  return (
    <Reveal>
      <article className="software-feature">
        <div className="software-feature-copy">
          <p className="eyebrow">IN DEVELOPMENT / OPEN SOURCE PLANNED</p>
          <h3>
            <span>Instrumenta.</span>
          </h3>
          <SoftwareDisciplines />
          <TextLink to="/software">Explore Instrumenta</TextLink>
        </div>
        <div
          className="software-constellation"
          aria-label="Instrumenta application marks"
        >
          <div className="constellation-ring" aria-hidden="true" />
          <img
            className="suite-core"
            src="/media/instrumenta.webp"
            alt="Instrumenta"
            width="190"
            height="190"
            loading="lazy"
          />
          {software
            .filter((app) =>
              [
                "imago",
                "motus",
                "ludere",
                "forge3d",
                "luna",
                "discere",
              ].includes(app.id),
            )
            .map((app) => (
              <div
                className={`suite-satellite satellite-${app.id}`}
                key={app.id}
              >
                <img
                  src={`/media/${app.id}.webp`}
                  alt=""
                  width="105"
                  height="105"
                  loading="lazy"
                />
                <span>{app.name}</span>
              </div>
            ))}
        </div>
      </article>
    </Reveal>
  );
}
export function PrototypeCards() {
  return (
    <div className="prototype-grid">
      <Reveal>
        <article className="prototype-card ward-card">
          <div className="prototype-art ward-art" aria-hidden="true">
            <div className="hospital-cross">
              <Plus strokeWidth={1.2} />
            </div>
            <div className="ecg-line">
              <svg viewBox="0 0 600 120">
                <path d="M0 64H150L166 54L185 72L214 62H240L261 64L280 15L299 104L318 45L338 64H600" />
              </svg>
            </div>
            <div className="ward-note">WARD WORK</div>
          </div>
          <div className="prototype-copy">
            <p className="eyebrow">EARLY PROTOTYPE · WORKING TITLE</p>
            <h3>Ward Work</h3>
            <ul className="prototype-tags">
              <li>
                <UsersRound aria-hidden="true" />
                Co-op
              </li>
              <li>
                <Stethoscope aria-hidden="true" />
                Hospital
              </li>
              <li>
                <Box aria-hidden="true" />
                Physics
              </li>
            </ul>
          </div>
        </article>
      </Reveal>
      <Reveal delay={0.1}>
        <article className="prototype-card friend-card">
          <div className="prototype-art friend-art" aria-hidden="true">
            <div className="friend-window">
              <div className="window-chrome">
                <i />
                <i />
                <i />
              </div>
              <div className="window-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <img
              src="/media/bonehead.webp"
              alt=""
              className="friend-mascot"
              width="170"
              height="170"
              loading="lazy"
            />
            <Heart className="friend-heart" />
            <MousePointer2 className="friend-cursor" />
          </div>
          <div className="prototype-copy">
            <p className="eyebrow">NEW VERSION · IN DEVELOPMENT</p>
            <h3>Bonehead Friend</h3>
            <ul className="prototype-tags">
              <li>
                <Monitor aria-hidden="true" />
                Desktop companion
              </li>
              <li>
                <MousePointer2 aria-hidden="true" />
                Physics play
              </li>
            </ul>
            <span className="prototype-footnote">
              Separate from the 2025 demo.
            </span>
          </div>
        </article>
      </Reveal>
    </div>
  );
}
