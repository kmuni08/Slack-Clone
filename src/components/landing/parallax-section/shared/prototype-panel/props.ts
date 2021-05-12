import { ReactNode } from 'react';
import { MotionStyle, Variants } from 'framer-motion';

export interface PrototypePanelProps {
  className?: string;
  contentHeight?: string;
  variants?: Variants;
  leftTab?: ReactNode;
  rightTab: ReactNode;
  hasChatBox?: boolean;
  style?: MotionStyle
}