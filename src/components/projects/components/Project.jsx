import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";
import { CiLink } from "react-icons/ci";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.3,
      when: "beforeChildren",
      delay: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      mass: "1.5",

      // when: "beforeChildren",
    },
  },
};

const childChildVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      mass: "1.5",
    },
  },
};

const project = ({ img, title, demo, github }) => {
  return (
    <motion.div variants={childVariants} className="product border border-[#1e88e5] bg-[#003566] odd:bg-[#023047]  relative group rounded-xl  overflow-hidden">
      <div className="img-product relative rounded-xl overflow-hidden">
        <motion.img loading="lazy" variants={childChildVariants} className="h-[250px] w-full object-cover" src={img} />
        <div className="container-project-links mx-auto ">
          <div className="flex gap-3 p-2">
            <a href={github} target="_blank">
              <FaGithub className="text-xl border w-[20px] h-[20px] rounded-full p-[3px] box-content bg-slate-50 cursor-pointer" />
            </a>
            <a href={demo} target="_blank">
              <IoIosLink className="text-xl border w-[20px] h-[20px] rounded-full p-[3px] box-content bg-slate-50 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col justify-center items-center">
        <h3 className="text-xl capitalize font-bold text-white ">{title}</h3>
        <a className="text-white flex underline items-center" href={demo} target="_blank">
          demo
          <CiLink />
        </a>
      </div>
    </motion.div>
  );
};

export default project;
