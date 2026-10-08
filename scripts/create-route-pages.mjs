import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import fm from "front-matter";
const output = process.argv[2] || "dist";
const html = await readFile(path.join(output, "index.html"), "utf8");
const studioDescription =
  "Bonehead Labs is an independent game and software studio. Explore Apple Man Sam, the Instrumenta suite and projects in development.";
const routes = [
  [
    "games",
    "Games",
    "Games from Bonehead Labs: Apple Man Sam and new projects in development.",
  ],
  [
    "games/apple-man-sam",
    "Apple Man Sam",
    "Apple Man Sam is a survivors-like roguelite with manual aiming, weapon upgrades, bosses and endless mode. Demo available on Steam.",
    "/media/sam-hero.webp",
  ],
  [
    "apple-man-sam",
    "Apple Man Sam",
    "Apple Man Sam is a survivors-like with manual aiming. Play the demo and wishlist the game on Steam.",
    "/media/sam-hero.webp",
  ],
  [
    "software",
    "Instrumenta & software",
    "Instrumenta is a suite of local creative tools for video, graphics, screenwriting, learning, chess, voice and 3D. In development, with an open source release planned.",
    "/media/instrumenta-organ.png",
  ],
  [
    "projects",
    "Instrumenta & software",
    "Tools and the Instrumenta suite from Bonehead Labs.",
  ],
  [
    "about",
    "The studio",
    "Bonehead Labs is an independent game and software studio founded by George Nizoridis.",
  ],
  [
    "contact",
    "Contact",
    "Contact Bonehead Labs about our games, software, support or collaboration.",
  ],
  [
    "blog",
    "Blog",
    "Updates on game and software development at Bonehead Labs.",
  ],
];
for (const file of await readdir("src/blog/posts")) {
  if (!file.endsWith(".md")) continue;
  const { attributes } = fm(
    await readFile(path.join("src/blog/posts", file), "utf8"),
  );
  routes.push([
    `blog/${file.slice(0, -3)}`,
    attributes.title,
    attributes.excerpt,
  ]);
}
const escape = (text) =>
  String(text)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const [
  route,
  title,
  description = studioDescription,
  image = "/Assets/Official-banner.png",
] of routes) {
  const canonical = `https://boneheadlabs.org/${route === "projects" ? "software" : route === "apple-man-sam" ? "games/apple-man-sam" : route}`;
  const page = html
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escape(title)} — Bonehead Labs</title>`,
    )
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*/,
      (_, prefix) => prefix + escape(description),
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*/,
      (_, prefix) => prefix + escape(title) + " — Bonehead Labs",
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*/,
      (_, prefix) => prefix + escape(description),
    )
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*/,
      (_, prefix) => prefix + "https://boneheadlabs.org" + image,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*/,
      (_, prefix) => prefix + canonical,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*/,
      (_, prefix) => prefix + canonical,
    );
  const target = path.join(output, route);
  await mkdir(target, { recursive: true });
  await writeFile(path.join(target, "index.html"), page);
}
const canonicalRoutes = [
  "",
  ...routes
    .map(([route]) => route)
    .filter((route) => !["projects", "apple-man-sam"].includes(route)),
];
await writeFile(
  path.join(output, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${canonicalRoutes.map((route) => `  <url><loc>https://boneheadlabs.org/${route}</loc></url>`).join("\n")}\n</urlset>\n`,
);
console.log(`Created ${routes.length} direct-link pages and a sitemap.`);
