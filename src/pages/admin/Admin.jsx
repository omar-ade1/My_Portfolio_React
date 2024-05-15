import SkillsPart from "./skillsPart/SkillsPart";
import ProjectsPart from "./projectsPart/ProjectsPart";

const Admin = () => {
  return (
    <div className="py-[50px]">
      <div className="container">
        <SkillsPart />
        <hr className="mt-5 border-[2px]" />
        <hr className="mt-5 border-[2px]" />

        <ProjectsPart />
      </div>
    </div>
  );
};

export default Admin;
