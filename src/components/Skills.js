import { FiCode, FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi';
import './Skills.css';

const SKILL_GROUPS = [
  {
    icon: <FiCode size={22} />,
    label: 'Languages',
    color: 'violet',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    icon: <FiServer size={22} />,
    label: 'Backend & APIs',
    color: 'cyan',
    skills: ['FastAPI', 'Node.js', 'REST APIs', 'WebSockets', 'asyncio'],
  },
  {
    icon: <FiCpu size={22} />,
    label: 'Data & Systems',
    color: 'violet',
    skills: ['Redis', 'PostgreSQL', 'Kafka', 'Docker', 'Pandas'],
  },
  {
    icon: <FiTrendingUp size={22} />,
    label: 'Frontend & Tools',
    color: 'cyan',
    skills: ['React', 'HTML/CSS', 'Git', 'GitHub', 'Linux'],
  },
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">
          Skills &amp; <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="section-subtitle">
          A curated set of technologies I use to build reliable, scalable software.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className={`glass-card skills__card skills__card--${group.color}`}>
              <div className={`skills__card-icon skills__card-icon--${group.color}`}>
                {group.icon}
              </div>
              <h3 className="skills__card-title">{group.label}</h3>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className={`tag ${group.color === 'cyan' ? 'tag-accent' : ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
