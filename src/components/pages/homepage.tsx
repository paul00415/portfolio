import { motion } from 'framer-motion';
import Iamge_Avatar from '../../assets/Avatar3.png';
import { Button } from '../atoms/buttons/button';
import { useEffect, useState } from 'react';

import { PageTitle } from '../atoms/labels/pageTitle/pageTitle';
import { words } from '../../const';

export const HomePage = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[currentWord];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);
  return (
    <div className="2xl:p-40 grid grid-cols-1 2xl:grid-cols-2">
      <div className="text-6xl text-white font-extrabold px-32 text-center 2xl:text-left mt-20 2xl:mt-0">
        <p className="text-3xl">HELLO</p>
        <p>
          i'm <span className="text-green-500">Paul</span> a{' '}
        </p>
        <div className="flex flex-row text-center  place-content-center mt-5 ">
          <div className="text-6xl  font-extrabold text-pink-500 col-span-2 flex   mt-4">
            <p className="text-center flex bg-gradient-to-r from-green-400 via-pink-500 to-white bg-clip-text text-transparent ">
              {displayText}
            </p>
            <motion.span
              className="ml-1 w-[2px] h-[1em] bg-white inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
        </div>
        <p className="text-3xl p-5 text-gray-300">
          Outsourcing can provide corporate businesses with several advantages, incl b usinesses
          Outsourcing can provide usinesses Outsourcing can provide
        </p>
        <Button
          onClick={() => {
            const section = document.getElementById('About');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          label="View Portfolio"
          className="mt-5 text-xl bg-pink-500"
        />
      </div>
      <div className="flex flex-col items-center mt-12">
        <motion.div
          className="text-2xl  font-bold z-50 "
          initial={{ y: 300, opacity: 0 }} // Start off-screen to the left
          whileInView={{ y: 0, opacity: 1 }} // Slide in when visible
          transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
          viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible
        >
          <img src={Iamge_Avatar} />
        </motion.div>
        <motion.div
          className=" z-0 object-cover absolute text-center place-content-center "
          animate={{
            y: [10, 50],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <PageTitle
            label="Full Stack  Development"
            className="object-cover overflow-auto w-[500px] mt-10 text-6xl sm:text-7xl 2xl:text-7xl  text-white font-extrabold"
          ></PageTitle>
        </motion.div>
      </div>
    </div>
  );
};
