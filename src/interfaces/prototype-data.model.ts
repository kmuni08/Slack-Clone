import { CompanyType } from '../components/landing/parallax-section/shared/company-btn-group/CompaniesBtnGroup';
import { UnboxType } from './index';
import { ActiveUsersProps } from '../components/landing/parallax-section/shared/active-users/props';

export interface ProtoTypeData {
  usersInConversation: {
    images: {
      src: string;
      types: CompanyType[]
    }[],
    count: {
      num: number,
      type: CompanyType
    }[]
  },
  activeUsers: (UnboxType<ActiveUsersProps['users']> & { types: CompanyType[]})[]
}