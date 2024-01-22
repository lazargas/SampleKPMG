import React from 'react'
import "../../styles/atoms/table.css";
import { tableData } from '../../data/tableData';
import del from "../../assets/images/delete.svg";
import info from "../../assets/images/info.svg";
import look from "../../assets/images/look.svg";
import write from "../../assets/images/write.svg";

const Table = () => {
  return (
    <div className='table-container-inside bg-[#F7F9FB] ' >
        <div className='table-header' >
            References
        </div>
        <div className='flex gap-5' >
           <button type="button" className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lookup</button>
           <button type="button" className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lookup Type</button>
        </div>
        <div className='w-[50%]' >
        <form>
  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
  >
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Mockups, Logos..."
      required=""
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>
</form>

        </div>
        <div>
        <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-white uppercase bg-[#4856BEF5] dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Lookup Type Name
        </th>
        <th scope="col" className="px-6 py-3">
          Display Name
        </th>
        <th scope="col" className="px-6 py-3">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      {
        tableData.map((data,index)=>{
           return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {data[0]}
            </th>
            <td className="px-6 py-4">{data[1]}</td>
            <td className="flex gap-2 px-6 py-4">
              {
                [write,look,del,info].map((image,index)=>{
                    return (
                        <img src={image} alt="icon" />
                    );
                })
              }    
            </td>     
          </tr>
           );
        })
      }
      
     
     
    </tbody>
  </table>
</div>

        </div>
    </div>
  )
}

export default Table