import React from "react";

export const Gallery = (props) => {
  // Format the text with orange highlighting for specific text
  const renderFormattedText = (text) => {
    if (!text) return null;
    
    // Check if text should have orange highlighting
    if (text === "Implementare și gestionare Data Lakes") {
      return (
        <>
          Implementare și gestionare <span style={{ color: "#E56C3E" }}>Data Lakes</span>
        </>
      );
    } else if (text === "Sisteme de avertizare timpurie") {
      return (
        <>
          <span style={{ color: "#E56C3E" }}>Sisteme de avertizare timpurie</span>
        </>
      );
    }
    
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
          margin: '0 -10px' 
        }}>
          {props.data && props.data.items
            ? props.data.items.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  style={{
                    flex: '1 1 20%',
                    maxWidth: '20%',
                    padding: '0 10px',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}
                >
                  {/* Icon Circle */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#E56C3E',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px'
                  }}>
                    <i className={d.icon} style={{ 
                      color: '#fff', 
                      fontSize: '36px' 
                    }}></i>
                  </div>
                  
                  {/* Category Title */}
                  <h3 style={{ 
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    marginTop: '0'
                  }}>
                    {d.name}
                  </h3>
                  
                  {/* Service Items */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    {d.services && d.services.map((service, j) => (
                      <div 
                        key={`service-${i}-${j}`}
                        style={{
                          textAlign: 'center',
                          margin: '6px 0',
                          fontSize: '14px',
                          color: '#666'
                        }}
                      >
                        {renderFormattedText(service)}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </div>
  );
};