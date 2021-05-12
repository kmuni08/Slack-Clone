import React, { forwardRef, ForwardRefRenderFunction, Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PrototypePanel from '../parallax-section/shared/prototype-panel/PrototypePanel';
import ChatMessage from '../parallax-section/shared/chat-message/ChatMessage';
import { ReactComponent as Like } from '../../../assests/like.svg';

import { parentDiv, text, textWithAttention, otherItem } from './variants.motion';
import { motion, MotionStyle } from 'framer-motion';
import './WelcomeSection.scss';

const WelcomeSection: ForwardRefRenderFunction<HTMLDivElement, { shouldShow?: boolean, style?: MotionStyle }> = ({ shouldShow = true, style= undefined }, ref) => {
  return (
    <motion.div ref={ref}
      variants={parentDiv} initial={'hidden'} animate={ !shouldShow ? 'hidden' : 'visible' }
      style={style}
      className={'welcome-section'}>
      <Container className={'body'}>
        <Typography
          component={motion.h3} variants={text}
          fontWeight={'bold'} color={'white'} align={'center'} variant={'h3'} marginTop={10}>
          Slack makes it
          <motion.p variants={textWithAttention}>downright pleasant</motion.p>
        </Typography>
        <Typography
          component={motion.h3} variants={text}
          fontWeight={'bold'} color={'white'} align={'center'} variant={'h3'}>
          to work together
        </Typography>
        <Button
          component={motion.button} variants={otherItem}
          className={'try-btn'} variant={'contained'} color={'info'}>TRY FOR FREE</Button>
        <PrototypePanel
          className={'stay-center'}
          contentHeight={'350px'}
          variants={otherItem}
          rightTab={
            <Fragment>
              <ChatMessage
                icon={
                  <video className={'medium'} autoPlay loop muted playsInline poster="https://a.slack-edge.com/6d2d0a/marketing/img/homepage/bold-prospect/hero/hero-avatar.png">
                    <source src="https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/hero-avatar.small.webm" type="video/webm"/>
                  </video>
                }
                message={{fontSize: '1.5rem', text: 'Wait... what is Slack?'}}/>
              <ChatMessage
                icon={<img className={'medium'} alt={'img'} src={'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png'} />}
                message={{fontSize: '1.5rem', text: 'It’s a new way to communicate—faster than email and more focused than chat.'}}
                reactions={[{node: <Like style={{marginBottom: 4}}/>, count: 2}]}/>
            </Fragment>
          }
        />
      </Container>
    </motion.div>
  );
}

export default forwardRef(WelcomeSection);