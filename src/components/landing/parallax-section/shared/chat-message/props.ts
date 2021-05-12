import { ReactNode } from 'react';

export interface ChatMessageProps {
  icon: ReactNode;
  username?: string;
  time?: string;
  message?: {
    text: string,
    fontSize: string
  };
  skeleton?: {
    lines: number,
    short: boolean
  },
  attachment?: ReactNode;
  reactions?: {
    node: ReactNode;
    count: number;
  }[]
}