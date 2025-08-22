import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: "open-source",
      title: "Open Source Libraries",
      tag: "Community",
      icon: "🔧",
      blurb: "Sharing what we learn with the development community.",
      description: "We believe in giving back to the game development community by open-sourcing tools, libraries, and sharing knowledge that others might find useful. All our open source projects are MIT licensed and actively maintained.",
      status: "Active Development",
      category: "Libraries & Tools",
      lastUpdate: "Updated regularly",
      features: [
        "MIT licensed for maximum community use",
        "Well-documented with examples",
        "Active maintenance and updates",
        "Cross-platform compatibility",
        "Performance-focused implementations"
      ],
      repositories: [
        {
          name: "Bonehead-Physics",
          description: "Lightweight 2D physics engine for Unity",
          language: "C#",
          stars: 127,
          url: "https://github.com/boneheadlabs/bonehead-physics"
        },
        {
          name: "GameFeel-Kit",
          description: "Collection of game feel utilities and effects",
          language: "C#",
          stars: 89,
          url: "https://github.com/boneheadlabs/gamefeel-kit"
        },
        {
          name: "Asset-Pipeline",
          description: "Automated asset processing and optimization tools",
          language: "Python",
          stars: 45,
          url: "https://github.com/boneheadlabs/asset-pipeline"
        }
      ],
      links: {
        github: "https://github.com/boneheadlabs",
        discord: "https://discord.gg/boneheadlabs",
        documentation: "https://docs.boneheadlabs.dev"
      }
    },
    {
      id: "premium-tools",
      title: "Premium Tools",
      tag: "Professional",
      icon: "⚡",
      blurb: "Professional-grade tools designed for productivity and efficiency.",
      description: "Our premium tools are built for developers who need reliable, powerful solutions for their daily workflow. These tools help streamline development processes and improve code quality.",
      status: "Available Now",
      category: "Development Tools",
      lastUpdate: "Latest version 2.1.0",
      features: [
        "Professional support and documentation",
        "Regular updates and new features",
        "Enterprise licensing options",
        "Priority bug fixes and support",
        "Custom integration assistance"
      ],
      tools: [
        {
          name: "CodeGen Pro",
          description: "AI-powered code generation and refactoring tool",
          price: "$49/month",
          platforms: ["VS Code", "JetBrains", "Standalone"],
          url: "/tools/codegen-pro"
        },
        {
          name: "Asset Manager",
          description: "Advanced asset organization and optimization suite",
          price: "$29/month",
          platforms: ["Unity", "Unreal", "Standalone"],
          url: "/tools/asset-manager"
        },
        {
          name: "Performance Profiler",
          description: "Real-time performance monitoring and optimization",
          price: "$79/month",
          platforms: ["Windows", "macOS", "Linux"],
          url: "/tools/performance-profiler"
        }
      ],
      links: {
        pricing: "/pricing",
        contact: "/contact",
        documentation: "https://docs.boneheadlabs.dev/premium"
      }
    }
  ];

  const toggleExpanded = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="min-h-screen bg-[var(--ink)]">
      {/* Page Header */}
      <section className="bg-[var(--ink)]">
        <Container className="py-16">
          <FadeInInitial>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Projects & Tools</h1>
            <p className="mt-4 max-w-prose text-white/70">Technical capabilities, tools, and experiments that help us build better games.</p>
          </FadeInInitial>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="bg-[var(--ink)]">
        <Container className="py-16">
          <div className="grid gap-8">
            {projects.map((project, i) => (
              <FadeIn 
                key={project.id} 
                delay={i} 
                                 className="group overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5"
              >
                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="relative aspect-[16/9] p-4">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                      <span className="text-8xl">{project.icon}</span>
                      <span className="absolute left-3 top-3 rounded-full border-2 border-white bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-white">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                                           <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                       <p className="mt-2 text-sm text-white/70">{project.blurb}</p>
                     </div>
                     
                     <div className="space-y-3 text-sm">
                       <div>
                         <span className="font-semibold text-white">Status:</span>
                         <span className="ml-2 text-white/70">{project.status}</span>
                       </div>
                       <div>
                         <span className="font-semibold text-[var(--ink)]">Category:</span>
                         <span className="ml-2 text-white/70">{project.category}</span>
                       </div>
                       <div>
                         <span className="font-semibold text-white">Last Update:</span>
                         <span className="ml-2 text-white/70">{project.lastUpdate}</span>
                       </div>
                     </div>

                     <p className="mt-4 text-sm text-white/70">{project.description}</p>
                    
                    <div className="mt-6 flex gap-3">
                      <button 
                        onClick={() => toggleExpanded(project.id)}
                        className="rounded-xl border-2 border-white bg-[var(--cyan)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--cyan)]/90 transition-colors"
                      >
                        {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                      </button>
                      {project.id === "open-source" ? (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                          View on GitHub
                        </a>
                      ) : (
                        <a 
                          href={project.links.pricing} 
                          className="rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                          View Pricing
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden border-t-2 border-white/20"
                    >
                      <div className="p-6 space-y-8">
                        {/* Features */}
                        <div>
                          <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                              <div key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full mr-2"></span>
                                <span className="text-sm text-white/70">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Open Source Repositories or Premium Tools */}
                        {project.id === "open-source" ? (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Featured Repositories</h3>
                            <div className="space-y-4">
                              {project.repositories.map((repo, index) => (
                                <div key={index} className="p-4 rounded-xl border border-white/20 bg-white/5 hover:border-[var(--cyan)] transition-colors">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{repo.name}</h4>
                                      <p className="text-sm text-white/70 mt-1">{repo.description}</p>
                                      <div className="flex items-center gap-4 mt-2 text-xs text-white/50">
                                        <span>{repo.language}</span>
                                        <span>⭐ {repo.stars}</span>
                                      </div>
                                    </div>
                                    <a 
                                      href={repo.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="ml-4 px-3 py-1 rounded-lg border border-white text-xs font-medium text-white hover:bg-white/20 transition-colors"
                                    >
                                      View
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Available Tools</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                              {project.tools.map((tool, index) => (
                                <div key={index} className="p-4 rounded-xl border border-white/20 bg-white/5 hover:border-[var(--cyan)] transition-colors">
                                  <h4 className="font-semibold text-white">{tool.name}</h4>
                                  <p className="text-sm text-white/70 mt-1">{tool.description}</p>
                                  <div className="mt-2 text-xs text-[var(--cyan)] font-medium">{tool.price}</div>
                                  <div className="mt-2 text-xs text-white/50">{tool.platforms.join(", ")}</div>
                                  <a 
                                    href={tool.url} 
                                    className="mt-3 inline-block px-3 py-1 rounded-lg border border-white text-xs font-medium text-white hover:bg-white/20 transition-colors"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Links */}
                        <div>
                          <h3 className="text-lg font-bold text-white mb-3">Get Started</h3>
                          <div className="flex flex-wrap gap-3">
                            {project.id === "open-source" ? (
                              <>
                                <a 
                                  href={project.links.documentation} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                                >
                                  Documentation
                                </a>
                                <a 
                                  href={project.links.discord} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                                >
                                  Join Discord
                                </a>
                              </>
                            ) : (
                              <>
                                <a 
                                  href={project.links.contact} 
                                  className="inline-flex items-center rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                                >
                                  Contact Sales
                                </a>
                                <a 
                                  href={project.links.documentation} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                                >
                                  Documentation
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Blog */}
      <section className="bg-[var(--ink)] border-t-2 border-white/20">
        <Container className="py-16">
          <FadeIn className="text-center">
            <h2 className="text-2xl font-bold text-white">Technical Insights</h2>
            <p className="mt-2 text-white/70">We occasionally share technical deep-dives and lessons learned.</p>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center rounded-2xl border-2 border-white px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px]">
                Subscribe to updates
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
