import { useState, useContext } from "react";
import KPMGContext from "../../context/SampleContext";
const AddNewModal = ({ isOpen, onClose, data }) => {
  const { pageLabels, setPageLabels } = useContext(KPMGContext);

  const [columnFields, setColumnFields] = useState([]);

  const [mode, setMode] = useState("web");
  const [uploaded, setUploaded] = useState("pending");

  const [selectedFile, setSelectedFile] = useState();

  const [error, setError] = useState(true);
  const [dataError, setDataError] = useState(false);

  const errorClickHandler = (data) => {
    console.log(data);
    if (data > 2) setDataError((prevState) => !prevState);
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSave = () => {
    setUploaded("saved");

    if (!error) onClose();
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
      <div className="w-[450px] mx-auto flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
          className=" hidden sm:inline-block sm:align-middle sm:h-screen"
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
            <h3
              className="text-lg text-white"
              id="modal-headline"
              style={{ fontSize: "14px" }}
            >
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
              <label
                htmlFor="web"
                className="text-sm"
                style={{ fontSize: "12px" }}
              >
                Web
              </label>

              <input
                type="radio"
                id="excel"
                value="excel"
                checked={mode === "excel"}
                onChange={() => setMode("excel")}
                className="ml-4 mr-2"
                style={{ fontSize: "12px" }}
              />
              <label
                htmlFor="excel"
                className="text-sm"
                style={{ fontSize: "12px" }}
              >
                Excel
              </label>
            </div>
          </div>

          {/* Modal body */}
          <div
            className="p-6 max-h-[350px] flex gap-[2.5rem]
          "
          >
            {/* Input fields */}
            {mode === "web" && (
              <div className="overflow-y-scroll h-[120px] my-2 mx-2 grid grid-cols-2 gap-12">
                {columnFields?.map((col, index) => (
                  <div className="mb-2" key={index}>
                    <label
                      htmlFor={`input-${col}`}
                      className="block text-sm font-medium text-gray-700"
                      style={{ fontSize: "12px" }}
                    >
                      {col}
                    </label>
                    <input
                      type="text"
                      id={`input-${col}`}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      style={{ fontSize: "12px" }}
                    />
                  </div>
                ))}
              </div>
            )}

            {mode === "excel" && (
              <div>
                {uploaded === "pending" && (
                  <div className="h-[136px]">
                    <p
                      className="text-gray-700 text-sm mb-4"
                      style={{ fontSize: "12px" }}
                    >
                      Generate the excel file to upload the data :{" "}
                      <span>
                        <button
                          type="button"
                          className="px-2 text-sm text-[#4856BE] hover:text-blue-800 hover:bg-[#f2f2f2] rounded-md"
                          style={{ fontSize: "12px", fontWeight: 600 }}
                        >
                          Generate Excel
                        </button>
                      </span>
                    </p>

                    <div className="mt-8">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        style={{ fontSize: "12px" }}
                      >
                        <input
                          style={{ fontSize: "12px" }}
                          type="file"
                          className="mt-1 block w-full border-gray-300 rounded-md pt-2 "
                          onChange={(e) => handleFileChange(e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                )}

                {uploaded === "uploaded" && (
                  <div className=" w-[400px] h-[380px] rounded-lg">
                    <div className="overflow-x-auto overflow-y-auto max-h-[270px]">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                        <thead className="text-xs text-white uppercase bg-[#4856BEF5] dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className={`px-6 py-3 min-w-[150px]`}
                              style={{ fontSize: "11px" }}
                            >
                              Lookup Type Name
                            </th>
                            <th
                              scope="col"
                              className={`px-6 py-3 min-w-[150px]`}
                              style={{ fontSize: "11px" }}
                            >
                              Display Name
                            </th>
                          </tr>
                        </thead>
                        <tbody className="max-h-[200px] overflow-y-auto">
                          {[1, 2, 3, 4].map((data, index) => {
                            return (
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  style={{ fontSize: "10px" }}
                                  className={`flex-none px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[150px]`}
                                >
                                  Data 1
                                </th>
                                <td
                                  className={`flex-grow px-6 py-4 min-w-[150px]`}
                                  style={{ fontSize: "10px" }}
                                >
                                  Data 2
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <div
                      className="mt-6 mr-6"
                      style={{
                        fontSize: "12px",
                        display: "flex",
                        float: "right",
                      }}
                    >
                      No of rows : 200
                    </div>
                  </div>
                )}

                {error && uploaded === "saved" && (
                  <div className="w-[400px] max-h-[400px] rounded-lg">
                    <div className="overflow-x-auto overflow-y-auto max-h-[270px]">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
                        <thead className="text-xs text-white uppercase bg-[#4856BEF5] dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              scope="col"
                              className={`px-6 py-3 min-w-[100px]`}
                              style={{ fontSize: "11px" }}
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className={`px-6 py-3 min-w-[150px]`}
                              style={{ fontSize: "11px" }}
                            >
                              Lookup Type Name
                            </th>
                            <th
                              scope="col"
                              className={`px-6 py-3 min-w-[150px]`}
                              style={{ fontSize: "11px" }}
                            >
                              Display Name
                            </th>
                          </tr>
                        </thead>
                        <tbody className="max-h-[200px] overflow-y-auto">
                          {[1, 2, 3, 4].map((data, index) => {
                            return (
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  style={{
                                    fontSize: "11px",
                                    color: data > 2 ? "red" : "green",
                                    cursor: data > 2 ? "pointer" : "default",
                                  }}
                                  className={`flex-none px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[150px]`}
                                >
                                  <button
                                    onClick={(e) => errorClickHandler(data)}
                                  >
                                    {data > 2 ? "Error" : "Successful"}
                                  </button>
                                </th>
                                <th
                                  scope="row"
                                  style={{ fontSize: "10px" }}
                                  className={`flex-none px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[150px]`}
                                >
                                  Data 1
                                </th>
                                <td
                                  className={`flex-grow px-6 py-4 min-w-[150px]`}
                                  style={{ fontSize: "10px" }}
                                >
                                  Data 2
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <div className="h-[15px] ml-4 mt-5">
                      {dataError && (
                        <p style={{ fontSize: "12px", color: "red" }}>
                          Data 2 is a not a valid value for Lookup field
                        </p>
                      )}
                    </div>
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
                  disabled={!selectedFile}
                  className={`inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-[#4856BE] ${
                    !selectedFile
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-800"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]`}
                  onClick={() => setUploaded("uploaded")}
                  style={{ fontSize: "12px" }}
                >
                  Upload Excel File
                </button>
              )}

              {(mode === "web" || uploaded === "uploaded") && (
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-[#4856BE] hover:bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4856BE]"
                  onClick={handleSave}
                  style={{ fontSize: "12px" }}
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
                style={{ fontSize: "12px" }}
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
