/* -------------------------------------------------------------------------- */
/*                                Hero Section                                */
/* -------------------------------------------------------------------------- */
import LeftPartText from "./components/LeftPartText";
import RightPartImage from "./components/RightPartImage";

const Hero = () => {
  return (
    <div id="home" className="min-h-[calc(100vh-73px)] pt-[90px]  text-white flex items-center">
      <div className="container flex  items-center justify-around">
        <LeftPartText />
        <RightPartImage />
      </div>
    </div>
  );
};

export default Hero;
