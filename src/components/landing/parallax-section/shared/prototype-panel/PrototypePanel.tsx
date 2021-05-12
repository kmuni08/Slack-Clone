import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { ReactComponent as Lightning } from '../../../../../assests/lightning.svg';
import { motion } from 'framer-motion';
import './PrototypePanel.scss';
import { PrototypePanelProps } from './props';

// const PrototypePanel: FunctionComponent<PrototypePanelProps> =
  // ({ className, style= undefined, variants, contentHeight, leftTab, rightTab, hasChatBox = false }) => {
const PrototypePanel: ForwardRefRenderFunction<HTMLDivElement, PrototypePanelProps> =
  ({ className = undefined, style= undefined, variants, contentHeight, leftTab, rightTab, hasChatBox = false }, ref) => {
  return (
    <motion.div className={`prototype-panel ${className ? className : ''}`} style={style} ref={ref} variants={variants}>
      <div className={'header'}>
        <span className={'dot red'}/>
        <span className={'dot yellow'}/>
        <span className={'dot green'}/>
      </div>
      <div className={'content'} style={{ height: contentHeight ? contentHeight : 'auto' }}>
        <div className={'left-tab'}>{leftTab}</div>
        <div className={'right-tab'}>
          { rightTab }
          { hasChatBox &&
            <div className={'chat-box'}>
              <Lightning/><span/>
            </div>
          }
        </div>
      </div>
    </motion.div>
  )
}

export default forwardRef(PrototypePanel);