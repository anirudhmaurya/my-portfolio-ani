import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import './NavBar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = [
    { label: 'About',    href: '/#about' },
    { label: 'Skills',   href: '/#skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog',     href: '/blog' },
    { label: 'Contact',  href: '/#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Anirudh</span>
          <span className="navbar__logo-bracket"> /&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social + CTA */}
        <div className="navbar__actions">
          <a href="https://github.com/anirudhmaurya" target="_blank" rel="noopener noreferrer" className="navbar__icon" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/anirudhmaurya/" target="_blank" rel="noopener noreferrer" className="navbar__icon" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="/#contact" className="btn-primary navbar__cta">
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__mobile-link">
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-socials">
            <a href="https://github.com/anirudhmaurya" target="_blank" rel="noopener noreferrer" className="navbar__icon">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anirudhmaurya/" target="_blank" rel="noopener noreferrer" className="navbar__icon">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;