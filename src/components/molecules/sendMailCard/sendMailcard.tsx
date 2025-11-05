import { Button } from '../../atoms/buttons/button';
import Input from '../../atoms/inputs/input';
import { motion } from 'framer-motion';
export const SendMailCard = () => {
  return (
    <div className="border-2 border-gray-300 rounded-3xl bg-transparent mt-20">
      <div className=" grid grid-cols-1  sm:grid-cols-2 p-5 sm:p-10 md:p-20 gap-20 place-content-center">
        <div className="gird grid-rows-5 sm:grid-rows-3 gap-y-10">
          <div className="grid sm:gird-col-2 gap-4 text-left">
            <label>Full Name </label>
            <Input placeholder="Enter your full name" />
          </div>

          <div className="grid gird-col-2 gap-4 mt-12 text-left">
            <label>Phone </label>
            <Input placeholder="Enter Phone Number" />
          </div>
          <div className="grid gird-col-2 gap-4 mt-12 text-left">
            <label>Message</label>
            <Input placeholder="Enter message" />
          </div>
        </div>

        <div className="gird grid-rows-2">
          <div className="grid gird-col-2 gap-4 text-left">
            <label>Email </label>
            <Input placeholder="Enter your email" />
          </div>

          <div className="grid gird-col-2 gap-4 mt-12 text-left">
            <label>Budget </label>
            <Input className="text-sm" placeholder="Enter budget" />
          </div>
        </div>
      </div>
      <div className="col-span-2 flex justify-center p-5">
        <motion.div
          animate={{
            scaleX: [1, 1.2],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Button className="bg-green-800 text-gray-200 col-span-2 w-72" label="Send Message" />
        </motion.div>
      </div>
    </div>
  );
};
