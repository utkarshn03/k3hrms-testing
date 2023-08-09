import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import toasterror from "../toasts/toasterror";
import toastsuccess from "../toasts/toastsuccess";

const Verification = () => {

    const [ otp , setOtp ] = useState("");
    const [ redirect, setRedirect ] = useState(false);

    async function auth(ev){
      ev.preventDefault();
      try{
        const res = await axios.post("/api/user/verify_user", { otp });
        console.log(res);
        if(res.status === 200){

            toast.success("Verified", {toastsuccess});
              toast.success("Redirecting to pass reset", {toastsuccess});
            setRedirect(true);
        }

      } catch(err){
        if (err instanceof AxiosError) {
            if (err.code === "ERR_NETWORK") {
              const warnings = err.name + "!! " + err.code + err.message;
              toast.error(warnings, {toasterror});
            } else {
              const warnings =
                err.response.status + "!! " + err.response.data.message;
              toast.error(warnings, {toasterror});
            }
          }
      }
    }

    if (redirect) {
        setTimeout(() => navigate("/firstauth"), 3000);
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
            <h2 className="mt-6 mb-4 text-center text-4xl font-bold tracking-tight text-gray-900">
              Account Verification
            </h2>
            <p>Check your work email! <span className='text-black font-semibold'>{" "} test@xyz</span></p>

            <form className="space-y-6 mt-6" onSubmit={auth} >
              
              <div className="text-left">
                <label
                  for="otp"
                  className="block text-base font-medium text-black"
                >
                  One Time Password
                </label>
                <div className="mt-1">
                  <input
                    id="otp"
                    name="otp"
                    type="otp"
                    required
                    value={otp}
                    onChange={(ev) => {
                      setOtp(ev.target.value);
                    }}
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

export default Verification;