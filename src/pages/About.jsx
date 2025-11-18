import './About.css';

export default function About() {
  return (
    <div className="page">
      <div className="content">
        <div className="about-card">
          <div className="about-avatar">
            <span>SM</span>
          </div>
          <h1>Sahil Makim</h1>
          <p className="about-bio">Full Stack Developer & Creative Designer</p>
          
          <div className="about-description">
            <p>
              Hi! I'm Sahil, a passionate developer who loves building beautiful and 
              functional web experiences. I specialize in modern web technologies and 
              enjoy turning ideas into reality.
            </p>
          </div>

          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills">
              <span className="skill">React</span>
              <span className="skill">JavaScript</span>
              <span className="skill">Node.js</span>
              <span className="skill">TypeScript</span>
              <span className="skill">UI/UX Design</span>
              <span className="skill">Python</span>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-value">24</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">∞</span>
              <span className="stat-label">Coffee Cups</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
