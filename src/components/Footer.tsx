import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiPhone } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        {/* Left */}
        <div className="footer__left">
          <span className="footer__logo"><span className="footer__logo-bracket">&lt;</span>Anirudh<span className="footer__logo-bracket"> /&gt;</span></span>
          <p className="footer__tagline">
            Building intelligent systems with AI, ML & GenAI.
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
          <a href="https://www.linkedin.com/in/anirudhmaurya/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <div className="footer__tooltip-wrap">
            <a href="mailto:anirudh.km24@gmail.com" className="footer__social-icon" aria-label="Email">
              <FiMail size={20} />
            </a>
            <span className="footer__tooltip">anirudh.km24@gmail.com</span>
          </div>
          <div className="footer__tooltip-wrap">
            <a href="tel:+919532044878" className="footer__social-icon" aria-label="Phone">
              <FiPhone size={20} />
            </a>
            <span className="footer__tooltip">+91-9532044878</span>
          </div>
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
