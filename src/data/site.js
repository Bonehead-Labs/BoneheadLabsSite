export const links = {
  steam: "https://store.steampowered.com/app/4293080/Apple_Man_Sam/",
  github: "https://github.com/Bonehead-Labs",
  youtube: "https://www.youtube.com/@Bonehead-Labs",
  x: "https://x.com/Bonehead_Labs",
  email: "contact@boneheadlabs.org",
  pete: "https://bonehead-labs.itch.io/pete-the-pig",
  friendDemo: "https://bonehead-labs.itch.io/bonehead-friend",
};
// Accents and one-line descriptions follow Instrumenta brand v2 (brand/tokens.json and each
// product's README). Motus is discontinued; Fabula carries its place in the suite.
export const software = [
  {
    id: "fabula",
    name: "Fabula",
    discipline: "Video",
    glyph: "A clapperboard holding transcript lines",
    color: "#ED7088",
    line: "Cut a talking-head video by its words.",
    description:
      "Transcribes a recording locally, proposes cuts for dead air, fillers and false starts, and shows every cut as text before anything renders. Then Claude Code or Codex turns the reviewed cut into a draft film.",
  },
  {
    id: "imago",
    name: "Imago",
    discipline: "Graphics",
    glyph: "A framed picture with a sparkle",
    color: "#00BCAB",
    line: "Thumbnails, photo edits and graphics, designed with your own Claude Code.",
    description:
      "Describe the image and Claude writes it as HTML, CSS and SVG, checks its own render and fixes what is wrong. Ask for changes in plain words and export PNG, JPG or WebP.",
  },
  {
    id: "ludere",
    name: "Ludere",
    discipline: "Writing",
    glyph: "A screenplay page",
    color: "#B583EB",
    line: "Screenplay formatting that autosaves as you write.",
    description:
      "A local screenplay editor with a scene rail and a three-act beat board. The page follows screenplay margins in Courier; the rest of the app stays out of the way.",
  },
  {
    id: "discere",
    name: "Discere",
    discipline: "Learning",
    glyph: "An open book",
    color: "#5E9EFD",
    line: "Lessons, review scheduling and a notebook that keep working offline.",
    description:
      "A learning workspace built around explanation, interaction, assessment and review, with an optional tutor powered by the AI tools you already use.",
  },
  {
    id: "learnchess",
    name: "LearnChess",
    discipline: "Chess",
    glyph: "A rook",
    color: "#47B968",
    line: "Openings, tactics, endgames and a Stockfish opponent.",
    description:
      "Play Stockfish at five strengths, solve rated puzzles, drill a repertoire of openings with spaced repetition and work through canonical endgames. No accounts, no subscriptions.",
  },
  {
    id: "luna",
    name: "Luna",
    discipline: "Voice",
    glyph: "A crescent moon with a voice",
    color: "#73A6C4",
    line: "Private, local GPU voice generation.",
    description:
      "Generate speech on your own graphics card. Text, reference recordings, voice profiles and generated audio stay on your computer.",
  },
  {
    id: "forge3d",
    name: "Forge3D",
    discipline: "3D",
    glyph: "A cube",
    color: "#EE7752",
    line: "Prompt-driven 3D modelling.",
    description:
      "Turns a prompt into a versioned local 3D run, keeps the transcript and previews the result, working alongside Blender and Godot.",
  },
];
export const demos = [
  {
    id: "pete",
    title: "Pete the Pig",
    year: "2025",
    kind: "Platformer demo",
    line: "Collect cash, wall-jump through levels and beat your best time.",
    image: "/media/pete-banner.webp",
    alt: "Pete the Pig, in sunglasses, running through a forest with a coin",
    href: links.pete,
    cta: "Play on itch.io",
  },
  {
    id: "friend-2025",
    title: "Bonehead Friend",
    note: "Original demo",
    year: "2025",
    kind: "Desktop physics toy",
    line: "The first desktop companion. Separate from the new version in development.",
    image: "/media/friend-archive.webp",
    alt: "Artwork from the original Bonehead Friend demo",
    href: links.friendDemo,
    cta: "Play on itch.io",
  },
];
export const repositories = [
  {
    name: "Bonehead Labs systems",
    language: "GDScript",
    line: "Reusable Godot systems and modules for building games.",
    href: "https://github.com/Bonehead-Labs/bonehead-labs-official-systems",
  },
  {
    name: "PBIP Factory",
    language: "Python",
    line: "Generate Power BI projects from a template and a table of parameter values.",
    href: "https://github.com/Bonehead-Labs/PBIP-Factory",
  },
];
export const gallery = [
  {
    src: "/media/sam-action.webp",
    title: "Combat",
    alt: "Apple Man Sam firing into a horde of vegetables during a nighttime battle",
  },
  {
    src: "/media/sam-chaos.webp",
    title: "Endless mode",
    alt: "A late-game Apple Man Sam run with huge hordes, fire and projectiles",
  },
  {
    src: "/media/sam-upgrades.webp",
    title: "Level-up upgrades",
    alt: "A choice of three upgrades on the Apple Man Sam level-up screen",
  },
  {
    src: "/media/sam-shop.webp",
    title: "Weapons & items",
    alt: "The Apple Man Sam weapon and item shop",
  },
];
