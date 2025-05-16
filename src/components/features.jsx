import React, { useState, useEffect, useRef } from "react";

export const Features = (props) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  
  // Set up intersection observer and animation
  useEffect(() => {
    if (!props.data || !sectionRef.current) return;
    
    // Initialize refs array
    numberRefs.current = Array(props.data.items.length).fill().map(() => React.createRef());
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animations when section becomes visible
          animateNumbers();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, [props.data]);
  
  // Parse title to extract number, suffix, and remaining text
  const parseTitle = (title) => {
    // Special case for "30 milioane +" tranzactii - convert to "30M +"
    if (title.includes('30 milioane +')) {
      return {
        number: 30,
        suffix: 'M +',
        text: 'tranzactii'
      };
    }
    
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
    
    // Special case for "600K+" beneficiari
    if (title.includes('600K')) {
      return {
        number: 600,
        suffix: 'K+',
        text: 'beneficiari'
      };
    }
    
    // Handle regular cases (with +, M, or K)
    const match = title.match(/^(\d+)\s*(K\+?|M\+?|\+)?(?:\s+(.*))?$/);
    if (match) {
      return {
        number: parseInt(match[1]),
        suffix: match[2] || '',
        text: match[3] || ''
      };
    }
    
    // Fallback for titles without numbers
    return { number: 0, suffix: '', text: title };
  };
  
  // Enhanced animation function with better easing and bounce effect
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
        const duration = 2500; // 2.5 seconds for animation
        const startTime = performance.now();
        let previousValue = 0;
        
        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Improved easing function for more dynamic animation
          // This creates a "spring" effect that overshoots slightly and settles
          const easedProgress = progress === 1 
            ? 1 
            : (progress < 0.6) 
              ? 4 * progress * progress * progress
              : 1 + Math.pow(2 * progress - 2, 3) / 2;
          
          // Calculate current value with potential overshoot
          let currentValue = Math.round(easedProgress * number);
          
          // Ensure we never exceed target value by more than 10%
          if (currentValue > number * 1.1) {
            currentValue = Math.round(number * 1.1);
          }
          
          // Update state with current value
          setAnimatedValues(prev => ({
            ...prev,
            [index]: { value: currentValue, suffix, text }
          }));
          
          // Add bounce animation when the value changes significantly
          if (numberRefs.current[index]?.current && Math.abs(currentValue - previousValue) > number * 0.05) {
            numberRefs.current[index].current.classList.remove('animate');
            void numberRefs.current[index].current.offsetWidth; // Force reflow
            numberRefs.current[index].current.classList.add('animate');
            previousValue = currentValue;
          }
          
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
    let formattedValue = `${value}`;
    
    // Add suffix based on its type
    if (suffix) {
      formattedValue += suffix; // Just add the suffix as is (including any spaces)
    }
    
    return formattedValue;
  };

  return (
    <div id="features" className="features-section text-center" ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "Rezultate care contează"}</h2>

        </div>
        
        <div className="stats-row">
          {props.data && props.data.items
            ? props.data.items.map((d, i) => (
                <div key={`${d.title}-${i}`} className="stat-item-minimal">
                  <div className="stat-number-wrapper">
                    <span 
                      className="stat-number-minimal" 
                      ref={el => numberRefs.current[i] = el}
                    >
                      {getFormattedTitle(i)}
                    </span>
                  </div>
                  <div className="stat-text-minimal">
                    {animatedValues[i]?.text}
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};