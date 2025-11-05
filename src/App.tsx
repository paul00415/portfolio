import './App.css';
import { Mail, Briefcase, User, GraduationCap } from 'lucide-react';

import { Page } from './components/pages';
import { Blog } from './components/pages/blog';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { HomePage } from './components/pages/homepage';
import { useMediaQuery } from './hooks/useMediaQuery';

function App() {
  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1 });
  const isBigScreen = useMediaQuery('(min-width: 1536px)');
  return (
    <div>
      <div className="pt-2 2xl:pt-40">
        <HomePage />
      </div>
      <div className=" min-h-screen relative mr-0  sm:px-20 ml-0 lx:ml-40 2xl:p-20  flex flex-col 2xl:justify-center 2xl:flex-row items-center gap-0 2xl:gap-20">
        <div className=" 2xl:fixed top-1/2 -translate-y-1/2 left-20 2lx:left-20 ">
          {isBigScreen && sectionInView && (
            <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Blog />
            </motion.div>
          )}
        </div>
        <div
          ref={sectionRef}
          id="About"
          className="2xl:pr-10 py-10  2xl:py-12 sm:ml-5 lg:py-10  2xl:ml-[530px] mt-32 2xl:mt-[150px]  "
        >
          <Page />
        </div>
        <div className="invisible w-[70px] place-items-center p-2 xl:visible sm:fixed right-4 top-1/3 flex flex-col gap-6 bg-transparent border border-white rounded-xl text-white">
          <motion.div
            className="box"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 50 }}
          >
            <a href="#About">
              <User className="hover:drop-shadow-2xl" size="40px" />
            </a>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 50 }}
          >
            <a href="#Resume">
              <Briefcase size="40px" />
            </a>
          </motion.div>
          <motion.div
            className="box"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 50 }}
          >
            <a href="#Skill">
              <GraduationCap size="40px" />
            </a>
          </motion.div>

          <motion.div
            className="box"
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 50 }}
          >
            <a href="#Mail">
              <Mail size="40px" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
