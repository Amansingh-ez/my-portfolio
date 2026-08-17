import { Code2, Coffee, Heart, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const STATS = [
  { value: '3+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
  { value: '2028', label: 'Graduating' },
];

const TRAITS = [
  { Icon: Zap, title: 'Fast Learner', desc: 'I pick up new tools and frameworks quickly and put them to use right away.' },
  { Icon: Code2, title: 'Hands-On Builder', desc: 'I learn by building real projects, not just tutorials. AI, web, and beyond.' },
  { Icon: Heart, title: 'User-Centric', desc: 'I care about making things people actually enjoy using.' },
  { Icon: Coffee, title: 'Always Curious', desc: 'Always exploring the next thing in AI, voice tech, and web development.' },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-accent-bright">01.</span>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">About me</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 reveal">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              A student who builds, breaks, and learns — turning ideas into{' '}
              <span className="gradient-text">real projects</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted text-lg leading-relaxed">
              <p>
                I'm Aman Singh, a BCA student who learns by building.
                Instead of waiting for permission to create, I dive into ambitious
                projects — an AI healthcare app, a weather dashboard, and now a voice
                assistant called Chloe.
              </p>
              <p>
                My toolkit spans React and modern web tools on the frontend, plus
                Python and AI libraries on the backend. I care about making things
                that actually work and that people enjoy using.
              </p>
              <p>
                When I'm not coding or studying, you'll find me exploring the latest
                in AI, tweaking my projects, or helping classmates debug their code.
              </p>
            </div>

            <div className="mt-9 grid sm:grid-cols-2 gap-4">
              {TRAITS.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass card-hover rounded-2xl p-5 flex gap-4"
                >
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-bright">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white">{title}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
              <div className="relative glass rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
                  {STATS.map((s) => (
                    <div
                      key={s.label}
                      className="bg-surface/60 p-6 text-center hover:bg-accent/5 transition-colors"
                    >
                      <div className="font-display font-extrabold text-4xl gradient-text">
                        {s.value}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-muted mt-2">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-display font-semibold text-lg mb-4">Currently</h3>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="relative flex w-2.5 h-2.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-400" />
                    </span>
                    <span className="text-sm text-muted">
                      BCA 2nd year · open to <span className="text-white">internships</span> &amp; <span className="text-white">collaborations</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
