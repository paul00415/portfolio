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
  const isBigScreen = useMediaQuery('(min-width: 1520px)');
  return (
    <div>
      <div className="h-50vh" style={{ backgroundImage: `url(/back3.jpg)` }}>
        <HomePage />
      </div>
      <div className=" min-h-screen relative 2xl:p-20  flex flex-col 2xl:justify-between 2xl:flex-row items-center gap-0 2xl:gap-20">
        <div className=" 2xl:fixed left-20 top-32 2lx:left-20 ">
          {isBigScreen && sectionInView && (
            <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Blog />
            </motion.div>
          )}
        </div>
        <div
          ref={sectionRef}
          id="About"
          className="w-[64vw] py-10  2xl:py-12 md:ml-5 lg:py-10 ml-2 2xl:ml-[530px] mt-32 2xl:mt-[150px]  "
        >
          <Page />
        </div>
        <div className="invisible sm:visible sm:fixed right-4 top-1/3 flex flex-col gap-6 bg-transparent border border-white p-4 rounded-xl text-white">
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
