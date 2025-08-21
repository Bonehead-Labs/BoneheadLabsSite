import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thanks for your message! We\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      title: "Email",
      description: "For business inquiries and collaborations",
      value: "hello@boneheadlabs.dev",
      link: "mailto:hello@boneheadlabs.dev",
      icon: "📧"
    },
    {
      title: "Discord",
      description: "Join our community server",
      value: "BoneheadLabs",
      link: "#",
      icon: "💬"
    },
    {
      title: "Twitter",
      description: "Follow our development journey",
      value: "@BoneheadLabs",
      link: "#",
      icon: "🐦"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Page Header */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <FadeInInitial>
            <h1 className="text-4xl font-extrabold text-[var(--ink)] sm:text-5xl">Get in Touch</h1>
            <p className="mt-4 max-w-prose text-[var(--ink-70)]">We'd love to hear from you. Whether you have a question, want to collaborate, or just want to say hi.</p>
          </FadeInInitial>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <FadeIn>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-[var(--ink)] p-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-50)] outline-none focus:border-[var(--cyan)]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-50)] outline-none focus:border-[var(--cyan)]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Subject</label>
                  <select className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] outline-none focus:border-[var(--cyan)]">
                    <option value="">Select a subject</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Game Feedback</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us what's on your mind..." 
                    className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-50)] outline-none focus:border-[var(--cyan)]"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full rounded-2xl border-2 border-[var(--ink)] bg-[var(--cyan)] px-5 py-3 font-semibold text-[var(--ink)] hover:bg-[var(--cyan)]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn delay={1}>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">Other ways to reach us</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, i) => (
                  <div key={method.title} className="rounded-3xl border-2 border-[var(--ink)] p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[var(--ink)]">{method.title}</h3>
                        <p className="text-sm text-[var(--ink-70)] mt-1">{method.description}</p>
                        <a 
                          href={method.link} 
                          className="inline-block mt-2 text-[var(--cyan)] font-semibold hover:text-[var(--ink)] transition-colors"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border-2 border-[var(--ink)] p-6">
                <h3 className="font-bold text-[var(--ink)] mb-2">Response Time</h3>
                <p className="text-sm text-[var(--ink-70)]">
                  We typically respond within 24-48 hours during business days. 
                  For urgent matters, email is your best bet.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--paper)]">
        <Container className="py-16">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-[var(--ink-70)]">Quick answers to common questions.</p>
          </FadeIn>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            <FadeIn delay={0} className="rounded-3xl border-2 border-[var(--ink)] p-6">
              <h3 className="font-bold text-[var(--ink)] mb-2">Can I join your team?</h3>
              <p className="text-sm text-[var(--ink-70)]">
                We're always looking for talented people who share our passion for games. 
                Send us a message with your portfolio and let's talk!
              </p>
            </FadeIn>
            
            <FadeIn delay={1} className="rounded-3xl border-2 border-[var(--ink)] p-6">
              <h3 className="font-bold text-[var(--ink)] mb-2">Do you accept game ideas?</h3>
              <p className="text-sm text-[var(--ink-70)]">
                We love hearing creative ideas! While we can't implement every suggestion, 
                we're always open to inspiration and collaboration opportunities.
              </p>
            </FadeIn>
            
            <FadeIn delay={2} className="rounded-3xl border-2 border-[var(--ink)] p-6">
              <h3 className="font-bold text-[var(--ink)] mb-2">When will your next game release?</h3>
              <p className="text-sm text-[var(--ink-70)]">
                We believe in quality over speed, so we don't rush releases. 
                Follow our social media for development updates and announcements.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  );
}
