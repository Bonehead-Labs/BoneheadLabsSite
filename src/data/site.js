export const links = {
  steam: "https://store.steampowered.com/app/4293080/Apple_Man_Sam/",
  github: "https://github.com/Bonehead-Labs",
  youtube: "https://www.youtube.com/@Bonehead-Labs",
  x: "https://x.com/Bonehead_Labs",
  email: "contact@boneheadlabs.org",
  pete: "https://bonehead-labs.itch.io/pete-the-pig",
  friendDemo: "https://bonehead-labs.itch.io/bonehead-friend",
  instrumenta: "https://github.com/George-Nizor/Instrumenta",
};
// Accents and one-line descriptions follow Instrumenta brand v2 (brand/tokens.json and each
// product's README). Motus is discontinued; Fabula carries its place in the suite.
export const software = [
  {
    id: "fabula",
    repo: "https://github.com/George-Nizor/Fabula",
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
    repo: "https://github.com/George-Nizor/Imago",
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
    repo: "https://github.com/George-Nizor/Ludere",
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
    repo: "https://github.com/George-Nizor/Discere",
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
    repo: "https://github.com/George-Nizor/LearnChess",
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
    repo: "https://github.com/George-Nizor/Luna",
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
    repo: "https://github.com/George-Nizor/Forge3D",
    name: "Forge3D",
    discipline: "3D",
    glyph: "A cube",
    color: "#EE7752",
    line: "Prompt-driven 3D modelling.",
    description:
      "Turns a prompt into a versioned local 3D run, keeps the transcript and previews the result, working alongside Blender and Godot.",
  },
];
// Early prototypes made while learning Godot. Shown as studio history, not as current games.
export const origins = [
  {
    id: "pete",
    title: "Pete the Pig",
    kind: "Platformer prototype",
    image: "/media/pete-banner.webp",
    href: links.pete,
  },
  {
    id: "friend-2025",
    title: "Bonehead Friend (2025)",
    kind: "Desktop physics toy",
    image: "/media/friend-archive.webp",
    href: links.friendDemo,
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
// Apple Man Sam content from the game's data files (loadouts.json, levels.json, boss scenes).
// Sprite sheets in public/media/sam are horizontal strips: idle 7 frames, run 8 frames.
export const samLoadouts = [
  { id: "standard", name: "Standard Issue", type: "Ranged", weapons: ["Handgun", "Rifle", "Rocket Launcher"] },
  { id: "ninja", name: "Ninja", type: "Melee", weapons: ["Katana", "Shurikens", "Nunchucks"] },
  { id: "engineer", name: "Engineer", type: "Ranged", weapons: ["Shotgun", "Sentry Turret", "C4"] },
  { id: "knight", name: "Knight", type: "Melee", weapons: ["Longsword", "Crossbow", "Mace and Shield"] },
  { id: "peasant", name: "Peasant", type: "Melee", weapons: ["Hoe", "Bare Fists", "Rocks"] },
  { id: "wizard", name: "Wizard", type: "Ranged", weapons: ["Fire Wand", "Ice Staff", "Tome of Fruitaria"] },
];
export const samPlannedLoadouts = [
  { id: "cowboy", name: "Cowboy" },
  { id: "spaceman", name: "Spaceman" },
  { id: "cyborg", name: "Cyborg" },
  { id: "king", name: "King" },
];
export const samBosses = [
  { id: "billy", name: "Billy the Chilly", frames: 4 },
  { id: "cole", name: "Cole the Corn", frames: 3 },
  { id: "potato", name: "President Potato", frames: 6, arena: "The City" },
  { id: "broccoli", name: "King Broccoli", frames: 6, arena: "The Kingdom" },
];
export const samMaps = [
  {
    id: "city",
    name: "The City",
    unlock: "Available from the start",
    image: "/media/sam/map-city.webp",
    alt: "Overview of The City map: streets, shops, a town hall and a fountain at night",
  },
  {
    id: "kingdom",
    name: "The Kingdom",
    unlock: "Unlocked through quests",
    image: "/media/sam/map-kingdom.webp",
    alt: "Overview of The Kingdom map: a walled town and castle surrounded by farms and districts",
  },
];
export const samRequirements = [
  ["OS", "Windows 10 64-bit", "Windows 11 64-bit"],
  ["Processor", "Intel Core i5-6400 / AMD Ryzen 3 1200", "Intel Core i5-9600K / AMD Ryzen 5 3600"],
  ["Memory", "8 GB RAM", "16 GB RAM"],
  ["Graphics", "GeForce GTX 1050 Ti / Radeon RX 560", "GeForce GTX 1660 / Radeon RX 6600"],
  ["DirectX", "Version 12", "Version 12"],
  ["Storage", "2 GB available space", "4 GB available space (SSD recommended)"],
];
