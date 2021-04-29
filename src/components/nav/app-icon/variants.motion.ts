import { Variants } from 'framer-motion';

export const svg: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: .2,
      delayChildren: .5
    }
  }
}

export const path: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5,
      ease: 'easeInOut'
    }
  }
}