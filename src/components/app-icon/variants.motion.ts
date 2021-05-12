import { Variants } from 'framer-motion';
import { Theme, ThemeDark, ThemeLight } from '../../interfaces';

export const svg: Record<Theme, Variants> = {
  [ThemeDark]: {
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
  },
  [ThemeLight]: {}
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