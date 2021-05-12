import { ReactNode } from 'react';
import { CompanyType } from '../company-btn-group/CompaniesBtnGroup';

export interface ActiveUsersProps {
  users: ActiveUser[],
  type: CompanyType,
}

export interface ActiveUser {
  src?: string
  name: string;
  poster?: string;
  secondPoster?: string;
  element?: ReactNode | any;
  videoType?: string;
  autoPlay?: boolean;
}