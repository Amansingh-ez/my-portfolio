import { useReveal } from '@/hooks/useReveal';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: '◊',
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    title: 'AI & Backend',
    icon: '⌥',
    skills: [
      { name: 'Python', level: 82 },
      { name: 'AI / Machine Learning', level: 72 },
      { name: 'NLP', level: 65 },
      { name: 'FastAPI', level: 68 },
      { name: 'Speech / Voice APIs', level: 60 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '◈',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'VS Code', level: 92 },
      { name: 'Figma', level: 65 },
      { name: 'Vite', level: 75 },
      { name: 'Postman', level: 70 },
    ],
  },
];

const MARQUEE = [
  'React', 'JavaScript', 'Python', 'Tailwind', 'AI/ML', 'NLP',
  'FastAPI', 'Speech API', 'Figma', 'Git', 'Vite', 'TypeScript',
  'HTML', 'CSS', 'Postman', 'VS Code',
];

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-accent-dim/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-accent-bright">02.</span>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">Skills</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
          My <span className="gradient-text">technical toolkit</span>
        </h2>
        <p className="reveal text-muted text-lg max-w-2xl mb-14">
          The tools I'm learning and using every day to build real projects.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className="reveal glass card-hover rounded-2xl p-7"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-bright text-lg">
                  {group.icon}
                </span>
                <h3 className="font-display font-semibold text-xl">{group.title}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-muted font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent-bright transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-white/5 py-6">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={i}
              className="font-display font-semibold text-2xl text-muted/40 hover:text-accent-bright transition-colors"
            >
              {item}
              <span className="text-accent-bright/40 ml-12">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
