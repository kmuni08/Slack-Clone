import { Variants } from 'framer-motion';
import { AnimateDown, AnimateUp, AnimationDirection, Blue, White, Purple } from '../../../interfaces';

export const parallax: Variants = {
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  [`show-background-${White}`]: {
    opacity: 1,
    visibility: 'visible',
    backgroundColor: White,
    transition: {
      delayChildren: .5,
      staggerChildren: .5
    }
  },
  [`show-background-${Blue}`]: {
    opacity: 1,
    visibility: 'visible',
    backgroundColor: Blue,
    transition: {
      delayChildren: .5,
      staggerChildren: .5
    }
  },
  [`show-background-${Purple}`]: {
    opacity: 1,
    visibility: 'visible',
    backgroundColor: Purple,
    transition: {
      delayChildren: .5,
      staggerChildren: .5
    }
  },
}

export const parallaxScreen: Variants = {
  begin: {
    position: 'fixed',
  },
  end: {
    position: 'initial',
    // transform: `translate3d(0, 650vh, 0)`,
    y: '650vh'
  },
}

export const container: Variants = {
  hidden: {
    zIndex: -1
  },
  show: {
    zIndex: 1,
  },
}

export const leftGrid: Record<AnimationDirection, Variants> = {
  [AnimateUp]: {
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
        duration: .5,
        ease: 'easeInOut'
      }
    }
  },
  [AnimateDown]: {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        duration: .2
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .2,
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
}

export const rightGrid: Variants = {
  hidden: {
    opacity: 0,
    // transition: {
    //   // delay: .2
    // }
  },
  show: { opacity: 1 }
}