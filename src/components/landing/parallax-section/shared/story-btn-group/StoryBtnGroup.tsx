import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './StoryBtnGroup.scss';
import { StoryData } from '../../../../../interfaces';

const StoryBtnGroup: FunctionComponent<{ stories: StoryData[], handler: Dispatch<SetStateAction<StoryData>>, active: string }> =
  ({ stories, handler, active }) => {

  return (
    <ButtonGroup variant={'outlined'} color={'secondary'} orientation={'vertical'} className={'story-btn-group'} >
      {
        stories.map((story, index) => {
          return (
            <Button key={`story-btn-${index}`}
                    onClick={() => handler(story)}
                    variant={ active === story.title ? 'contained' : 'outlined'}>
              <div className={'body'}>
                <div className={'title'}>{story.title}</div>
                <ChevronRightIcon/>
              </div>
            </Button>
          )
        })
      }
    </ButtonGroup>
  );
}

export default StoryBtnGroup;