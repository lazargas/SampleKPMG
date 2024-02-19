import { useState, useContext } from "react";
import KPMGContext from "../../context/SampleContext";

const AddNewModal = ({ isOpen, onClose, data }) => {
  const { pageLabels, setPageLabels } = useContext(KPMGContext);

  const [columnFields, setColumnFields] = useState([]);

  const [mode, setMode] = useState("web");
  const [uploaded, setUploaded] = useState("pending");

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSave = () => {
    onClose();
  };

  useState(() => {
    const columns = data[0].map((col) => col.columnName);

    setColumnFields(columns);
  }, [data]);

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
              {`Add New ${pageLabels.name}`}
            </h3>
          </div>

          <div className="px-6 pt-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="web"
                value="web"
                checked={mode === "web"}
                onChange={() => setMode("web")}
                className="mr-2"
              />
              <label htmlFor="web" className="text-sm">
                Web
              </label>

              <input
                type="radio"
                id="excel"
                value="excel"
                checked={mode === "excel"}
                onChange={() => setMode("excel")}
                className="ml-4 mr-2"
              />
              <label htmlFor="excel" className="text-sm">
                Excel
              </label>
            </div>
          </div>

          {/* Modal body */}
          <div
            className="p-6 max-h-[350px] overflow-y-scroll flex gap-[2.5rem]
          "
          >
            {/* Input fields */}
            {mode === "web" && (
              <div className="my-4 mx-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {columnFields?.map((col, index) => (
                  <div className="mb-4" key={index}>
                    <label
                      htmlFor={`input-${col}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {col}
                    </label>
                    <input
                      type="text"
                      id={`input-${col}`}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}

            {mode === "excel" && (
              <div>
                {uploaded === "pending" && (
                  <div className="h-[350px]">
                    <p className="text-gray-700 text-sm mb-4">
                      Please fill the data according to the following columns
                      structure:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                      <p className="text-gray-600 font-semibold">
                        Example Excel Structure:
                      </p>
                      <table className="w-full mt-2">
                        <thead>
                          <tr>
                            <th className="border-b-2 border-gray-400 p-2 bg-gray-200">
                              Input Field 1
                            </th>
                            <th className="border-b-2 border-gray-400 p-2 bg-gray-200">
                              Input Field 2
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3].map((index) => (
                            <tr key={index}>
                              <td
                                className={`border-b border-gray-400 p-2 ${
                                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                }`}
                              >
                                Data 1
                              </td>
                              <td
                                className={`border-b border-gray-400 p-2 ${
                                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                }`}
                              >
                                Data 2
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {uploaded === "uploading" && (
                  <div className="h-[350px]">
                    <label className="block text-sm font-medium text-gray-700">
                      Choose File:
                      <input
                        type="file"
                        className="mt-1 block w-full border-gray-300 rounded-md pt-2 "
                        onChange={(e) => handleFileChange(e.target.files[0])}
                      />{" "}
                    </label>
                  </div>
                )}

                {uploaded === "uploaded" && (
                  <div className="w-[450px] h-[350px]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                      <thead className="text-xs text-white uppercase bg-[#4856BEF5] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className={`px-6 py-3 `}>
                            Lookup Type Name
                          </th>
                          <th scope="col" className={`px-6 py-3 `}>
                            Display Name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4].map((data, index) => {
                          return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th
                                scope="row"
                                className={`flex-none px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  `}
                              >
                                Data 1
                              </th>
                              <td className={`flex-grow px-6 py-4 `}>Data 2</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal footer */}
          <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-end items-center">
            <div className="bg-gray-100 px-4 py-3 sm:px-6 flex justify-end">
              {mode === "excel" && uploaded === "pending" && (
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-[#4856BE] hover:bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
                  onClick={() => setUploaded("uploading")}
                >
                  Generate Excel
                </button>
              )}

              {mode === "excel" && uploaded === "uploading" && (
                <button
                  type="button"
                  disabled={!selectedFile}
                  className={`inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-[#4856BE] ${
                    !selectedFile
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]`}
                  onClick={() => setUploaded("uploaded")}
                >
                  Upload Excel File
                </button>
              )}
              {(mode === "web" || uploaded === "uploaded") && (
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-[#4856BE] hover:bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
                onClick={() => {
                  setSelectedFile();
                  setUploaded("pending");
                  onClose();
                  setMode("web");
                }}
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

export default AddNewModal;
