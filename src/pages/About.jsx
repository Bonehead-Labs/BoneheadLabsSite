import Reveal from "../components/Reveal.jsx";
import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function About() {
  const teamPhotos = [
    {
      src: `${import.meta.env.BASE_URL}Assets/Team Assets/George_Nizoridis_Portrait_01_Background.webp`,
      alt: "George Nizoridis - Portrait",
      caption: "Founder & CEO"
    },
    {
      src: `${import.meta.env.BASE_URL}Assets/Team Assets/20250222_144727.webp`,
      alt: "George Nizoridis - Working",
      caption: "Lead Developer"
    },
    {
      src: `${import.meta.env.BASE_URL}Assets/Team Assets/IMG-20250308-WA0041.webp`,
      alt: "George Nizoridis - Creative",
      caption: "Creative Director"
    },
    {
      src: `${import.meta.env.BASE_URL}Assets/Team Assets/20250107_174642_resized_1.webp`,
      alt: "George Nizoridis - Studio",
      caption: "Studio Head"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
             {/* Hero Section - Unique diagonal layout */}
      <section className="bg-[var(--paper)] relative overflow-hidden">
        <Container className="relative z-10 py-24">
         <div className="grid min-h-[80vh] items-center gap-12 lg:grid-cols-12">
           {/* Text Content - Takes up more space */}
           <div className="lg:col-span-8 space-y-6">
             <FadeInInitial>
               <h1 className="text-5xl font-extrabold text-[var(--ink)] sm:text-7xl lg:text-8xl">
                 The Story of
                 <span className="block text-[var(--cyan)]">Bonehead Labs</span>
               </h1>
               <p className="mt-6 max-w-2xl text-xl text-[var(--ink-70)] leading-relaxed">
                 From solo developer to studio founder—one man's journey to build games that feel as good as they look.
               </p>
             </FadeInInitial>
           </div>
           
           {/* Visual Element - Smaller, more integrated */}
           <div className="lg:col-span-4 flex items-center justify-center">
             <FadeIn delay={0.3}>
               <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan)] to-[var(--cyan-20)] rounded-3xl transform rotate-6 scale-110"></div>
                 <div className="relative bg-[var(--paper)] rounded-3xl p-8 border-2 border-[var(--ink)] transform -rotate-2">
                   <span className="text-8xl">🎮</span>
                 </div>
               </div>
             </FadeIn>
           </div>
         </div>
       </Container>
       
       {/* Background decorative elements */}
       <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--cyan-20)] rounded-full opacity-50"></div>
       <div className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--cyan-20)] rounded-full opacity-30"></div>
     </section>

     {/* Our Story Section - Timeline style */}
     <section className="bg-[var(--paper)] py-24">
       <Container>
         <FadeIn className="text-center mb-16">
           <h2 className="text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Our Story</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--ink-70)]">
             How one developer's passion for game feel became a full-fledged studio
           </p>
         </FadeIn>
         
         <div className="max-w-4xl mx-auto space-y-12">
           {/* Story Timeline */}
           <FadeIn delay={0.1}>
             <div className="flex items-start gap-8">
               <div className="flex-shrink-0 w-16 h-16 bg-[var(--cyan)] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                 1
               </div>
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-[var(--ink)] mb-2">The Beginning</h3>
                 <p className="text-[var(--ink-70)] leading-relaxed">
                   Bonehead Labs started as a solo experiment—one developer asking "what if we could make games that feel as good to play as they look?" 
                   What began as late-night coding sessions and weekend game jams slowly evolved into something bigger.
                 </p>
               </div>
             </div>
           </FadeIn>

           <FadeIn delay={0.2}>
             <div className="flex items-start gap-8">
               <div className="flex-shrink-0 w-16 h-16 bg-[var(--cyan)] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                 2
               </div>
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-[var(--ink)] mb-2">The Evolution</h3>
                 <p className="text-[var(--ink-70)] leading-relaxed">
                   From prototyping game mechanics to building complete experiences, the focus has always been on that elusive "game feel." 
                   Every project teaches us something new about what makes games truly satisfying to play.
                 </p>
               </div>
             </div>
           </FadeIn>

           <FadeIn delay={0.3}>
             <div className="flex items-start gap-8">
               <div className="flex-shrink-0 w-16 h-16 bg-[var(--cyan)] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                 3
               </div>
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-[var(--ink)] mb-2">The Future</h3>
                 <p className="text-[var(--ink-70)] leading-relaxed">
                   Today, Bonehead Labs is still small but growing—building games, tools, and sharing knowledge with the development community. 
                   The mission remains the same: create experiences that feel amazing to play.
                 </p>
               </div>
             </div>
           </FadeIn>
         </div>
       </Container>
     </section>

     {/* Tech Stack Section */}
     <section className="bg-[var(--ink)] py-24">
       <Container>
         <FadeIn className="text-center mb-16">
           <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Our Tech Stack</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
             We mainly build in Godot. These are the core tools that keep things moving.
           </p>
         </FadeIn>
         
         <div className="max-w-4xl mx-auto">
           <FadeIn delay={0.1}>
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                                   {[
                 { 
                   name: "Godot", 
                   icon: "⚡", 
                   description: "Game Engine",
                   color: "from-orange-500 to-red-600"
                 },
                 { 
                   name: "Aseprite", 
                   icon: "🎨", 
                   description: "Pixel Art",
                   color: "from-purple-500 to-pink-600"
                 },
                 { 
                   name: "Cursor IDE", 
                   icon: "💻", 
                   description: "Development",
                   color: "from-blue-500 to-cyan-600"
                 },
                 { 
                   name: "Notion", 
                   icon: "📋", 
                   description: "Organization",
                   color: "from-gray-500 to-slate-600"
                 },
                 { 
                   name: "ChatGPT", 
                   icon: "🤖", 
                   description: "AI Assistant",
                   color: "from-green-500 to-emerald-600"
                 }
               ].map((tool, index) => (
                 <div key={tool.name} className="text-center group">
                   <div className="relative">
                     <div className={`w-20 h-20 bg-gradient-to-br ${tool.color} rounded-2xl border-2 border-white/20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:border-[var(--cyan)] transition-all duration-300 group-hover:scale-105 shadow-lg`}>
                       {tool.icon}
                     </div>
                   </div>
                   <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                   <p className="text-sm text-white/70">{tool.description}</p>
                 </div>
               ))}
             </div>
           </FadeIn>
           
           <FadeIn delay={0.2} className="mt-12">
             <div className="text-center">
               <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                 Godot is the main engine. Aseprite handles the pixels. Cursor and ChatGPT help ship faster. 
                 Notion keeps the chaos organized.
               </p>
             </div>
           </FadeIn>
         </div>
       </Container>
     </section>

     {/* Team Section - Much more prominent with photo grid */}
     <section className="bg-[var(--ink)] py-24">
       <Container>
         <FadeIn className="text-center mb-16">
           <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Meet the Team</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
             Currently a solo mission, but every great studio starts somewhere
           </p>
         </FadeIn>
         
         {/* Main Team Member - George */}
         <div className="max-w-4xl mx-auto mb-16">
           <FadeIn delay={0.1}>
             <div className="text-center">
               <div className="relative inline-block mb-8">
                 <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--cyan)] mx-auto">
                   <img 
                     src="/Assets/Team Assets/George_Nizoridis_Portrait_01_Background.webp"
                     alt="George Nizoridis" 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[var(--cyan)] rounded-full flex items-center justify-center text-white font-bold">
                   👑
                 </div>
               </div>
               
               <h3 className="text-3xl font-bold text-white mb-2">George Nizoridis</h3>
               <p className="text-xl text-[var(--cyan)] mb-4">Founder, CEO & Everything Else</p>
               <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
                 I handle the whole stack — code, art, design, and the unglamorous bits too. 
                 I like moving fast, keeping it playful, and shipping things that feel good.
               </p>
             </div>
           </FadeIn>
         </div>

         {/* Photo Grid - Different roles */}
         <FadeIn delay={0.2}>
           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {teamPhotos.map((photo, index) => (
               <div key={index} className="group">
                 <div className="relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5">
                   <img 
                     src={photo.src} 
                     alt={photo.alt} 
                     className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-0 left-0 right-0 p-4">
                     <p className="text-white font-semibold text-sm">{photo.caption}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </FadeIn>

                    {/* Solo Mission Statement */}
          <FadeIn delay={0.3} className="mt-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 text-lg italic">
                  "Being a solo developer isn't about limitations—it's about having complete creative control and the freedom to iterate quickly. 
                  Every decision, every pixel, every line of code is mine, and that's exactly how I like it... for now."
                </p>
                <p className="text-[var(--cyan)] font-semibold mt-4">— George Nizoridis</p>
              </div>
            </div>
          </FadeIn>

          {/* AI Team Section */}
          <FadeIn delay={0.4} className="mt-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">The AI Team</h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                I'm not completely solo — these AI tools carry a fair bit of weight too.
              </p>
              
              <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--cyan)] bg-white/10 flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--cyan)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AI
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">GPT-5</h4>
                  <p className="text-sm text-[var(--cyan)] mb-3">AI Developer & Artist</p>
                  <p className="text-sm text-white/80">
                    Coding partner and brainstorming buddy. Helps get ideas out of my head and into something playable.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--cyan)] bg-white/10 flex items-center justify-center text-2xl">
                      ✨
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--cyan)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AI
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Cursor IDE</h4>
                  <p className="text-sm text-[var(--cyan)] mb-3">AI-Powered Editor</p>
                  <p className="text-sm text-white/80">
                    The IDE that actually helps ship. Like pair programming with someone who never sleeps.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
       </Container>
     </section>

            {/* Contact CTA */}
      <section className="bg-[var(--paper)] py-24">
       <Container>
         <FadeIn className="text-center">
           <h2 className="text-3xl font-bold text-[var(--ink)]">Ready to Connect?</h2>
           <p className="mt-4 text-[var(--ink-70)] max-w-2xl mx-auto">
             Whether you want to discuss game development, collaborate on a project, or just chat about the industry, 
             I'm always open to connecting with fellow developers and gamers.
           </p>
           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="/contact" 
               className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-6 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px] hover:shadow-lg"
             >
               Get in touch
             </a>
             <a 
               href="/games" 
               className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-6 py-3 font-semibold text-[var(--ink)] hover:bg-[var(--ink-20)] transition-colors"
             >
               See my work
             </a>
           </div>
         </FadeIn>
       </Container>
     </section>
   </div>
  );
}
