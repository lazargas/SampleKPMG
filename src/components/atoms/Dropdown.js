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
        className="w-[235px] text-white bg-[#4856BEF5] font-medium rounded-lg text-md  focus:outline-none appearance-none"
        aria-labelledby="dropdownDefaultButton"
      >
        <option
          value="Lookup Type"
          className="bg-white text-black font-medium text-sm py-5 "
        >
          Lookup Type
        </option>
        <option
          value="Lookup"
          className="bg-white text-black font-medium text-sm py-5 "
        >
          Lookup
        </option>
      </select>
    </>
  );
};

export default Dropdown;
