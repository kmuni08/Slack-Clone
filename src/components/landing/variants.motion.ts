import { Variants } from 'framer-motion';

export const landing: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: .2,
      delayChildren: 1
    }
  }
}

export const landingItem: Variants = {
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

export const landingText: Variants = {
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

export const attention: Variants = {
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