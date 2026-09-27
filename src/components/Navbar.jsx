import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, MapPin, Download } from 'lucide-react';

const links = ['About','Skills','Journey','Works','Contact'];

export default function Navbar() {
  const dispatch = useDispatch();
  const open = useSelector(s => s.menuOpen);
  const go = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:'smooth' });
    dispatch({type:'CLOSE_MENU'});
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <button onClick={() => go('home')} className="brand-mark" aria-label="Home">DP<span>•</span></button>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(x => <button key={x} onClick={() => go(x)} className="nav-link">{x}</button>)}
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <span className="hidden xl:flex items-center gap-1.5 text-xs text-white/45"><MapPin size={13}/> Navsari, Gujarat, India</span>
          <a className="btn btn-sm" href="/Dhruv-Pawar-Resume.pdf" download><Download size={14}/> Resume</a>
        </div>
        <button className="lg:hidden icon-btn" onClick={() => dispatch({type:'TOGGLE_MENU'})}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="lg:hidden border-t border-white/5 bg-ink px-6 py-5 space-y-2">
        {links.map(x => <button key={x} onClick={() => go(x)} className="mobile-link">{x}</button>)}
        <a className="btn w-full mt-3" href="/public/thepawarresume.pdf" download><Download size={15}/> Download Resume</a>
      </div>}
    </header>
  );
}