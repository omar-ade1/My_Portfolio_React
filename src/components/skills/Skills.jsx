import { doc, getDoc } from "firebase/firestore";
import Title from "../shared/Title";
import { AnimatePresence } from "framer-motion";
import { db } from "../../backend/firebase.config";
import { useEffect, useState } from "react";

const Skills = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Select Document From DataBase
    setLoading(true);
    const docRef = doc(db, "data", "skills");

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

  console.log(data);

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

        <AnimatePresence>
          {loading ? (
            <img className="block w-[150px] mx-auto" src="./loading2.gif" alt="loaading..." />
          ) : (
            <div className="container pt-[40px] xmdT0:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] grid grid-cols-[repeat(4,160px)] justify-center gap-10 ">
              {data?.allSkills.map((skill) => {
                return (
                  <div key={skill.id} data-skill={skill.skillName} className="skills-box">
                    <img loading="lazy" className="max-h-full" src={skill.imgUrlDown} alt="html" />
                  </div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
