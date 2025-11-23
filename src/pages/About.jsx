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
          <p className="about-bio">Computer Engineering Student • Hardware & Embedded Systems</p>
          
          <div className="about-description">
            <p>
              Hi! I'm Sahil, a Computer Engineering student at Georgia Tech with a passion for hardware design, 
              embedded systems, and the fascinating bridge between hardware and software. My curiosity started 
              with taking apart gadgets just to see the circuits inside, and it's grown into building and 
              designing my own hardware projects.
            </p>
            <p>
              I specialize in FPGA design, embedded systems with microcontrollers, custom PCB development, 
              and hardware-software integration. From leading a team to develop Nintendo DSi homebrew games 
              to conducting MEMS research in France, I love tackling complex engineering challenges that 
              push the boundaries of what's possible.
            </p>
            <p>
              Currently pursuing both my bachelor's and master's in Computer Engineering, I'm focused on 
              gaining hands-on experience through projects and internships. Long-term, I aim to contribute 
              to innovative hardware projects at a leading tech company while continuously expanding my 
              expertise through certifications and real-world experience.
            </p>
          </div>

          <div className="skills-section">
            <h2>Technical Skills</h2>
            
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills">
                <span className="skill">C/C++</span>
                <span className="skill">Python</span>
                <span className="skill">Java</span>
                <span className="skill">SystemVerilog</span>
                <span className="skill">VHDL</span>
                <span className="skill">ARM Assembly</span>
                <span className="skill">RISC-V</span>
                <span className="skill">MIPS</span>
                <span className="skill">Bash</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Hardware & Embedded Systems</h3>
              <div className="skills">
                <span className="skill">FPGA Design</span>
                <span className="skill">Arm Mbed</span>
                <span className="skill">Arduino</span>
                <span className="skill">PWM Control</span>
                <span className="skill">Circuit Debugging</span>
                <span className="skill">Oscilloscope</span>
                <span className="skill">Logic Analyzer</span>
                <span className="skill">PCB Design</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Software & Tools</h3>
              <div className="skills">
                <span className="skill">KiCad</span>
                <span className="skill">Quartus Prime</span>
                <span className="skill">SolidWorks</span>
                <span className="skill">DevkitPro SDK</span>
                <span className="skill">Git/GitHub</span>
                <span className="skill">Docker</span>
                <span className="skill">Linux</span>
                <span className="skill">MATLAB</span>
                <span className="skill">ImageJ</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Languages & Communication</h3>
              <div className="skills">
                <span className="skill">English</span>
                <span className="skill">French</span>
                <span className="skill">Gujarati</span>
                <span className="skill">Hindi</span>
                <span className="skill">Technical Writing</span>
                <span className="skill">Design Proposals</span>
                <span className="skill">Presentations</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">6+</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat">
              <span className="stat-value">25+</span>
              <span className="stat-label">Technical Skills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
