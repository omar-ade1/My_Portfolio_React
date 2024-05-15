import Project from "./components/Project";
import Title from "../shared/Title";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../backend/firebase.config";
import { useEffect, useState } from "react";


const Projects = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Select Document From DataBase
    setLoading(true);
    const docRef = doc(db, "data", "projects");

    // Function Doc Snap
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setLoading(true);
          // Set State Of Tasks From DataBase
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      })
      // While Error
      .catch((error) => {
        console.error("Error getting document:", error);
      })
      // At The Least
      .finally(() => {
        // Hide The Sippner
        setLoading(false);
      });
  }, []);

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

            {loading ? (
              <img className="block w-[150px] mx-auto" src="./loading2.gif" alt="loaading..." />
            ) : (
            <div className = "container grid grid-cols-3 gap-7 smT0:grid-cols-1 ">
            {data?.allProjects.map((project) => {
              return (
                <Project key={project.id}
                demo={project.demoLink}
                github={project.gitHubRepo}
                title={project.ProjectName}
                img={project.imgUrlDown}
              />
              )
            })}
            </div>
            
            )}
            
           
          

        </div>
    </div>
  );
};

export default Projects;
