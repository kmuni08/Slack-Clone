import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

const CursorIcon: FunctionComponent<{ className?: string }> = ({ className }) => {
  return (
    <motion.svg className={className} width="135" height="182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.82 139.137L117 114.311l-43.116 64.396-16.346-21.432L14.828 182 0 173.387l42.711-24.725-36.891-9.525z" fill="#000"/>
      <path d="M134.003 0v20.216L90.887 84.612V64.396L134.003 0z" fill="#36C5F0"/>
      <path d="M74.543 42.965V63.18L90.89 84.612V64.396L74.543 42.965z" fill="#2F8AB7"/>
      <path d="M74.541 42.965L31.83 67.69v20.165L74.54 63.18V42.965z" fill="#36C5F0"/>
      <path d="M17 59.026v20.216l14.828 8.613V67.69l-14.827-8.664zM22.823 24.776V44.99l12.753 3.294 24.139-13.933-36.892-9.576z" fill="#2F8AB7"/>
      <path d="M22.823 24.776L134.003 0 90.887 64.396 74.541 42.965 31.831 67.69l-14.828-8.614 42.711-24.724-36.891-9.576z" fill="#fff"/>
    </motion.svg>
  )
}

export default CursorIcon;