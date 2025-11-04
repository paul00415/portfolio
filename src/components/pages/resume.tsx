import { Briefcase } from 'lucide-react';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';
import { ResumeCards } from '../molecules/cards/resumeCard';
import { Mail } from 'lucide-react';

export const ResumePage = () => {
  return (
    <MotionDiv>
      <div id="Resume">
        <IconLabel
          label="Resume"
          icon={Briefcase}
          clasName="border-2 border-gray-400 rounded-full w-[200px]"
        />
        <PageTitle label="Education & Experience"></PageTitle>
      </div>
      <div className="mt-20">
        <ResumeCards
          subTiltle="Senior Frontend Engineer"
          title="Kingsmen"
          time="May 2022 - Present"
          icons={[Mail, Mail, Mail]}
          avatar={Mail}
          description="Developed bespoke websites, web apps and mobile apps with user friendly UX/UI designs."
        />
        <ResumeCards
          subTiltle="Senior Frontend Engineer"
          title="Kingsmen"
          time="May 2022 - Present"
          icons={[Mail, Mail, Mail]}
          avatar={Mail}
          description="Developed bespoke websites, web apps and mobile apps with user friendly UX/UI designs."
        />
        <ResumeCards
          subTiltle="Senior Frontend Engineer"
          title="Kingsmen"
          time="May 2022 - Present"
          icons={[Mail, Mail, Mail]}
          avatar={Mail}
          description="Developed bespoke websites, web apps and mobile apps with user friendly UX/UI designs."
        />
        <ResumeCards
          subTiltle="Senior Frontend Engineer"
          title="Kingsmen"
          time="May 2022 - Present"
          icons={[Mail, Mail, Mail]}
          avatar={Mail}
          description="Developed bespoke websites, web apps and mobile apps with user friendly UX/UI designs."
        />
      </div>
    </MotionDiv>
  );
};
