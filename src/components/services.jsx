import React from "react";
export const Services = (props) => {
  const renderFormattedText = (text) => {
    // Split by line breaks to maintain pre-wrap formatting
    const lines = text.split('\n\n');
    
    return lines.map((line, index) => {
      // Replace **text** with styled spans
      const formattedLine = line.replace(
        /\*\*(.*?)\*\*/g, 
        '<span style="font-weight: bold">$1</span>'
      );
      
      return (
        <React.Fragment key={index}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          {index < lines.length - 1 && <><br /><br /></>}
        </React.Fragment>
      );
    });
  };
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "Our Services"}</h2>
          <p>
            {props.data ? props.data.subtitle : "Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."}
          </p>
        </div>
        <div className="row">
          {props.data && props.data.items
            ? props.data.items.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{renderFormattedText(d.text)}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};