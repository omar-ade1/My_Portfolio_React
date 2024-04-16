import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// Variants for the animations
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

const LeftPartText = () => {
  return (
    <div className="left-part w-1/2 smT0:w-[90%]  shadow-xl  flex flex-col rounded">
      <div className="text-part">
        <div className="flex xxsm:flex-col items-center gap-5">
          {/* Hello and name */}
          <h2 className="hidden xxsm:block bg-[var(--logo-color)] capitalize p-[2px] w-[100px] text-center rounded text-[var(--color-small-text)] font-bold">
            hello {"i'm"}
          </h2>
          <h2
            className={`title xxsm:text-4xl text-5xl relative w-fit font-bold text-white capitalize
                  before:content-["hello_i'm"] before:absolute before:top-[calc(-100%-10px)] before:text-lg
                  before:left-1/2 before:-translate-x-1/2 before:bg-[var(--logo-color)] before:p-[2px] before:w-[100px]
                  before:text-center before:rounded before:text-[var(--color-small-text)] before:font-bold xxsm:before:hidden xxsm:after:hidden`}
          >
            Mr.Omar adel
          </h2>

          {/* Image */}
          <div className="hidden smT0:flex image-me w-[80px] h-[80px] border bg-[var(--color-small-text)] rounded-full smT0:flex-center-center overflow-hidden">
            <img className="w-[80px]" src="./profile.webp" alt="my-photo" />
          </div>
        </div>

        {/* Type animation */}
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

        {/* Description */}
        <motion.p variants={varaints} initial="hidden" animate="show" className="mt-5 max-w-[500px] leading-[1.3]">
          <motion.span variants={childVaraints}>{"I'm"} a React.js front-end developer passionate about creating user-friendly web apps.</motion.span>{" "}
          <motion.span variants={childVaraints}>Skilled in HTML, CSS, JavaScript, and libraries like Tailwind CSS and Redux.</motion.span>{" "}
          <motion.span variants={childVaraints}>
            Experienced in API integration, responsive design, and using tools like Framer Motion for animations
          </motion.span>
        </motion.p>

        {/* Buttons */}
        <div className="btns flex gap-5 xxsm:justify-center mt-10 ">
          <button className="btn-cv btn btn-hero-hover before:bg-[#FFC300] bg-[#ff9800]">
            <span className="relative font-bold text-[rgb(30_39_43)]"> download cv</span>
          </button>
          <button className="btn-show-work btn-hero-hover before:bg-[#f44336] btn border">
            <span className="relative font-bold text-white">show work</span>
          </button>
        </div>

        {/* Contact info */}
        <div className="email-and-phone mt-10 flex xxsm:flex-col xsm:justify-center xxsm:divide-y-2 xxsm:divide-x-0 divide-x-2 gap-4">
          <div className="px-5">
            <a className="block" href="mailto:omar50001000@gmail.com">
              <div className="flex gap-3">
                <span className="material-symbols-outlined">mail</span>
                <p className="capitalize">email</p>
              </div>
              <p className="font-bold hover:underline">omar50001000@gmail.com</p>
            </a>
          </div>

          <div className="px-5 xxsm:pt-5">
            <a className="block" href="tel:966547042604">
              <div className="flex gap-3">
                <span className="material-symbols-outlined">call</span>
                <p className="capitalize">phone</p>
              </div>
              <p className="font-bold hover:underline">+966547042604</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPartText;
