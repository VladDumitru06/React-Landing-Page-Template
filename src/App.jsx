import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import Contact from "./components/contact/contact";
import Footer from './components/footer/footer';
import PrivacyPolicyComponent from './components/PrivacyPolicyComponent';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Navigation from "./components/Header/Navigation";
import CookieConsent from "./components/CookieConsent";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [showPolicy, setShowPolicy] = useState(false);
  
  useEffect(() => {
    setLandingPageData(JsonData);
    
    // Check if URL includes /policy
    if (window.location.pathname.includes('/policy')) {
      setShowPolicy(true);
    }
    
    // Listen for URL changes
    const handleLocationChange = () => {
      setShowPolicy(window.location.pathname.includes('/policy'));
    };
    
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);
  
  if (showPolicy) {
    return (
      <div>
        <Navigation />
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <PrivacyPolicyComponent />
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <Footer />
      <CookieConsent/>
    </div>
  );
};

export default App;