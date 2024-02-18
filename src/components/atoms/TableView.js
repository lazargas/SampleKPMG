import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";

const TableView = (
  tableData,
  tablePaginatedData,
  checkFiltered,
  currentPage,
  handleDeleteClick,
  handleEditClick
) => {
  return (
    <TableContainer
      sx={{
        width: { lg: "1000px", xl: "1230px" },
        overflowX: "auto",
        mx: "auto",
        my: 1,
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
                    display: `${checkFiltered(col.columnName) ? "none" : ""}`,
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
          {tablePaginatedData[currentPage - 1]?.map((rowData, rowIndex) => (
            <TableRow key={rowIndex} className="border-b">
              {rowData.map((col, colIndex) => {
                return (
                  <TableCell
                    key={colIndex}
                    align="left"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      paddingRight: "0",
                      minWidth: { md: "250px", xl: "300px" },
                      fontSize: { md: "10px", lg: "12px" },
                      display: `${checkFiltered(col.columnName) ? "none" : ""}`,
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
                  display: `${checkFiltered("Actions") ? "none" : ""}`,
                }}
                className={`flex gap-3 `}
              >
                {[EditIcon, RemoveRedEyeIcon, DeleteIcon, InfoIcon].map(
                  (IconComponent, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        IconComponent === DeleteIcon
                          ? handleDeleteClick(rowData)
                          : handleEditClick(rowData)
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
                  )
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
