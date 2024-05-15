import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

const Title = ({title}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{
        duration: 2,
        delay: 0.2,
      }}
      viewport={{once:true}}
      className="pb-[50px]"
    >
      <h2 className="titleOfSection text-4xl w-fit mx-auto p-3 rounded-xl text-white font-semibold tracking-wider capitalize">{title}</h2>
    </motion.div>
  );
};

export default Title;
