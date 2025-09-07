import { Container, FadeIn, FadeInInitial } from "../utils/common.jsx";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link with pre-filled data
    const emailSubject = subject ? `[Contact Form] ${subject}` : '[Contact Form] New Message';
    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:bonehead.labs@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      title: "Discord",
      description: "Join our community server",
      value: "BoneheadLabs",
      link: "https://discord.gg/boneheadlabs",
      icon: "💬"
    },
    {
      title: "@BoneheadLabs",
      description: "Follow our development journey",
      value: "https://twitter.com/boneheadlabs",
      link: "https://twitter.com/boneheadlabs",
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
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">Email us!</h2>
              <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-[var(--ink)] p-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name" 
                    className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-50)] outline-none focus:border-[var(--cyan)]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@example.com" 
                    className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] placeholder-[var(--ink-50)] outline-none focus:border-[var(--cyan)]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[var(--ink)]">Subject</label>
                  <select name="subject" className="mt-1 w-full rounded-xl border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-2 text-[var(--ink)] outline-none focus:border-[var(--cyan)]">
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
                    name="message"
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
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">Our communities</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, i) => (
                  <a 
                    key={method.title}
                    href={method.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block rounded-3xl border-2 border-[var(--ink)] p-6 hover:bg-[var(--cyan-20)] hover:border-[var(--cyan)] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[var(--ink)] group-hover:text-[var(--cyan)] transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-[var(--ink-70)] mt-1 group-hover:text-[var(--ink)] transition-colors">
                          {method.description}
                        </p>
                        <p className="text-sm text-[var(--ink-70)] mt-2 group-hover:text-[var(--ink)] transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
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
