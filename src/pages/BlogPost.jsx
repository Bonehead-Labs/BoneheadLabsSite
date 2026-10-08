import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Button, Kicker, SEO, TextLink, formatDate } from "../components/UI";
import { getPostBySlug, resolvePostImage } from "../blog/blogUtils";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post)
    return (
      <div className="wrap empty-state not-found">
        <SEO
          title="Post not found"
          description="This blog post could not be found."
        />
        <Kicker>Post not found</Kicker>
        <h1>Post not found.</h1>
        <p>It may have moved, or the link may be incomplete.</p>
        <Button to="/blog">Back to the blog</Button>
      </div>
    );
  return (
    <div className="article-page">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <header className="article-header wrap">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={15} aria-hidden="true" /> Back to the blog
        </Link>
        <div className="article-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.frontmatter.readTime}</span>
          <span>By {post.frontmatter.author || "Bonehead Labs"}</span>
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
          <Kicker>From the archive</Kicker>
          <p>
            Written {formatDate(post.date)}. Product plans and tool details
            reflect that time.
          </p>
          <Link to="/games">
            Games today <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link to="/software">
            Software today <ArrowUpRight size={15} aria-hidden="true" />
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
            <Kicker>Bonehead Labs</Kicker>
            <TextLink to="/blog">All blog posts</TextLink>
          </div>
        </article>
      </div>
    </div>
  );
}
