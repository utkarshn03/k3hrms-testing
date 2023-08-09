// import { useEffect } from "react";
import { useState } from "react";


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
        <tr className="border-gray-400 border-b hover:bg-green-300 opacity-80 transition ease-in-out duration-100 pt-4 text-lg" key={i}>
          {column.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div className=" shadow-lg rounded-lg overflow-hidden mx-2 md:mx-10 my-8">
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
