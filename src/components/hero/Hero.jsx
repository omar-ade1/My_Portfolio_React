import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const varaints = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const childVaraints = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-80px)] pt-[80px]  text-white flex items-center">
      <div className="container flex  items-center justify-around">
        <div className="title w-1/2 smT0:w-[90%]  shadow-xl  flex flex-col rounded">
          <div className="text">
            <div className="flex xxsm:flex-col items-center gap-5">
              <h2
                className={`title xxsm:text-4xl text-5xl relative w-fit font-bold text-white capitalize before:content-["hello_i'm"] before:absolute before:top-[calc(-100%-10px)] before:text-lg before:left-1/2 before:-translate-x-1/2 before:bg-[var(--logo-color)] before:p-[2px] before:w-[100px] before:text-center before:rounded before:text-red-600 before:font-bold`}
              >
                Mr.Omar adel
              </h2>
              <div className="hidden smT0:flex image-me w-[80px] h-[80px] border bg-red-600 rounded-full smT0:flex-center-center overflow-hidden">
                <img className="w-[80px]" src="./profile.png" alt="" />
              </div>
            </div>
            <h2 className="xxsm:text-sm xxsm:text-center xxsm:font-bold text-lg mt-4  tracking-wider">
              {"I'm"}{" "}
              <TypeAnimation
                sequence={[
                  "Professional Front-End Developer", // Types 'One'
                  4000, // Waits 1s
                  " FreeLancer", // Deletes 'One' and types 'Two'
                  4000, // Waits 2s
                  " React.Js Developer", // Types 'Three' without deleting 'Two'
                  4000, // Waits 2s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
                speed={50}
                deletionSpeed={50}
              />
            </h2>

            <motion.p variants={varaints} initial="hidden" animate="show" className="mt-5 max-w-[500px] leading-[1.3]">
              <motion.span variants={childVaraints}>
                {"I'm"} a React.js front-end developer passionate about creating user-friendly web apps.
              </motion.span>{" "}
              <motion.span variants={childVaraints}>Skilled in HTML, CSS, JavaScript, and libraries like Tailwind CSS and Redux.</motion.span>{" "}
              <motion.span variants={childVaraints}>
                Experienced in API integration, responsive design, and using tools like Framer Motion for animations
              </motion.span>
            </motion.p>
          </div>

          <div className="btns flex gap-5 xxsm:justify-center mt-10 ">
            <button className="cv relative overflow-hidden block p-2 rounded capitalize bg-[#ff9800] transition-all duration-300">
              <span className="relative font-bold text-[rgb(30_39_43)]"> download cv</span>
            </button>
            <button className="work relative overflow-hidden border block p-2 rounded capitalize font-bold">
              <span className="relative text-white">show work</span>
            </button>
          </div>
          <div className="address mt-10 flex xxsm:flex-col xxsm:divide-y-2 xxsm:divide-x-0 divide-x-2 gap-4">
            <div className="px-5">
              <a className="block" href="mailto:omar50001000@gmail.com">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">mail</span>
                  <p className="capitalize">email</p>
                </div>
                <p className="font-bold">omar50001000@gmail.com</p>
              </a>
            </div>
            <div className="px-5 xxsm:pt-5">
              <a className="block" href="tel:966547042604">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined">call</span>
                  <p className="capitalize">phone</p>
                </div>
                <p className="font-bold">+966547042604</p>
              </a>
            </div>
          </div>
        </div>

        <div className="image-me w-[40%] smT0:hidden  flex-center-center overflow-hidden rounded">
          <img className="w-[500px] " src="./profile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
