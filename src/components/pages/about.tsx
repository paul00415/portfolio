import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { User } from 'lucide-react';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';

export const AboutPage = () => {
  return (
    <MotionDiv>
      <div>
        <IconLabel
          label="About"
          icon={User}
          clasName="border-2 border-gray-400 rounded-full  w-[200px]"
        />
        <PageTitle
          className="text-left mt-5 text-5xl"
          label="Say Hi from Paul, Full Stack engineer"
        ></PageTitle>
        <p className="text-[30px] font-extrabold text-gray-300  mt-10 text-left">
          A skilled Full Stack Engineer with 5 years of industry experience. I am familiarwith
          Javscript/PHP/Java.
        </p>
        <div className="flex justify-center 2xl:justify-center flex-row gap-10">
          <div className="flex flex-col justify-center place-items-center">
            <p className="text-green-300 font-semibold text-8xl mt-20">
              {new Date().getFullYear() - 2020 + '+'}
            </p>
            <p className="text-gray-200 font-medium pt-5">
              YEARS OF <br />
              EXPIERENCE
            </p>
          </div>
          <div className="flex flex-col justify-center place-items-center 2xl:justify-start">
            <p className="text-green-300 font-semibold text-8xl mt-20">15+</p>
            <p className="text-gray-200 pt-5 font-medium uppercase">
              Projects completed <br />
              on 4 countries
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};
