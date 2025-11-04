import { Briefcase } from 'lucide-react';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';

export const ResumePage = () => {
  return (
    <MotionDiv>
      <div id="Resume" className="animate-moveRight">
        <IconLabel
          label="Resume"
          icon={Briefcase}
          clasName="border-2 border-gray-400 rounded-full w-[170px]"
        />
        <PageTitle label="Education & Experience"></PageTitle>
      </div>
    </MotionDiv>
  );
};
