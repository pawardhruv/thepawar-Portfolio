import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, MapPin, Download } from 'lucide-react';

const links = ['About', 'Skills', 'Journey', 'Works', 'Contact'];

export default function Navbar() {
  const dispatch = useDispatch();
  const open = useSelector((s) => s.menuOpen);

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = links
      .map((name) => document.getElementById(name.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -60% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' });

    dispatch({ type: 'CLOSE_MENU' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="brand-mark"
          aria-label="Home"
        >
          DP<span>•</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((name) => (
            <button
              key={name}
              onClick={() => go(name)}
              className={`nav-link ${activeSection === name.toLowerCase() ? 'active' : ''
                }`}
              aria-current={
                activeSection === name.toLowerCase() ? 'location' : undefined
              }
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Location and Resume */}
        <div className="hidden md:flex items-center gap-5">
          <span className="hidden xl:flex items-center gap-1.5 text-xs text-white/45">
            <MapPin size={13} />
            Navsari, Gujarat, India
          </span>

          <a
            className="btn btn-sm"
            href="/Dhruv-Pawar-Resume.pdf"
            download
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden icon-btn"
          onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-ink px-6 py-5 space-y-2">
          {links.map((name) => (
            <button
              key={name}
              onClick={() => go(name)}
              className={`mobile-link ${activeSection === name.toLowerCase() ? 'active' : ''
                }`}
            >
              {name}
            </button>
          ))}

          <a
            href="/resume.pdf"
            download="/public/pawardhruvresume.pdf"
            className="btn-download"
          >
            Download Resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
