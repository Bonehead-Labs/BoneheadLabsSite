import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function Games() {
  const games = [
    { 
      title: "Pete the Pig", 
      tag: "In development", 
      art: "/Assets/42649192-310d-4cfe-a932-b381ad026869.png", 
      blurb: "Action‑platformer with crunchy combat and cheeky charm.",
      description: "A fast-paced platformer where you play as Pete, a plucky pig with a knack for adventure. Features tight controls, satisfying combat mechanics, and a world full of secrets to discover.",
      status: "In Development",
      platforms: ["PC", "Switch"],
      releaseDate: "2024"
    },
    { 
      title: "Prototype #7", 
      tag: "Prototype", 
      art: "/Assets/image.png", 
      blurb: "Physics‑toy sandbox exploring grabby interactions.",
      description: "An experimental physics playground where you can grab, throw, and manipulate objects in real-time. Test your creativity and see what unexpected interactions you can discover.",
      status: "Prototype",
      platforms: ["PC"],
      releaseDate: "TBD"
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Page Header */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <FadeInInitial>
            <h1 className="text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Games</h1>
            <p className="mt-4 max-w-prose text-[var(--ink-70)]">Small scope, strong identity, great feel. Each game is crafted with care and attention to detail.</p>
          </FadeInInitial>
        </Container>
      </section>

      {/* Games Grid */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <div className="grid gap-8">
            {games.map((game, i) => (
              <FadeIn 
                key={game.title} 
                delay={i} 
                className="group overflow-hidden rounded-3xl border-2 border-[var(--ink)] bg-[var(--paper)]"
              >
                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="relative aspect-[16/9]">
                    <img src={game.art} alt={game.title} className="h-full w-full object-cover"/>
                    <span className="absolute left-3 top-3 rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                      {game.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-[var(--ink)]">{game.title}</h2>
                      <p className="mt-2 text-sm text-[var(--ink-70)]">{game.blurb}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-[var(--ink)]">Status:</span>
                        <span className="ml-2 text-[var(--ink-70)]">{game.status}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--ink)]">Platforms:</span>
                        <span className="ml-2 text-[var(--ink-70)]">{game.platforms.join(", ")}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--ink)]">Release:</span>
                        <span className="ml-2 text-[var(--ink-70)]">{game.releaseDate}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-[var(--ink-70)]">{game.description}</p>
                    
                    <div className="mt-6 flex gap-3">
                      <button className="rounded-xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--cyan)]/90">
                        Wishlist
                      </button>
                      <button className="rounded-xl border-2 border-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--ink-20)]">
                        Follow Development
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold text-[var(--ink)]">More Games Coming Soon</h2>
            <p className="mt-2 text-[var(--ink-70)]">We're always experimenting with new ideas and mechanics.</p>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]">
                Get in touch
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
