import React from "react";
import Header from "../components/header.jsx";
import Table from "../components/kiittabledata.jsx";
import Form from "./kissform.jsx";
import Card from "../components/profilecard.jsx";
import { useState } from "react";

const Kiitp = () => {
  const [page, setPage] = useState(0);

  const handleComponent = (pages) => setPage(pages);

  return (
    <div>
      <Header />
      {page === 0 ? (
        <>
          {" "}
          <div className="py-8 bg-gray-100 rounded-lg lg:w-2/3  px-8 mx-8 my-24 bg-opacity-80 justify-center shadow-xl">
            <div className="text-left">
              <div className="flex">
                <h2 className="text-3xl font-semibold text-green-500  my-4 mx-2">
                  KISS  Data
                </h2>
              </div>
              <button
                className="bg-green-400 text-black font-semibold rounded-md px-4 py-1 hover:bg-green-500 hover:text-white border-none"
                onClick={() => handleComponent(page + 1)}
              >
                Add Purchase Details
              </button>
            </div>
            <Table />
          </div>
        </>
      ) : (
        <>
          <div className="py-8 bg-gray-100 rounded-lg md:w-3/4 px-8 mx-8 my-24 bg-opacity-90 justify-center shadow-lg">
            <div className="text-left">
              <div className=" flex ">
                <h2 className="text-3xl font-semibold text-green-600  my-4 mx-2">
                  Purchase Details
                </h2>
              </div>
              <div className=" ">
                <button
                  className="bg-green-400 text-black font-semibold rounded-md px-4 py-1 hover:bg-green-500 hover:text-white border-none"
                  onClick={() => handleComponent(page - 1)}
                >
                  Back
                </button>
              </div>
            </div>
            <Form />
          </div>
        </>
      )}

      <div className="fixed bottom-6 right-6">
        <Card />
      </div>

      {/* <Toast/> */}
    </div>
  );
};

export default Kiitp;
