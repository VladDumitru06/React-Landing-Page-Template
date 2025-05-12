// AnimatedBackground.js
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const animationContainerRef = useRef(null);
    const wifiIconsRef = useRef([]);
    const activeIconIndexRef = useRef(0);
    const pulseTimeoutRef = useRef(null);
    const lineContainerRef = useRef(null); // Ref for the SVG container for lines

    useEffect(() => {
        const animationContainer = animationContainerRef.current;
        if (!animationContainer) return;

        // Using 6 icons for a larger pyramid formation (1 top, 5 bottom)
        const numIcons = 6;
        const pulseDuration = 1500;
        const pulseInterval = 700;

        // Function to create a single Wi-Fi icon SVG
        function createWifiIconSVG(id) {
            const wrapper = document.createElement('div');
            wrapper.className = 'wifi-icon-wrapper-react';
            wrapper.id = `wifi-wrapper-${id}`;

            const svgNS = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(svgNS, "svg");
            svg.setAttribute("class", "wifi-symbol-react");
            svg.setAttribute("viewBox", "0 0 100 100");
            svg.id = `wifi-icon-${id}`;

            const dot = document.createElementNS(svgNS, "circle");
            dot.setAttribute("class", "dot-react");
            dot.setAttribute("cx", "50");
            dot.setAttribute("cy", "75");
            dot.setAttribute("r", "7");
            svg.appendChild(dot);

            const arcBaseY = 75;
            const arcRadii = [20, 32, 44];
            const arcCenter = { x: 50, y: arcBaseY };

            arcRadii.forEach((radius, index) => {
                const path = document.createElementNS(svgNS, "path");
                path.setAttribute("class", `bar-react bar-react-${index + 1}`);
                const angle = 45 * (Math.PI / 180);
                const startX = arcCenter.x - radius * Math.sin(angle);
                const startY = arcCenter.y - radius * Math.cos(angle);
                const endX = arcCenter.x + radius * Math.sin(angle);
                const endY = startY;
                const d = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
                path.setAttribute("d", d);
                svg.appendChild(path);
            });

            wrapper.appendChild(svg);
            return wrapper;
        }

        // Function to create radiating circles
        function createRadiatingCircles(iconWrapper) {
            const numRadiatingCircles = 4;
            const animationDelayIncrement = 0.25;

            const oldCircles = iconWrapper.querySelectorAll('.radiating-circle-react');
            oldCircles.forEach(circ => circ.remove());

            for (let i = 0; i < numRadiatingCircles; i++) {
                const circle = document.createElement('div');
                circle.classList.add('radiating-circle-react');
                circle.style.animation = `radiate-react 1.8s ${i * animationDelayIncrement}s ease-out forwards`;
                iconWrapper.appendChild(circle);

                circle.addEventListener('animationend', () => {
                    if (circle.parentNode) {
                        circle.parentNode.removeChild(circle);
                    }
                });
            }
        }
        
        // Function to draw connecting lines
        function drawConnectingLines() {
            if (!lineContainerRef.current || wifiIconsRef.current.length < 3) return;

            const lineSvg = lineContainerRef.current;
            lineSvg.innerHTML = ''; // Clear previous lines

            const iconElements = wifiIconsRef.current.map(ref => ref.parentElement);

            const getCenterPosition = (element) => {
                if (!element) return { x: 0, y: 0};
                const rect = element.getBoundingClientRect();
                const parentRect = animationContainer.getBoundingClientRect();
                return {
                    x: rect.left - parentRect.left + rect.width / 2,
                    y: rect.top - parentRect.top + rect.height / 2,
                };
            };
            
            const positions = iconElements.map(el => getCenterPosition(el));

            if (positions.some(p => p.x === 0 && p.y === 0)) {
                console.warn("Icon positions not ready for drawing lines, retrying...");
                setTimeout(drawConnectingLines, 100);
                return;
            }

            const createLine = (x1, y1, x2, y2) => {
                const svgNS = "http://www.w3.org/2000/svg";
                const line = document.createElementNS(svgNS, "line");
                line.setAttribute("x1", x1);
                line.setAttribute("y1", y1);
                line.setAttribute("x2", x2);
                line.setAttribute("y2", y2);
                line.setAttribute("class", "connecting-line-react");
                return line;
            };

                // Connect all bottom icons to the top icon
            if (positions[0]) {
                // Connect top to each bottom icon
                for (let i = 1; i < positions.length; i++) {
                    if (positions[i]) {
                        lineSvg.appendChild(createLine(positions[0].x, positions[0].y, positions[i].x, positions[i].y));
                    }
                }
            }
        }

        // Initialize icons
        animationContainer.innerHTML = ''; // Clear previous content
        
        // Re-add the SVG container for lines
        const lineSvgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        lineSvgContainer.setAttribute("class", "line-svg-container-react");
        animationContainer.appendChild(lineSvgContainer);
        lineContainerRef.current = lineSvgContainer;

        wifiIconsRef.current = [];

        // Create a pyramid with just two rows
        const topRow = document.createElement('div');
        topRow.className = 'wifi-row-react top-row-react';
        animationContainer.appendChild(topRow);

        const bottomRow = document.createElement('div');
        bottomRow.className = 'wifi-row-react bottom-row-react';
        animationContainer.appendChild(bottomRow);
        
        try {
            // Create the top icon with larger size
            const topIconWrapper = createWifiIconSVG(0);
            topIconWrapper.querySelector('.wifi-symbol-react').style.width = '100px';
            topIconWrapper.querySelector('.wifi-symbol-react').style.height = '100px';
            topRow.appendChild(topIconWrapper);
            wifiIconsRef.current.push(topIconWrapper.querySelector('.wifi-symbol-react'));
            
            // Create 5 bottom row icons with varied vertical positions
            const positions = [
                { y: 30 },   // First icon - lower
                { y: -25 },  // Second icon - higher
                { y: 15 },   // Third icon - slightly lower
                { y: -35 },  // Fourth icon - highest
                { y: 20 }    // Fifth icon - lower
            ];
            
            for (let i = 0; i < 5; i++) {
                const bottomIcon = createWifiIconSVG(i + 1);
                bottomIcon.style.transform = `translateY(${positions[i].y}px)`;
                bottomRow.appendChild(bottomIcon);
                wifiIconsRef.current.push(bottomIcon.querySelector('.wifi-symbol-react'));
            }
            
        } catch (error) {
            console.error("Error creating Wi-Fi icons in React component:", error);
        }

        function pulseLoop() {
            if (!animationContainerRef.current || wifiIconsRef.current.length === 0) {
                clearTimeout(pulseTimeoutRef.current);
                return;
            }
            
            wifiIconsRef.current.forEach(icon => {
                if (icon) icon.classList.remove('active-react');
            });

            const currentIcon = wifiIconsRef.current[activeIconIndexRef.current];
            if (currentIcon) {
                currentIcon.classList.add('active-react');
                const currentIconWrapper = currentIcon.parentElement;
                if (currentIconWrapper) {
                    createRadiatingCircles(currentIconWrapper);
                }
            }

            activeIconIndexRef.current = (activeIconIndexRef.current + 1) % numIcons;
            pulseTimeoutRef.current = setTimeout(pulseLoop, pulseDuration + pulseInterval);
        }

        if (wifiIconsRef.current.length > 0) {
            clearTimeout(pulseTimeoutRef.current);
            pulseTimeoutRef.current = setTimeout(pulseLoop, 500);
            // Draw lines after a short delay to ensure icons are positioned
            setTimeout(drawConnectingLines, 200); 
        }
        
        // Redraw lines on resize as positions might change
        const handleResize = () => {
            setTimeout(drawConnectingLines, 100);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(pulseTimeoutRef.current);
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <>
            <style jsx global>{`
                .animation-container-react {
                    width: 100%; 
                    height: 100%; 
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: absolute; 
                    top: 0;
                    left: 0;
                    overflow: hidden;
                    z-index: 0; 
                }

                .wifi-row-react {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    position: relative;
                }
                
                .top-row-react {
                    margin-bottom: 70px; /* Increased space between top and bottom row */
                }

                .animation-container-react::before { /* Fog */
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(to right,
                        rgba(173, 216, 230, 0.1) 0%, 
                        rgba(173, 216, 230, 0.05) 25%,
                        rgba(240, 248, 255, 0.1) 50%,
                        rgba(173, 216, 230, 0.05) 75%,
                        rgba(173, 216, 230, 0.1) 100%
                    );
                    opacity: 0.65; 
                    animation: driftFog-react 70s linear infinite;
                    z-index: 1; 
                }

                @keyframes driftFog-react {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }

                .wifi-icon-wrapper-react {
                    position: relative;
                    z-index: 3;
                    margin: 0 35px; /* Increased horizontal spacing between icons */
                    transition: transform 0.5s ease-in-out;
                }
                
                .top-row-react .wifi-icon-wrapper-react {
                    margin: 0; /* Top icon centered */
                }

                .wifi-symbol-react {
                    width: 70px; /* Slightly smaller for more icons */
                    height: 70px;
                    stroke: white;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.9));
                    transition: opacity 0.5s ease-in-out;
                }
                
                /* Special styling for the top icon */
                .top-row-react .wifi-symbol-react {
                    stroke-width: 6.5; /* Thicker strokes for the top icon */
                    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.95)); /* Stronger glow */
                }

                .wifi-symbol-react .dot-react {
                    fill: white;
                    transition: opacity 0.5s ease-in-out;
                    opacity: 0.4; 
                }

                .wifi-symbol-react .bar-react {
                    fill: none;
                    stroke-width: 5.5;
                    transition: opacity 0.5s ease-in-out, stroke-width 0.3s ease-in-out;
                    opacity: 0.4; 
                }

                .wifi-symbol-react.active-react .bar-react {
                    opacity: 1;
                    stroke-width: 7; 
                }
                .wifi-symbol-react.active-react .dot-react {
                    opacity: 1;
                }

                .radiating-circle-react {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.65);
                    opacity: 0;
                    width: 15px;
                    height: 15px;
                    pointer-events: none;
                }

                @keyframes radiate-react {
                    0% {
                        width: 15px;
                        height: 15px;
                        opacity: 0.8;
                    }
                    50% {
                         opacity: 0.4;
                    }
                    100% {
                        width: 200px; 
                        height: 200px;
                        opacity: 0;
                    }
                }

                /* Container for SVG lines */
                .line-svg-container-react {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }

                .connecting-line-react {
                    stroke: rgba(255, 255, 255, 0.6); /* More visible white lines */
                    stroke-width: 1.5px; /* Thicker lines */
                    stroke-dasharray: 5 3; /* Wider dashed pattern */
                }
            `}</style>
            <div ref={animationContainerRef} className="animation-container-react"></div>
        </>
    );
};

export default AnimatedBackground;