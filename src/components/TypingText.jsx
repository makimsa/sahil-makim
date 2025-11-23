import { useEffect, useRef, useState, useCallback } from 'react';

const TypingText = ({
  text,
  as = 'span',
  typingSpeed = 50,
  initialDelay = 0,
  className = '',
  showCursor = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  variableSpeed,
  onComplete,
  startOnVisible = false,
  ...props
}) => {
  const Component = as;
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [showCursorState, setShowCursorState] = useState(showCursor);
  const containerRef = useRef(null);
  const cursorIntervalRef = useRef(null);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor) {
      cursorIntervalRef.current = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, cursorBlinkDuration * 1000);
      
      return () => {
        if (cursorIntervalRef.current) {
          clearInterval(cursorIntervalRef.current);
        }
      };
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;
    
    let timeout;
    
    if (currentCharIndex === 0 && displayedText === '') {
      timeout = setTimeout(() => {
        if (currentCharIndex < text.length) {
          setDisplayedText(text[currentCharIndex]);
          setCurrentCharIndex(1);
        }
      }, initialDelay);
    } else if (currentCharIndex < text.length) {
      timeout = setTimeout(
        () => {
          setDisplayedText(prev => prev + text[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        },
        variableSpeed ? getRandomSpeed() : typingSpeed
      );
    } else if (currentCharIndex === text.length && onComplete) {
      onComplete();
    }
    
    return () => clearTimeout(timeout);
  }, [currentCharIndex, displayedText, isVisible, text, typingSpeed, initialDelay, variableSpeed, getRandomSpeed, onComplete]);

  return (
    <Component ref={containerRef} className={className} {...props}>
      {displayedText}
      {showCursor && (
        <span
          className={`inline-block ml-0.5 w-[2px] h-[1em] bg-current ${showCursorState ? 'opacity-100' : 'opacity-0'} ${cursorClassName}`}
        >
          {cursorCharacter === '|' ? '' : cursorCharacter}
        </span>
      )}
    </Component>
  );
};

export default TypingText;
