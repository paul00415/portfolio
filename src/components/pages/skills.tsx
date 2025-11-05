import { DevIcons } from '../atoms/deviceIcons/devIcons';
import { Skilllist, type skillProps } from '../../const';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { GraduationCap } from 'lucide-react';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
export default function Skills() {
  return (
    <div id="Skill">
      <MotionDiv>
        <div>
          <IconLabel
            label="Skill"
            icon={GraduationCap}
            clasName="border-2 border-gray-400 rounded-full w-[170px]"
          />
          <PageTitle label="My Services"></PageTitle>
        </div>
      </MotionDiv>
      <div className="grid justify-center grid0cols-1 sm:grid-cols-2 2xl:grid-cols-4">
        {Skilllist?.map((value: skillProps) => {
          return (
            <div
              key={value.devName}
              className="flex flex-col justify-center place-items-center mt-10 "
            >
              <DevIcons icon={value.icon} iconSize={100} progress={value.progress}>
                <></>
              </DevIcons>

              <p className="text-gray-300 font-semibold mt-4 ">{value.devName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
