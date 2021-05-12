import React, { Fragment, FunctionComponent, useContext, useEffect, useRef, useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ActiveUsers from '../shared/active-users/ActiveUsers';
import UsersInConversation from '../shared/users-in-conversation/UsersInConversation';
import ChatMessage from '../shared/chat-message/ChatMessage';
import CompanyBtnGroup, { CompanyType } from '../shared/company-btn-group/CompaniesBtnGroup';
import PrototypePanel from '../shared/prototype-panel/PrototypePanel';
import { ReactComponent as Like } from '../../../../assests/like.svg';
import { ReactComponent as Celebrate } from '../../../../assests/celebrate.svg';
import { ReactComponent as Excited } from '../../../../assests/excited.svg';
import AttachmentIMG from '../../../../assests/pdf.png';

import { DIContext } from '../../../../contexts/di.context';
import { Container as DIContainer } from 'inversify/dts/container/container';
import { TYPES } from '../../../../di-container/di.config';
import { ParallaxService } from '../../../../services/parallax.service';

import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import { leftGrid, rightGrid } from '../variants.motion';
import './FirstSection.scss';

const FirstSection: FunctionComponent<{ initialInputRange?: number }> = ({ initialInputRange = 0 }) => {

  const container = useContext(DIContext) as DIContainer;
  const parallaxService: ParallaxService = container.get<ParallaxService>(TYPES.ParallaxService);

  const [clientHeight, clientHeightSetter] = useState(0);
  const [prototypePanelHeight, prototypePanelHeightSetter] = useState(700);
  const [activeCompanyType, activeCompanyTypeSetter] = useState<CompanyType>('small');
  // const parallaxScreenRef = useRef<HTMLDivElement>(null);
  const prototypePanelRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useViewportScroll();
  const scrollYAtMiddle = (initialInputRange + clientHeight) / 2  ;
  const initialOutputY = (clientHeight + prototypePanelHeight)/2 - initialInputRange;

  useEffect(() => {
    if (prototypePanelRef && prototypePanelRef.current) {
      prototypePanelHeightSetter(prototypePanelRef.current.clientHeight);
    }
    // if (!parallaxScreenRef || !parallaxScreenRef.current) return;

    const setValues = () => clientHeightSetter(window.innerHeight)
    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
      scrollY.clearListeners();
    };
  }, [scrollY, scrollYAtMiddle]);

  const transformY = useSpring(
    useTransform(
      scrollY,
      [initialInputRange, scrollYAtMiddle, scrollYAtMiddle * 2, clientHeight * 2],
      [initialOutputY, 0, 0, -clientHeight * 2],
    ),
    { mass: 10, damping: 100, stiffness: 300, restDelta: 10, restSpeed: 10 }
  );

  return (
    <Container className={'first-section parallax-section'}>
      <div className={'grid'}>
        <div className={'grid-left'}>
          <motion.div variants={leftGrid}>
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
            <CompanyBtnGroup handler={activeCompanyTypeSetter} active={activeCompanyType}/>
          </motion.div>
        </div>
        <div className={'grid-right'}>
          <motion.div variants={rightGrid}>
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