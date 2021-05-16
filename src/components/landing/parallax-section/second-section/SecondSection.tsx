import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import StoryBtnGroup from '../shared/story-btn-group/StoryBtnGroup';

import { DIContext } from '../../../../contexts/di.context';
import { Container as DIContainer } from 'inversify/dts/container/container';
import { TYPES } from '../../../../di-container/di.config';

import { ParallaxService } from '../../../../services/parallax.service';
import { useParallaxScroll } from '../../../../utils/useParallaxScroll.hook';
import { useScrollDirection } from '../../../../utils/useScrollDirection.hook';
import { SectionProps } from '../shared/props';

import { motion } from 'framer-motion';
import { container as containerVariants, leftGrid, rightGrid } from '../variants.motion';
import './SecondSection.scss';
import LinkButton from '../shared/link-button/LinkButton';
import { useBackgroundSwap } from '../../../../utils/useBackgroundSwap.hook';
import { BackgroundColor, White } from '../../../../interfaces';

/**
 * ```
 * initial: the end of first section = (100vh * 1.5)
 * final: (100vh * 1.5) + ((100vh * 1.5) or (1000px * 1.5 if 100vh < 1000px)) = 100vh * 3
 * Scroll Y range = initial --> final
 * ```
 */
const SecondSection: FunctionComponent<SectionProps> = ({ initialScrollY, sectionHeights: [minHeight, sectionHeight], offsetTop, handler }) => {

  const container = useContext(DIContext) as DIContainer;
  const parallaxService: ParallaxService = container.get<ParallaxService>(TYPES.ParallaxService);
  const stories = parallaxService.getStories();
  const [activeStory, activeStorySetter] = useState(stories[0]);

  const currentHeight = sectionHeight > minHeight ? sectionHeight : minHeight;
  const finalScrollY = currentHeight * 3;
  const IMAGE_PANEL_MIN_HEIGHT = 410;
  const imgPanelRef = useRef<HTMLDivElement>(null)
  const [imgPanelHeight, imgPanelHeightSetter] = useState(IMAGE_PANEL_MIN_HEIGHT);

  useEffect(() => {
    if (!imgPanelRef || !imgPanelRef.current) return ;
    const setValues = () => imgPanelHeightSetter(imgPanelRef!.current!.clientHeight);
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [imgPanelRef]);


  const { showLeft, showRight, transformY, scrollY } = useParallaxScroll([initialScrollY, finalScrollY], offsetTop, currentHeight, imgPanelHeight);
  const direction = useScrollDirection(transformY, showLeft);

  useBackgroundSwap<BackgroundColor>(handler, White, showLeft);

  return (
    <Container
      className={'second-section parallax-section'} style={{ minHeight }}
      component={motion.div} variants={containerVariants} initial={'hidden'} animate={showLeft ? 'show' : 'hidden' }
    >
      <div className={'grid'}>
        <div className={'grid-left'}>
          <motion.div
            variants={leftGrid[direction]}
            initial={'hidden'} animate={showLeft ? 'show' : 'hidden'}
          >
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'}>
              There’s a space for
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'} marginBottom={5}>
              every project
            </Typography>
            <Typography
              display={'inline'} fontWeight={'bold'} align={'left'} variant={'h6'}>
              Channels
            </Typography>&nbsp;
            <Typography
            display={'inline'} fontWeight={400} variant={'h6'} align={'left'}>
              keep work organized. You don’t have to think twice about where to go to ask a question or make a decision.
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h5'} marginTop={5}>
              See how teams organize Slack:
            </Typography>
            <StoryBtnGroup stories={stories} handler={activeStorySetter} active={activeStory.title}/>
            <LinkButton text={'See all customer stories'}/>
          </motion.div>
        </div>
        <div className={'grid-right'}>
          <motion.div className={'target-wrapper'}
            variants={rightGrid}
            animate={showRight ? 'show' : 'hidden'}
          >
            <motion.div ref={imgPanelRef} style={{ y: transformY }} className={'story-panel'}>
              <img alt={'main-img'} src={activeStory.images[0]} className={'main-image'} />
              <img alt={'side-img'} src={activeStory.images[1]} className={'side-image'}/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default SecondSection;