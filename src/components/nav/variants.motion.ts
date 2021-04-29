import { Variants } from 'framer-motion';

export const toolBar: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: .2,
      delayChildren: .5
    }
  }
}

export const toolBarItem: Variants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      ease: 'easeInOut'
    }
  }
}