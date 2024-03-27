import React, { useContext, useState } from "react";
//MUI
import {
    Table,
    TableHead,
    TableContainer,
    Paper,
    TableRow,
    TableCell,
    TableBody,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Chip,
    Checkbox,
    Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import CheckIcon from '@mui/icons-material/Check';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import KPMGContext from "../../../../../context/SampleContext";



const CustomTable = ({ TableData }) => {



    const { attributeData, setAttributeData } = useContext(KPMGContext);
    const handleChange = (index, selectedValues) => {
        setAttributeData((prevData) => {
            const newData = [...prevData];
            newData[index].values = selectedValues;
            return newData;
        });
    };
    const handleAttributeChange = (index, newName) => {
        setAttributeData((prevData) => {
            const newData = [...prevData];
            // Reset values array when attribute changes
            newData[index].name = newName;
            newData[index].values = [];
            return newData;
        });
    };
    const handleChipDelete = (rowIndex, chipIndex) => {
        setAttributeData((prevData) => {
            const newData = [...prevData];
            newData[rowIndex].values.splice(chipIndex, 1);
            return newData;
        });
    };
    const handleDeleteRow = (index) => {
        if (attributeData.length > 1) {
            setAttributeData((prevData) => {
                const newData = [...prevData];
                newData.splice(index, 1);
                return newData;
            });
        }
    };
    const handleAddRow = () => {
        setAttributeData((prevData) => [...prevData, { name: "", values: [] }]);
    };

    return (
        <>
            <TableContainer
                sx={{
                    overflowX: "auto",
                }}
                component={Paper}
                className=""
            >
                <Table className=" text-sm text-left">
                    <TableHead>
                        <TableRow>
                            {TableData.headers?.map(
                                (data, i) => (
                                    <TableCell
                                        key={i}
                                        align="left"
                                        sx={{
                                            backgroundColor: "#4856BEF5",
                                            color: "white",
                                            fontWeight: "bold",
                                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                            paddingRight: "0",
                                            minWidth: { md: "250px", xl: "300px" },
                                            fontSize: { md: "10px", lg: "12px" },
                                        }}
                                    >
                                        {data}
                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attributeData.map((row, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                className={`border-b bg-white hover:bg-gray-100`}
                            >
                                <TableCell
                                    align="left"
                                    sx={{
                                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                        paddingRight: "0",
                                        minWidth: { md: "250px", xl: "300px" },
                                        fontSize: { md: "10px", lg: "12px" },
                                    }}
                                >
                                    <Tooltip title="Add attribute" arrow>
                                        <FormControl
                                            fullWidth
                                            sx={{
                                                "& .MuiInput-underline::before, & .MuiInput-underline::after":
                                                {
                                                    borderBottom: "none",
                                                },
                                            }}
                                        >
                                            <InputLabel
                                                id={`attribute-label-${rowIndex}`}
                                                style={{ fontSize: "14px" }}
                                            >
                                                Attribute Name
                                            </InputLabel>
                                            <Select
                                                sx={{
                                                    boxShadow: "none",
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        border: 0,
                                                    },
                                                    fontSize: "12px",
                                                    width: "200px",
                                                }}
                                                value={row.name}
                                                label={`Attribute-${rowIndex}`}
                                                onChange={(e) =>
                                                    handleAttributeChange(
                                                        rowIndex,
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {[
                                                    "Attribute 1",
                                                    "Attribute 2",
                                                    "Attribute 3",
                                                ].map((data) => (
                                                    <MenuItem
                                                        key={data}
                                                        value={data}
                                                        sx={{ fontSize: "12px" }}
                                                    >
                                                        {data}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Tooltip>
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{
                                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                        paddingRight: "0",
                                        minWidth: { md: "450px", xl: "500px" },
                                        fontSize: { md: "10px", lg: "12px" },
                                    }}
                                >
                                    <div className="flex gap-[1.5rem] items-center " >
                                        <Checkbox />
                                        <FormatListBulletedIcon />
                                        <Tooltip title="Add Default Value" arrow>
                                            <FormControl
                                                fullWidth
                                                sx={{
                                                    "& .MuiInput-underline::before, & .MuiInput-underline::after":
                                                    {
                                                        borderBottom: "none",
                                                    },
                                                }}
                                            >
                                                <InputLabel
                                                    id={`values-label-${rowIndex}`}
                                                    style={{ fontSize: "14px" }}
                                                >
                                                    Expression
                                                </InputLabel>
                                                <Select
                                                    multiple
                                                    value={row.values}
                                                    onChange={(e) =>
                                                        handleChange(rowIndex, e.target.value)
                                                    }
                                                    label={`Values-${rowIndex}`}
                                                    renderValue={(selected) => (
                                                        <div className="flex flex-row gap-2 overflow-x-auto">
                                                            {selected.map((value, chipIndex) => (
                                                                <Chip
                                                                    key={value}
                                                                    label={value}
                                                                    onDelete={(event) => {
                                                                        event.stopPropagation();
                                                                        handleChipDelete(
                                                                            rowIndex,
                                                                            chipIndex
                                                                        );
                                                                    }}
                                                                    onClick={(event) =>
                                                                        event.stopPropagation()
                                                                    }
                                                                    onMouseDown={(event) =>
                                                                        event.stopPropagation()
                                                                    }
                                                                    sx={{
                                                                        fontSize: "10px",
                                                                        marginRight: "4px",
                                                                        marginBottom: "4px",
                                                                        color: "white",
                                                                        backgroundColor: "#4856BEF5",
                                                                        zIndex: 1,
                                                                    }}
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                    sx={{
                                                        boxShadow: "none",
                                                        ".MuiOutlinedInput-notchedOutline": {
                                                            border: 0,
                                                        },
                                                        fontSize: "12px",
                                                        width: "70%",
                                                    }}
                                                >
                                                    {["Value 1", "Value 2", "Value 3"].map(
                                                        (data) => (
                                                            <MenuItem
                                                                key={data}
                                                                value={data}
                                                                sx={{ fontSize: "12px" }}
                                                            >
                                                                <Checkbox
                                                                    checked={row.values.includes(data)}
                                                                    sx={{ fontSize: "6px" }}
                                                                />
                                                                {data}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </Tooltip>
                                    </div>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    );

}

export default CustomTable;