import React, { useState, useEffect } from "react";

export const Gallery = (props) => {
  // State to track screen width for responsive layout
  const [isMobile, setIsMobile] = useState(false);
  
  // Set up event listener to track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Format the text with orange highlighting for specific text
  const renderFormattedText = (text) => {
    if (!text) return null;
    
    // Check if text should have orange highlighting
    // if (text === "Implementare și gestionare Data Lakes") {
    //   return (
    //     <>
    //       Implementare și gestionare <span style={{ color: "#E56C3E" }}>Data Lakes</span>
    //     </>
    //   );
    // } else if (text === "Sisteme de avertizare timpurie") {
    //   return (
    //     <>
    //       <span style={{ color: "#E56C3E" }}>Sisteme de avertizare timpurie</span>
    //     </>
    //   );
    // }
    
    return text;
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "Inovație și tehnologie digitală"}</h2>
          <p>
            {props.data ? props.data.subtitle : "De la proiectare și integrare tehnologică, până la transformare digitală și optimizarea proceselor, susținem dezvoltarea sustenabilă:"}
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          margin: '0 -10px',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          {props.data && props.data.items
            ? props.data.items.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  style={{
                    flex: isMobile ? '1 1 100%' : '1 1 20%',
                    maxWidth: isMobile ? '100%' : '20%',
                    padding: '0 10px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: isMobile ? 'row' : 'column',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}
                >
                  {/* Icon Circle */}
                  <div style={{
                    width: isMobile ? '70px' : '100px',
                    height: isMobile ? '70px' : '100px',
                    backgroundColor: '#E56C3E',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: isMobile ? '0' : '20px',
                    marginRight: isMobile ? '15px' : '0',
                    flexShrink: 0
                  }}>
                    <i className={d.icon} style={{ 
                      color: '#fff', 
                      fontSize: isMobile ? '24px' : '36px' 
                    }}></i>
                  </div>
                  
                  {/* Content container for mobile */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: isMobile ? 'flex-start' : 'center'
                  }}>
                    {/* Category Title */}
                    <h3 style={{ 
                      textAlign: isMobile ? 'left' : 'center',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      marginTop: '0'
                    }}>
                      {d.name}
                    </h3>
                    
                    {/* Service Items - Container */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      alignItems: 'flex-start',
                      paddingLeft: isMobile ? '0' : '20%',
                    }}>
                      {d.services && d.services.map((service, j) => (
                        <div 
                          key={`service-${i}-${j}`}
                          style={{
                            textAlign: 'left',
                            margin: '6px 0',
                            fontSize: '14px',
                            color: '#666',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            width: '100%'
                          }}
                        >
                          {/* Circle Bullet */}
                          <div style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: '#666',
                            marginRight: '8px',
                            flexShrink: 0
                          }}></div>
                          {/* Text */}
                          <div>
                            {renderFormattedText(service)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </div>
  );
};