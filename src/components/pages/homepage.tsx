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
    <div className="grid grid-cols-1 2xl:grid-cols-2  px-4 lx:px-20">
      <div className="text-6xl text-white font-extrabold px-14 lx:px-24 text-center 2xl:text-left mt-20">
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
          I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that
          blend thoughtful design with robust engineering. My favorite work lies at the intersection
          of design and development, creating experiences that not only look great but are
          meticulously built for performance and usability.
        </p>
        <Button
          onClick={() => {
            const section = document.getElementById('Contact');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          label="Contact Me"
          className="mt-5 mx-10 text-xl bg-pink-500"
        />
      </div>
      <div className="flex flex-col items-center ">
        <motion.div
          className="z-50 "
          initial={{ y: 100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ y: 0, opacity: 1 }} // Slide in when visible
          transition={{ duration: 2, ease: 'easeOut' }} // Smooth animation
          viewport={{ once: false, amount: 0.7 }} // Trigger when 30% visible
        >
          <img src={Iamge_Avatar} className="h-[700px]" />
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
            className="object-cover flex overflow-auto w-[500px] text-6xl sm:text-7xl 2xl:text-7xl p-2  text-white font-extrabold"
          ></PageTitle>
        </motion.div>
      </div>
    </div>
  );
};
