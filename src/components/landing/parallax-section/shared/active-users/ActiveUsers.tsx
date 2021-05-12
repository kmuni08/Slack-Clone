import React, { createRef, FunctionComponent, RefObject, useEffect, useRef, useState } from 'react';
import { usePrevious } from '../../../../../utils/usePrevious.hook';
import { CompanyType } from '../company-btn-group/CompaniesBtnGroup';
import { ActiveUser, ActiveUsersProps } from './props';
import './ActiveUsers.scss';

const ActiveUsers: FunctionComponent<ActiveUsersProps> = ({ users, type }) => {

  const [active, activeSetter] = useState(0);
  const videoRefs = useRef<{[key: string]: RefObject<HTMLVideoElement>}>({});
  const prvType = usePrevious<CompanyType>(type);

  // magic code
  // videoRefs.current = users.filter(item => !!item.videoType)
  //   .reduce((prv, curr) => ({ ...prv, [curr.name]: createRef<HTMLVideoElement>()}), {});

  const resetVideos = (except: string) => Object.getOwnPropertyNames(videoRefs.current)
    .filter(key => !videoRefs.current[key].current?.paused && key !== except)
    .forEach(key => videoRefs.current[key].current?.load());

  const playVideo = (name: string) => videoRefs.current[name]?.current?.play().then();

  // run when changing company type!
  useEffect(() => {
    prvType !== type && activeSetter(0);
  }, [prvType, type]);

  // run when active change!
  useEffect(() => {
    playVideo(users[active]?.name);
    resetVideos(users[active]?.name);
  }, [active, users]);

  const handler = (e: React.MouseEvent, item: ActiveUser, index: number) => {
    activeSetter(index);
    !!item.videoType && playVideo(item.name);
  }

  return (
    <div className={'active-users'}>
      {
        users.length && users.map((item, index) => {
          const ref = createRef<HTMLVideoElement>();
          !!item.videoType && (videoRefs.current[item.name] = ref)

          return (
            <div key={`${item.poster}`} className={`active-user ${index === active ? 'active' : ''}`}
                 onClick={(e) => handler(e, item, index)}
            >
            <span className={`active-user-profile ${type}`}>
              {
                item.src &&
                <video ref={ref}
                       loop muted playsInline poster={item.poster}>
                  <source src={item.src} type={item.videoType}/>
                </video>
              }
              { !item.src && !item.secondPoster && item.poster &&
              <img alt={'img'} src={item.poster} />
              }
              { !item.src && !item.poster && <item.element/> }
              { !item.src && item.secondPoster && item.poster &&
              <div className={'double-poster'}>
                <img alt={'img'} src={item.poster} />
                <img alt={'img'} src={item.secondPoster} />
              </div>
              }
            </span>
              <span className={'active-user-name'}>{item.name}</span>
            </div>
          );
        })
      }
    </div>
  );
}

export default ActiveUsers;