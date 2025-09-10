import { Container, FadeIn } from "../utils/common.jsx";
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllPosts } from '../blog/blogUtils.js';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Page Header (twist on About page hero) */}
      <section className="bg-[var(--paper)] relative overflow-hidden border-b-2 border-[var(--ink)]/10">
        <Container className="relative z-10 py-16">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Text Content */}
            <div className="lg:col-span-8 space-y-6">
              <FadeIn>
                <h1 className="text-4xl font-extrabold text-[var(--ink)] sm:text-5xl lg:text-6xl">
                  A Peek Inside
                  <span className="block text-[var(--cyan)]">The Dev Blog</span>
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-[var(--ink-70)] leading-relaxed">
                  Technical insights, development logs, and lessons learned.
                </p>
              </FadeIn>
            </div>

            {/* Visual Element */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <FadeIn delay={0.3}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--cyan)]/30 rounded-3xl transform rotate-6 scale-105"></div>
                  <div className="relative bg-[var(--paper)] rounded-3xl p-6 border-2 border-[var(--ink)] transform -rotate-2">
                    <span className="text-6xl">📝</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>

        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-[var(--cyan)]/20 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[var(--cyan)]/20 rounded-full opacity-30"></div>
      </section>

      {/* Blog Posts */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">No posts yet</h2>
              <p className="text-[var(--ink-70)]">
                Blog posts will appear here once they're added to the posts directory.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 max-w-4xl mx-auto">
              {posts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.1}>
                  <article className="group rounded-3xl border-2 border-[var(--ink-20)] bg-[var(--paper)] p-6 hover:border-[var(--cyan)] transition-colors">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {post.frontmatter.image && (
                        <div className="sm:w-48 aspect-video rounded-2xl overflow-hidden border-2 border-[var(--ink-20)]">
                          <img 
                            src={post.frontmatter.image} 
                            alt={post.frontmatter.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-[var(--ink-50)] mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date.toLocaleDateString()}
                          </div>
                          {post.frontmatter.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.frontmatter.readTime}
                            </div>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--ink)] mb-3 group-hover:text-[var(--cyan)] transition-colors">
                          {post.frontmatter.title}
                        </h2>
                        <p className="text-[var(--ink-70)] mb-4">
                          {post.frontmatter.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 flex-wrap">
                            {post.frontmatter.tags?.map(tag => (
                              <span 
                                key={tag}
                                className="px-3 py-1 rounded-full border border-[var(--ink-20)] text-xs font-medium text-[var(--ink-70)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="flex items-center gap-2 text-[var(--ink)] hover:text-[var(--cyan)] font-medium transition-colors"
                          >
                            Read More <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
