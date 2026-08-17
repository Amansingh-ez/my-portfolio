import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const ROLES = [
  'Frontend developer',
  'AI Builder',
  'Student & Coder',
  'React Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) {
            setTimeout(() => setDeleting(true), 1600);
          }
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % ROLES.length);
          }
        }
      },
      deleting ? 40 : 90
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Backdrop */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-32 w-[32rem] h-[32rem] rounded-full bg-accent-dim/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow delay-500" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center pt-28 pb-20">
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-7">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent-bright opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent-bright" />
            </span>
            Student & open to internships
          </div>

          <h1 className="animate-fade-up delay-100 font-display font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Hi, I'm <span className="gradient-text">Aman Singh</span>
          </h1>

          <div className="animate-fade-up delay-200 mt-6 flex items-center gap-3 text-2xl sm:text-3xl font-display font-medium text-muted">
            <span className="text-white/90">I am</span>
            <span className="text-accent-bright font-semibold min-w-[200px] sm:min-w-[280px]">
              {text}
              <span className="inline-block w-0.5 h-7 ml-1 bg-accent-bright animate-pulse align-middle" />
            </span>
          </div>

          <p className="animate-fade-up delay-300 mt-7 max-w-xl text-lg text-muted leading-relaxed">
            A BCA student building real projects with AI, modern web
            tools, and a lot of curiosity. From healthcare AI to voice assistants,
            I love turning ideas into things that work.
          </p>

          <div className="animate-fade-up delay-400 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-bright to-accent-dim text-bg font-semibold hover:shadow-xl hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white font-medium hover:border-accent/50 hover:bg-white/5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-accent-bright" />
              Get in touch
            </a>
          </div>

          <div className="animate-fade-up delay-500 mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-muted/70">Follow</span>
            <div className="h-px w-8 bg-white/10" />
            {[
              { Icon: Github, href: 'https://github.com/Amansingh-ez' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/aman-singh-22269b413?' },
              { Icon: Twitter, href: 'https://x.com/Amansinghknye' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-muted hover:text-accent-bright hover:border-accent/40 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — code card */}
        <div className="lg:col-span-5 animate-fade-up delay-300">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/30 to-transparent blur-2xl opacity-60" />
            <div className="relative glass rounded-3xl p-6 glow-accent">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-muted font-mono">aman.ts</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
<span className="text-muted">{"const "}</span>
<span className="text-accent-bright">developer</span>
<span className="text-muted">{" = {"}</span>
{'\n'}
{'  '}<span className="text-sky-300">name</span><span className="text-muted">: </span><span className="text-amber-300">'Aman Singh'</span><span className="text-muted">,</span>
{'\n'}
{'  '}<span className="text-sky-300">role</span><span className="text-muted">: </span><span className="text-amber-300">'BCA Student'</span><span className="text-muted">,</span>
{'\n'}
{'  '}<span className="text-sky-300">stack</span><span className="text-muted">: [</span><span className="text-amber-300">'React'</span><span className="text-muted">, </span><span className="text-amber-300">'Python'</span><span className="text-muted">, </span><span className="text-amber-300">'AI'</span><span className="text-muted">],</span>
{'\n'}
{'  '}<span className="text-sky-300">focus</span><span className="text-muted">: </span><span className="text-amber-300">'AI + Web'</span><span className="text-muted">,</span>
{'\n'}
{'  '}<span className="text-sky-300">coffee</span><span className="text-muted">: </span><span className="text-orange-300">true</span><span className="text-muted">,</span>
{'\n'}
{'  '}<span className="text-violet-300">ship</span><span className="text-muted">() {`{`}</span>
{'\n'}
{'    '}<span className="text-muted">return </span><span className="text-amber-300">'clean code 🚀'</span><span className="text-muted">;</span>
{'\n'}
{'  '}<span className="text-muted">{`}`}</span>
{'\n'}
<span className="text-muted">{'};'}</span>
              </pre>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float">
              <span className="text-2xl font-display font-bold text-accent-bright">3+</span>
              <span className="text-xs text-muted leading-tight">Projects<br />built</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent-bright transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="w-6 h-10 rounded-full border border-white/15 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-accent-bright" style={{ animation: 'scrollDown 1.6s ease-in-out infinite' }} />
        </span>
      </a>
    </section>
  );
}
