import React from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase.config";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";

const ProjectsPart = () => {
  const [data, setData] = useState(null); // All Data
  const [loading, setLoading] = useState(false); // Show Loading Or Not
  const [readData, setReadData] = useState(false); // To Update Document After Delete Or Read Data
  const [file, setFile] = useState(null); // Img Name And Path
  const [projectName, setProjectName] = useState(null); // Skill Name
  const [gitHubRepo, setGitHubRepo] = useState(null); // Skill Name
  const [demoLink, setDemoLink] = useState(null); // Skill Name
  const [disable, setDisable] = useState(true); // Img Name And Path

  const inputFileRef = useRef();

  // Disable Button Add When The Inputs Is Empty
  useEffect(() => {
    if (!projectName || !file || !gitHubRepo || !demoLink) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [projectName, file, gitHubRepo, demoLink]);

  // Read Data From DataBase
  useEffect(() => {
    // Select Document From DataBase
    setLoading(true);
    const docRef = doc(db, "data", "projects");

    // Function Doc Snap
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          // Set State Of Skills From DataBase
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
  }, [readData]);

  const storage = getStorage();

  // Get Date Of Day
  const handleDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  };

  // Main Function That Download Img To Storge And Run AddSkill Function
  const handleAddFileToStorge = () => {
    // Show Loading
    setLoading(true);
    const uniqueId = uuid(); // Unique Id

    // Function To DownLoad Img To FireBase
    const storageRef = ref(storage, `${uniqueId}_${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");

        // Get the download URL after Upload
        getDownloadURL(storageRef)
          .then((url) => {
            // url Is The Like Of Img
            console.log("File available at", url);
            addProject(url, `${uniqueId}_${file.name}`); // Run Add Skill Function
          })
          // While Error
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
      })
      // While Error
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  // Alert Before Delete
  const handleAlertDelete = (id, imgName) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id, imgName);
      }
    });
  };

  // Handle Delete Skill
  const handleDelete = (id, imgName) => {
    // This For All Tasks
    let newArrAllTasks = data.allProjects;
    // Filter Data To Delete Task
    const filter = newArrAllTasks.filter((project) => {
      return project.id != id;
    });
    const desertRef = ref(storage, imgName);

    // Delete the file From Storage In FireBase
    deleteObject(desertRef)
      .then(() => {
        console.log("Deleted Done");
      })
      .catch((error) => {
        console.log(" Uh-oh, an error occurred!", error);
      });
    // Updata State Data After Delete Update Only allTasks
    setData((prevData) => ({
      allProjects: filter,
    }));

    // Update All TasksIn DateBase After Delete
    const projectRef = doc(db, "data", "projects");
    updateDoc(projectRef, {
      allProjects: filter,
    });

    // This For Update Page After Delete
    setTimeout(() => {
      setReadData(!readData);
    }, 0);
  };

  // Handle Add Skill
  const addProject = (url, imgName) => {
    const unique_id = uuid();

    const skillsRef = doc(db, "data", "projects");
    updateDoc(skillsRef, {
      allProjects: [
        ...data.allProjects,
        {
          id: unique_id,
          ProjectName: projectName,
          imgUrlDown: url,
          imgName: imgName,
          gitHubRepo: gitHubRepo,
          demoLink : demoLink,
          addedIn: handleDate(),
        },
      ],
    }).finally(() => {
      setLoading(false);
      setReadData((prev) => !prev);
      setProjectName("");
      setGitHubRepo("");
      setDemoLink("");
      inputFileRef.current.value = "";
    });
  };

  return (
    <div className="add-skill w-[500px] max-w-full mx-auto mt-10">
      <h2 className="text-2xl font-bold capitalize text-center">Add Project</h2>
      <div>
        <div className="block relative">
          <label htmlFor="imgUrlProject" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Image URL
          </label>
          <input
            ref={inputFileRef}
            onChange={(evnet) => setFile(evnet.target.files[0])}
            type="file"
            id="imgUrlProject"
            className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0`}
          />
        </div>

        <div className="block relative">
          <label htmlFor="projectName" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Project Name
          </label>
          <input
            value={projectName}
            onChange={(event) => setProjectName(event.target.value)}
            type="text"
            id="projectName"
            className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0`}
          />
        </div>

        <div className="block relative">
          <label htmlFor="githubRepo" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            GitHub Repo
          </label>
          <input
            value={gitHubRepo}
            onChange={(event) => setGitHubRepo(event.target.value)}
            type="text"
            id="githubRepo"
            className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0`}
          />
        </div>

        <div className="block relative">
          <label htmlFor="demoLink" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Demo Link
          </label>
          <input
            value={demoLink}
            onChange={(event) => setDemoLink(event.target.value)}
            type="text"
            id="demoLink"
            className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0`}
          />
        </div>

        <button
          onClick={() => {
            handleAddFileToStorge();
          }}
          disabled={disable}
          className={`block 
              ${disable ? "bg-red-200 cursor-not-allowed" : "bg-red-500 cursor-pointer"}
              ${loading ? "bg-red-300 cursor-wait" : "bg-red-500 cursor-pointer"}
              
                bg-red-500 rounded py-2 px-5 font-bold text-white capitalize mx-auto mt-5`}
        >
          add
        </button>
        {loading ? (
          <img className="w-[100px] block mx-auto" src="./loading2.gif" alt="" />
        ) : (
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light text-surface">
                    <thead className="border-b border-neutral-400 bg-neutral-50 font-medium">
                      <tr>
                        <th scope="col" className=" px-6 py-4">
                          #
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          name
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          added in
                        </th>
                        <th scope="col" className=" px-6 py-4">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.allProjects.map((project, index) => {
                        return (
                          <tr key={project.id} className="border-b border-neutral-400">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">{index + 1}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{project.ProjectName}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{project.addedIn}</td>
                            <td className="whitespace-nowrap  px-6 py-4 gap-2 grid">
                              <button
                                type="button"
                                onClick={() => handleAlertDelete(project.id, project.imgName)}
                                className="inline-block rounded bg-red-600 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-red-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                              >
                                Delete
                              </button>{" "}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPart;
