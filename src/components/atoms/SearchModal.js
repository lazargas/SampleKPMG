import { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import KPMGContext from "../../context/SampleContext";

export const SearchModal = ({ isOpen, onClose }) => {
  const {searchData,setSearchData} = useContext(KPMGContext);

  const handleSave = () => {
    // Implement save logic here
    console.log("Save clicked:");
    // Close the modal after saving
    onClose();
  };



  return (
    // Modal container
    <div
      className={`${
        isOpen ? "flex " : "hidden"
      } fixed inset-0 items-center justify-center z-50 bg-gray-800 bg-opacity-50`}
    >
      <form className="w-[30%] bg-white rounded-lg p-6">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
            placeholder="Search Name, Type..."
            required=""
          />
          <div className="absolute inset-y-0 right-20 flex items-center pl-3 pointer-events-none">
            <RiArrowDropDownLine size={"30px"} />
          </div>

          <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSave}
          >
            Search
          </button>
        </div>
         {/* Modal footer */}
      <div className=" px-4 py-3 sm:px-6 flex justify-center">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
      </form>
     
    </div>
  );
};
