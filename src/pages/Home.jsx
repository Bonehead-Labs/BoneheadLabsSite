import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Button,
  Reveal,
  SectionHeading,
  SEO,
  TextLink,
  formatDate,
} from "../components/UI";
import StudioToy from "../components/StudioToy";
import {
  SamFeature,
  SoftwareFeature,
  PrototypeCards,
} from "../components/ProjectFeatures";
import { getRecentPosts, resolvePostImage } from "../blog/blogUtils";
export default function Home() {
  const posts = getRecentPosts(3);
  return (
    <>
      <SEO description="Bonehead Labs is an independent game and software studio. Explore Apple Man Sam, the Instrumenta suite and projects in development." />
      <section className="studio-hero wrap">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">BONEHEAD LABS</p>
            <h1>
              Independent
              <br />
              <span>games &</span>
              <br />
              software.
            </h1>
            <p className="hero-description">
              Apple Man Sam, Instrumenta and new projects in development.
            </p>
            <div className="button-row">
              <Button to="/games">View our games</Button>
              <a
                className="hero-down"
                href="#selected-work"
                aria-label="View current projects"
              >
                <ArrowDown size={22} />
              </a>
            </div>
          </Reveal>
        </div>
        <StudioToy />
        <div className="hero-bottom">
          <span>GAME & SOFTWARE DEVELOPMENT</span>
          <a href="#selected-work">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <section className="section wrap" id="selected-work">
        <SectionHeading label="CURRENT PROJECTS" title="Games & software." />
        <div className="feature-stack">
          <SamFeature />
          <SoftwareFeature />
        </div>
      </section>
      <section className="section prototype-section">
        <div className="wrap">
          <SectionHeading label="UPCOMING PROJECTS" title="In development." />
          <PrototypeCards />
        </div>
      </section>
      <section className="home-studio paper">
        <div className="wrap home-studio-grid">
          <Reveal className="home-studio-art">
            <img
              src="/media/bonehead-working.webp"
              alt="The Bonehead mascot at a laptop"
              width="1024"
              height="629"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="home-studio-copy">
            <p className="eyebrow">ABOUT THE STUDIO</p>
            <h2>Bonehead Labs.</h2>
            <p>
              An independent game and software studio, founded and run by George
              Nizoridis.
            </p>
            <TextLink to="/about">About Bonehead Labs</TextLink>
          </Reveal>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading label="STUDIO UPDATES" title="Development blog.">
          <TextLink to="/blog">All posts</TextLink>
        </SectionHeading>
        <div className="home-posts">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link to={`/blog/${post.slug}`} className="home-post">
                <div className="home-post-art">
                  <img
                    src={resolvePostImage(post.frontmatter.image)}
                    alt=""
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                  <ArrowUpRight aria-hidden="true" />
                </div>
                <div className="home-post-copy">
                  <p className="eyebrow">
                    {post.frontmatter.tags?.[0]}{" "}
                    <span> / {formatDate(post.date)}</span>
                  </p>
                  <h3>{post.frontmatter.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
