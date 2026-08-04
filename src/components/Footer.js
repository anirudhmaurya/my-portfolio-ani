import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        {/* Left */}
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            Anirudh
            <span className="footer__logo-bracket"> /&gt;</span>
          </span>
          <p className="footer__tagline">
            Building reliable systems, one commit at a time.
          </p>
        </div>

        {/* Links */}
        <nav className="footer__nav">
          <a href="/#skills" className="footer__nav-link">Skills</a>
          <a href="/projects" className="footer__nav-link">Projects</a>
          <a href="/blog" className="footer__nav-link">Blog</a>
          <a href="/#contact" className="footer__nav-link">Contact</a>
        </nav>

        {/* Socials */}
        <div className="footer__socials">
          <a href="https://github.com/anirudhmaurya" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:anirudh@example.com" className="footer__social-icon" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>

        {/* Back to top */}
        <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top" id="back-to-top">
          <FiArrowUp size={18} />
        </button>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Anirudh. Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
