import React from "react";


const login = () => {
  return (
    <div className=" " >
      <div className="flex justify-center h-screen items-center bg-cover shadow-lg "  >
        <div className="w-full max-w-md items-center justify-center">
          
          <div className="#b1ff8a shadow-lg rounded-md p-8">
            <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900">
              Log In
            </h2>

            <form className="space-y-6 mt-6" action="#" method="POST">
              <div className="text-left">
                <label
                  for="password"
                  className="block text-base font-medium text-black"
                >
                  Employee id
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email-address"
                    autocomplete="email-address"
                    required
                    className="px-2 py-3 mt-1 block w-full text-black rounded-md border-4 bg-gray-300 border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-base"
                  />
                </div>
              </div>

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
                    autocomplete="password"
                    required
                    className="px-2 py-3 mt-1 block w-full text-black rounded-md border-4 bg-gray-300 border-gray-300 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-base"
                  />
                </div>
                <span className="text-sm text-gray-400">
                Forgot password?
              </span>
              </div>
              

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 mt-8 text-lg font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default login;
