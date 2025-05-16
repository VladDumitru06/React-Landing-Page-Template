import React, { useState, useEffect } from "react";

// Client Logos imports
import AEM_Timisoara from '../assets/img/clientsLogos/AEM_Timișoara-removebg-preview.png';
import ANPM from '../assets/img/clientsLogos/ANPM.png';
import ANRE from '../assets/img/clientsLogos/ANRE.png';
import ApaNova from '../assets/img/clientsLogos/Apa Nova.png';
import CNAIR from '../assets/img/clientsLogos/CNAIR.png';
import CNAS from '../assets/img/clientsLogos/CNAS.png';
import ComplexulEnergetic from '../assets/img/clientsLogos/Complexul_Energetic_Oltenia.png';
import DEER from '../assets/img/clientsLogos/DEER.png';
import Delgaz from '../assets/img/clientsLogos/delgaz.png';
import DEO from '../assets/img/clientsLogos/DEO.png';
import EllinikonLamda from '../assets/img/clientsLogos/Ellinikon_Lamda_Logo-removebg-preview.png';
import Engie from '../assets/img/clientsLogos/Engie.png';
import Evryo from '../assets/img/clientsLogos/Evryo-removebg-preview.png';
import Hidroelectrica from '../assets/img/clientsLogos/Hidroelectrica-removebg-preview.png';
import TransGaz from '../assets/img/clientsLogos/Logo_Transgaz.svg.png';
import ElectricaFurnizare from '../assets/img/clientsLogos/logo-Electrica-Furnizare-removebg-preview.png';
import EplusRomania from '../assets/img/clientsLogos/logo-eplus-romania-msc.png';
import MCID from '../assets/img/clientsLogos/MCID.png';
import MinisterulDezvoltarii from '../assets/img/clientsLogos/MINISTERUL_DEZVOLTARII-removebg-preview.png';
import MinisterulSanatatii from '../assets/img/clientsLogos/Ministerul-sanatatii-romania-768x371-0000-removebg-preview.png';
import PEF from '../assets/img/clientsLogos/PEF.png';
import PPCRetele from '../assets/img/clientsLogos/PPC retele.png';
import PPCLogo from '../assets/img/clientsLogos/PPC_logo-removebg-preview.png';
import PPCRenewables from '../assets/img/clientsLogos/ppc-renewables-logo-en-sm.png';
import PremierEnergy from '../assets/img/clientsLogos/Premier Energy.png';
import RegistrulNational from '../assets/img/clientsLogos/Registrul National de Transplant.png';
import StemaPrimarie from '../assets/img/clientsLogos/stema_primarie-removebg-preview.png';
import Transelectrica from '../assets/img/clientsLogos/Transelectrica-removebg-preview.png';
// Import the CSS file
import './ClientCarousel.css';

export const Testimonials = (props) => {
  // Array of all client logos with their names
  const clientLogos = [
    { name: 'AEM Timisoara', img: AEM_Timisoara },
    { name: 'ANPM', img: ANPM },
    { name: 'ANRE', img: ANRE },
    { name: 'Apa Nova', img: ApaNova },
    { name: 'CNAIR', img: CNAIR },
    { name: 'CNAS', img: CNAS },
    { name: 'Complexul Energetic Oltenia', img: ComplexulEnergetic },
    { name: 'DEER', img: DEER },
    { name: 'Delgaz', img: Delgaz },
    { name: 'DEO', img: DEO },
    { name: 'Ellinikon Lamda', img: EllinikonLamda },
    { name: 'Engie', img: Engie },
    { name: 'Evryo', img: Evryo },
    { name: 'Hidroelectrica', img: Hidroelectrica },
    { name: 'Transgaz', img: TransGaz },
    { name: 'Electrica Furnizare', img: ElectricaFurnizare },
    { name: 'E-Plus Romania', img: EplusRomania },
    { name: 'MCID', img: MCID },
    { name: 'Ministerul Dezvoltarii', img: MinisterulDezvoltarii },
    { name: 'Ministerul Sanatatii', img: MinisterulSanatatii },
    { name: 'PEF', img: PEF },
    { name: 'PPC Retele', img: PPCRetele },
    { name: 'PPC', img: PPCLogo },
    { name: 'PPC Renewables', img: PPCRenewables },
    { name: 'Premier Energy', img: PremierEnergy },
    { name: 'Registrul National de Transplant', img: RegistrulNational },
    { name: 'Primaria Brasov', img: StemaPrimarie },
    { name: 'Transelectrica', img: Transelectrica }
  ];

  // State for current slide position
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of logos to show at once (will be adjusted responsively)
  const [itemsToShow, setItemsToShow] = useState(5);

  // Calculate maximum index
  const maxIndex = clientLogos.length - itemsToShow;

  // Number of pagination dots to show
  const dotsCount = maxIndex + 1;

  // Auto-scroll functionality
  useEffect(() => {
    // Check screen width for responsive display
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 992) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Auto scroll every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move forward by one slot
        const nextIndex = prevIndex + 1;
        // If we reach the end, wrap around to the beginning
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [clientLogos.length, itemsToShow, maxIndex]);

  // Manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? maxIndex : nextIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{props.data ? props.data.title : "Clientii nostrii"}</h2>
          <p>{props.data ? props.data.subtitle : ""}</p>
          <p><strong>{props.data ? props.data.description : ""}</strong></p>
        </div>

        <div className="client-carousel-container">
          {/* Previous button */}
          <div className="carousel-control-button prev">
            <button
              onClick={goToPrevious}
              className="btn btn-default"
              aria-label="Previous"
            >
              <i className="fa fa-chevron-left"></i>
            </button>
          </div>

          {/* Carousel container */}
          <div className="client-carousel-wrapper">
            <div
              className="client-carousel"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="client-logo-item"
                  style={{
                    flex: `0 0 ${100 / itemsToShow}%`,
                    maxWidth: `${100 / itemsToShow}%`
                  }}
                >
                  <div className="client-logo">
                    <img
                      src={client.img}
                      alt={client.name}
                      title={client.name}
                    />
                    <p className="client-name">{client.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <div className="carousel-control-button next">
            <button
              onClick={goToNext}
              className="btn btn-default"
              aria-label="Next"
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="carousel-dots">
          {Array.from({ length: Math.min(7, dotsCount) }).map((_, index) => {
            // Calculate which dot corresponds to which index
            // For example, if we have 24 max positions and 7 dots,
            // each dot represents ~3.4 positions
            const dotsPerPage = dotsCount <= 7 ? 1 : dotsCount / 7;
            const minIndex = Math.floor(index * dotsPerPage);
            const maxIndex = Math.floor((index + 1) * dotsPerPage) - 1;

            // Check if current index falls within the range for this dot
            const isActive = currentIndex >= minIndex && currentIndex <= maxIndex;

            return (
              <button
                key={index}
                className={`carousel-dot ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentIndex(minIndex)}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};