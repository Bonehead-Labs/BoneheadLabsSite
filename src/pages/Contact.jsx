import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { PageIntro, Reveal, SEO } from "../components/UI";
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
      <PageIntro eyebrow="BONEHEAD LABS" title="Contact" accent="the studio.">
        For game feedback, software enquiries, support and collaboration,
        contact us by email.
      </PageIntro>
      <section className="contact-layout wrap">
        <Reveal className="contact-details">
          <p className="eyebrow">EMAIL</p>
          <a className="contact-email" href={`mailto:${links.email}`}>
            contact@
            <br />
            boneheadlabs.org <ArrowUpRight />
          </a>
          <button className="copy-email" onClick={copyEmail}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Address copied" : "Copy email address"}
          </button>
          <div className="contact-socials">
            <p className="eyebrow">FOLLOW BONEHEAD LABS</p>
            {[
              ["YouTube", "Development videos", links.youtube],
              ["GitHub", "Software repositories", links.github],
              ["X", "Studio updates", links.x],
            ].map(([name, description, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer">
                <div>
                  <strong>{name}</strong>
                  <span>{description}</span>
                </div>
                <ArrowUpRight />
              </a>
            ))}
          </div>
          <div className="contact-mascot">
            <img
              src="/media/bonehead-working.webp"
              alt="Bonehead Labs mascot at a laptop"
              width="1024"
              height="629"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal className="contact-form-panel">
          <p className="eyebrow">EMAIL FORM</p>
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
            <label htmlFor="contact-subject">What’s it about?</label>
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
            <button className="button" type="submit">
              Open email draft <ArrowUpRight size={18} />
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
