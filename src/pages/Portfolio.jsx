import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="page">
      <div className="content">
        <h1>Portfolio</h1>
        <p>Check out my latest projects and work.</p>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>E-Commerce Platform</h3>
            <p>A full-stack e-commerce solution with real-time inventory management</p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
          </div>
          <div className="portfolio-item">
            <h3>Social Media Dashboard</h3>
            <p>Analytics and management tool for multiple platforms</p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Chart.js</span>
            </div>
          </div>
          <div className="portfolio-item">
            <h3>AI Content Generator</h3>
            <p>ML-powered tool for generating creative content</p>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">OpenAI</span>
              <span className="tag">FastAPI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
