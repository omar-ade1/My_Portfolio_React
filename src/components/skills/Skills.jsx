import Title from "../shared/Title";
import { motion } from "framer-motion";
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
      duration: .3,
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
      duration: .3,
      type: "spring",
      mass: "1.5",
    },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="bg-[#051923]">
      

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#000814"
          fillOpacity="1"
          d="M0,224L0,256L288,256L288,128L576,128L576,192L864,192L864,32L1152,32L1152,256L1440,256L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
        ></path>
      </svg>

      <div className="py-[50px] bg-[#000814]">
        <Title title={"skills"} />
        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="container pt-[40px] xmdT0:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] grid grid-cols-[repeat(4,160px)] justify-center gap-10 "
        >
          <motion.div variants={childVariants} data-skill="html" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./html.svg" alt="html" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="css" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./css.svg" alt="css" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="java script" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./js.svg" alt="js" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="react.js" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./react.svg" alt="react" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="redux toolkit" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./redux.svg" alt="redux" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="tailwind" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./tailwind.svg" alt="tailwind" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="api" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./api.svg" alt="api" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="json" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./json.svg" alt="json" />
          </motion.div>
          <motion.div variants={childVariants} data-skill="bootstrap" className="skills-box">
            <motion.img loading="lazy" variants={childChildVariants} className="max-h-full" src="./bootstrap.svg" alt="bootstrap" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
