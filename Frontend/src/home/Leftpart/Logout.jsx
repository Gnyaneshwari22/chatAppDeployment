import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <>
      <hr />
      {/* <div className=" h-[9vh] bg-transparent ">
        <div>
          <BiLogOutCircle
            className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full  ml-2 mt-7"
            onClick={handleLogout}
          />
          {/* <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
            Log Out
          </h1> */}
      {/* </div>
      </div> */}

      <div className=" h-[10vh]">
        <div className="px-6 py-4">
          <div className="flex space-x-3">
            <BiLogOutCircle
              className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full  ml-2 mt-7"
              onClick={handleLogout}
            />
            <button>
              <div className="text-3xl p-8 hover:bg-gray-600 rounded-full duration-300">
                LOGOUT{" "}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
