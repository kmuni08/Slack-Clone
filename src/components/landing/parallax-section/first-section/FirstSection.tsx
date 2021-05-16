import React, { Fragment, FunctionComponent, useContext, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ActiveUsers from '../shared/active-users/ActiveUsers';
import UsersInConversation from '../shared/users-in-conversation/UsersInConversation';
import ChatMessage from '../shared/chat-message/ChatMessage';
import CompanyBtnGroup from '../shared/company-btn-group/CompaniesBtnGroup';
import PrototypePanel from '../shared/prototype-panel/PrototypePanel';
import { ReactComponent as Like } from '../../../../assests/like.svg';
import { ReactComponent as Celebrate } from '../../../../assests/celebrate.svg';
import { ReactComponent as Excited } from '../../../../assests/excited.svg';
import AttachmentIMG from '../../../../assests/pdf.png';

import { DIContext } from '../../../../contexts/di.context';
import { Container as DIContainer } from 'inversify/dts/container/container';
import { TYPES } from '../../../../di-container/di.config';

import { ParallaxService } from '../../../../services/parallax.service';
import { useParallaxScroll } from '../../../../utils/useParallaxScroll.hook';
import { useScrollDirection } from '../../../../utils/useScrollDirection.hook';
import { SectionProps } from '../shared/props';
import { BackgroundColor, CompanyType, White } from '../../../../interfaces';

import { motion } from 'framer-motion';
import { container as containerVariants, leftGrid, rightGrid } from '../variants.motion';
import './FirstSection.scss';
import { useBackgroundSwap } from '../../../../utils/useBackgroundSwap.hook';

/**
 * ```
 * final: (100vh * 1.5) or (1000px * 1.5 if 100vh < 1000px)
 * Scroll Y range = initial --> final
 * ```
 */
const FirstSection: FunctionComponent<SectionProps> =
  ({ initialScrollY, sectionHeights: [minHeight, sectionHeight], offsetTop, handler }) => {

  const container = useContext(DIContext) as DIContainer;
  const parallaxService: ParallaxService = container.get<ParallaxService>(TYPES.ParallaxService);

  const currentHeight = sectionHeight > minHeight ? sectionHeight : minHeight;
  const finalScrollY = currentHeight * 1.5;
  const PROTOTYPE_MIN_HEIGHT = 600;
  const prototypePanelRef = useRef<HTMLDivElement>(null);
  const [prototypeHeight, prototypeHeightSetter] = useState(PROTOTYPE_MIN_HEIGHT);

  useEffect(() => {
    if (!prototypePanelRef || !prototypePanelRef.current) return ;
    const setValues = () => prototypeHeightSetter(prototypePanelRef!.current!.clientHeight);
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [prototypePanelRef]);

  const { showLeft, showRight, transformY, scrollY } = useParallaxScroll([initialScrollY, finalScrollY], offsetTop, currentHeight, prototypeHeight);

  const [activeCompanyType, activeCompanyTypeSetter] = useState<CompanyType>('small');
  const direction = useScrollDirection(transformY, showLeft);
  useBackgroundSwap<BackgroundColor>(handler, White, showLeft);

  return (
    <Container
      className={'first-section parallax-section'} style={{ minHeight }}
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
              It brings your whole
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h3'}>
              team together
            </Typography>
            <Typography
              fontWeight={'bold'} align={'left'} variant={'h5'} marginTop={5}>
              See what Slack looks like for:
            </Typography>
            <CompanyBtnGroup companies={parallaxService.getCompanies()} handler={activeCompanyTypeSetter} active={activeCompanyType}/>
          </motion.div>
        </div>
        <div className={'grid-right'}>
          <motion.div className={'target-wrapper'}
            variants={rightGrid}
            animate={showRight ? 'show' : 'hidden'}
          >
            <PrototypePanel
              ref={prototypePanelRef}
              style={{ y: transformY }}
              hasChatBox
              leftTab={
                <Fragment>
                  <div className={'direct-message'}><ArrowDropDownIcon/>Direct Messages</div>
                  <ActiveUsers type={activeCompanyType} users={parallaxService.getActiveUsers(activeCompanyType)}/>
                </Fragment>
              }
              rightTab={
                <Fragment>
                  <UsersInConversation users={parallaxService.getUsersInConversation(activeCompanyType)} />
                  <ChatMessage
                    username={'Arcadio Buendía'}
                    icon={<img className={'small'} alt={'img'} src={'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png'} />}
                    time={'8:45 AM'}
                    skeleton={{ lines: 3, short: true }}
                    reactions={ [{ node: <Like style={{ marginBottom: 4 }}/>, count: 2 }] }
                  />
                  <ChatMessage
                    username={'Zoe Maxwell'}
                    icon={<img className={'small'} alt={'img'} src={'https://a.slack-edge.com/02792/marketing/img/avatars/persona_a/persona-a.pt-BR.png'} />}
                    time={'8:50 AM'}
                    skeleton={{ lines: 2, short: true }}
                  />
                  <ChatMessage
                    username={'Arcadio Buendía'}
                    icon={<img className={'small'} alt={'img'} src={'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png'} />}
                    time={'9:00 AM'}
                    skeleton={{ lines: 2, short: false }}
                    attachment={<img width={'100%'} alt={'attachment'} src={AttachmentIMG}/>}
                    reactions={[
                      { node: <Celebrate style={{ marginBottom: 2 }}/>, count: 7 },
                      { node: <Excited style={{ marginBottom: 1 }}/>, count: 1 }
                    ]}
                  />
                </Fragment>
              }
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default FirstSection;