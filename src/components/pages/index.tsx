import { AboutPage } from './about';
import { Contact } from './contact';
import { ResumePage } from './resume';
import Skills from './skills';

export const Page = () => {
  return (
    <div className="flex p-12 sm:p-0  flex-col  gap-4 sm:gap-20 2xl:gap-20 content-center  justify-center place-items-center place-content-center">
      <AboutPage />
      <ResumePage />
      <Skills />
      <Contact />
    </div>
  );
};
