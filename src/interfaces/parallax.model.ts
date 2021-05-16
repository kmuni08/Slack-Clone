import { FunctionComponent, ReactNode } from 'react';

export interface ActiveUser extends Partial<VideoData>{
  name: string;
  element?: ReactNode | any;
}

export interface VideoData {
  src: string;
  poster: string;
  secondPoster?: string;
  videoType: string;
  autoPlay?: boolean;
}

export interface ProtoTypeData {
  usersInConversation: {
    images: {
      src: string;
      types: CompanyType[]
    }[],
    count: {
      num: number,
      type: CompanyType
    }[]
  },
  activeUsers: (ActiveUser & { types: CompanyType[]})[]
}

export interface CompanyData {
  type: CompanyType,
  text: string;
  element: FunctionComponent;
}

export type CompanyType = 'small' | 'medium' | 'large';
export const COMPANY_SMALL = 'small';
export const COMPANY_MEDIUM = 'medium';
export const COMPANY_LARGE = 'large';

export interface StoryData {
  title: string;
  images: string[];
}

export interface PosterData {
  src?: string;
  element?: ReactNode | any;
  secondPoster?: string;
  percentage?: string;
  text?: string;
  color?: 'blue' | 'orange' | 'green';
}