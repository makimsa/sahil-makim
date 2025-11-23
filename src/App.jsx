import { useState, useEffect } from 'react';
import PillNav from './components/PillNav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ParticlesBackground from './components/ParticlesBackground';
import LoadingScreen from './components/LoadingScreen';
import logo from '/logo.svg';
import './App.css';

// Sample project data - replace with real data later
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Full-stack web application",
    role: "Full Stack Developer",
    timeline: "3 months",
    technologies: "React, Node.js, MongoDB, Stripe",
    overview: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of daily transactions and provides seamless shopping experience across devices.",
    challenge: "The main challenge was implementing a robust inventory management system that could handle concurrent transactions while maintaining data consistency. We also needed to ensure the payment flow was secure and compliant with industry standards.",
    solution: "Implemented optimistic locking for inventory management and integrated Stripe for secure payment processing. Used Redis for caching frequently accessed product data and implemented comprehensive error handling throughout the application.",
    results: "Successfully launched with 10,000+ active users in the first month. Achieved 99.9% uptime and processed over $500K in transactions. The admin dashboard reduced inventory management time by 70%.",
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    subtitle: "Analytics and management tool",
    role: "Frontend Lead",
    timeline: "2 months",
    technologies: "React, TypeScript, Chart.js, TailwindCSS",
    overview: "An analytics dashboard that aggregates data from multiple social media platforms, providing unified insights and scheduling capabilities. Features interactive charts, real-time updates, and customizable reporting.",
    challenge: "Handling large datasets efficiently while maintaining smooth UI interactions. The dashboard needed to process and visualize millions of data points without performance degradation.",
    solution: "Implemented virtual scrolling for large lists, used web workers for heavy computations, and optimized chart rendering with canvas-based solutions. Applied aggressive caching strategies and lazy loading for optimal performance.",
    results: "Reduced data loading time by 80% and improved overall performance metrics. Currently serves 5,000+ marketing professionals managing over 50,000 social media accounts.",
    link: "https://example.com"
  },
  {
    id: 3,
    title: "AI Content Generator",
    subtitle: "Machine learning powered tool",
    role: "Full Stack Developer",
    timeline: "4 months",
    technologies: "Python, FastAPI, OpenAI API, React, PostgreSQL",
    overview: "An AI-powered content generation platform that helps marketers create engaging copy, blog posts, and social media content. Features include tone customization, multi-language support, and SEO optimization suggestions.",
    challenge: "Balancing API costs with user experience while ensuring generated content was both creative and relevant. Needed to implement effective rate limiting and caching strategies.",
    solution: "Built a sophisticated caching layer to reduce API calls by 60%. Implemented smart prompt engineering and fine-tuned parameters for better output quality. Created a feedback loop for continuous improvement.",
    results: "Generated over 1 million pieces of content for 2,000+ users. Achieved 95% user satisfaction rate and reduced content creation time by an average of 75%.",
    link: "https://example.com"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [displayPage, setDisplayPage] = useState('Home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentPage !== displayPage) {
      // Instant page switch, no sliding animation
      setDisplayPage(currentPage);
    }
  }, [currentPage, displayPage]);

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const items = [
    { 
      label: 'Home', 
      onClick: () => handlePageChange('Home') 
    },
    { 
      label: 'Portfolio', 
      onClick: () => handlePageChange('Portfolio') 
    },
    { 
      label: 'About', 
      onClick: () => handlePageChange('About') 
    },
  ];

  const renderPage = () => {
    switch (displayPage) {
      case 'Home':
        return <Home key="home" />;
      case 'Portfolio':
        return <Portfolio key="portfolio" />;
      case 'About':
        return <About key="about" />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <ParticlesBackground />
          <div className="app">
            <PillNav
              logo={logo}
              logoAlt="SM Logo"
              items={items}
              activeHref={currentPage}
              baseColor="transparent"
              pillColor="rgba(109, 134, 242, 0.7)"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#ffffff"
              initialLoadAnimation={false}
            />
            <div className="page-transition">
              {renderPage()}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
