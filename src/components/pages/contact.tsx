import { Mail } from 'lucide-react';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';
import { SendMailCard } from '../molecules/sendMailCard/sendMailcard';

export const Contact = () => {
  return (
    <MotionDiv>
      <div
        id="Mail"
        className="w-[80%] 2xl:w-[80%] content-center flex flex-col justify-center place-items-center place-content-center "
      >
        <div>
          <IconLabel
            label="Contact"
            icon={Mail}
            clasName="border-2 border-gray-400 rounded-full w-[170px]"
          />
          <PageTitle label="Work Together"></PageTitle>
        </div>
        <div className="content-center flex flex-col justify-center place-items-center place-content-center">
          <SendMailCard />
        </div>
      </div>
    </MotionDiv>
  );
};
