import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './LinkButton.scss'

const LinkButton: FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <Button className={'link-button'}>
      <div className={'body'}>
        <div className={'title'}>{text}</div>
        <ChevronRightIcon/>
      </div>
    </Button>
  );
}

export default LinkButton;