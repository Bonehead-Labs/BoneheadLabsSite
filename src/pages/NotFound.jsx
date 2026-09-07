import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "../components/UI";
export default function NotFound() {
  return (
    <section className="wrap not-found">
      <SEO
        title="Page not found"
        description="The requested page could not be found. Return to Bonehead Labs to view our games and software."
      />
      <p className="eyebrow">PAGE NOT FOUND</p>
      <span className="not-found-number" aria-hidden="true">
        4<img src="/media/bonehead.webp" alt="" />4
      </span>
      <h1>Page not found.</h1>
      <p>The link may be incorrect or the page may have moved.</p>
      <Link to="/" className="button">
        Return to homepage <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
