/* -------------------------------------------------------------------------- */
/*                                Hero Section                                */
/* -------------------------------------------------------------------------- */
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LeftPartText from "./components/LeftPartText";
import RightPartImage from "./components/RightPartImage";

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

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-73px)] pt-[90px]  text-white flex items-center">
      <div className="container flex  items-center justify-around">
        
        <LeftPartText />
        <RightPartImage />
        
      </div>
    </div>
  );
};

export default Hero;
