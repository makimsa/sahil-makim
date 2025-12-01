import { useState } from 'react';
import './Home.css';

export default function Home() {
  const [expandedItems, setExpandedItems] = useState([]);
  const [closingItems, setClosingItems] = useState([]);

  const toggleItem = (itemName) => {
    if (expandedItems.includes(itemName)) {
      // Start closing animation
      setClosingItems([...closingItems, itemName]);
      setTimeout(() => {
        setExpandedItems(expandedItems.filter(item => item !== itemName));
        setClosingItems(closingItems.filter(item => item !== itemName));
      }, 500);
    } else {
      // Close all other items first
      if (expandedItems.length > 0) {
        setClosingItems([...closingItems, ...expandedItems]);
        setTimeout(() => {
          setExpandedItems([itemName]);
          setClosingItems([]);
        }, 500);
      } else {
        // Open the item
        setExpandedItems([itemName]);
      }
    }
  };

  const renderStoryContent = () => {
    const isClosing = closingItems.includes('STORY');
    const lines = [
      { type: 'heading', text: 'Background' },
      { type: 'paragraph', text: "I'm a Computer Engineering student at Georgia Tech who's always been curious about the inner workings of technology. That curiosity started with cracking open gadgets just to see the circuits inside, and it's grown into a passion for designing and building hardware myself." },
      { type: 'heading', text: 'Technical Experience' },
      { type: 'list', items: [
        'Custom PCB design and development',
        'FPGA design and programming in SystemVerilog',
        'Embedded systems with microcontrollers',
        'Hardware-software integration projects'
      ]},
      { type: 'heading', text: 'What Drives Me' },
      { type: 'paragraph', text: "The bridge between hardware and software—where design decisions on one side unlock possibilities on the other" },
      { type: 'heading', text: 'Beyond the Classroom' },
      { type: 'list', items: [
        'Experimenting with side projects',
        'Collaborating on engineering teams',
        'Exploring new architectures and computing devices'
      ]},
      { type: 'heading', text: 'Career Goals' },
      { type: 'paragraph', text: "Right now, I'm focused on completing both my bachelor's and master's in computer engineering, emphasizing hardware design, embedded systems, and firmware development. After graduation, I'm looking to land an entry-level role where I can apply what I've learned to real-world challenges and gain hands-on experience. Long-term, I want to keep building my expertise through certifications in embedded systems and FPGAs, eventually working at a leading tech company where I can contribute to innovative hardware projects and keep learning throughout my career." }
    ];

    let lineIndex = 0;
    return (
      <div className="story-content">
        {lines.map((line, idx) => {
          if (line.type === 'heading') {
            const currentLineIndex = lineIndex++;
            const openDelay = 0.1 + currentLineIndex * 0.08;
            return (
              <h4 
                key={idx} 
                className={isClosing ? "story-line-no-anim" : "story-line"}
                style={{ animationDelay: isClosing ? '0s' : `${openDelay}s` }}
              >
                {line.text}
              </h4>
            );
          } else if (line.type === 'paragraph') {
            const currentLineIndex = lineIndex++;
            const openDelay = 0.1 + currentLineIndex * 0.08;
            return (
              <p 
                key={idx} 
                className={isClosing ? "story-paragraph story-line-no-anim" : "story-paragraph story-line"}
                style={{ animationDelay: isClosing ? '0s' : `${openDelay}s` }}
              >
                {line.text}
              </p>
            );
          } else if (line.type === 'list') {
            return (
              <ul key={idx} className="story-list">
                {line.items.map((item, itemIdx) => {
                  const currentLineIndex = lineIndex++;
                  const openDelay = 0.1 + currentLineIndex * 0.08;
                  return (
                    <li 
                      key={itemIdx}
                      className={isClosing ? "story-line-no-anim" : "story-line"}
                      style={{ animationDelay: isClosing ? '0s' : `${openDelay}s` }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            );
          }
          return null;
        })}
      </div>
    );
  };

  const sections = [
    {
      name: 'STORY',
      isCustom: true,
      customContent: renderStoryContent
    },
    {
      name: 'PROJECTS',
      isList: true,
      explanation: 'Feel free to check out the Portfolio tab for more information!',
      items: [
        'Nintendo DSi Homebrew Pong – Led 4-member team to develop functional game with full DS hardware integration',
        'Embedded Monitoring System – Built modular Arduino system interfacing with 25+ sensors for real-time data display',
        'Mbed Wordle Game – Replicated Wordle on Mbed microcontroller with animations and difficulty modes',
        'FPGA Servo Motor Control – Designed PWM-based control peripheral achieving ±2° precision',
        'MEMS Research (Institute Lafayette, France) – Analyzed AlGaN film transfer forces for flexible substrate epitaxy'
      ]
    },
    {
      name: 'TECHNICAL SKILLS',
      isCustom: true,
      customContent: () => {
        const isClosing = closingItems.includes('TECHNICAL SKILLS');
        const skillCategories = [
          {
            category: 'Programming',
            skills: ['C', 'Python', 'Java', 'SystemVerilog', 'ARM', 'RISC-V', 'MIPS', 'Bash', 'Git', 'MATLAB']
          },
          {
            category: 'Hardware',
            skills: ['FPGAs', 'Arm Mbed', 'Computer Architecture', 'VHDL', 'Circuit Debugging', 'Oscilloscope', 'Logic Analyzer']
          },
          {
            category: 'Software & Tools',
            skills: ['KiCad', 'Altera Quartus II', 'SolidWorks', 'Linux', 'GitHub', 'Docker', 'Visual Studio Code', 'Microsoft Office']
          },
          {
            category: 'Communication',
            skills: ['Design Proposals', 'Review Papers', 'Technical Reports', 'Instruction Manuals', 'Presentations']
          }
        ];

        let badgeIndex = 0;
        return (
          <div className="skills-categories">
            {skillCategories.map((cat, catIdx) => (
              <div key={catIdx} className="skill-category">
                <h4 
                  className={isClosing ? "category-title-no-anim" : "category-title"}
                  style={{ animationDelay: isClosing ? '0s' : `${0.1 + badgeIndex++ * 0.03}s` }}
                >
                  {cat.category}
                </h4>
                <div className="skill-badges">
                  {cat.skills.map((skill, skillIdx) => {
                    const currentBadgeIndex = badgeIndex++;
                    const openDelay = 0.1 + currentBadgeIndex * 0.03;
                    return (
                      <span 
                        key={skillIdx}
                        className={isClosing ? "skill-badge skill-badge-no-anim" : "skill-badge"}
                        style={{ animationDelay: isClosing ? '0s' : `${openDelay}s` }}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    {
      name: 'RESUME',
      isCustom: true,
      customContent: () => {
        const isClosing = closingItems.includes('RESUME');
        return (
          <div className="content-lines">
            <span 
              className={isClosing ? "content-line-no-anim" : "content-line"}
              style={{ animationDelay: isClosing ? '0s' : '0.1s' }}
            >
              Currently pursuing my degree in Computer Engineering at Georgia Tech. I've completed internships focusing on embedded systems and firmware development. My coursework includes digital design, computer architecture, signals and systems, and software engineering. I'm also involved in several engineering clubs and competitive robotics teams on campus.
            </span>
            <div 
              className={isClosing ? "resume-link-wrapper content-line-no-anim" : "resume-link-wrapper content-line"}
              style={{ animationDelay: isClosing ? '0s' : '0.2s' }}
            >
              <a 
                href="/sahil-makim/Sahil_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-link"
                onClick={(e) => e.stopPropagation()}
              >
                📄 View Full Resume (PDF)
              </a>
            </div>
          </div>
        );
      }
    },
    {
      name: 'SOCIALS',
      isCustom: true,
      customContent: () => {
        const isClosing = closingItems.includes('SOCIALS');
        const socials = [
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sahil-makim/' },
          { name: 'GitHub', url: 'https://github.com/makimsa' },
          { name: 'YouTube', url: 'https://www.youtube.com/@sahilmakim' }
        ];
        
        return (
          <div className="socials-content">
            <p 
              className={isClosing ? "socials-description content-line-no-anim" : "socials-description content-line"}
              style={{ animationDelay: isClosing ? '0s' : '0.1s' }}
            >
              Connect with me on social media to see my latest projects, tutorials, and updates!
            </p>
            <div className="socials-links">
              {socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isClosing ? "social-link content-line-no-anim" : "social-link content-line"}
                  style={{ animationDelay: isClosing ? '0s' : `${0.2 + index * 0.08}s` }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        );
      }
    }
  ];

  return (
    <div className="page">
      <div className="content">
        <div className="hero">
          <h1 className="draw-title" data-text={"Hi, I'm Sahil Makim"}>
            <span data-text={"Hi, I'm Sahil Makim"}>Hi, I'm Sahil Makim</span>
          </h1>
          <p className="subtitle">Computer Engineering • Georgia Tech</p>
        </div>

        <div className="section">
          <div className="features-list">
            {sections.map((section) => (
              <div 
                key={section.name}
                className={`feature-item ${expandedItems.includes(section.name) ? 'expanded' : ''}`}
                onClick={() => toggleItem(section.name)}
              >
                <div className="feature-content">
                  <h3>{section.name}</h3>
                  {(expandedItems.includes(section.name) || closingItems.includes(section.name)) && (
                    <div className={`expanded-content ${closingItems.includes(section.name) ? 'collapsing' : ''}`}>
                      {section.isCustom ? (
                        section.customContent()
                      ) : section.isList ? (
                        <div className="content-lines">
                          {section.explanation && (
                            <p className="section-explanation">{section.explanation}</p>
                          )}
                          <ul className="project-list">
                            {section.items.map((item, index, arr) => {
                              const isClosing = closingItems.includes(section.name);
                              const openDelay = 0.1 + index * 0.08;
                              return (
                                <li 
                                  key={index} 
                                  className={isClosing ? "content-line-no-anim" : "content-line"}
                                  style={{ animationDelay: isClosing ? '0s' : `${openDelay}s` }}
                                >
                                  {item}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ) : (
                        <div className="content-lines">
                          {section.content.split('. ').map((sentence, index, arr) => {
                            const isClosing = closingItems.includes(section.name);
                            const openDelay = 0.1 + index * 0.08;
                            return (
                              <span 
                                key={index} 
                                className={isClosing ? "content-line-no-anim" : "content-line"}
                                style={{ animationDelay: isClosing ? '0s' : `${openDelay}s` }}
                              >{sentence}{index < arr.length - 1 ? '. ' : ''}</span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
