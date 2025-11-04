import './App.css';
import { Mail, Briefcase, User, GraduationCap } from 'lucide-react';

import { Page } from './components/pages';
import { Blog } from './components/pages/blog';

function App() {
  return (
    <div className="container  relative flex flex-col 2xl:justify-between 2xl:flex-row items-center gap-40">
      <div className=" 2xl:fixed left-20 top-32 lx:left-20 mt-10 ">
        <Blog />
      </div>
      <div id="About" className="w-[65vw] py-12 ml-5 lg:py-10 2xl:ml-[530px] mt-5 2xl:mt-[90px]  ">
        <Page />
      </div>
      <div className=" fixed right-4 top-1/3 flex flex-col gap-6 bg-transparent border border-white p-4 rounded-xl text-white">
        <a href="#About">
          <User className="hover:drop-shadow-2xl" size="40px" />
        </a>
        <a href="#Resume">
          <Briefcase size="40px" />
        </a>
        <a href="#Skill">
          <GraduationCap size="40px" />
        </a>
        <a href="#Mail">
          <Mail size="40px" />
        </a>
      </div>
    </div>
  );
}

export default App;
