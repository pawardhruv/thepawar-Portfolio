import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function CursorGlow() {
  const enabled = useSelector(s => s.cursorEnabled);
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    let x = innerWidth / 2, y = innerHeight / 2;
    let rx = x, ry = y;
    const move = e => { x = e.clientX; y = e.clientY; };
    const tick = () => {
      rx += (x-rx)*0.14; ry += (y-ry)*0.14;
      if (ring.current) ring.current.style.transform = `translate3d(${rx-22}px,${ry-22}px,0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${x-3}px,${y-3}px,0)`;
      requestAnimationFrame(tick);
    };
    addEventListener('mousemove', move);
    const raf = requestAnimationFrame(tick);
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, [enabled]);

  if (!enabled) return null;
  return <>
    <div ref={ring} className="cursor-ring" />
    <div ref={dot} className="cursor-dot" />
  </>;
}