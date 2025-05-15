import React, { useState, useEffect } from 'react';
import './CookieConsent.css'
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent-content">
        <p>
          Acest site utilizează cookie-uri pentru a vă oferi cea mai bună experiență de navigare. 
          Prin continuarea utilizării site-ului nostru, sunteți de acord cu utilizarea cookie-urilor noastre. 
          Puteți afla mai multe despre politica noastră privind cookie-urile <a href="/policy">aici</a>.
        </p>
        <button className="cookie-consent-button" onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;