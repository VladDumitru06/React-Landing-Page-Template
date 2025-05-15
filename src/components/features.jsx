import React, { useState, useEffect, useRef } from "react";

export const Features = (props) => {
  const [columnWidth, setColumnWidth] = useState('50%');
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);
  
  // Handle responsive layout
  useEffect(() => {
    function updateColumnWidth() {
      if (window.innerWidth >= 992) {
        setColumnWidth('20%'); // 5 per row on desktop
      } else if (window.innerWidth >= 768) {
        setColumnWidth('33.333%'); // 3 per row on tablets
      } else {
        setColumnWidth('50%'); // 2 per row on phones
      }
    }
    
    updateColumnWidth();
    window.addEventListener('resize', updateColumnWidth);
    return () => window.removeEventListener('resize', updateColumnWidth);
  }, []);
  
  // Set up intersection observer and animation
  useEffect(() => {
    if (!props.data || !sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animations when section becomes visible
          animateNumbers();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, [props.data]);
  
  // Parse title to extract number, suffix, and remaining text
  const parseTitle = (title) => {
    // Handle "milioane" case
    if (title.includes('milioane')) {
      const match = title.match(/^(\d+)\s*(milioane\s*\+?)\s*(.*)$/);
      if (match) {
        return {
          number: parseInt(match[1]),
          suffix: match[2],
          text: match[3]
        };
      }
    }
    
    // Handle regular cases (with + or K)
    const match = title.match(/^(\d+)\s*(\+|K)?\s*(.*)$/);
    if (match) {
      return {
        number: parseInt(match[1]),
        suffix: match[2] || '',
        text: match[3]
      };
    }
    
    // Fallback for titles without numbers
    return { number: 0, suffix: '', text: title };
  };
  
  // Simple animation function
  const animateNumbers = () => {
    if (!props.data) return;
    
    props.data.items.forEach((item, index) => {
      const { number, suffix, text } = parseTitle(item.title);
      
      // Start at 0
      setAnimatedValues(prev => ({
        ...prev,
        [index]: { value: 0, suffix, text }
      }));
      
      // Only animate if we have a number to count to
      if (number > 0) {
        const duration = 3000; // 2 seconds
        const startTime = performance.now();
        
        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Easing function for smoother animation
          const easedProgress = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          // Calculate current value
          let currentValue = Math.round(easedProgress * number);
          
          // Update state with current value
          setAnimatedValues(prev => ({
            ...prev,
            [index]: { value: currentValue, suffix, text }
          }));
          
          // Continue animation until done
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Ensure we end with exact target number
            setAnimatedValues(prev => ({
              ...prev,
              [index]: { value: number, suffix, text }
            }));
          }
        };
        
        requestAnimationFrame(animate);
      }
    });
  };
  
  // Format the display title with animated number
  const getFormattedTitle = (index) => {
    if (!props.data || !animatedValues[index]) {
      return props.data?.items[index]?.title || '';
    }
    
    const { value, suffix, text } = animatedValues[index];
    
    // Add proper spacing
    let formattedTitle = `${value}`;
    
    // Add space before K or after a number if there's a suffix
    if (suffix) {
      if (suffix === 'K') {
        formattedTitle += ' K';
      } else if (suffix === '+') {
        formattedTitle += '+';
      } else {
        // For "milioane" and other cases
        formattedTitle += ' ' + suffix;
      }
    }
    
    // Add the rest of the text with proper spacing
    if (text) {
      formattedTitle += ' ' + text;
    }
    
    return formattedTitle;
  };

  return (
    <div id="features" className="text-center" ref={sectionRef}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{props.data ? props.data.title : "Features"}</h2>
        </div>
        <div className="row" style={{ display: 'block' }}>
          {props.data && props.data.items
            ? props.data.items.map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  style={{
                    width: columnWidth,
                    height: 200,
                    float: 'left',
                    padding: '0 15px',
                    marginBottom: '20px'
                  }}
                >
                  <i className={d.icon}></i>
                  <h3>{getFormattedTitle(i)}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </div>
  );
};