import { Button, Kicker, SEO } from "../components/UI";
import Mascot from "../components/Mascot";

export default function NotFound() {
  return (
    <section className="wrap not-found">
      <SEO
        title="Page not found"
        description="The requested page could not be found. Return to Bonehead Labs to view our games and software."
      />
      <Kicker>Error 404</Kicker>
      <div className="nf-number" aria-hidden="true">
        4
        <Mascot label="" />
        4
      </div>
      <h1>Page not found</h1>
      <p>The link may be incorrect or the page may have moved.</p>
      <Button to="/">Back to the homepage</Button>
    </section>
  );
}
