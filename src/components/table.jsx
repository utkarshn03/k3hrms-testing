// import { useEffect } from "react";
import { useState } from "react";
import TableData from "./kiittabledata";

function Table() {

    const [cpage, setcpage] = useState();
    const lastindex = cpage * 20;
    const firstindex = lastindex - 20;
    console.log(firstindex, setcpage);

  const column = Object.keys(TableData[0]);

  // get table heading data
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };

  // get table row data
  const tdData = () => {
    return TableData.map((data,i) => {
      return (
        <tr className="border-gray-400 border-b hover:bg-green-300 opacity-80 transition ease-in-out duration-100" key={i}>
          {column.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div className=" bg-white rounded-lg justify-center overflow-x-auto bg-opacity-70 shadow-lg ">
    <table className="table w-full text-black relative">
      <thead className=" text-black bg-gray-200 text-sm w-full bg-opacity-60 uppercase sm:rounded-lg">
        <tr>{ThData()}</tr>
      </thead>
      <tbody >{tdData()}</tbody>
    </table>
    </div>
  );
}
export default Table;
