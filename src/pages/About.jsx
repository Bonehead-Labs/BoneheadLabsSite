import Reveal from "../components/Reveal.jsx";
import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";
import { Link } from 'react-router-dom';

// Import team photos
import georgePortrait from "../assets/Team Assets/George_Nizoridis_Portrait_01_Background.webp";
import georgeWorking from "../assets/Team Assets/20250222_144727.webp";
import georgeCreative from "../assets/Team Assets/IMG-20250308-WA0041.webp";
import georgeStudio from "../assets/Team Assets/20250107_174642_resized_1.webp";

// Import tech stack icons
import godotLogo from "../assets/Icons/Godot-Logo.png";
import asepriteLogo from "../assets/Icons/Aseprite-Logo.png";
import cursorLogo from "../assets/Icons/Cursor-Logo.png";
import notionLogo from "../assets/Icons/Notion-Logo.png";
import chatgptLogo from "../assets/Icons/ChatGPT-Logo.png";

export default function About() {
  const teamPhotos = [
    {
      src: georgePortrait,
      alt: "George Nizoridis - Portrait",
      caption: "Founder & CEO"
    },
    {
      src: georgeWorking,
      alt: "George Nizoridis - Working",
      caption: "Lead Developer"
    },
    {
      src: georgeCreative,
      alt: "George Nizoridis - Creative",
      caption: "Creative Director"
    },
    {
      src: georgeStudio,
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
                 How did we start? And where are we heading?
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
                   Bonehead Labs' lead developer George, had always enjoyed playing video games, working with software, and the idea of developing his own. 
                   However, starting his traditional Computer Science degree in 2016 dampened his enthusiasm, and he ended up swapping to Finance.
                   Over his career, George had found a way back into software development, in the world of Data Analytics, even becoming an Analytics Engineer, becoming proficient in AI and Data Engineering.
                   Through the Power of A.I George found his way back into software development, with an all knowing tutor and productivity tool at his side, he began learning game development.
                   He instantly, fell in love with the process.
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
                 <h3 className="text-xl font-bold text-[var(--ink)] mb-2">The Inception</h3>
                 <p className="text-[var(--ink-70)] leading-relaxed">
                   George had a clear vision after completing his first wave of prototype projects, he wanted to create a software company, building games that people would enjoy, and tools/products that would improve people's lives.
                   So, on to chatGPT he went, to of all things, try and come up with a name for his new company.
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
                 <h3 className="text-xl font-bold text-[var(--ink)] mb-2">The Evolution</h3>
                 <p className="text-[var(--ink-70)] leading-relaxed">
                   Today, bonehead labs is more than a dream, it's a reality, and we plans to make a mark.
                 </p>
               </div>
             </div>
           </FadeIn>

           <FadeIn delay={0.3}>
             <div className="flex items-start gap-8">
               <div className="flex-shrink-0 w-16 h-16 bg-[var(--cyan)] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                 4
               </div>
               <div className="flex-1">
                 <h3 className="text-xl font-bold text-[var(--ink)] mb-2">The Future</h3>
                 <p className="text-[var(--ink-70)] leading-relaxed">
                   We hope to create a studio that is known for its games, and tools, and that we are a company that is known for its quality and innovation.
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
           <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Our Development Stack</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
             Our Development stack enables the development of our games and tools, keeping organised, efficient, and productive.
           </p>
         </FadeIn>
         
         <div className="max-w-4xl mx-auto">
           <FadeIn delay={0.1}>
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                                   {[
                 { 
                   name: "Godot", 
                   icon: godotLogo, 
                   description: "Game Engine",
                   color: "from-orange-500 to-red-600"
                 },
                 { 
                   name: "Aseprite", 
                   icon: asepriteLogo, 
                   description: "Pixel Art",
                   color: "from-purple-500 to-pink-600"
                 },
                 { 
                   name: "Cursor IDE", 
                   icon: cursorLogo, 
                   description: "Development",
                   color: "from-blue-500 to-cyan-600"
                 },
                 { 
                   name: "Notion", 
                   icon: notionLogo, 
                   description: "Organization",
                   color: "from-gray-500 to-slate-600"
                 },
                 { 
                   name: "ChatGPT", 
                   icon: chatgptLogo, 
                   description: "AI Assistant",
                   color: "from-gray-500 to-green-600"
                 }
               ].map((tool, index) => (
                 <div key={tool.name} className="text-center group">
                   <div className="relative">
                     <div className={`w-20 h-20 bg-gradient-to-br ${tool.color} rounded-2xl border-2 border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-[var(--cyan)] transition-all duration-300 group-hover:scale-105 shadow-lg`}>
                       <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain" />
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
                For Games, Godot is our engine of Choice. Aseprite helps us create our pixel art. Cursor and ChatGPT enable efficient coding. LLM's aren't entirely effective at GDScript and are more for short specific tasks in this domain, but are extremely valuable for tool development in Python and Go Lang.
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
             One man team, but this may grow!
           </p>
         </FadeIn>
         
         {/* Main Team Member - George */}
         <div className="max-w-4xl mx-auto mb-16">
           <FadeIn delay={0.1}>
             <div className="text-center">
               <div className="relative inline-block mb-8">
                 <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--cyan)] mx-auto">
                   <img 
                     src={georgePortrait}
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
                 I handle the whole stack — code, art, design, and the business side. 
                 My development philosophy is prioritise the core functionality, and then add the bells and whistles.
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
                  "People ask me how I do it? I just bite off more than I can chew, then I chew it."
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
                Our company is A.I Positive, we are at the forefront of using A.I for development, responsibly and effectively.
              </p>
              
              <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--cyan)] bg-white flex items-center justify-center">
                      <img src={chatgptLogo} alt="ChatGPT" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--cyan)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AI
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">GPT-5</h4>
                  <p className="text-sm text-[var(--cyan)] mb-3">AI Developer & Artist</p>
                  <p className="text-sm text-white/80">
                    Generates well-lined pixel art for re-drawing an animation in Aseprite, as well as assisting with coding and tool development.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--cyan)] bg-white flex items-center justify-center">
                      <img src={cursorLogo} alt="Cursor IDE" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--cyan)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AI
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Cursor IDE</h4>
                  <p className="text-sm text-[var(--cyan)] mb-3">AI-Powered Editor</p>
                  <p className="text-sm text-white/80">
                    Primary IDE for coding, fantastic for context aware coding, and code completion.
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
             Please get in touch, we are always excited to hear from people!
           </p>
           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
             <Link 
               to="/contact" 
               className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-6 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px] hover:shadow-lg"
             >
               Get in touch
             </Link>
             <Link 
               to="/games" 
               className="inline-flex items-center rounded-2xl border-2 border-[var(--ink)] px-6 py-3 font-semibold text-[var(--ink)] hover:bg-[var(--ink-20)] transition-colors"
             >
               See my work
             </Link>
           </div>
         </FadeIn>
       </Container>
     </section>
   </div>
  );
}
