import { useState, useRef, useEffect } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Nintendo DSi Homebrew Application',
      role: 'Lead Developer',
      period: 'Fall 2025',
      type: 'Undergraduate Research',
      description: 'Developed a homebrew Nintendo DSi game as part of undergraduate research. Team-based project.',
      tags: ['DevkitPro SDK', 'C/C++', 'Hardware Integration'],
      highlights: [
        'Directed a 4-member team to produce a functional Pong game with music, adjustable speeds, and full DS hardware integration.',
        'Engineered touchscreen, button, and wireless I/O using DevkitPro SDK and DS-specific libraries.',
        'Orchestrated architecture design, low-level debugging, and performance validation to ensure reliable operation.'
      ]
    },
    {
      id: 2,
      title: 'Embedded System Info Center',
      role: 'Developer',
      period: 'Summer 2025',
      type: 'Personal Project',
      description: 'Built a modular embedded monitoring system to collect and display environmental sensor data. Individual project.',
      tags: ['Arduino', 'C/C++', 'Sensors', 'LCD'],
      highlights: [
        'Programmed Arduino Uno (C/C++) to interface with 25 sensors/modules, streamlining data collection and responsiveness.',
        'Devised a dynamic LCD interface that visualized real-time temperature and light changes.',
        'Assembled and wired all components, assigning I/O pins and synchronizing sensor outputs for accurate display results.'
      ],
      details: 'Used the ELEGOO Starter Kit to design and build a multifunctional information hub with various peripheral devices controlled through the Arduino IDE. The system integrates several components, including a clock, a temperature and humidity sensor, and an LCD screen that displays information. Utilized a photoresistor along with a potentiometer to turn on RGB LEDs when in dim settings.'
    },
    {
      id: 3,
      title: 'MBED Wordle Game Design',
      role: 'Developer',
      period: 'Fall 2024',
      type: 'Programming for Hardware/Software Systems',
      description: 'Replicated the Wordle gameplay experience on limited Mbed microcontroller hardware. Individual project.',
      tags: ['C', 'MBED', 'Embedded Systems', 'uLCD'],
      highlights: [
        'Assigned user interaction through pushbuttons and navigation switches using Mbed OS for responsive input control.',
        'Expanded the original game by integrating animations, difficulty modes, and scoring systems to boost replay value.',
        'Optimized timing and memory performance to maintain smooth gameplay within constrained hardware limits.'
      ],
      details: 'Utilized the C programming language and an MBED microcontroller to create a mock version of Wordle with additional features. The game allowed players to guess words from a pre-defined word bank using a navigation switch, with the results displayed on a uLCD screen. Key features included a timer, high-score functionality, and a custom word selection option. The project focused on embedded software development, addressing challenges such as coordinating input and output functions and working within the constraints of a smaller system. A primary objective was to ensure a user-friendly UI/UX design, optimizing the interaction between the player and the device.'
    },
    {
      id: 4,
      title: 'Servo Motor Peripheral Design for FPGA',
      role: 'Team Member',
      period: 'Spring 2025',
      type: 'Digital Design Laboratory',
      description: 'Developed a servo motor control peripheral on FPGA hardware integrating Verilog and ARM assembly. Team-based project.',
      tags: ['VHDL', 'ARM Assembly', 'FPGA', 'PWM'],
      highlights: [
        'Constructed PWM-based servo control achieving ±2° precision for positional control and variable-speed operation.',
        'Integrated separate ARM control code to interface with FPGA hardware through peripheral communication.',
        'Verified proper signal propagation using oscilloscopes and logic analyzers to ensure precise signal timing.'
      ],
      details: 'Designed and programmed a servo motor control system using custom VHDL modules and ARM assembly. The primary objective was to create a hardware-software interface that allowed real-time control of four servo motors via onboard inputs from the DE10 board. Used Quartus Prime to design the FPGA architecture, enabling the generation of pulse-width modulation (PWM) signals for precise 180° movement of each servo motor. These PWM signals were tested using oscilloscopes to ensure that the pulse modulation was working correctly and accurately controlling the motors. Wrote ARM assembly routines to map the physical switch inputs from the DE10 board to motor control logic. Implemented an autonomous sweeping mode, where the servo motors could perform sweeping motions at different speeds. Additionally, implemented precise rotation control, allowing the user to adjust the angle of each individual motor or synchronize all motors for simultaneous movement.'
    },
    {
      id: 5,
      title: 'Laboratory Research Intern: III-Nitride MEMS Resonator Epitaxy',
      role: 'Research Intern',
      period: 'Spring 2025',
      type: 'Institute Lafayette',
      description: 'Conducted research on mechanical force analysis and epitaxy processes for MEMS fabrication.',
      tags: ['ImageJ', 'Excel', 'MEMS', 'Materials Science'],
      highlights: [
        'Conducted mechanical force analysis on AlGaN films during pick-and-place epitaxy onto Silicon wafers, processing 65+ images with ImageJ to optimize transfer forces (11–15 N) for substrate yield.',
        'Produced quantitative analyses of area transfer and crack propagation using Excel, deriving practical guidelines for flexible substrate MEMS fabrication.'
      ]
    },
    {
      id: 6,
      title: 'MIPS Image Icon Comparison',
      role: 'Developer',
      period: '',
      type: 'Assembly Coding for Maximum Efficiency',
      description: 'Optimized icon comparison algorithm through assembly language programming.',
      tags: ['MIPS Assembly', 'C', 'Performance Optimization'],
      highlights: [
        'Developed comparison algorithm in C and converted to assembly for concurrent pixel comparisons.',
        'Refactored inner loop logic, achieving a 260% reduction in dynamic instruction count.',
        'Successfully met requirements for dynamic instructions, static instructions, and register usage while significantly improving runtime performance.'
      ],
      details: 'This project focused on optimizing the process of comparing eight 144-pixel icons to identify the matching icon in the least amount of time. Initially developed the comparison algorithm in C and explored ways to improve its efficiency. Then converted the code into assembly, enabling concurrent pixel comparisons of multiple images and optimizing loop processes. Through these efforts, successfully refactored the inner loop logic, achieving a 260% reduction in dynamic instruction count. As a result, the program ran under the required limits for dynamic instructions, static instructions, and register usage, significantly improving runtime performance.'
    }
  ];

  const handleBoxClick = (id) => {
    setClickedItem(id);
    setIsTransitioning(true);
    setTimeout(() => {
      setExpandedItem(id);
      setClickedItem(null);
      setIsTransitioning(false);
    }, 400);
  };

  const handleBackClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setExpandedItem(null);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="page">
      <div className="content">
        {!expandedItem ? (
          <div className={`portfolio-grid-view ${isTransitioning ? 'fade-out' : ''}`}>
            <div className="portfolio-header">
              <h1 className="portfolio-title">Portfolio</h1>
              <p className="portfolio-subtitle">Check out my latest projects and work.</p>
            </div>
            
            <div className="portfolio-grid">
              {portfolioItems.map(item => (
                <div 
                  key={item.id} 
                  className={`portfolio-item ${clickedItem === item.id ? 'clicked' : ''}`}
                  onClick={() => handleBoxClick(item.id)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`project-detail-view ${isTransitioning ? 'fade-out' : ''}`}>
            <button className="back-button" onClick={handleBackClick}>
              ← Back to Portfolio
            </button>
            {(() => {
              const project = portfolioItems.find(item => item.id === expandedItem);
              return (
                <>
                  <div className="project-header">
                    <h1>{project?.title}</h1>
                    <div className="project-meta">
                      <span className="project-role">{project?.role}</span>
                      {project?.period && <span className="project-period">{project?.period}</span>}
                      <span className="project-type">{project?.type}</span>
                    </div>
                  </div>
                  
                  <p className="project-description">{project?.description}</p>
                  
                  <div className="tags">
                    {project?.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-content">
                    <h3>Key Highlights</h3>
                    <ul className="highlights-list">
                      {project?.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    
                    {project?.details && (
                      <>
                        <h3>Project Details</h3>
                        <p>{project.details}</p>
                      </>
                    )}

                    {/* Project media (images / videos) - Info Center specific media */}
                    {project?.id === 2 && (
                      <div className="project-media">
                        <img src="/sahil-makim/InfoCenter/InfoCenter1.HEIC" alt="InfoCenter 1" />
                        <img src="/sahil-makim/InfoCenter/InfoCenter2.HEIC" alt="InfoCenter 2" />
                        <img src="/sahil-makim/InfoCenter/InfoCenter3.HEIC" alt="InfoCenter 3" />
                        <video controls>
                          <source src="/sahil-makim/InfoCenter/InfoCenterDemo.MOV" type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}

                    <div className="other-projects">
                      <h3>View Other Projects</h3>
                      <div className="project-links">
                        {portfolioItems.filter(item => item.id !== expandedItem).map(item => (
                          <button
                            key={item.id}
                            className="project-link"
                            onClick={() => handleBoxClick(item.id)}
                          >
                            {item.title} →
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
