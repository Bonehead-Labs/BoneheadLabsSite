import { useParams, Link } from 'react-router-dom';
import { Container } from "../utils/common.jsx";
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getPostBySlug, resolvePostImage } from '../blog/blogUtils.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--ink)] mb-4">Post not found</h1>
            <p className="text-[var(--ink-70)] mb-6">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-[var(--ink)] px-5 py-3 font-semibold text-[var(--ink)] transition hover:translate-y-[-1px]"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <Container className="py-16 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[var(--ink-70)] hover:text-[var(--ink)] mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <article>
          <header className="mb-8">
            {post.frontmatter.image && (
              <div className="w-full aspect-video rounded-3xl overflow-hidden border-2 border-[var(--ink-20)] mb-6">
                <img 
                  src={resolvePostImage(post.frontmatter.image)} 
                  alt={post.frontmatter.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h1 className="text-4xl font-extrabold text-[var(--ink)] mb-4 sm:text-5xl">
              {post.frontmatter.title}
            </h1>
            
            <div className="flex items-center gap-4 text-[var(--ink-70)] mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date.toLocaleDateString()}</span>
              </div>
              {post.frontmatter.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.frontmatter.readTime}</span>
                </div>
              )}
            </div>
            
            {post.frontmatter.tags && (
              <div className="flex gap-2 flex-wrap">
                {post.frontmatter.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 rounded-full border-2 border-[var(--ink)] bg-[var(--cyan)] text-xs font-semibold text-[var(--ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                // Custom components for better styling
                h1: ({ children }) => <h1 className="text-3xl font-bold text-[var(--ink)] mt-8 mb-4 first:mt-0">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold text-[var(--ink)] mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold text-[var(--ink)] mt-5 mb-2">{children}</h3>,
                p: ({ children }) => <p className="text-[var(--ink-70)] mb-4 leading-relaxed">{children}</p>,
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    className="text-[var(--cyan)] hover:underline font-medium"
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                ),
                img: ({ src = '', alt = '' }) => (
                  <img 
                    src={resolvePostImage(src)} 
                    alt={alt} 
                    className="rounded-2xl border-2 border-[var(--ink-20)] max-w-full h-auto" 
                  />
                ),
                code: ({ inline, children, className }) => {
                  if (inline) {
                    return (
                      <code className="bg-[var(--ink-20)] text-[var(--ink)] px-1 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={className}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-[var(--ink)] text-white p-4 rounded-2xl overflow-x-auto border-2 border-[var(--ink)] my-6">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[var(--cyan)] pl-4 py-2 bg-[var(--ink-20)]/30 rounded-r-lg my-6 text-[var(--ink-70)] italic">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => <ul className="list-disc list-inside text-[var(--ink-70)] mb-4 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside text-[var(--ink-70)] mb-4 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </Container>
    </div>
  );
}
