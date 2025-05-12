import React, { useState, useEffect } from "react";
import AnimatedBackground from './animatedBackground'; // Make sure this path is correct

export const Header = (props) => {
  const [words, setWords] = useState([]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const fullText = props.data ? props.data.paragraph : "Loading";
  
  useEffect(() => {
    if (!props.data) return;
    
    // Split text into words
    const wordArray = fullText.split(" ");
    setWords(wordArray);
    setCurrentLetterIndex(0);
    
    // Calculate total letters for animation
    let totalChars = 0;
    wordArray.forEach(word => {
      totalChars += word.length;
    });
    
    let revealedCount = 0;
    const letterInterval = setInterval(() => {
      revealedCount++;
      if (revealedCount <= totalChars) {
        setCurrentLetterIndex(revealedCount);
      } else {
        clearInterval(letterInterval);
      }
    }, 35); // Fast interval for characters
    
    return () => clearInterval(letterInterval);
  }, [props.data, fullText]);
  
  // Process words and letters for display
  const renderWords = () => {
    let lettersSoFar = 0;
    const result = [];
    
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
      const word = words[wordIndex];
      const wordLetters = [];
      
      // Create letter elements for this word
      for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
        const letter = word[letterIndex];
        const absoluteLetterIndex = lettersSoFar + letterIndex;
        const isVisible = absoluteLetterIndex < currentLetterIndex;
        
        wordLetters.push(
          <span
            key={`letter-${wordIndex}-${letterIndex}`}
            className="typing-char"
            style={{
              visibility: isVisible ? 'visible' : 'hidden',
              animationDelay: `${absoluteLetterIndex * 0.015}s`
            }}
          >
            {letter}
          </span>
        );
      }
      
      // Add this word to the result
      result.push(
        <span 
          key={`word-${wordIndex}`} 
          className="word-container"
        >
          {wordLetters}
        </span>
      );
      
      // Update the letter counter
      lettersSoFar += word.length;
    }
    
    return result;
  };
  
  return (
    <>
      <style>
        {`
          /* Word and character styling */
          .word-container {
            display: inline-block;
            position: relative;
            margin-right: 0.4em; /* Add space between words */
          }
          
          .typing-char {
            display: inline-block;
            opacity: 0;
            animation: fadeIn 0.1s forwards;
          }
          
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          
          .text-wrapper {
            display: block;
            text-align: center;
            position: relative;
            line-height: 1.5;
            max-width: 100%;
            word-break: normal;
            word-wrap: break-word;
          }

          /* Styles for .intro and .overlay layering */
          .intro {
            position: relative;
            display: table; 
            width: 100%;    
            padding: 0;     
          }

          .intro .overlay {
            position: relative; 
            z-index: 2;
            background: rgba(0, 0, 0, 0.0);
          }
          
          .intro .intro-text {
             position: relative; 
             z-index: 3;
             padding-top: 350px;
             padding-bottom: 50px;
             text-align: center;
             width: 100%;
          }
          
          /* Responsive styles */
          @media (max-width: 992px) {
            #header-text {
              font-size: 2.5rem !important;
              max-width: 85vw !important;
            }
            .intro .intro-text {
              padding-top: 300px;
            }
          }
          
          @media (max-width: 768px) {
            #header-text {
              font-size: 2rem !important;
              max-width: 85vw !important;
            }
            .intro .intro-text {
              padding-top: 250px;
            }
            .word-container {
              margin-right: 0.35em; /* Slightly smaller space on smaller screens */
            }
          }
          
          @media (max-width: 576px) {
            #header-text {
              font-size: 1.5rem !important;
              max-width: 90vw !important;
            }
            .intro .intro-text {
              padding-top: 200px;
            }
            .word-container {
              margin-right: 0.3em; /* Smaller space on mobile */
            }
          }
          
          @media (max-width: 480px) {
            #header-text {
              font-size: 1.2rem !important;
              max-width: 95vw !important;
            }
            .word-container {
              margin-right: 0.25em; /* Even smaller space on tiny screens */
            }
          }
        `}
      </style>
      <header id="header">
        <div className="intro">
          <AnimatedBackground />
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12 intro-text">
                  <p 
                    id="header-text"
                    style={{
                      color: "#ed502e", 
                      fontWeight: '600', 
                      fontSize: '3rem',
                      textAlign: 'center',
                      position: 'relative',
                      width: '100%',
                      maxWidth: '90vw',
                      margin: '0 auto'
                    }}
                  >
                    <span className="text-wrapper">
                      {renderWords()}
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

// export default Header;