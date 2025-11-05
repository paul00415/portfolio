import { AboutPage } from './about';
import { Contact } from './contact';
import { ResumePage } from './resume';
import Skills from './skills';

export const Page = () => {
  return (
    <div className="flex flex-col 2xl:flex-col gap-32 sm:gap-10 2xl:gap-20">
      <AboutPage />
      <ResumePage />
      <Skills />
      <Contact />
    </div>
  );
};
