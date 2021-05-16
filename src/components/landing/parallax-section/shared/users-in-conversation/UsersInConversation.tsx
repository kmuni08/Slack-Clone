import React, { FunctionComponent } from 'react';
import './UsersInConversation.scss';

const UsersInConversation: FunctionComponent<{ users: { images: string[], count: number }}> = ({ users: { images, count } }) => {
  return (
    <div className={'users-in-conversation'}>
      {
        images.length && images.map((src, index) =>
          <div key={`img-${src}`} className={'image-wrapper'} style={{ right: index * 25 + 40 }}>
            <img alt={'img'} src={src}/>
          </div>
        )
      }
      <span>{count}</span>
    </div>
  );
}

export default UsersInConversation;