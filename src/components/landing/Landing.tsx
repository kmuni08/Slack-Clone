import React, { FunctionComponent } from 'react';
import './Landing.scss';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
import { motion } from 'framer-motion';
import { attention, landing, landingItem, landingText } from './variants.motion';

const Landing: FunctionComponent<any> = () => {

  return (
    <motion.div
      variants={landing} initial={'hidden'} animate={'visible'}
      className={'landing-body'}>
      <Typography
        component={motion.h3} variants={landingText}
        fontWeight={'bold'} color={'white'} align={'center'} variant={'h3'}>
        Slack makes it
        <motion.p variants={attention}>downright pleasant</motion.p>
      </Typography>
      <Typography
        component={motion.h3} variants={landingText}
        fontWeight={'bold'} color={'white'} align={'center'} variant={'h3'}>
        to work together
      </Typography>
      <Button
        component={motion.button} variants={landingItem}
        className={'try-btn'} variant={'contained'} color={'info'}>TRY FOR FREE</Button>
      <motion.div variants={landingItem}
        className={'prototype-tab'}>
        <div className={'header'}>
          <span className={'dot red'}/>
          <span className={'dot yellow'}/>
          <span className={'dot green'}/>
        </div>
        <div className={'content'}>
          <div className={'left-tab'}/>
          <div className={'right-tab'}>
            <div className={'item'}>
              <div className={'icon'}>
                <video width={80} height={80}
                  autoPlay loop muted playsInline
                  poster="https://a.slack-edge.com/6d2d0a/marketing/img/homepage/bold-prospect/hero/hero-avatar.png">
                    <source src="https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/hero-avatar.small.webm" type="video/webm"/>
                </video>
              </div>
              <div className={'message'}>Wait... what is Slack?</div>
            </div>
            <div className={'item'}>
              <div className={'icon'}>
                <img alt={'profile'} src={'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png'} />
              </div>
              <div className={'message'}>
                It’s a new way to communicate—faster than email and more focused than chat.
              </div>
              <div className={'reaction'}>
                <span><ThumbUpTwoToneIcon/><b>2</b></span>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default Landing;