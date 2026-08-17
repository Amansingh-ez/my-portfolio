import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-bright to-accent-dim flex items-center justify-center font-display font-bold text-bg">
            A
          </span>
          <span className="font-display font-semibold">
            Aman Singh<span className="text-accent-bright">.</span>
          </span>
        </div>

        <p className="text-sm text-muted text-center">
          &copy; {new Date().getFullYear()} Aman Singh. Built with React &amp; Tailwind.
        </p>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: 'https://github.com/Amansingh-ez' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/aman-singh-22269b413?' },
            { Icon: Twitter, href: 'https://x.com/Amansinghknye' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:text-accent-bright hover:border-accent/40 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <a
            href="#home"
            className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-bright hover:bg-accent/20 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
