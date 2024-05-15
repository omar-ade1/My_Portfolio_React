import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { CiLink } from "react-icons/ci";


const project = ({ img, title, demo, github }) => {
  return (
    <div className="product bg-[#003566] odd:bg-[#023047]  relative group rounded-xl  overflow-hidden">
      <div className="img-product relative rounded-xl overflow-hidden">
        <img loading="lazy" className="h-[250px] w-full object-cover" src={img} alt={title} />
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
    </div>
  );
};

export default project;
