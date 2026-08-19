import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const PROJECTS = [
  {
    title: 'AI Healthcare',
    category: 'AI + Web App',
    desc: 'An AI-powered healthcare app that helps users check symptoms, get初步 insights, and track their wellbeing. Built with a focus on accessibility and clean UX.',
    tags: ['React', 'Python', 'AI/ML', 'FastAPI'],
    accent: 'from-emerald-500/20 to-teal-500/10',
    featured: true,
    status: 'Completed',
  },
  {
    title: 'Weather Dashboard',
    category: 'Web App',
    desc: 'A sleek weather dashboard with real-time forecasts, interactive charts, and location-based search. Clean, responsive, and fast.',
    tags: ['React', 'OpenWeather API', 'Tailwind'],
    accent: 'from-sky-500/20 to-cyan-500/10',
    status: 'Completed',
    link: 'https://weather-dashboard-peach-seven.vercel.app/',   // 👈 live deployed URL
  github: 'https://github.com/Amansingh-ez/weather-dashboard', // 👈 repo URL
  },
  {
    title: 'Chloe — AI Voice Assistant',
    category: 'AI + Voice',
    desc: 'A personal voice assistant that can hold conversations, answer questions, and help with daily tasks. Currently in active development.',
    tags: ['Python', 'Speech Recognition', 'NLP', 'TTS'],
    accent: 'from-violet-500/20 to-fuchsia-500/10',
    featured: true,
    status: 'In Progress',
  },
];

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" ref={ref} className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-accent-bright">03.</span>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">Projects</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted text-lg max-w-md">
            Real projects with real code — from AI to voice assistants.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal glass card-hover rounded-3xl overflow-hidden group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Visual */}
              <div className={`relative h-56 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-2xl glass flex items-center justify-center text-5xl font-display font-bold text-white/80 group-hover:scale-110 transition-transform duration-500">
                      {p.title.charAt(0)}
                    </div>
                    <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs text-muted">
                  {p.category}
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                    p.status === 'In Progress'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      : 'bg-accent-bright text-bg'
                  }`}
                >
                  {p.status === 'In Progress' && (
                    <Sparkles className="w-3 h-3" />
                  )}
                  {p.status}
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <h3 className="font-display font-semibold text-2xl group-hover:text-accent-bright transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-muted font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-accent-bright transition-colors"
                  >
                    {p.status === 'In Progress' ? 'Follow progress' : 'live Demo'}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="w-px h-4 bg-white/10" />
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
