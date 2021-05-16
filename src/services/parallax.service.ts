import { ReactComponent as Bot } from '../assests/people-global.svg';
import { ReactComponent as PeopleGroupIcon } from '../assests/people-group.svg';
import { ReactComponent as PeopleGlobalIcon } from '../assests/people-global.svg';
import { injectable } from 'inversify';
import SmallCompaniesSVG from '../components/landing/parallax-section/shared/company-btn-group/SmallCompaniesSVG';
import MediumCompaniesSVG from '../components/landing/parallax-section/shared/company-btn-group/MediumCompaniesSVG';
import LargeCompaniesSVG from '../components/landing/parallax-section/shared/company-btn-group/LargeCompaniesSVG';

import {
  CompanyData,
  COMPANY_LARGE,
  COMPANY_MEDIUM,
  COMPANY_SMALL,
  CompanyType,
  ProtoTypeData,
  StoryData,
  VideoData, PosterData
} from '../interfaces';

const data: ProtoTypeData = {
  usersInConversation: {
    images: [
      {
        src: 'https://a.slack-edge.com/a2ce1/marketing/img/avatars/persona_j/persona-j.en-IN.png',
        types: [COMPANY_SMALL, COMPANY_MEDIUM, COMPANY_LARGE]
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_g/persona-g.png',
        types: [COMPANY_SMALL, COMPANY_MEDIUM, COMPANY_LARGE]
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_d/persona-d.png',
        types: [COMPANY_SMALL, COMPANY_MEDIUM, COMPANY_LARGE]
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_i/persona-i.pt-BR.png',
        types: [COMPANY_MEDIUM, COMPANY_LARGE]
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png',
        types: [COMPANY_MEDIUM, COMPANY_LARGE]
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_h/persona-h.png',
        types: [COMPANY_LARGE]
      },
      {
        src: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_a/persona-a.pt-BR.png',
        types: [COMPANY_LARGE]
      }
    ],
    count: [
      { num: 21, type: COMPANY_SMALL },
      { num: 147, type: COMPANY_MEDIUM },
      { num: 467, type: COMPANY_LARGE },
    ]
  },
  activeUsers: [
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-pink.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-pink.small.webm',
      videoType: 'video/webm',
      autoPlay: true,
      name: 'Emily',
      types: [COMPANY_SMALL, COMPANY_MEDIUM, COMPANY_LARGE]
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/man-cmon.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/man-cmon.small.webm',
      videoType: 'video/webm',
      name: 'Will',
      types: [COMPANY_SMALL]
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/man-waving-blue.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/man-waving-blue.small.webm',
      videoType: 'video/webm',
      name: 'Toby',
      types: [COMPANY_SMALL]
    },
    {
      poster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png',
      name: 'Arcadio',
      types: [COMPANY_MEDIUM]
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/woman-dancing.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/woman-dancing.small.webm',
      videoType: 'video/webm',
      name: 'Mia',
      types: [COMPANY_MEDIUM, COMPANY_LARGE]
    },
    {
      poster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_e/persona-e.png',
      secondPoster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_f/persona-f.pt-BR.png',
      name: 'Jagdeep, Lisa',
      types: [COMPANY_MEDIUM, COMPANY_LARGE]
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/man-shrugging.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/man-shrugging.small.webm',
      videoType: 'video/webm',
      name: 'Marcus',
      types: [COMPANY_MEDIUM, COMPANY_LARGE]
    },
    {
      element: Bot,
      name: 'FinanceBot',
      types: [COMPANY_LARGE]
    },
    {
      poster: 'https://a.slack-edge.com/93d9c/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-red.png',
      src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-avatars/woman-wave-red.small.webm',
      videoType: 'video/webm',
      name: 'Elena',
      types: [COMPANY_LARGE]
    },
    {
      poster: 'https://a.slack-edge.com/02792/marketing/img/avatars/persona_d/persona-d.png',
      name: 'Lisa',
      types: [COMPANY_LARGE]
    },
  ]
}

const companies: CompanyData[] = [
  { type: 'small', text: 'Small companies', element: SmallCompaniesSVG },
  { type: 'medium', text: 'Medium companies', element: MediumCompaniesSVG },
  { type: 'large', text: 'Large companies', element: LargeCompaniesSVG }
]

const stories: StoryData[] = [
  {
    title: 'Molly Moon’s Homemade Ice Cream',
    images: [
      'https://a.slack-edge.com/e7bc8/marketing/img/homepage/bold-prospect/customer-stories/companies-small/molly-moon/molly-moon-ui.png',
      'https://a.slack-edge.com/a14f7/marketing/img/homepage/bold-prospect/customer-stories/companies-small/molly-moon/molly-moon.png'
    ]
  },
  {
    title: 'Valley Behavioral Health',
    images: [
      'https://a.slack-edge.com/e7bc8/marketing/img/homepage/bold-prospect/customer-stories/companies-small/valley-behavioral-health/valley-behavioral-health-ui.png',
      'https://a.slack-edge.com/10fbd/marketing/img/homepage/bold-prospect/customer-stories/companies-small/valley-behavioral-health/valley-behavioral-health-accent.png'
    ]
  },
  {
    title: 'Frontline Foods',
    images: [
      'https://a.slack-edge.com/e7bc8/marketing/img/homepage/bold-prospect/customer-stories/companies-small/frontline-foods/frontline-foods-ui.png',
      'https://a.slack-edge.com/f4998/marketing/img/homepage/bold-prospect/customer-stories/companies-small/frontline-foods/frontline-foods-accent.png'
    ]
  }
];

const projectImage = 'https://a.slack-edge.com/8e6e2/marketing/img/homepage/bold-prospect/product-uis/slack-connect-ui.png'

const faceChatVideo: VideoData = {
  src: 'https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/bold-prospect/video-calling/video-calling.webm',
  poster: 'https://a.slack-edge.com/66965/marketing/img/homepage/bold-prospect/video-calling/video-calling.png',
  videoType: 'video/webm'
};

const posterImages: PosterData[] = [
  {
    src: 'https://a.slack-edge.com/f4998/marketing/img/homepage/bold-prospect/footer/people-waving.png',
    percentage: '84%',
    color: 'blue',
    text: 'of users feel more connected to their teams'
  },
  {
    element: PeopleGroupIcon,
    percentage: '75%',
    color: 'orange',
    text: 'of users depend on Slack to get work done'
  },
  {
    element: PeopleGlobalIcon,
    percentage: '91%',
    color: 'green',
    text: 'of users feel their ability to work remotely has improved'
  },
  {
    src: 'https://a.slack-edge.com/3b4b5/marketing/img/homepage/bold-prospect/footer/product-ui.png',
  },
]

@injectable()
export class ParallaxService {
  private _data: ProtoTypeData;
  private _companies: CompanyData[];
  private _stories: StoryData[];
  private _projectImage: string;
  private _faceChatVideo: VideoData;
  private _posters: PosterData[];

  constructor() {
    this._data = data;
    this._stories = stories;
    this._companies = companies;
    this._projectImage = projectImage;
    this._faceChatVideo = faceChatVideo;
    this._posters = posterImages;
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

  getCompanies(): CompanyData[] {
    return this._companies;
  }

  getStories(): StoryData[] {
    return this._stories
  }

  getProjectImage() {
    return this._projectImage;
  }

  getFaceChatVideo() {
    return this._faceChatVideo;
  }

  getPosters() {
    return this._posters;
  }
}