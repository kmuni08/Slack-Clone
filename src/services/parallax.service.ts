import { ReactComponent as Bot } from '../assests/bot.svg';
import { ProtoTypeData } from '../interfaces';
import { injectable } from 'inversify';
import { CompanyType } from '../components/landing/parallax-section/shared/company-btn-group/CompaniesBtnGroup';

const data: ProtoTypeData = {
  usersInConversation: {
    images: [
      {
        src: 'https://a.slack-edge.com/a2ce1/marketing/img/avatars/persona_j/persona-j.en-IN.png',
        types: ['small', 'medium', 'large']
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_g/persona-g.png',
        types: ['small', 'medium', 'large']
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_d/persona-d.png',
        types: ['small', 'medium', 'large']
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_i/persona-i.pt-BR.png',
        types: ['medium', 'large']
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png',
        types: ['medium', 'large']
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_h/persona-h.png',
        types: ['large']
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_a/persona-a.pt-BR.png',
        types: ['large']
      }
    ],
    count: [
      { num: 21, type: 'small' },
      { num: 147, type: 'medium' },
      { num: 467, type: 'large' },
    ]
  },
  activeUsers: [
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-pink.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-pink.small.webm',
      videoType: 'video/webm',
      autoPlay: true,
      name: 'Emily',
      types: ['small', 'medium', 'large']
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/man-cmon.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/man-cmon.small.webm',
      videoType: 'video/webm',
      name: 'Will',
      types: ['small']
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/man-waving-blue.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/man-waving-blue.small.webm',
      videoType: 'video/webm',
      name: 'Toby',
      types: ['small']
    },
    {
      poster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png',
      name: 'Arcadio',
      types: ['medium']
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/woman-dancing.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/woman-dancing.small.webm',
      videoType: 'video/webm',
      name: 'Mia',
      types: ['medium', 'large']
    },
    {
      poster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_e/persona-e.png',
      secondPoster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_f/persona-f.pt-BR.png',
      name: 'Jagdeep, Lisa',
      types: ['medium', 'large']
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/man-shrugging.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/man-shrugging.small.webm',
      videoType: 'video/webm',
      name: 'Marcus',
      types: ['medium', 'large']
    },
    {
      element: Bot,
      name: 'FinanceBot',
      types: ['large']
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-red.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-red.small.webm',
      videoType: 'video/webm',
      name: 'Elena',
      types: ['large']
    },
    {
      poster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_d/persona-d.png',
      name: 'Lisa',
      types: ['large']
    },
  ]
}

@injectable()
export class ParallaxService {
  private _data: ProtoTypeData;
  constructor() {
    this._data = data;
  }

  getActiveUsers(activeCompanyType: CompanyType) {
    return this._data.activeUsers.filter(activeUser => activeUser.types.some(type => type === activeCompanyType))
  }

  getUsersInConversation(activeCompanyType: CompanyType) {
    return {
      images: this._data.usersInConversation.images.filter(item => item.types.some(type => type === activeCompanyType))!.map(item => item.src),
      count: this._data.usersInConversation.count.find(item => item.type === activeCompanyType)!.num
    }
  }
}