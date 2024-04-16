import Project from "./components/Project";

// import required modules
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

const Projects = () => {
  return (
    <div id="projects" className="bg-[#000814]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#051923"
          fillOpacity="1"
          d="M0,128L0,32L288,32L288,256L576,256L576,160L864,160L864,32L1152,32L1152,160L1440,160L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#051923] py-[50px]">
        <Title title="projects" />
        <motion.div
          viewport={{ once: true }}
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="container grid grid-cols-3 gap-7 smT0:grid-cols-1 "
        >
          <Project
            demo="https://ashour-shop-5b7h.vercel.app/"
            github="https://github.com/omaradel376/Ashour-Shop"
            title="ashour shop"
            img="./ashour_store.webp"
          />
          <Project
            demo="https://omaradel376.github.io/my-portfolio/"
            github="https://github.com/omaradel376/my-portfolio"
            title="portfolio"
            img="./portfoilo.webp"
          />
          <Project
            demo="https://todo-app-react-gamma-eight.vercel.app/"
            github="https://github.com/omaradel376/todo-app-react"
            title="todo app"
            img="./todo.webp"
          />
          <Project
            demo="https://omaradel376.github.io/manegement-products/"
            github="https://github.com/omaradel376/manegement-products"
            title="CRUDS app"
            img="./mange_product.webp"
          />
          <Project
            demo="https://omaradel376.github.io/memory-game/"
            github="https://github.com/omaradel376/memory-game"
            title="memory game"
            img="./game.webp"
          />
          <Project
            demo="https://quiz-app-school-brown.vercel.app/"
            github="https://github.com/omaradel376/quiz-app-try"
            title="school website"
            img="./school.webp"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
