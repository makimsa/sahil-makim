import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotatingText } from './RotatingText';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after background loads
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 400);

    // Exit after showing all 3 words once
    // 400ms (background) + 500ms (fade in) + 1000ms (Hello) + 1000ms (Bonjour) + 1000ms (Namaste) + 300ms (buffer)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 4200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="loading-content">
            {showText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <RotatingText
                  text={["hello", "bonjour", "નમસ્તે", "hola"]}
                  duration={1000}
                  className="rotating-greeting"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
