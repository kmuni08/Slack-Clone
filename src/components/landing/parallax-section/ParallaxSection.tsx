import React, { FunctionComponent } from 'react';
import FirstSection from './first-section/FirstSection';
import { grid } from './variants.motion';
import { motion, MotionStyle } from 'framer-motion';
import './ParallaxSection.scss';

const ParallaxSection: FunctionComponent<{ shouldShow?: boolean, style?: MotionStyle, initialInputRange?: number }> = ({ shouldShow = false, style = undefined, initialInputRange = 0 }) => {
  return (
    <motion.div style={style} className={'parallax-section'}
      variants={grid} initial={'hidden'} animate={shouldShow ? 'show' : 'hidden'}
    >
      <div className={'parallax-screen'}>
        <FirstSection initialInputRange={initialInputRange}/>
      </div>
    </motion.div>
  );
}

export default ParallaxSection;