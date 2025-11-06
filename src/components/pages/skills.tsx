import { DevIcons } from '../atoms/deviceIcons/devIcons';
import { Skilllist, type skillProps } from '../../const';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { GraduationCap } from 'lucide-react';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
export default function Skills() {
  return (
    <div id="Skill" className="">
      <MotionDiv>
        <div className="flex flex-col items-center justify-items-center sm:items-start sm:justify-items-start">
          <IconLabel
            label="Skill"
            icon={GraduationCap}
            clasName="border-2 border-gray-400 rounded-full w-[170px]"
          />
          <PageTitle label="My Services" className="text-left mt-5 text-5xl"></PageTitle>
        </div>
      </MotionDiv>
      <div className="grid  grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {Skilllist?.map((value: skillProps) => {
          return (
            <div
              key={value.devName}
              className="flex flex-col place-items-center xl:place-items-start mt-10"
            >
              <div>
                <DevIcons icon={value.icon} iconSize={60} progress={value.progress}>
                  <></>
                </DevIcons>

                <p className="text-gray-300 mt-8 text-center font-semibold  text-xl">
                  {value.devName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
