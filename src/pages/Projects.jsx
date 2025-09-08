import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";
import { Link } from 'react-router-dom';
import { Code, Zap, Search } from 'lucide-react';
import LabAnimation from "../components/LabAnimation.jsx";
import LottieEmbed from "../components/LottieEmbed.jsx";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: "github",
      title: "Open Source Codebases",
      tag: "Community Driven",
      icon: <Code className="w-20 h-20 text-white" />,
      blurb: "Robust, reusable software solutions for developers and creators.",
      highlights: [
        "Accessible libraries and frameworks for game development",
        "Community-driven contributions and transparent development",
        "Proven utility in real-world projects and prototypes",
        "Focused on modularity and cross-platform compatibility"
      ],
      repositories: [
        {
          name: "bonehead-labs-official-systems",
          description: "Reusable Godot game systems as importable modules (work in progress).",
          language: "GDScript",
          stars: 1,
          url: "https://github.com/Bonehead-Labs/bonehead-labs-official-systems"
        },
        {
          name: "PBIP-Factory",
          description: "Generate multiple Power BI PBIP projects from a template + CSV of parameter values.",
          language: "Python",
          stars: 1,
          url: "https://github.com/Bonehead-Labs/PBIP-Factory"
        }
      ],
      links: {
        github: "https://github.com/Bonehead-Labs"
      }
    },
    {
      id: "research",
      title: "Research & Development",
      tag: "Innovation",
      icon: <Search className="w-20 h-20 text-white" />,
      blurb: "Data-driven insights for game design and industry advancement.",
      highlights: [
        "Traditional data science and machine learning on proprietary and public datasets",
        "Statistical analysis to uncover trends and patterns",
        "Interactive delivery via Streamlit apps hosted on GitHub Pages",
        "Value-focused insights for consumers and industry partners"
      ],
      placeholder: true,
      projects: [
        {
          name: "Indie Game Market Analysis",
          description: "Decoding success factors and market trends for indie developers.",
        },
        {
          name: "Understanding Gamers",
          description: "Behavioral insights into player preferences and engagement drivers.",
        }
      ],
      links: {
        contact: "/contact"
      }
    },
    {
      id: "premium-tools",
      title: "Premium Tools",
      tag: "Enterprise Ready",
      icon: <Zap className="w-20 h-20 text-white" />,
      blurb: "Tailored solutions for critical development challenges.",
      highlights: [
        "One-off purchase model with reliable, ongoing support",
        "Built with Python, Go, SQL, GraphQL, and cutting-edge databases",
        "Developed by Bonehead Labs and trusted partners",
        "Designed for business and personal value with timely care"
      ],
      placeholder: true,
      projects: [
        {
          name: "GameFlow Studio",
          description: "Streamlined game development pipeline for rapid prototyping and deployment.",
        },
        {
          name: "DataForge Analytics",
          description: "Advanced analytics engineering suite for real-time data pipeline optimization.",
        }
      ],
      links: {
        contact: "/contact"
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
          <div className="text-center">
            <div className="relative mx-auto w-48 h-48 mb-4">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--cyan)]/30 to-[var(--cyan-20)]/20 border border-white/10" />
              <div className="absolute inset-2 rounded-xl bg-[var(--ink)] border border-white/10 flex items-center justify-center">
                <LottieEmbed
                  src="/animations/tmon-nbd-lab.json"
                  width={192}
                  height={192}
                  speed={1}
                />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">The Lab</h1>
            <FadeInInitial>
              <p className="mt-4 max-w-prose text-white/70 mx-auto">We develop video games, create open source and premium tools, and conduct and share research.</p>
            </FadeInInitial>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="bg-[var(--ink)]">
        <Container className="py-16">
          <div className="grid gap-8">
            {projects.map((project, i) => (
              <div key={project.id} id={project.id}>
                <FadeIn 
                  delay={i} 
                                   className="group overflow-hidden rounded-3xl border-2 border-white/20 bg-white/5"
                >
                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="relative aspect-[16/9] p-4">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                      {project.icon}
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

                    
                    <div className="mt-6 flex gap-3">
                      <button 
                        onClick={() => toggleExpanded(project.id)}
                        className="rounded-xl border-2 border-white bg-[var(--cyan)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--cyan)]/90 transition-colors"
                      >
                        {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                      </button>
                      {project.id === "github" ? (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="rounded-xl border-2 border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                        >
                          View on GitHub
                        </a>
                      ) : null}
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
                        {/* Highlights */}
                        {project.highlights && project.highlights.length > 0 && (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Capabilities & Delivery</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {project.highlights.map((item, index) => (
                                <div key={index} className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full mr-2"></span>
                                  <span className="text-sm text-white/70">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* GitHub Featured Repositories */}
                        {project.id === "github" ? (
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
                        ) : project.id === "research" ? (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Upcoming Focus Areas</h3>
                            <div className="space-y-4">
                              {project.projects.map((proj, index) => (
                                <div key={index} className="p-4 rounded-xl border border-white/20 bg-white/5 hover:border-[var(--cyan)] transition-colors">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{proj.name}</h4>
                                      <p className="text-sm text-white/70 mt-1">{proj.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : project.id === "premium-tools" ? (
                          <div>
                            <h3 className="text-lg font-bold text-white mb-3">Upcoming Products</h3>
                            <div className="space-y-4">
                              {project.projects.map((proj, index) => (
                                <div key={index} className="p-4 rounded-xl border border-white/20 bg-white/5 hover:border-[var(--cyan)] transition-colors">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{proj.name}</h4>
                                      <p className="text-sm text-white/70 mt-1">{proj.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}

                        {/* Concise presentation; no extra CTA section */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeIn>
              </div>
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
              <Link to="/contact" className="inline-flex items-center rounded-2xl border-2 border-white px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px]">
                Subscribe to updates
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
