import React, { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';

import Button from '@material-ui/core/Button';
import SmallCompaniesSVG from './SmallCompaniesSVG';
import MediumCompaniesSVG from './MediumCompaniesSVG';
import LargeCompaniesSVG from './LargeCompaniesSVG';

import './CompanyBtn.scss';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export type CompanyType = 'small' | 'medium' | 'large';
export const COMPANY_TYPE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const companies: { type: CompanyType, text: string, element: ReactNode }[] = [
  { type: 'small', text: 'Small companies', element: <SmallCompaniesSVG/> },
  { type: 'medium', text: 'Medium companies', element: <MediumCompaniesSVG/> },
  { type: 'large', text: 'Large companies', element: <LargeCompaniesSVG/> }
];

const CompanyBtnGroup: FunctionComponent<{ handler: Dispatch<SetStateAction<CompanyType>>, active: CompanyType }> = ({ handler, active }) => {

  return (
    <ButtonGroup variant={'outlined'} color={'secondary'}>
      {
        companies.map((item, index) => {
          return (
            <Button key={`company-btn-${index}`}
                    onClick={() => handler(item.type)} variant={active === item.type ? 'contained' : 'outlined'}>
              <div className={'body'}>
                <div className={'icon'}>{item.element}</div>
                <span>{item.text}</span>
              </div>
            </Button>
          )
        })
      }
    </ButtonGroup>
  );
}

export default CompanyBtnGroup;