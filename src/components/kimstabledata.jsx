import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// import Test from "./test";

const toastinfo = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "colored",
};

const Kiittabledata = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/hex").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  function handleUpdate(id) {
    toast.info("Switching to update page", {toastinfo});
    setTimeout(() => navigate("/test/" + id), 3000);
  }

  function handleDelete(id) {
    const conf = window.confirm("Delete it?");
    if (conf) {
      axios.delete("http://localhost:3030/hex" + id).then((res) => {
        alert("Record has been deleted!");
      });
    }
  }

  return (
    <div className="container mt-5">
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
      <table className="table rounded-xl">
        <thead className="text-base bg-gray-300 text-black ">
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-base ">
          {records.map((d, i) => (
            <tr className="hover:text-lg transition ease-in-out  hover:bg-green-200" key={i}>
              <td>{d.uhid_no}</td>
              <td>{d.patient_name}</td>
              <td>{d.bill_id}</td>
              <td className="gap-x-4">
                <button className="text-white text-base bg-gray-500 rounded-md px-2 py-2 mx-0.5 hover:bg-gray-700">
                  {" "}
                  View{" "}
                </button>
                <button
                  onClick={(e) => handleUpdate(d.id)}
                  className="text-white text-base bg-blue-500 rounded-md px-2 py-2 mx-0.5 hover:bg-blue-700"
                >
                  {" "}
                  Update
                </button>
                <button
                  onClick={(e) => handleDelete(d.id)}
                  className="text-white text-base bg-red-500 rounded-md px-2 py-2 mx-0.5 hover:bg-red-700"
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Kiittabledata;
