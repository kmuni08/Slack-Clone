import React, { FunctionComponent, useRef } from 'react';

import { useInView } from 'react-intersection-observer';

import WelcomeSection from './welcome-section/WelcomeSection';
import ParallaxSection from './parallax-section/ParallaxSection';
import Nav from './nav/Nav';

import './Landing.scss';
import { AnimatePresence } from 'framer-motion';
import { ThemeDark, ThemeLight } from '../../interfaces';

const Landing: FunctionComponent<any> = () => {

  const [firstNavRef, isFirstNavRefView, entry] = useInView({ threshold: 1 });
  const welcomeRef = useRef<HTMLDivElement>(null);
  const footerHeight = 500;
  return (
    <div className={'landing-page'}>
      <Nav ref={firstNavRef} theme={ThemeDark}/>
      <AnimatePresence>
        { !isFirstNavRefView && <Nav theme={ThemeLight}/> }
      </AnimatePresence>
      <WelcomeSection
        ref={welcomeRef}
        shouldShow={isFirstNavRefView}/>
      <ParallaxSection
        style={{ inset: `-${welcomeRef?.current?.offsetHeight}px 0 ${footerHeight}px` }}
        initialInputRange={entry?.target.clientHeight}
        shouldShow={!isFirstNavRefView}/>
    </div>
  );
}

export default Landing;