import React, { useContext } from "react";
import KPMGContext from "../../context/SampleContext";

const Dropdown = () => {
  const { dropdown, setDropdown } = useContext(KPMGContext);

  return (
    <>
     
      {/* Dropdown menu */}
      
        <select
          value={dropdown}
          onChange={(event) => setDropdown(event.target.value)}
          className="text-black bg-white-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-none"
          aria-labelledby="dropdownDefaultButton"
        >
          <option
            value="Lookup Type"
            className="text-black bg-white-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-none">
            Lookup Type
          </option>
          <option
            value="Lookup"
            className="text-black bg-white-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-none"
          >
            Lookup
          </option>
        </select>
      
      
    </>
  );
};

export default Dropdown;
