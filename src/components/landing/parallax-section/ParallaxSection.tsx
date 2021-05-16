import React, { FunctionComponent, useEffect, useState } from 'react';

import FirstSection from './first-section/FirstSection';
import SecondSection from './second-section/SecondSection';
import ThirdSection from './third-section/ThirdSection';
import FourthSection from './fourth-section/FourthSection';
import FifthSection from './fifth-section/FifthSection';
import { usePresent } from '../../../utils/usePresent.hook';

import { BackgroundColor, White } from '../../../interfaces';
import { parallax, parallaxScreen } from './variants.motion';
import { motion, MotionStyle } from 'framer-motion';
import './ParallaxSection.scss';

const ParallaxSection: FunctionComponent<{ style: MotionStyle, offset: number }> = ({ style, offset: navOffset }) => {

  const [isNavPresent, _, scrollYProgress] = usePresent(navOffset);

  const SECTION_MIN_HEIGHT = 1000;
  const [sectionHeight, sectionHeightSetter] = useState(SECTION_MIN_HEIGHT);
  const [bgColor, bgColorSetter] = useState<BackgroundColor>(White);
  const END_PERCENTAGE = 0.9999;

  useEffect(() => {
    const setValues = () => sectionHeightSetter(window.innerHeight > SECTION_MIN_HEIGHT ? window.innerHeight : SECTION_MIN_HEIGHT);
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);
    // const subscription = scrollYProgress.onChange(progress => {
    //   // console.log(v)
    //   if (progress >= 0.9999) {
    //
    //   }
    // });

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
      // subscription();
    };
  }, [sectionHeightSetter]);

  return (
    <motion.div style={style} className={'parallax'}
      variants={parallax} initial={'hidden'} animate={!isNavPresent ? `show-background-${bgColor}` : 'hidden'}>
      {/*<motion.div className={'parallax-screen'} variants={parallaxScreen} initial={'begin'} animate={end ? 'end': 'begin'}>*/}
      <div className={'parallax-screen'}>
        <FirstSection
          sectionHeights={[SECTION_MIN_HEIGHT,sectionHeight]}
          initialScrollY={navOffset}
          offsetTop={navOffset}
          handler={bgColorSetter}
        />
        <SecondSection
          sectionHeights={[SECTION_MIN_HEIGHT,sectionHeight]}
          initialScrollY={sectionHeight*1.5}
          offsetTop={navOffset}
          handler={bgColorSetter}
        />
        <ThirdSection
          sectionHeights={[SECTION_MIN_HEIGHT,sectionHeight]}
          initialScrollY={sectionHeight*3}
          offsetTop={navOffset}
          handler={bgColorSetter}
        />
        <FourthSection
          sectionHeights={[SECTION_MIN_HEIGHT,sectionHeight]}
          initialScrollY={sectionHeight*4.5}
          offsetTop={navOffset}
          handler={bgColorSetter}
        />
        <FifthSection
          sectionHeights={[SECTION_MIN_HEIGHT,sectionHeight]}
          initialScrollY={sectionHeight*6}
          offsetTop={navOffset}
          handler={bgColorSetter}
        />
      </div>
    </motion.div>
  );
}

export default ParallaxSection;