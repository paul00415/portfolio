import { Button } from '../../atoms/buttons/button';
import Input from '../../atoms/inputs/input';
import { motion } from 'framer-motion';
export const SendMailCard = () => {
  return (
    <div className="border-2 border-gray-300 rounded-3xl bg-transparent grid grid-cols-2 p-20 gap-20 mt-20 place-content-center">
      <div className="gird grid-rows-3 gap-y-10">
        <div className="grid gird-col-2 gap-4 ">
          <label>Full Name </label>
          <Input placeholder="Enter your full name" />
        </div>

        <div className="grid gird-col-2 gap-4 mt-12">
          <label>Phone </label>
          <Input placeholder="Enter Phone Number" />
        </div>
        <div className="grid gird-col-2 gap-4 mt-12">
          <label>Message</label>
          <Input placeholder="Enter message" />
        </div>
      </div>

      <div className="gird grid-rows-2">
        <div className="grid gird-col-2 gap-4 ">
          <label>Email </label>
          <Input placeholder="Enter your email" />
        </div>

        <div className="grid gird-col-2 gap-4 mt-12">
          <label>Budget </label>
          <Input placeholder="Enter budget" />
        </div>
      </div>
      <div className="col-span-2 flex justify-center">
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
