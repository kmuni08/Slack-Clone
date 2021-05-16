import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import './CompanyBtn.scss';
import { CompanyData, CompanyType } from '../../../../../interfaces';

const CompanyBtnGroup: FunctionComponent<{ companies: CompanyData[], handler: Dispatch<SetStateAction<CompanyType>>, active: CompanyType }> =
  ({ companies, handler, active }) => {

  return (
    <ButtonGroup variant={'outlined'} color={'secondary'} className={'company-btn-group'}>
      {
        companies.map((company, index) => {
          return (
            <Button key={`company-btn-${index}`}
                    onClick={() => handler(company.type)} variant={active === company.type ? 'contained' : 'outlined'}>
              <div className={'body'}>
                <div className={'icon'}>{company.element({})}</div>
                <span>{company.text}</span>
              </div>
            </Button>
          )
        })
      }
    </ButtonGroup>
  );
}

export default CompanyBtnGroup;