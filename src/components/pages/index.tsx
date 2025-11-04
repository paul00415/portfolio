import { AboutPage } from './about';
import { ResumePage } from './resume';
import Skills from './skills';

export const Page = () => {
  return (
    <div className="flex flex-col gap-40">
      <AboutPage />
      <ResumePage />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
    </div>
  );
};
