import React from "react";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { BiSolidCheckCircle } from "react-icons/bi";


import styles from "../App.module.css";

const notify = () =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-10" : "-top-96",
        ])}
      >
        <div className="text-3xl ">
        <BiSolidCheckCircle />
        </div>
        <div className="text-lg mr-64">
          <h1>Success</h1>
          
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-right" }
  );

const App = () => {
  return (
    <div>
      <button classname="text-cs-dblue" onClick={notify}>Notify</button>
      <Toaster />
    </div>
  );
};

export default App;