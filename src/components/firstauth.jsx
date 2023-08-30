import { React, useState, useContext } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../UserContext";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Firstauth = () => {

  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser, user } = useContext(UserContext);

    async function passupdate(ev){
      ev.preventDefault();
      try{
        const res = await axios.post();

      } catch(err){
        console.error(err);
      }
    }

  return (
    <div>
        <div className="flex justify-center h-screen items-center bg-cover shadow-lg ">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="colored"
        />
        <div className="w-full max-w-md items-center justify-center" >
          <div className="#b1ff8a shadow-lg rounded-md p-8">
            <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
              Set Password
            </h2>

            <form className="space-y-6 mt-6" onSubmit={passupdate} >
              
              <div className="text-left">
                <label
                  for="password"
                  className="block text-base font-medium text-black"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    // value={password}
                    // onChange={(ev) => {
                    //   setPassword(ev.target.value);
                    // }}
                    className="px-2 py-3 mt-1 block w-full text-black rounded-md border-4 bg-gray-300 border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-base"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 mt-8 text-lg font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Create Password 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Firstauth