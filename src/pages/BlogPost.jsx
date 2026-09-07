import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { SEO, formatDate } from "../components/UI";
import { getPostBySlug, resolvePostImage } from "../blog/blogUtils";
export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post)
    return (
      <div className="wrap empty-state">
        <SEO
          title="Post not found"
          description="This journal entry could not be found."
        />
        <p className="eyebrow">POST NOT FOUND</p>
        <h1>Post not found.</h1>
        <p>It may have moved, or the link may be incomplete.</p>
        <Link to="/blog" className="button">
          Back to the blog <ArrowUpRight size={18} />
        </Link>
      </div>
    );
  return (
    <div className="article-page paper">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <header className="article-header wrap">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={16} /> BACK TO THE BLOG
        </Link>
        <div className="article-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.frontmatter.readTime}</span>
          <span>BY {post.frontmatter.author || "BONEHEAD LABS"}</span>
        </div>
        <h1>{post.frontmatter.title}</h1>
        <div className="article-tags">
          {post.frontmatter.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div className="article-layout wrap">
        <aside className="article-sidebar">
          <span className="eyebrow">FROM THE ARCHIVE</span>
          <p>
            Written {formatDate(post.date)}. Product plans and tool details
            reflect that time.
          </p>
          <Link to="/games">
            Games today <ArrowUpRight size={15} />
          </Link>
          <Link to="/software">
            Software today <ArrowUpRight size={15} />
          </Link>
        </aside>
        <article className="article-body">
          {post.frontmatter.image && (
            <img
              className="article-cover"
              src={resolvePostImage(post.frontmatter.image)}
              alt={post.frontmatter.title}
            />
          )}
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                pre: ({ children }) => (
                  <pre tabIndex={0} aria-label="Code example">
                    {children}
                  </pre>
                ),
                h1: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
                img: ({ src = "", alt = "" }) => (
                  <img src={resolvePostImage(src)} alt={alt} loading="lazy" />
                ),
                table: ({ children }) => (
                  <div
                    className="table-scroll"
                    role="region"
                    aria-label="Article table"
                    tabIndex={0}
                  >
                    <table>{children}</table>
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <div className="article-end">
            <span>BONEHEAD LABS</span>
            <Link className="text-link" to="/blog">
              All blog posts <ArrowUpRight size={18} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
