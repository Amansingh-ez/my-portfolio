import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    document.body.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] w-[500px] h-[500px] rounded-full hidden md:block transition-opacity duration-300"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        opacity: visible ? 1 : 0,
        background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 60%)',
      }}
    />
  );
}
