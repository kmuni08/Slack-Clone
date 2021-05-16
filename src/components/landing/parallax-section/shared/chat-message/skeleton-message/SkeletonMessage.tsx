import React, { Fragment, FunctionComponent } from 'react';
import './SkeletonMessage.scss';

const SkeletonMessage: FunctionComponent<{ lines: number, short?: boolean }> = ({ lines, short = false }) => {
  return (
    <Fragment>
      {
        Array(lines).fill(0).map((_, index) => {
          return (
            <div key={`skeleton-message-${index}`} className={`skeleton-message ${short && (index === lines - 1) ? 'short' : ''}`}/>
          )
        })
      }
    </Fragment>
  )
}

export default SkeletonMessage;