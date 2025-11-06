import { Mail } from 'lucide-react';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';
import { SendMailCard } from '../molecules/sendMailCard/sendMailcard';

export const Contact = () => {
  return (
    <MotionDiv>
      <div id="Contact" className="  flex flex-col w-[100%] mt-10">
        <div className="flex flex-col items-center sm:items-start">
          <IconLabel
            label="Contact"
            icon={Mail}
            clasName="border-2 border-gray-400 rounded-full w-[170px]"
          />
          <PageTitle className="text-left mt-5 text-5xl" label="Work Together"></PageTitle>
        </div>
        <div className="w-full px-4 lx:px-32">
          <SendMailCard />
        </div>
      </div>
    </MotionDiv>
  );
};
