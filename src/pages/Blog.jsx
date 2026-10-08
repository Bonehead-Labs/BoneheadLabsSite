import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { Kicker, Reveal, SEO, formatDate } from "../components/UI";
import { getAllPosts, resolvePostImage } from "../blog/blogUtils";

const filters = ["All posts", "Games", "Development", "Studio"];

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
  const featured = filter === "All posts" && !query;
  return (
    <>
      <SEO
        title="Development blog"
        description="Development updates and articles about building games and software at Bonehead Labs."
      />
      <section className="page-hero wrap">
        <Reveal>
          <Kicker>Development blog</Kicker>
          <h1>
            Blog<em>.</em>
          </h1>
          <p className="page-hero-line">
            Project updates and technical articles.
          </p>
        </Reveal>
      </section>
      <section className="wrap">
        <div className="journal-toolbar">
          <div className="filter-bar" role="group" aria-label="Filter blog posts">
            {filters.map((item) => (
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
            <Search size={18} aria-hidden="true" />
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
              className={index === 0 && featured ? "blog-featured" : ""}
              key={post.slug}
              delay={Math.min(index, 3) * 0.05}
            >
              <Link to={`/blog/${post.slug}`} className="post-card">
                <div className="post-card-art">
                  {post.frontmatter.image && (
                    <img
                      src={resolvePostImage(post.frontmatter.image)}
                      alt=""
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  )}
                </div>
                <div className="post-card-copy">
                  <Kicker>
                    {post.frontmatter.tags?.[0]} · {formatDate(post.date)} ·{" "}
                    {post.frontmatter.readTime}
                  </Kicker>
                  <h3>{post.frontmatter.title}</h3>
                  <p>
                    {post.frontmatter.excerpt === "Clankware Engineering"
                      ? "A breakdown of agentic development workflows and the tools used to build software."
                      : post.frontmatter.excerpt}
                  </p>
                  <span className="post-card-go" aria-hidden="true">
                    <ArrowUpRight size={20} />
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
              className="btn btn-primary"
              onClick={() => {
                setFilter("All posts");
                setQuery("");
              }}
            >
              <span>Show all posts</span>
            </button>
          </div>
        )}
      </section>
    </>
  );
}
