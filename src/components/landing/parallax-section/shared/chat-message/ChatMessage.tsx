import React, { FunctionComponent } from 'react';
import SkeletonMessage from './skeleton-message/SkeletonMessage';
import { ChatMessageProps } from './props';
import './ChatMessage.scss';

const ChatMessage: FunctionComponent<ChatMessageProps> = ({ icon, username, time, skeleton, reactions, attachment, message }) => {
  return (
    <div className={'chat-message-item'}>
      <div className={'user-icon'}>
        {icon}
      </div>
      <div className={'user-message'}>
        <div className={'name'}>{username} { time && <span className={'time-stamp'}>{time}</span>}</div>
        { message && <div className={'message'} style={{ fontSize: message.fontSize }}>{message.text}</div>}
        { skeleton && <SkeletonMessage lines={skeleton.lines} short={skeleton.short} /> }
      </div>
      {
        attachment &&
        <div className={'attachment'}>
          {attachment}
        </div>
      }
      {
        reactions && reactions.length &&
        <div className={'reaction'}>
          {
            reactions?.map((reaction, index) => <span key={`reaction-${index}`}>{reaction.node}<b>{reaction.count}</b></span>)
          }
        </div>
      }
    </div>
  );
}

export default ChatMessage;