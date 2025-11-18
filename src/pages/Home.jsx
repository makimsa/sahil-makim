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
      }, 1000); // Increased to allow lines to slide out first
    } else {
      // Open the item
      setExpandedItems([...expandedItems, itemName]);
    }
  };

  const sections = [
    {
      name: 'STORY',
      content: `I've always been fascinated by how things work. From taking apart old electronics as a kid to building my first circuit board in high school, engineering has been my passion. At Georgia Tech, I'm diving deep into computer engineering, learning everything from low-level hardware design to high-level software architecture. Every day brings new challenges and opportunities to grow.`
    },
    {
      name: 'PROJECTS',
      content: `My projects range from embedded systems programming to full-stack web applications. I love working on hardware projects that bridge the physical and digital worlds. Some highlights include a custom IoT sensor network, a robot that can navigate autonomously, and various web applications that solve real problems. Each project teaches me something new about design, implementation, and debugging.`
    },
    {
      name: 'TECHNICAL SKILLS',
      content: `I'm proficient in C/C++, Python, JavaScript, and VHDL. My hardware experience includes working with microcontrollers (Arduino, STM32, ESP32), FPGAs, and PCB design. On the software side, I work with React, Node.js, and various embedded Linux systems. Currently, I'm exploring machine learning on edge devices and advanced digital signal processing techniques.`
    },
    {
      name: 'RESUME',
      content: `Currently pursuing my degree in Computer Engineering at Georgia Tech. I've completed internships focusing on embedded systems and firmware development. My coursework includes digital design, computer architecture, signals and systems, and software engineering. I'm also involved in several engineering clubs and competitive robotics teams on campus.`
    },
    {
      name: 'BLOG / NOTES',
      content: `I maintain a blog where I share my learning journey, project updates, and technical deep-dives. Topics range from debugging tricky hardware issues to optimizing algorithms for embedded systems. I believe in learning in public and sharing knowledge with the community. Check back regularly for new posts about my latest experiments and discoveries.`
    }
  ];

  return (
    <div className="page">
      <div className="content">
        <div className="hero">
          <h1>Hi, I'm Sahil Makim</h1>
          <p className="subtitle">Computer Engineering • Georgia Tech</p>
          <p className="subtitle">I built this site as a snapshot of who I am and what I create.</p>
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
                      <div className="content-lines">
                        {section.content.split('. ').map((sentence, index, arr) => {
                          const isClosing = closingItems.includes(section.name);
                          const openDelay = 0.3 + index * 0.15;
                          const closeDelay = (arr.length - 1 - index) * 0.1;
                          return (
                            <span 
                              key={index} 
                              className="content-line" 
                              style={{ animationDelay: isClosing ? `${closeDelay}s` : `${openDelay}s` }}
                            >{sentence}{index < arr.length - 1 ? '. ' : ''}</span>
                          );
                        })}
                      </div>
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
