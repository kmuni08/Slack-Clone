import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PrototypePanel from '../shared/prototype-panel/PrototypePanel';

import { DIContext } from '../../../../contexts/di.context';
import { Container as DIContainer } from 'inversify/dts/container/container';
import { TYPES } from '../../../../di-container/di.config';

import { ParallaxService } from '../../../../services/parallax.service';
import { useParallaxScroll } from '../../../../utils/useParallaxScroll.hook';
import { useScrollDirection } from '../../../../utils/useScrollDirection.hook';
import { SectionProps } from '../shared/props';

import { motion } from 'framer-motion';
import { container as containerVariants, leftGrid, rightGrid } from '../variants.motion';
import './FourthSection.scss';
import { useBackgroundSwap } from '../../../../utils/useBackgroundSwap.hook';
import { BackgroundColor, Blue } from '../../../../interfaces';


/**
 * ```
 * initial: the end of third section = (100vh * 4.5)
 * final: (100vh * 4.5) + ((100vh * 1.5) or (1000px * 1.5 if 100vh < 1000px)) = 100vh * 6
 * Scroll Y range = initial --> final
 * ```
 */
const FourthSection: FunctionComponent<SectionProps> = ({ initialScrollY, sectionHeights: [minHeight, sectionHeight], offsetTop, handler }) => {

  const container = useContext(DIContext) as DIContainer;
  const parallaxService: ParallaxService = container.get<ParallaxService>(TYPES.ParallaxService);
  const {poster, src, videoType} = parallaxService.getFaceChatVideo();

  const currentHeight = sectionHeight > minHeight ? sectionHeight : minHeight;
  const finalScrollY = currentHeight * 6;
  const PROJECT_PANEL_MIN_HEIGHT = 500;
  const videoPanelRef = useRef<HTMLDivElement>(null)
  const [videoPanelHeight, videoPanelHeightSetter] = useState(PROJECT_PANEL_MIN_HEIGHT);

  useEffect(() => {
    if (!videoPanelRef || !videoPanelRef.current) return ;
    const setValues = () => videoPanelHeightSetter(videoPanelRef!.current!.clientHeight);
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [videoPanelRef]);


  const { showLeft, showRight, transformY  } = useParallaxScroll([initialScrollY, finalScrollY], offsetTop, currentHeight, videoPanelHeight);
  const direction = useScrollDirection(transformY, showLeft);

  useBackgroundSwap<BackgroundColor>(handler, Blue, showLeft);

  return (
    <Container
      className={'fourth-section parallax-section'} style={{ minHeight }}
      component={motion.div} variants={containerVariants} initial={'hidden'} animate={showLeft ? 'show' : 'hidden' }
    >
      <div className={'grid'}>
        <div className={'grid-left'}>
          <motion.div
            variants={leftGrid[direction]}
            initial={'hidden'} animate={showLeft ? 'show' : 'hidden'}
          >
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'} color={'#FFFFFF'}>
              And you can chat
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'} color={'#FFFFFF'}>
              face to face, with
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'} color={'#FFFFFF'}>
              just a click
            </Typography>
          </motion.div>
        </div>
        <div className={'grid-right'}>
          <motion.div className={'target-wrapper'}
            variants={rightGrid}
            animate={showRight ? 'show' : 'hidden'}
          >
            <PrototypePanel
              ref={videoPanelRef} style={{ y: transformY }} className={'face-chat-panel'}
              body={
                <video poster={poster} loop muted playsInline autoPlay>
                  <source src={src} type={videoType}/>
                </video>
              }
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default FourthSection;