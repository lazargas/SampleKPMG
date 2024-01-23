// EditModal.js
import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, initialValue1, initialValue2 }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  useEffect(() => {
    // Set initial values when the modal is opened
    setInput1(initialValue1);
    setInput2(initialValue2);
  }, [isOpen, initialValue1, initialValue2]);

  const handleSave = () => {
    // Implement save logic here
    console.log("Save clicked:", input1, input2);
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
              Edit Lookup Type
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

export default EditModal;
