import { GraduationCap, BookOpen, Award, Code2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const EDUCATION = [
  {
    title: 'BCA — Bachelor of Computer Applications',
    place: 'Microtek College of Technology and Management',
    period: '2025 — 2028 · 2nd Year',
    desc: 'Currently in my 2nd year of BCA, studying computer applications with a focus on programming, web development, and AI. Building real projects alongside my coursework to put theory into practice.',
    tags: ['Programming', 'Web Development', 'DBMS', 'AI'],
  },
  {
    title: 'Higher Secondary (12th)',
    place: 'Sukhdev Kisan Maha Vidyalaya',
    period: 'Completed · 67%',
    desc: 'Completed my 12th with 67%, building the foundation in Computer Science and problem-solving that led me to pursue a career in technology.',
    tags: ['Computer Science', 'Mathematics'],
  },
];

const LEARNING = [
  { Icon: BookOpen, title: 'Self-Taught Builder', desc: 'Learning React, Python, and AI through hands-on projects and documentation.' },
  { Icon: Code2, title: 'Project-Driven', desc: 'Every new skill gets tested by building something real — not just following tutorials.' },
  { Icon: Award, title: 'Always Leveling Up', desc: 'Currently exploring NLP, voice tech, and full-stack AI applications.' },
];

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-accent-bright">04.</span>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">Education</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <h2 className="reveal font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
          My <span className="gradient-text">learning journey</span>
        </h2>
        <p className="reveal text-muted text-lg mb-14 max-w-2xl">
          I'm a student who learns by doing. Here's where I'm studying and how I'm growing.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent-bright via-accent/30 to-transparent" />

          <div className="space-y-10">
            {EDUCATION.map((edu, i) => (
              <div
                key={edu.title}
                className="reveal relative pl-16"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Node */}
                <div className="absolute left-0 top-1 w-11 h-11 rounded-2xl glass border border-accent/30 flex items-center justify-center text-accent-bright">
                  <GraduationCap className="w-5 h-5" />
                  <span className="absolute inset-0 rounded-2xl bg-accent/20 blur-md -z-10" />
                </div>

                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-xl text-white">{edu.title}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent-bright border border-accent/20">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-accent-bright/80 text-sm font-medium mb-3">{edu.place}</div>
                  <p className="text-muted leading-relaxed">{edu.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-muted font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning approach */}
        <div className="reveal mt-16 grid sm:grid-cols-3 gap-5">
          {LEARNING.map(({ Icon, title, desc }) => (
            <div key={title} className="glass card-hover rounded-2xl p-6">
              <span className="inline-flex w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 items-center justify-center text-accent-bright mb-4">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-display font-semibold text-white">{title}</h3>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
