import React, { FunctionComponent, useRef } from 'react';

import WelcomeSection from './welcome-section/WelcomeSection';
import ParallaxSection from './parallax-section/ParallaxSection';
import Nav from './nav/Nav';

import './Landing.scss';
import { AnimatePresence } from 'framer-motion';
import { ThemeDark, ThemeLight } from '../../interfaces';
import { usePresent } from '../../utils/usePresent.hook';
import { Fragment } from 'react';

const Landing: FunctionComponent<any> = () => {
  // const footerHeight = 500;
  const navHeight = 70;
  const welcomeRef = useRef<HTMLDivElement>(null);
  const [isNavPresent] = usePresent(navHeight);

  return (
    <Fragment>
      <div className={'landing-page'}>
        <Nav height={navHeight} theme={ThemeDark}/>
        <AnimatePresence>{ !isNavPresent && <Nav theme={ThemeLight}/> }</AnimatePresence>
        <WelcomeSection ref={welcomeRef} show={isNavPresent}/>
        <ParallaxSection
          style={{
            // inset: `-${welcomeRef?.current?.clientHeight}px 0 ${footerHeight}px`,
            // margin: `0px 0px -${welcomeRef?.current?.clientHeight}px`
          }}
          offset={0}
        />
      </div>
      {/*<div style={{ height: '500px', backgroundColor: 'yellow'}}>*/}
      {/*  Footer*/}
      {/*</div>*/}
    </Fragment>
  );
}

export default Landing;