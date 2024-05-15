import { useEffect, useState } from "react";
import {  doc, getDoc } from "firebase/firestore";
import { db } from "../../backend/firebase.config";

const Auth = ({ children }) => {

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const read = async () => {
    const docRef = doc(db, "admin", "admin");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUser(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    read();
  }, []);
  const checkIsAdmin = () => {
    if (email == user.email && password == user.password) {
      setIsAdmin(true)
    }
    else if (email != user.email){
      setEmail(false)
      setIsAdmin(false)
    }
    else if (password != user.password){
      setPassword(false)
      setIsAdmin(false)
    }
    else {
      setIsAdmin(false)
    }

  }

  return isAdmin ? (
    children
  ) : (
    <div className="w-[500px] max-w-full mx-auto relative flex flex-col justify-center h-[calc(100vh-100px)] p-4 rounded-md text-black bg-[#eee]">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Admin Dash <span className="text-[#7747ff]">Board</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to Admin Account</div>
      <div className="flex flex-col gap-3 bg-[#] p-4 rounded">
        <div className="block relative">
          <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Email
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            className={`${email == false ? "border-red-500" : "border-white"} rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0`}
          />
        </div>
        <div className="block relative">
          <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Password
          </label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id="password"
            className={`${password == false ? "border-red-500" : "border-white"} rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0`}
          />
        </div>
        <button onClick={checkIsAdmin} type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Auth;
