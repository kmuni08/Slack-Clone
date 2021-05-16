import React, { FunctionComponent, useContext, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as PeopleGroupIcon } from '../../../../assests/people-group.svg';
import { ReactComponent as PeopleGlobalIcon } from '../../../../assests/people-global.svg';

import { DIContext } from '../../../../contexts/di.context';
import { Container as DIContainer } from 'inversify/dts/container/container';
import { TYPES } from '../../../../di-container/di.config';

import { ParallaxService } from '../../../../services/parallax.service';
import { useParallaxScroll } from '../../../../utils/useParallaxScroll.hook';
import { useScrollDirection } from '../../../../utils/useScrollDirection.hook';
import { SectionProps } from '../shared/props';

import { motion, useViewportScroll } from 'framer-motion';
import { container as containerVariants, leftGrid, rightGrid } from '../variants.motion';
import './FifthSection.scss';
import { useBackgroundSwap } from '../../../../utils/useBackgroundSwap.hook';
import { BackgroundColor, Purple } from '../../../../interfaces';
import Button from '@material-ui/core/Button';

/**
 * ```
 * initial: the end of third section = (100vh * 6)
 * final: (100vh * 6) + ((100vh * 1.5) or (1000px * 1.5 if 100vh < 1000px)) = 100vh * 7.5
 * Scroll Y range = initial --> final
 * ```
 */
const FifthSection: FunctionComponent<SectionProps> = ({ initialScrollY, sectionHeights: [minHeight, sectionHeight], offsetTop, handler }) => {

  const container = useContext(DIContext) as DIContainer;
  const parallaxService: ParallaxService = container.get<ParallaxService>(TYPES.ParallaxService);
  const posters = parallaxService.getPosters();

  const currentHeight = sectionHeight > minHeight ? sectionHeight : minHeight;
  const finalScrollY = currentHeight * 7.5;
  const PROJECT_PANEL_MIN_HEIGHT = 500;
  const posterPanelRef = useRef<HTMLDivElement>(null)
  const [posterPanelHeight, posterPanelHeightSetter] = useState(PROJECT_PANEL_MIN_HEIGHT);

  useEffect(() => {
    if (!posterPanelRef || !posterPanelRef.current) return ;
    const setValues = () => posterPanelHeightSetter(posterPanelRef!.current!.clientHeight);
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [posterPanelRef]);


  const { showLeft, showRight, transformY  } = useParallaxScroll([initialScrollY, finalScrollY], offsetTop, currentHeight, posterPanelHeight, true);
  const direction = useScrollDirection(transformY, showLeft);

  useBackgroundSwap<BackgroundColor>(handler, Purple, showLeft);

  return (
    <Container
      className={'fifth-section parallax-section'} style={{ minHeight }}
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
              In short: it’s a more
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'} color={'#FFFFFF'} marginBottom={10}>
              human way to work
            </Typography>
            <Button variant={'contained'} color={'info'} size={'x-large'}>TRY FOR FREE</Button>&nbsp;&nbsp;
            <Button variant={'outlined'} color={'info'} size={'x-large'}>TALK TO SALES</Button>
          </motion.div>
        </div>
        <div className={'grid-right'}>
          <motion.div className={'target-wrapper'}
            variants={rightGrid}
            animate={showRight ? 'show' : 'hidden'}
          >
            <motion.div ref={posterPanelRef} style={{ y: transformY }} className={'poster-panel'}>
              {
                posters.length && posters.map((poster, index) =>
                  <div key={`poster-${index}`} className={'poster-part'}>
                    {
                      poster.src && <img alt={'img'} src={poster.src}/>
                    }
                    {
                      poster.element && <poster.element/>
                    }
                    {
                      poster.percentage && poster.color && <span className={poster.color}>{poster.percentage}</span>
                    }
                    {
                      poster.text && <span>{poster.text}</span>
                    }
                  </div>
                )
              }
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default FifthSection;