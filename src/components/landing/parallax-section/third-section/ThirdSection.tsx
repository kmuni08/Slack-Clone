import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinkButton from '../shared/link-button/LinkButton';
import CursorIcon from '../shared/cursor-icon/CursorIcon';

import { DIContext } from '../../../../contexts/di.context';
import { Container as DIContainer } from 'inversify/dts/container/container';
import { TYPES } from '../../../../di-container/di.config';

import { ParallaxService } from '../../../../services/parallax.service';
import { useParallaxScroll } from '../../../../utils/useParallaxScroll.hook';
import { useScrollDirection } from '../../../../utils/useScrollDirection.hook';
import { SectionProps } from '../shared/props';

import { motion } from 'framer-motion';
import { container as containerVariants, leftGrid, rightGrid } from '../variants.motion';
import './ThirdSection.scss';
import { useBackgroundSwap } from '../../../../utils/useBackgroundSwap.hook';
import { BackgroundColor, Blue } from '../../../../interfaces';

/**
 * ```
 * initial: the end of second section = (100vh * 3)
 * final: (100vh * 3) + ((100vh * 1.5) or (1000px * 1.5 if 100vh < 1000px)) = 100vh * 4.5
 * Scroll Y range = initial --> final
 * ```
 */
const ThirdSection: FunctionComponent<SectionProps> = ({ initialScrollY, sectionHeights: [minHeight, sectionHeight], offsetTop, handler }) => {

  const container = useContext(DIContext) as DIContainer;
  const parallaxService: ParallaxService = container.get<ParallaxService>(TYPES.ParallaxService);

  const currentHeight = sectionHeight > minHeight ? sectionHeight : minHeight;
  const finalScrollY = currentHeight * 4.5;
  const PROJECT_PANEL_MIN_HEIGHT = 500;
  const projectPanelRef = useRef<HTMLDivElement>(null)
  const [projectPanelHeight, projectPanelHeightSetter] = useState(PROJECT_PANEL_MIN_HEIGHT);

  useEffect(() => {
    if (!projectPanelRef || !projectPanelRef.current) return ;
    const setValues = () => projectPanelHeightSetter(projectPanelRef!.current!.clientHeight);
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [projectPanelRef]);


  const { showLeft, showRight, transformY  } = useParallaxScroll([initialScrollY, finalScrollY], offsetTop, currentHeight, projectPanelHeight);
  const direction = useScrollDirection(transformY, showLeft);

  useBackgroundSwap<BackgroundColor>(handler, Blue, showLeft);

  return (
    <Container
      className={'third-section parallax-section'} style={{ minHeight }}
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
              Even projects with
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'} color={'#FFFFFF'} marginBottom={5}>
              other companies
            </Typography>
            <Typography
              display={'inline'} fontWeight={'bold'} align={'left'} color={'#FFFFFF'} variant={'h6'}>
              Slack Connect lets two companies move as quickly as one. Hatch a partnership. Close the deal. Build something new.
            </Typography>
            <LinkButton text={'Learn more about Slack Connect'}/>
          </motion.div>
        </div>
        <div className={'grid-right'}>
          <motion.div className={'target-wrapper'}
            variants={rightGrid}
            animate={showRight ? 'show' : 'hidden'}
          >
            <motion.div ref={projectPanelRef} style={{ y: transformY }} className={'project-panel'}>
              <img alt={'main-img'} src={parallaxService.getProjectImage()} className={'main-image'} />
              <CursorIcon className={'cursor-icon'}/>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default ThirdSection;