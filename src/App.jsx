import React, { useState, useRef, useEffect } from 'react';
import 'App.css';
import styled from 'styled-components';
import Wrapper from 'components/wrapper';
import MenuNav from 'components/bars/menu-nav';
import LeftBar from 'components/bars/left-bar';
import RightBar from 'components/bars/right-bar';
import Presentation from 'components/presentation/presentation';
import AboutMe from 'components/about-me/01about-me';
import Experience from 'components/experience/experience';
import Work from 'components/work/work';
import LoadingPage from 'components/loading-page';
// import MenuNavMobile from './components/menu-nav-mobile';
import Projects from 'components/work/projects';
import Contact from 'components/contact/Contact';

const MenuNavMobileStyled = styled.div`
  display: none;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  min-height: 100vh;
  // border: 2px solid red;
  background: rgba(0,0,0,.4);
  transform: translateX(0%);
  transition: 1s;
   .nav-mobile {
     // border: 1px solid red;
     position: absolute;
     top: 0;
     right: 0;
     width: 76%;
     height: 100vh;
     background: var(--navy);
     transition: .4s;
     transform: translateX(100%);
     z-index: 1001;
   }
 `;

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef();
  const navigationRef = useRef();

  const handleNavigation = (isActive) => {
    setIsMobile(isActive);
  };

  useEffect(() => {
   if(isMobile) {
     menuRef.current.style.display="flex";
       setTimeout(() => {
         navigationRef.current.style.transform="translateX(0%)"
       },200)
  }
  if(!isMobile) {
     menuRef.current.style.display="none";
     setTimeout(() => {
         navigationRef.current.style.transform="translateX(100%)"
     },200)
  }
  },[isMobile])



  return (
    <div className="App">
    <MenuNav
      handleNavigation={handleNavigation}
    />
    <MenuNavMobileStyled ref={menuRef}>
      <div className="nav-mobile" ref={navigationRef}>

      </div>
    </MenuNavMobileStyled>>
    <LeftBar />
    <RightBar />
    <Wrapper>
    <Presentation />
    <AboutMe />
    <Experience />
    <Work />
    <Projects />
    <Contact />
    </Wrapper>
    {/*<LoadingPage />*/}
    </div>
  );
}