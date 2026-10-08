import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Kicker, Reveal, SEO } from "../components/UI";
import { links } from "../data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
    } catch {
      setNotice(`You can copy the address directly: ${links.email}`);
    }
  }
  function openDraft(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `[Bonehead Labs] ${data.get("subject")}`;
    const body = `Hi Bonehead Labs,\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nReply to: ${data.get("email")}`;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice(
      "Opening your email app with a draft. Review it there and press Send. If no app opens, email us directly at the address above.",
    );
  }
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Bonehead Labs about our games, software, support or collaboration."
      />
      <section className="page-hero wrap">
        <Reveal>
          <Kicker>Bonehead Labs</Kicker>
          <h1>
            Contact<em>.</em>
          </h1>
          <p className="page-hero-line">
            For game feedback, software questions, support, press or
            collaboration, email us.
          </p>
        </Reveal>
      </section>
      <section className="contact-layout wrap">
        <Reveal className="contact-details">
          <Kicker>Email</Kicker>
          <a className="contact-email" href={`mailto:${links.email}`}>
            contact@<wbr />
            boneheadlabs.org
          </a>
          <button type="button" className="copy-email" onClick={copyEmail}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "Address copied" : "Copy email address"}
          </button>
          <div className="social-list">
            {[
              ["YouTube", "Development videos", links.youtube],
              ["GitHub", "Software repositories", links.github],
              ["X", "Studio updates", links.x],
              ["Steam", "Apple Man Sam", links.steam],
            ].map(([name, description, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer">
                <span>
                  <strong>{name}</strong>
                  <span>{description}</span>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="contact-art">
            <img
              src="/media/bonehead-working.webp"
              alt="The Bonehead mascot at a laptop"
              width="1024"
              height="629"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal className="contact-card" delay={0.1}>
          <Kicker>Email form</Kicker>
          <h2>Write an email.</h2>
          <p>Fill this out to prepare an email in your own email app.</p>
          <form onSubmit={openDraft}>
            <div className="form-row">
              <div>
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={120}
                />
              </div>
              <div>
                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                />
              </div>
            </div>
            <label htmlFor="contact-subject">What's it about?</label>
            <select
              id="contact-subject"
              name="subject"
              defaultValue="General enquiry"
            >
              <option>General enquiry</option>
              <option>Game feedback</option>
              <option>Software & Instrumenta</option>
              <option>Press & collaboration</option>
              <option>Support</option>
            </select>
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={7}
              placeholder="Enter your message"
              required
              maxLength={2500}
            />
            <button className="btn btn-primary" type="submit">
              <span>Open email draft</span>
              <ArrowUpRight size={19} strokeWidth={2.4} aria-hidden="true" />
            </button>
            <p className="form-note">
              This opens your email app. Nothing is sent until you send it
              there.
            </p>
          </form>
          <p className="form-status" role="status">
            {notice}
          </p>
        </Reveal>
      </section>
    </>
  );
}
