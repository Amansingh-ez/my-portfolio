import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group" onClick={close}>
          <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent-bright to-accent-dim flex items-center justify-center font-display font-bold text-bg text-lg shadow-lg shadow-accent/30 transition-transform group-hover:scale-110">
            A
            <span className="absolute inset-0 rounded-xl bg-accent-bright blur-md opacity-40 -z-10" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            Aman<span className="text-accent-bright">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive ? 'text-accent-bright' : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-bright" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-bright to-accent-dim text-bg font-semibold text-sm hover:shadow-lg hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10"
          aria-label="Menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <ul className="mx-6 glass rounded-2xl p-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block px-4 py-3 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={close}
              className="block mt-2 px-4 py-3 rounded-xl bg-accent text-bg font-semibold text-center"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
