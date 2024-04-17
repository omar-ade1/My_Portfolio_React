import Title from "../shared/Title";
import { motion } from "framer-motion";

const allVariants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.3,
      when: "beforeChildren",
      delay: 0.2,
    },
  },
};

const variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const variantsBoxs = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      mass: 1.2,
    },
  },
};

const About = () => {
  return (
    <div id="about">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#051923"
          fillOpacity="1"
          d="M0,192L0,160L360,160L360,32L720,32L720,256L1080,256L1080,64L1440,64L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z"
        ></path>
      </svg>



      <div className="about bg-[#051923] py-[50px]">
        <div className="container">
          <Title title={"About Me"} />
          <div className="flex justify-between smT0:flex-col items-center">
            <motion.div
              viewport={{ once: true }}
              variants={allVariants}
              initial="hidden"
              whileInView="show"
              className="text w-[60%] smT0:text-center smT0:w-full text-white"
            >
              <motion.h3 variants={variants} className="text-4xl font-semibold font-['Permanent_Marker']">
                Who Am Me ?
              </motion.h3>
              <motion.p variants={variants} className="mt-5 font-mono text-lg">
                I am a passionate front-end developer with a strong foundation in HTML, CSS, and JavaScript. I have experience working with libraries
                and frameworks like React.js, Tailwind CSS, and Redux, allowing me to create dynamic and responsive web applications. I am skilled in
                API integration, ensuring smooth communication between front-end and back-end systems. Additionally, I have a keen eye for design,
                which helps me create visually appealing and user-friendly interfaces. My goal is to continue learning and growing in the field of web
                development, taking on new challenges and delivering high-quality solutions.
              </motion.p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              variants={allVariants}
              initial="hidden"
              whileInView="show"
              className="w-[30%] smT0:w-[90%] smT0:mt-10 text-white space-y-3 "
            >
              <motion.div variants={variantsBoxs} className="box rounded-xl p-3 text-center smT0:w-[90%] w-fit capitalize bg-[#003554]">
                <h3 className="flex items-center gap-5">
                  <span className="text-4xl font-bold">2</span> <p className="text-xl font-bold font-mono">years expersont</p>
                </h3>
              </motion.div>
              <motion.div variants={variantsBoxs} className="box rounded-xl p-3 text-center smT0:w-[90%] w-fit ml-auto capitalize bg-[#003554]">
                <h3 className="flex items-center gap-5">
                  <span className="text-4xl font-bold">4</span> <p className="text-xl font-bold font-mono">programing lang</p>
                </h3>
              </motion.div>
              <motion.div variants={variantsBoxs} className="box rounded-xl p-3 text-center smT0:w-[90%] w-fit capitalize bg-[#003554]">
                <h3 className="flex items-center gap-5">
                  <span className="text-4xl font-bold">+5</span> <p className="text-xl font-bold font-mono">libraries helpful</p>
                </h3>
              </motion.div>
              <motion.div variants={variantsBoxs} className="box rounded-xl p-3 text-center smT0:w-[90%] w-fit ml-auto capitalize bg-[#003554]">
                <h3 className="flex items-center gap-5">
                  <span className="text-4xl font-bold">+15</span> <p className="text-xl font-bold font-mono">projects done</p>
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
