import { Variants } from 'framer-motion';

export const grid: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 1
    }
  }
}

export const leftGrid: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: .2
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .5,
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

export const rightGrid: Variants = {
  hidden: {
    opacity: 0,
    // y: 500
  },
  show: {
    opacity: 1,
    // position: 'relative',
    // y: 400
  }
}