import React, { useContext, useEffect, useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import "../../styles/atoms/table.css";
import del from "../../assets/images/delete.svg";
import info from "../../assets/images/info.svg";
import look from "../../assets/images/look.svg";
import write from "../../assets/images/write.svg";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterModal from "./FilterModal";
import KPMGContext from "../../context/SampleContext";
import SearchBar from "./SearchBar";
import { IoIosClose } from "react-icons/io";
import demoData from "../../data/tableData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Dropdown from "./Dropdown";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const AddNewModal = ({ isOpen, onClose }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [second, setSecond] = useState(true);

  const handleSave = () => {
    // Implement save logic here
    console.log("Save clicked:", input1, input2, input3);
    // Close the modal after saving
    onClose();
  };

  return (
    // Modal container
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 overflow-y-auto z-50 `}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Modal header */}
          <div className="bg-[#4856BEF5] px-4 py-3 sm:px-6">
            <h3 className="text-lg font-medium text-white" id="modal-headline">
              Add New Lookup Type
            </h3>
          </div>

          {/* Modal body */}
          <div className="p-6 max-h-[350px] overflow-y-scroll flex gap-[2.5rem]
          ">
            {/* Input fields */}
            <div>
            <>
                <div className="mb-4">
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Code
              </label>
              <input
                type="text"
                id="input1"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Name
              </label>
              <input
                type="text"
                id="input2"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="input3"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows={2} // Set the number of rows
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            </>
            <>
                <div className="mb-4">
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Code
              </label>
              <input
                type="text"
                id="input1"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Name
              </label>
              <input
                type="text"
                id="input2"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="input3"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows={2} // Set the number of rows
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            </>
            </div>
            <div>
            <>
                <div className="mb-4">
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Code
              </label>
              <input
                type="text"
                id="input1"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Name
              </label>
              <input
                type="text"
                id="input2"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="input3"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows={2} // Set the number of rows
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            </>
            <>
                <div className="mb-4">
              <label
                htmlFor="input1"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Code
              </label>
              <input
                type="text"
                id="input1"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input2"
                className="block text-sm font-medium text-gray-700"
              >
                Lookup Type Name
              </label>
              <input
                type="text"
                id="input2"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input3"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="input3"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows={2} // Set the number of rows
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />
            </div>
            </>
            </div>

            
          </div>

          {/* Modal footer */}
          <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-end items-center">
          
           <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-[#4856BE] hover:bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const { selectedData, setSelectedData } = useContext(KPMGContext);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // set table data
  const [tableData, setTableData] = useState(demoData);
  const [tablePaginatedData, setTablePaginatedData] = useState([]);
  const [dataLength, setDataLength] = useState(demoData.length);

  // get columns from context
  const { columns, setColumns } = useContext(KPMGContext);

  // search filter
  const [searchFilter, setSearchFilter] = useState("");

  function paginateData(data, itemsPerPage) {
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      pages.push(data.slice(i, i + itemsPerPage));
    }
    return pages;
  }

  const initialAdvancedFilterState = Object.fromEntries(
    columns
      .filter((col) => {
        return col !== "Actions";
      })
      .map((column) => [column, { value: null, operator: null }])
  );
  const [advancedFilterState, setAdvancedFilterState] = useState(
    initialAdvancedFilterState
  );

  const operatorOptions = [
    "contains",
    "equals",
    "starts with",
    "ends with",
    "is empty",
    "is not empty",
    // "is any of",
  ];

  // Update state for a specific column's operator
  const updateOperator = (columnName, operator) => {
    setAdvancedFilterState((prevFilterState) => ({
      ...prevFilterState,
      [columnName]: {
        ...prevFilterState[columnName],
        operator: operator,
        value: null,
      },
    }));
  };

  // Update state for a specific column's value
  const updateValue = (columnName, value) => {
    setAdvancedFilterState((prevFilterState) => ({
      ...prevFilterState,
      [columnName]: {
        ...prevFilterState[columnName],
        value: value,
      },
    }));
  };

  const clearAdvancedFilter = () => {
    setAdvancedFilterState(initialAdvancedFilterState);
  };

  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // handle items per page change
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleAddNewClick = () => {
    // Open the Add New modal
    setAddModalOpen(true);
  };

  const handleEditClick = (data) => {
    // Open the Edit modal and set the selected data
    setSelectedData(data);
    setEditModalOpen(true);
  };

  const handleDeleteClick = (data) => {
    // Open the Delete modal and set the selected data
    setSelectedData(data);
    setDeleteModalOpen(true);
  };

  const closeModal = () => {
    // Close all modals
    setAddModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setOpenFilterModal(false);
  };

  const handleFilterModal = () => {
    setOpenFilterModal(true);
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  const applyAdvancedFilter = (data, advancedFilter) => {
    return data.filter((item) => {
      return Object.entries(advancedFilter).every(([fieldName, filter]) => {
        const columnValue = item[fieldName] || "";

        const filterValue = filter.value;
        const filterOperator = filter.operator;

        switch (filterOperator) {
          case "contains":
            return (
              !filterValue ||
              columnValue.toLowerCase().includes(filterValue?.toLowerCase())
            );
          case "equals":
            return (
              !filterValue ||
              columnValue.toLowerCase() === filterValue?.toLowerCase()
            );
          case "starts with":
            return (
              !filterValue ||
              columnValue.toLowerCase().startsWith(filterValue?.toLowerCase())
            );
          case "ends with":
            return (
              !filterValue ||
              columnValue.toLowerCase().endsWith(filterValue?.toLowerCase())
            );
          case "is empty":
            return columnValue === "";
          case "is not empty":
            return columnValue !== "";
          default:
            return true;
        }
      });
    });
  };

  // Example usage:

  useEffect(() => {
    // first filter from search
    let filteredData = tableData.filter(
      (row) =>
        !searchFilter ||
        row["Lookup Type Name"]
          .toLowerCase()
          .startsWith(searchFilter.toLowerCase())
    );

    // then advanced filter
    filteredData = applyAdvancedFilter(filteredData, advancedFilterState);
    setDataLength(filteredData.length);
    setTablePaginatedData(paginateData(filteredData, itemsPerPage));
  }, [itemsPerPage, searchFilter, advancedFilterState]);

  return (
    <div className="table-container-inside bg-[#F7F9FB] ">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4 pb-4">
          {/* <button
            type="button"
            className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Download
          </button> */}
          <Dropdown />

          <SearchBar
            handleSearch={handleSearch}
            advancedFilterState={advancedFilterState}
            setAdvancedFilterState={setAdvancedFilterState}
            initialAdvancedFilterState={initialAdvancedFilterState}
            operatorOptions={operatorOptions}
            updateOperator={updateOperator}
            updateValue={updateValue}
            clearAdvancedFilter={clearAdvancedFilter}
            searchFilter={searchFilter}
          />
        </div>

        <div className="w-full flex overflow-auto mt-10 justify-start">
          {Object.entries(advancedFilterState).map(
            ([columnName, { value, operator }]) => (
              <div key={columnName} className="flex items-center space-x-2">
                {operator && (
                  <div
                    key={columnName}
                    className="bg-[#4856BEF5] opacity-60 text-white rounded-full p-2 px-3 flex items-center space-x-1 text-xs"
                  >
                    <span className="">{columnName} :</span>
                    <span className="">{operator}</span>
                    <span className="">{value}</span>
                    <span
                      className="pt-0.25 cursor-pointer"
                      onClick={() => {
                        updateOperator(columnName, null);
                        updateValue(columnName, null);
                      }}
                    >
                      <IoIosClose color="white" size={"20px"} />
                    </span>
                  </div>
                )}
              </div>
            )
          )}

          {searchFilter && (
            <div className="flex items-center space-x-2 ml-4">
              <div className="bg-[#4856BEF5] opacity-60 text-white rounded-full p-2 px-3 flex items-center space-x-1 text-xs">
                <span className="">{searchFilter} </span>
                <span
                  className="pt-0.25 cursor-pointer"
                  onClick={() => {
                    setSearchFilter("");
                  }}
                >
                  <IoIosClose color="white" size={"20px"} />
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 justify-between px-4">
          <div className="flex flex-row justify-between gap-4">
            <button type="button" onClick={handleAddNewClick}>
              <AddCircleOutlinedIcon />
            </button>

            <FilterAltOutlinedIcon
              className="hover:bg-[rgb(0,0,0,0.1)]"
              onClick={handleFilterModal}
            />

            <ArrowDownwardIcon />
          </div>
        </div>
      </div>
      <AddNewModal isOpen={isAddModalOpen} onClose={closeModal} />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeModal}
        initialValue1={selectedData["Lookup Type Name"]}
        initialValue2={selectedData["Display Name"]}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeModal}
        onDelete={() => {}}
        itemName={selectedData["Lookup Type Name"]}
      />
      <FilterModal isOpen={openFilterModal} onClose={closeModal} />

      <div>
        <div
          className="relative overflow-x-auto"
          style={{ minHeight: "300px" }}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
            <thead className="text-xs text-white uppercase bg-[#4856BEF5] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className={`px-6 py-3 ${
                    columns.includes("Lookup Type Name") ? `` : `hidden`
                  } `}
                >
                  Lookup Type Name
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 ${
                    columns.includes("Display Name") ? `` : `hidden`
                  } `}
                >
                  Display Name
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 ${
                    columns.includes("Actions") ? `` : `hidden`
                  } `}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tablePaginatedData[currentPage - 1]?.map((data, index) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className={`flex-none px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
                        columns.includes("Lookup Type Name") ? `` : `hidden`
                      } `}
                      style={{ width: "33%" }}
                    >
                      {data["Lookup Type Name"]}
                    </th>
                    <td
                      className={`flex-grow px-6 py-4 ${
                        columns.includes("Display Name") ? `` : `hidden`
                      } `}
                      style={{ width: "33%" }}
                    >
                      {data["Display Name"]}
                    </td>
                    <td
                      className={`flex gap-3 px-6 py-4 ${
                        columns.includes("Actions") ? `` : `hidden`
                      } `}
                    >
                      {[write, look, del, info].map((image, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            image === del
                              ? handleDeleteClick(data)
                              : handleEditClick(data)
                          }
                        >
                          <img src={image} alt="icon" />
                        </button>
                      ))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pagination">
        <div className="relative inline-block">
          <label htmlFor="rowsPerPage" className="mr-2 text-gray-700">
            Rows Per Page:
          </label>
          <select
            id="rowsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border-none bg-transparent rounded p-2 appearance-none"
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="pages pt-1">
          <button>{`${
            tablePaginatedData?.length === 0
              ? 0
              : (currentPage - 1) * itemsPerPage + 1
          } - ${
            tablePaginatedData?.length === 0
              ? 0
              : (currentPage - 1) * itemsPerPage +
                tablePaginatedData[currentPage - 1]?.length
          } of ${dataLength}`}</button>
        </div>

        <button
          className="pagination-button mr-5 pt-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <GrPrevious color={currentPage <= 1 ? "lightgrey" : "black"} />
        </button>
        <button
          className="pagination-button pt-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= tablePaginatedData.length}
        >
          <GrNext
            color={
              currentPage >= tablePaginatedData.length ? "lightgrey" : "black"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Table;
