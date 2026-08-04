import { useState, useEffect } from 'react';
import { FiGithub, FiArrowDown, FiFileText } from 'react-icons/fi';
import './Hero.css';

const ROLES = [
  'Software Engineer',
  'System Design Enthusiast',
  'Problem Solver',
  'GenAI & LLM Enthusiast',
  'Data Scientist & ML Engineer',
  'AI Automation Expert',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    setDisplayed(currentRole.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* Background particles */}
      <div className="hero__bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__orb hero__orb--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="hero__name">
          Hi, I'm <span className="gradient-text">Anirudh</span>
        </h1>

        {/* Typewriter */}
        <div className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>

        {/* Bio */}
        <p className="hero__bio">
          I build scalable backend systems, craft elegant APIs, and enjoy thinking
          through system design problems. Currently exploring distributed systems
          and algorithmic trading.
        </p>

        {/* CTAs */}
        <div className="hero__actions">
          <a href="/projects" className="btn-primary" id="hero-view-projects">
            View Projects
          </a>
          <a href="/blog" className="btn-outline" id="hero-read-blog">
            <FiFileText size={16} />
            Read Blog
          </a>
          <a
            href="https://github.com/anirudhmaurya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="hero-github"
          >
            <FiGithub size={16} />
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '3+', label: 'Blog Posts' },
            { value: '∞', label: 'Lines of Code' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="/#about" className="hero__scroll" aria-label="Scroll down">
          <FiArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
