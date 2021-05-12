import { Variants } from 'framer-motion';

export const parentDiv: Variants = {
  hidden: {
    opacity: 0,
    visibility: 'hidden',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      duration: 1,
      staggerChildren: .2,
      delayChildren: 1
    }
  }
}

export const otherItem: Variants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

export const text: Variants = {
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

export const textWithAttention: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    rotate: [-45, 0],
    transition: {
      duration: 0.5,
      times: [0, 1],
      ease: [0.250, 0.460, 0.450, 0.0940]
    }
  }
}