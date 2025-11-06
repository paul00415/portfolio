import { AboutPage } from './about';
import { Contact } from './contact';
import { ResumePage } from './resume';
import Skills from './skills';

export const Page = () => {
  return (
    <div className="flex  sm:p-0  flex-col  gap-4 sm:gap-20 ">
      <AboutPage />
      <ResumePage />
      <Skills />
      <Contact />
    </div>
  );
};
