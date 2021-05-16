import { ReactNode } from 'react';
import { MotionStyle, Variants } from 'framer-motion';

export interface PrototypePanelProps {
  className?: string;
  contentHeight?: string;
  contentWidth?: string;
  body?: ReactNode;
  leftTab?: ReactNode | true;
  rightTab?: ReactNode | true;
  variants?: Variants;
  hasChatBox?: boolean;
  style?: MotionStyle
}