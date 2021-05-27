import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from "./Animations";

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it
      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal2],{
        duration: 0,
          /* Adds Backgriund image in menu blocks
          background: `url(${sanfrancisco}) center center`,  */
          opacity: 1,
          ease: "power3.inOut"
      });
      gsap.to([reveal1],{       
        background: `black` 
    });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}                    
                      to='/about-us'>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      to='/contact-us'>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      to='/lets-talk'>
                      Lets Talk
                    </Link>
                  </li>
                </ul>
              </nav>
          
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
