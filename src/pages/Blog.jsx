import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { PageIntro, Reveal, SEO, formatDate } from "../components/UI";
import { getAllPosts, resolvePostImage } from "../blog/blogUtils";
export default function Blog() {
  const [filter, setFilter] = useState("All posts");
  const [query, setQuery] = useState("");
  const posts = getAllPosts().filter(
    (post) =>
      (filter === "All posts" ||
        (filter === "Games"
          ? post.frontmatter.tags?.includes("game")
          : filter === "Studio"
            ? post.frontmatter.tags?.includes("company")
            : post.frontmatter.tags?.includes("Agents"))) &&
      `${post.frontmatter.title} ${post.frontmatter.excerpt} ${post.frontmatter.tags?.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <SEO
        title="Development blog"
        description="Development updates and articles about building games and software at Bonehead Labs."
      />
      <PageIntro eyebrow="BONEHEAD LABS" title="Development" accent="blog.">
        Updates on our projects, technical articles and experiences from
        development.
      </PageIntro>
      <section className="wrap journal-section">
        <div className="journal-toolbar">
          <div
            className="filter-bar"
            role="group"
            aria-label="Filter blog posts"
          >
            {["All posts", "Games", "Development", "Studio"].map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="journal-search">
            <Search size={18} />
            <span className="sr-only">Search the blog</span>
            <input
              type="search"
              placeholder="Search posts"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <p className="sr-only" role="status">
          {posts.length} articles found
        </p>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <Reveal
              className={
                index === 0 && filter === "All posts" && !query
                  ? "blog-featured"
                  : ""
              }
              key={post.slug}
            >
              <Link to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-art">
                  {post.frontmatter.image && (
                    <img
                      src={resolvePostImage(post.frontmatter.image)}
                      alt=""
                      loading="lazy"
                    />
                  )}
                  <span>{post.frontmatter.tags?.[0]}</span>
                </div>
                <div className="blog-card-copy">
                  <p className="eyebrow">
                    {formatDate(post.date)}
                    <span> / {post.frontmatter.readTime}</span>
                  </p>
                  <h2>{post.frontmatter.title}</h2>
                  <p>
                    {post.frontmatter.excerpt === "Clankware Engineering"
                      ? "A breakdown of agentic development workflows and the tools used to build software."
                      : post.frontmatter.excerpt}
                  </p>
                  <span className="text-link">
                    Read post <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {posts.length === 0 && (
          <div className="empty-state">
            <h2>No posts found.</h2>
            <p>Try another search or view all posts.</p>
            <button
              className="button"
              onClick={() => {
                setFilter("All posts");
                setQuery("");
              }}
            >
              Show all posts <ArrowUpRight size={18} />
            </button>
          </div>
        )}
      </section>
    </>
  );
}
