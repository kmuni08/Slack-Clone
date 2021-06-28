import { Variants } from 'framer-motion';
import { Theme, ThemeDark, ThemeLight } from '../../../interfaces';

export const appBar: Record<Theme, Variants> = {
  [ThemeDark]: {
    hidden: {},
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 1, staggerChildren: .2,  delayChildren: .5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: .5, ease: 'easeOut' }
    }
  },
  [ThemeLight]: {
    hidden: { opacity: 0, y: -50, visibility: 'hidden' },
    visible: {
      visibility: 'visible',
      opacity: 1, y: 0,
      transition: { duration: 1 }
    },
    exit: {
      opacity: 0,
      transition: { duration: .5, ease: 'easeOut' }
    }
  }
};

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
  },
  exit: {
    opacity: 0
  }
};