import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import "../../styles/atoms/table.css";
import { tablePaginatedData } from "../../data/tableData";
import del from "../../assets/images/delete.svg";
import info from "../../assets/images/info.svg";
import look from "../../assets/images/look.svg";
import write from "../../assets/images/write.svg";

const AddNewModal = ({ isOpen, onClose }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

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
      } fixed inset-0 overflow-y-auto z-50`}
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
          <div className="p-6">
            {/* Input fields */}
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
          </div>

          {/* Modal footer */}
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
  );
};

const Table = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
  };

  console.log(tablePaginatedData[currentPage - 1]);
  return (
    <div className="table-container-inside bg-[#F7F9FB] ">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <button
            type="button"
            className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleAddNewClick}
          >
            Add New
          </button>
          {/* <button
            type="button"
            className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Download
          </button> */}
        </div>
        <div className="w-[30%]">
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
                placeholder="Search Name, Type..."
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
      </div>
      <AddNewModal isOpen={isAddModalOpen} onClose={closeModal} />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeModal}
        initialValue1={selectedData[0]}
        initialValue2={selectedData[1]}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeModal}
        onDelete={() => {}}
        itemName={selectedData[0]}
      />
      <div>
        <div
          className="relative overflow-x-auto"
          style={{ minHeight: "300px" }}
        >
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
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
              {tablePaginatedData[currentPage - 1].map((data, index) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data[0]}
                    </th>
                    <td className="px-6 py-4">{data[1]}</td>
                    <td className="flex gap-3 px-6 py-4">
                      {[write, look, del, info].map((image, index) => {
                        return (
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
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pagination">
        {currentPage > 1 && (
          <>
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"<"}
            </button>
          </>
        )}

        <div className="pages">
          <button className="active-page">{currentPage}</button>
          {currentPage < tablePaginatedData.length && (
            <>
              <button
                className="non-active-page"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              {currentPage + 2 <= tablePaginatedData.length && <span>...</span>}
            </>
          )}
        </div>

        {currentPage < tablePaginatedData.length && (
          <>
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {">"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Table;
