import React, { useContext, useEffect, useState } from "react";
import EditModal from "../atoms/EditModal";
import DeleteModal from "../atoms/DeleteModal";
import "../../styles/atoms/table.css";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";

import { GrPrevious, GrNext } from "react-icons/gr";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterModal from "../atoms/FilterModal";
import KPMGContext from "../../context/SampleContext";
import SearchBar from "../atoms/SearchBar";
import { IoIosClose } from "react-icons/io";
import demoData from "../../data/tableData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Dropdown from "../atoms/Dropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { GridIcon, ListIcon, TableIcon } from "../../assets/Icons";
import "../../styles/atoms/select.css";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import AddNewModal from "../atoms/AddNewModal";
import ViewModal from "../atoms/ViewModal";

const DataView = ({ data }) => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  // state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // set table data
  const [tableData, setTableData] = useState(data);
  const [tablePaginatedData, setTablePaginatedData] = useState([[]]);
  const [dataLength, setDataLength] = useState(demoData.length);

  // get columns from context
  const { columns, setColumns } = useContext(KPMGContext);

  // search filter
  const [searchFilter, setSearchFilter] = useState("");

  // select view type
  const [tabView, setTabView] = useState("table");

  function paginateData(data, itemsPerPage) {
    const pages = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      const page = data.slice(i, i + itemsPerPage);
      pages.push(page);
    }

    return pages;
  }

  const initialAdvancedFilterState = tableData[0].map((col) => ({
    col: col.columnName,
    value: null,
    operator: null,
  }));

  const [advancedFilterState, setAdvancedFilterState] = useState(
    initialAdvancedFilterState
  );

  const [filteredColumns, setFilteredColumns] = useState([
    ...tableData[0].map((col) => ({
      col: col.columnName,
      filtered: false,
    })),
    {
      col: "Actions",
      filtered: false,
    },
  ]);

  const operatorOptions = [
    "contains",
    "equals",
    "starts with",
    "ends with",
    "is empty",
    "is not empty",
    // "is any of",
  ];

  const updateOperator = (columnName, operator) => {
    setAdvancedFilterState((prevFilterState) => {
      return prevFilterState.map((filter) => {
        if (filter.col === columnName) {
          return {
            ...filter,
            operator: operator,
            value: null,
          };
        }
        return filter;
      });
    });
  };

  // Update state for a specific column's value
  const updateValue = (columnName, value) => {
    setAdvancedFilterState((prevFilterState) => {
      return prevFilterState.map((filter) => {
        if (filter.col === columnName) {
          return {
            ...filter,
            value: value,
          };
        }
        return filter;
      });
    });
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

  const handleViewClick = (data) => {
    // Open the Edit modal and set the selected data
    setSelectedData(data);
    setViewModalOpen(true);
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
    setViewModalOpen(false);
    setOpenFilterModal(false);
  };

  const handleFilterModal = () => {
    setOpenFilterModal(true);
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  const applyAdvancedFilter = (data, advancedFilter) => {
    return data.filter((row) => {
      return row.every(({ columnName, columnValue }) => {
        const filter =
          advancedFilter?.find((filterObject) => {
            return filterObject.col === columnName;
          }) || {};

        const filterValue = filter?.value;
        const filterOperator = filter?.operator;

        switch (filterOperator) {
          case "contains":
            return (
              !filterValue ||
              columnValue.toLowerCase().includes(filterValue.toLowerCase())
            );
          case "equals":
            return (
              !filterValue ||
              columnValue.toLowerCase() === filterValue.toLowerCase()
            );
          case "starts with":
            return (
              !filterValue ||
              columnValue.toLowerCase().startsWith(filterValue.toLowerCase())
            );
          case "ends with":
            return (
              !filterValue ||
              columnValue.toLowerCase().endsWith(filterValue.toLowerCase())
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

  const handleSelectTabView = (viewType) => {
    setTabView(viewType);
  };

  const checkFiltered = (columnName) => {
    const column = filteredColumns.find((col) => col.col === columnName);

    return column ? column.filtered : false;
  };

  useEffect(() => {
    // first filter from search
    let filteredData = tableData.filter(
      (row) =>
        !searchFilter ||
        row.some(({ columnName, columnValue }) =>
          columnValue.toLowerCase().startsWith(searchFilter.toLowerCase())
        )
    );

    // then advanced filter
    filteredData = applyAdvancedFilter(filteredData, advancedFilterState);
    setDataLength(filteredData.length);
    setTablePaginatedData(paginateData(filteredData, itemsPerPage));
  }, [
    data,
    itemsPerPage,
    searchFilter,
    advancedFilterState,
    tableData,
    filteredColumns,
  ]);

  return (
    <div className="table-container-inside bg-[#F7F9FB] ">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <Dropdown data={["Lookup Type", "Lookup"]} />

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

          {advancedFilterState.map(({ col: columnName, value, operator }) => (
            <div key={columnName} className="flex items-center space-x-2">
              {operator && value && (
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
          ))}

{
  advancedFilterState.length+(searchFilter ? 1 : 0 ) > 0 && 
  <button>
    
  </button>
}
          
        </div>

        <div className="flex flex-col gap-1 justify-between px-4 pb-4">
          <div className="flex flex-row justify-between gap-4 pt-8">
            <AddCircleOutlineIcon
              className="hover:bg-[rgb(0,0,0,0.1)]"
              onClick={handleAddNewClick}
            />

            <DisplaySettingsIcon
              className="hover:bg-[rgb(0,0,0,0.1)]"
              onClick={handleFilterModal}
            />

            <ArrowCircleDownIcon className="hover:bg-[rgb(0,0,0,0.1)]" />
          </div>

          <div className="flex flex-row justify-between gap-3">
            <div
              className="mt-1 cursor-pointer"
              onClick={() => {
                handleSelectTabView("table");
              }}
            >
              <TableIcon
                size="19px"
                strokeColor={tabView === "table" ? "#4856bef5" : "black"}
              />
            </div>

            <div
              className="cursor-pointer"
              onClick={() => {
                handleSelectTabView("list");
              }}
            >
              <ListIcon
                size="24px"
                color={tabView === "list" ? "#4856bef5" : "black"}
              />
            </div>

            <div
              className="cursor-pointer"
              onClick={() => {
                handleSelectTabView("grid");
              }}
            >
              <GridIcon
                size="26px"
                color={tabView === "grid" ? "#4856bef5" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <AddNewModal
        isOpen={isAddModalOpen}
        onClose={closeModal}
        data={tableData}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeModal}
        selectedData={selectedData}
      />
      <ViewModal
        isOpen={isViewModalOpen}
        onClose={closeModal}
        selectedData={selectedData}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeModal}
        onDelete={() => {}}
        itemName={selectedData}
      />

      <FilterModal
        isOpen={openFilterModal}
        onClose={closeModal}
        filteredColumns={filteredColumns}
        setFilteredColumns={setFilteredColumns}
      />

      <div className="min-h-[350px]">
        {tabView === "table" && (
          <>
            <TableContainer
              sx={{
                width: { lg: "950px", xl: "1230px" },
                overflowX: "auto",
                mx: "auto",
                my: 0,
              }}
              component={Paper}
            >
              <Table className=" text-sm text-left">
                <TableHead>
                  <TableRow>
                    {tableData &&
                      tableData[0]?.map((col, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          sx={{
                            backgroundColor: "#4856BEF5",
                            color: "white",
                            fontWeight: "bold",
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "250px", xl: "300px" },
                            fontSize: { md: "12px", lg: "14px" },
                            display: `${
                              checkFiltered(col.columnName) ? "none" : ""
                            }`,
                          }}
                        >
                          {col.columnName}
                        </TableCell>
                      ))}
                    <TableCell
                      align="left"
                      sx={{
                        backgroundColor: "#4856BEF5",
                        color: "white",
                        fontWeight: "bold",
                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        paddingRight: "0",
                        minWidth: { md: "250px", xl: "300px" },
                        fontSize: { md: "12px", lg: "14px" },
                        display: `${checkFiltered("Actions") ? "none" : ""}`,
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tablePaginatedData[currentPage - 1]?.map(
                    (rowData, rowIndex) => (
                      <TableRow key={rowIndex} className="border-b">
                        {rowData.map((col, colIndex) => {
                          return (
                            <TableCell
                              key={colIndex}
                              align="left"
                              sx={{
                                borderBottom:
                                  "1px solid rgba(224, 224, 224, 1)",
                                paddingRight: "0",
                                minWidth: { md: "250px", xl: "300px" },
                                fontSize: { md: "10px", lg: "12px" },
                                display: `${
                                  checkFiltered(col.columnName) ? "none" : ""
                                }`,
                              }}
                            >
                              {col.columnValue}
                            </TableCell>
                          );
                        })}
                        <TableCell
                          align="left"
                          style={{
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "250px", xl: "300px" },
                            display: `${
                              checkFiltered("Actions") ? "none" : ""
                            }`,
                          }}
                          className={`flex gap-3 `}
                        >
                          {[
                            EditIcon,
                            RemoveRedEyeIcon,
                            DeleteIcon,
                            InfoIcon,
                          ].map((IconComponent, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                IconComponent === DeleteIcon
                                  ? handleDeleteClick(rowData)
                                  : IconComponent === EditIcon
                                  ? handleEditClick(rowData)
                                  : handleViewClick(rowData)
                              }
                            >
                              <IconComponent
                                className="mr-3"
                                sx={{
                                  fontSize: "25px",
                                  padding: "4px",
                                  borderRadius: "50%",
                                  "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                  },
                                }}
                              />
                            </button>
                          ))}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {tablePaginatedData.length === 0 && (
              <div
              >
                <h3 style={{width: "max-content", margin: "24px auto"}}>No Data Found</h3>
              </div>
            )}
          </>
        )}

        {tabView === "list" && (
          <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {tablePaginatedData[currentPage - 1]?.map((rowData, index) => (
              <div
                key={index}
                className="flex items-center bg-white border-2 border-[#4856bef5] dark:bg-gray-800 dark:border-gray-700 my-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div
                  className={`w-[80px] h-[80px] flex font-medium text-white bg-[#4856bef5] justify-center pt-7 rounded-l-md`}
                >
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </div>
                <div
                  className="w-[1000px] flex flex-row ml-[80px]"
                  style={{ overflowX: "auto" }}
                >
                  {rowData.map((col, colIndex) => (
                    <Box
                      key={colIndex}
                      sx={{
                        minWidth: { md: "200px", xl: "300px" },
                        width: { md: "300px", xl: "400px" },
                        mr: 2,
                        display: `${
                          checkFiltered(col.columnName) ? "none" : ""
                        }`,
                      }}
                    >
                      <div>
                        <Typography
                          variant="body1"
                          sx={{ fontSize: { md: "12px", xl: "14px" } }}
                        >
                          {col.columnName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            color: "black",
                            fontSize: { md: "12px", xl: "14px" },
                            marginTop: "5px",
                            textWrap: "wrap",
                          }}
                        >
                          {col.columnValue}
                        </Typography>
                      </div>
                    </Box>
                  ))}
                  <div className="w-[30%]">
                    <div
                      className={``}
                      style={{
                        display: `${checkFiltered("Actions") ? "none" : ""}`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { md: "12px", xl: "14px" } }}
                      >
                        Actions
                      </Typography>

                      <div className="flex flex-row items-center mt-1">
                        {[EditIcon, RemoveRedEyeIcon, DeleteIcon, InfoIcon].map(
                          (IconComponent, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                IconComponent === DeleteIcon
                                  ? handleDeleteClick(rowData)
                                  : IconComponent === EditIcon
                                  ? handleEditClick(rowData)
                                  : handleViewClick(rowData)
                              }
                            >
                              <IconComponent
                                className="mr-2"
                                sx={{
                                  fontSize: "25px",
                                  padding: "4px",
                                  borderRadius: "100%",
                                  "&:hover": {
                                    color: "#36454F",
                                  },
                                  color: "black",
                                }}
                              />
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tabView === "grid" && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tablePaginatedData[currentPage - 1]?.map((data, index) => (
              <Paper
                key={index}
                className="rounded-lg border-[3px] border-[#4856bef5]"
              >
                <div className="flex flex-row justify-between bg-[#4856bef5] rounded-t-sm p-4">
                  <Typography variant="body2" className="text-white">
                    Row {(currentPage - 1) * itemsPerPage + index + 1}
                  </Typography>
                  <div
                    className="flex gap-3 items-center"
                    style={{
                      display: `${checkFiltered("Actions") ? "none" : ""}`,
                    }}
                  >
                    {[EditIcon, RemoveRedEyeIcon, DeleteIcon, InfoIcon].map(
                      (IconComponent, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            IconComponent === DeleteIcon
                              ? handleDeleteClick(data)
                              : IconComponent === EditIcon
                              ? handleEditClick(data)
                              : handleViewClick(data)
                          }
                        >
                          <IconComponent
                            sx={{
                              fontSize: "18px",
                              color: "white",
                              "&:hover": {
                                color: "#d1d1d1",
                              },
                            }}
                          />
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 flex flex-row justify-between bg-white rounded-b-lg p-4">
                  {data.map((col, colIndex) => (
                    <div
                      key={colIndex}
                      style={{
                        display: `${
                          checkFiltered(col.columnName) ? "none" : ""
                        }`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        className="text-gray-400 py-1 text-sm"
                        style={{ fontWeight: "400" }}
                      >
                        {col.columnName}
                      </Typography>
                      <Typography
                        className="text-black text-xs "
                        style={{ fontSize: "12px" }}
                      >
                        {col.columnValue}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Paper>
            ))}
          </div>
        )}
      </div>

      <div className="pagination mr-4">
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
            <option value="5">5</option>
            <option value="10">10</option>
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

export default DataView;
