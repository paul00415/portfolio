import { Briefcase } from 'lucide-react';
import { IconLabel } from '../atoms/labels/iconLabel/iconLabel';
import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { MotionDiv } from '../atoms/motionDiv/motionDiv';
import { ResumeCards } from '../molecules/cards/resumeCard';
import Image_KingsMen from '../../assets/kingsmen.png';
import Image_Strypes from '../../assets/Strypes.png';
import Image_Lances from '../../assets/Lances.png';
import Image_Hanoi from '../../assets/Hanoi.png';
import { FaJava, FaReact, FaVuejs, FaAngular, FaNode, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiSqlite, SiMysql, SiMongodb, SiTypescript, SiJavascript } from 'react-icons/si';

export const ResumePage = () => {
  return (
    <div className="py-32">
      <MotionDiv>
        <div id="Resume">
          <IconLabel
            label="Resume"
            icon={Briefcase}
            clasName="border-2 border-gray-400 rounded-full w-[200px]"
          />
          <PageTitle label="Education & Experience"></PageTitle>
        </div>
      </MotionDiv>

      <div className="mt-10">
        <MotionDiv>
          <ResumeCards
            subTiltle="Senior Frontend Engineer"
            title="Kingsmen"
            time="May 2022 - Present"
            icons={[FaReact, FaJava, FaNode, SiTypescript, SiJavascript, SiMongodb]}
            image={Image_KingsMen}
            description="Developed bespoke websites, web apps and mobile apps with user friendly UX/UI designs."
          />
        </MotionDiv>
        <MotionDiv>
          <ResumeCards
            subTiltle="Full Stack Engineer"
            title="Strypes"
            time="Jun 2019 - Apr 2023"
            icons={[FaVuejs, SiTypescript, FaJava, SiMongodb, FaAngular]}
            image={Image_Strypes}
            description="Participated in projects including freelancing platforms, social, financial and eCommerce web application."
          />
        </MotionDiv>
        <MotionDiv>
          <ResumeCards
            subTiltle="Web Engineer"
            title="Lancers"
            time="Aug 2016 - May 2019"
            icons={[SiTypescript, SiJavascript, FaNode, FaLaravel, FaPhp, SiSqlite, SiMysql]}
            image={Image_Lances}
            description="Gained hands-on experience with Web Development, contributing to multiple projects under the guidance of senior developers."
          />
        </MotionDiv>
        <MotionDiv>
          <ResumeCards
            subTiltle="Student"
            title="Hanoi University"
            time="Apr 2012- Apr 2016"
            icons={[]}
            image={Image_Hanoi}
            description="Bachelor's  Degree, Computer Science."
          />
        </MotionDiv>
      </div>
    </div>
  );
};
