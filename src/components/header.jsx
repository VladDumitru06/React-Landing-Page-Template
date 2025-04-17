import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const fullText = props.data ? props.data.paragraph : "Loading";
  
  useEffect(() => {
    if (!props.data) return;
    
    // Split the text into words
    const wordArray = fullText.split(" ");
    setWords(wordArray);
    setCurrentWordIndex(0);
    
    // Reset the animation
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prevIndex => {
        if (prevIndex < wordArray.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(wordInterval);
          return prevIndex;
        }
      });
    }, 300); // Adjust speed of word appearance here
    
    return () => clearInterval(wordInterval);
  }, [props.data, fullText]);
  
  return (
    <>
      <style>
        {`
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
            transform: translateX(100vw); /* Start from right edge of screen */
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
          
          /* Create placeholder space for words */
          .word-space {
            visibility: hidden;
            display: inline-block;
          }
        `}
      </style>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-0 intro-text">
                  <p style={{color:"#ed502e", height:'100px', fontWeight:'600', fontSize:'3rem', overflow: 'visible', position: 'relative', top:'-150px'}}>
                    <span className="words-wrapper">
                      {words.map((word, index) => (
                        <span key={index} className="word-container">
                          {/* Hidden text to maintain spacing */}
                          <span className="word-space">{word}</span>
                          
                          {/* Animated word */}
                          {index <= currentWordIndex && (
                            <span 
                              className="sliding-word" 
                              style={{
                                animationDelay: `${index * 0.1}s`
                              }}
                            >
                              {word}
                            </span>
                          )}
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