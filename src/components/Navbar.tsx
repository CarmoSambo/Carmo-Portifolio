import { useState, useEffect } from 'react';
import './Navbar.css';
import { useTheme } from "../theme/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

const sectionIds = ["Hero", "experience", "skills", "projects", "contact"];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.navbar.home,       href: "#Hero" },
    { label: t.navbar.experience, href: "#experience" },
    { label: t.navbar.skills,     href: "#skills" },
    { label: t.navbar.projects,   href: "#projects" },
    { label: t.navbar.contact,    href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}${theme === "dark" ? " navbar--dark" : ""}`}>
      <a className="navbar-brand" href="#Hero" onClick={(e) => { e.preventDefault(); handleNavClick("#Hero"); }}>
        Carmo<span>Sambo</span>
      </a>

      <div className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}>
        {navLinks.map(({ label, href }) => {
          const id = href.replace("#", "");
          return (
            <a
              key={id}
              href={href}
              className={`navbar-link${activeSection === id ? " navbar-link--active" : ""}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {label}
            </a>
          );
        })}

        <div className="navbar-controls">
          {/* Language toggle */}
          <button className="navbar-lang-btn" onClick={toggleLanguage} aria-label="Toggle language">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme toggle */}
          <button className="navbar-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        className={`navbar-hamburger${menuOpen ? " navbar-hamburger--open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Navbar;
