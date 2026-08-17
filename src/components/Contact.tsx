import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, Download } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[24rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-accent-bright">05.</span>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">Contact</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-6">
          {/* Left */}
          <div className="reveal">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Let's build something <span className="gradient-text">great together</span>
            </h2>
            <p className="mt-5 text-muted text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? My inbox is always open.
              I'll get back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:singhaman73537@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-bright group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">Email</div>
                  <div className="text-white group-hover:text-accent-bright transition-colors">singhaman73537@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-bright">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">Location</div>
                  <div className="text-white">India — Remote worldwide</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Github, href: 'https://github.com/Amansingh-ez' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/aman-singh-22269b413?' },
                { Icon: Twitter, href: 'https://x.com/Amansinghknye' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-muted hover:text-accent-bright hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="AmanResume.pdf"
                download
                className="ml-2 inline-flex items-center gap-2 px-4 h-11 rounded-2xl bg-gradient-to-r from-accent-bright to-accent-dim text-bg font-semibold text-sm hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-7 sm:p-8 space-y-5"
            >
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted mb-2">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-accent-bright to-accent-dim text-bg hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
