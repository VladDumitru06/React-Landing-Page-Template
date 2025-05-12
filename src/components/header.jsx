import React, { useState, useEffect } from "react";
import AnimatedBackground from './animatedBackground'; // Ensure this path is correct

export const Header = (props) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const fullText = props.data ? props.data.paragraph : "Loading";
  
  useEffect(() => {
    if (!props.data) return;
    
    const wordArray = fullText.split(" ");
    setWords(wordArray);
    setCurrentWordIndex(0); 
    
    let revealedCount = 0;
    const wordInterval = setInterval(() => {
      revealedCount++;
      if (revealedCount <= wordArray.length) {
        setCurrentWordIndex(revealedCount);
      } else {
        clearInterval(wordInterval);
      }
    }, 300); 
    
    return () => clearInterval(wordInterval);
  }, [props.data, fullText]); 
  
  return (
    <>
      <style>
        {`
          /* Existing word animation styles */
          .word-container {
            display: inline-block;
            margin-right: 12px;
            vertical-align: top;
            overflow: visible;
            position: relative;
            min-width: 10px;
          }
          
          .sliding-word {
            display: inline-block;
            position: absolute;
            white-space: nowrap;
            left: 0;
            transform: translateX(100vw); 
            opacity: 0;
            animation: slideInFromScreen 0.7s forwards;
          }
          
          @keyframes slideInFromScreen {
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .words-wrapper {
            display: block;
            height: 100px;
            line-height: 1.2;
            position: relative;
            overflow: visible;
          }
          
          .word-space {
            visibility: hidden;
            display: inline-block;
          }

          /* Styles for .intro and .overlay layering */
          .intro {
            position: relative; /* For positioning AnimatedBackground */
            /* The background image for .intro should be set in your global CSS file */
            /* e.g., background: url(../img/intro-bg.jpg) center center no-repeat; */
            display: table; 
            width: 100%;    
            padding: 0;     
          }

          .intro .overlay {
            position: relative; 
            z-index: 2; /* Above AnimatedBackground's container, potentially same level as its icons */
            background: rgba(0, 0, 0, 0.0); /* Ensure it's transparent or semi-transparent */
          }
          
          .intro .intro-text {
             position: relative; 
             z-index: 3; /* On top of the overlay and animation */
             padding-top: 350px; /* As per your original CSS */
             padding-bottom: 50px; /* As per your original CSS */
             text-align: center; /* As per your original CSS */
          }
        `}
      </style>
      <header id="header">
        <div className="intro"> {/* This div gets its background from global CSS */}
          <AnimatedBackground /> {/* The animated overlay component */}
          <div className="overlay"> {/* Your existing overlay */}
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-0 intro-text">
                  <p style={{color:"#ed502e", height:'100px', fontWeight:'600', fontSize:'3rem', overflow: 'visible', position: 'relative', top:'-150px'}}>
                    <span className="words-wrapper">
                      {words.slice(0, currentWordIndex).map((word, index) => (
                        <span key={index} className="word-container">
                          <span className="word-space">{word}</span>
                          <span 
                            className="sliding-word" 
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {word}
                          </span>
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// export default Header; // If Header is in its own file
