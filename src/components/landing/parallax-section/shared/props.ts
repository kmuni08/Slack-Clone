import { Dispatch, SetStateAction } from 'react';

type MinSectionHeight = number;
type SectionHeight = number;

export interface SectionProps {
  sectionHeights: [MinSectionHeight, SectionHeight];
  initialScrollY: number;
  offsetTop: number;
  handler: Dispatch<SetStateAction<any>>
}

// export interface SectionPropsWithHandler extends SectionProps{
//    handler: Dispatch<SetStateAction<any>>
// }

