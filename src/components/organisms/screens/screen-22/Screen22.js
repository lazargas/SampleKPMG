import react, { useContext, useState } from 'react';
import KPMGContext from '../../../../context/SampleContext';
import LineWeightIcon from "@mui/icons-material/LineWeight";
import { gsap } from "gsap";
import CustomAccordian from '../../../atoms/CustomAccordian';

//icons
import AttributesSelected from "../../../../assets/images/Attributes - selected.svg";
import Attributes from "../../../../assets/images/Attributes.svg";
import BusinessEntitySelected from "../../../../assets/images/Business entity - selected.svg";
import BusinessEntity from "../../../../assets/images/Business entity.svg";
import ComputationSelected from "../../../../assets/images/Computation - selected.svg";
import Computation from "../../../../assets/images/Computation.svg";
import DataSelected from "../../../../assets/images/Data - selected.svg";
import Data from "../../../../assets/images/Data.svg";
import DataEntityGroupSelected from "../../../../assets/images/DataEntityGroup - selected.svg";
import DataEntityGroup from "../../../../assets/images/DataEntityGroup.svg";
import FunctionSelected from "../../../../assets/images/Function - selected.svg";
import Function from "../../../../assets/images/Function.svg";
import ReferencesSelected from "../../../../assets/images/References - selected.svg";
import References from "../../../../assets/images/References.svg";
import SectionsSelected from "../../../../assets/images/Sections - selected.svg";
import Sections from "../../../../assets/images/Sections.svg";
import ApplicationnUserSelected from "../../../../assets/images/User - selected.svg";
import ApplicationnUser from "../../../../assets/images/User.svg";

//css
import "../../../../styles/molecules/Sample.css";

//MUI imports
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


//css
import "./styles/screen-22.css";
//data
import { businessEntityData, lookupTypeData } from '../../../../data/tableData';
import { Description } from '@mui/icons-material';
import DescriptionModal from '../../../atoms/DescriptionModal';

const Screen22 = () => {

    const [selectedCard, setSelectedCard] = useState(6)
    const [pageLabels, setPageLabels] = useState({
        name: "Lookup Type",
        dataIndex: 0,
        data: [],
    });
    const [gsapselect, setgsapSelect] = useState("");

    const pages = [
        {
          name: "Business Entity",
          notSelected: BusinessEntity,
          selected: BusinessEntitySelected,
          data: businessEntityData,
        },
        {
          name: "Application User",
          notSelected: ApplicationnUser,
          selected: ApplicationnUserSelected,
          data: [],
        },
        {
          name: "Data Entity Group",
          notSelected: DataEntityGroup,
          selected: DataEntityGroupSelected,
          data: [],
        },
        {
          name: "Data Entity",
          notSelected: Data,
          selected: DataSelected,
          data: [],
        },
        {
          name: "Function",
          notSelected: Function,
          selected: FunctionSelected,
          data: [],
        },
        {
          name: "Section",
          notSelected: Sections,
          selected: SectionsSelected,
          data: [],
        },
        {
          name: "Attributes",
          notSelected: Attributes,
          selected: AttributesSelected,
          data: [],
        },
        {
          name: "Computation",
          notSelected: Computation,
          selected: ComputationSelected,
          data: [],
        },
        {
          name: "References",
          notSelected: References,
          selected: ReferencesSelected,
          data: lookupTypeData,
        },
      ];
    const animateSlide = (iconName) => {
        const icon = document.getElementById(iconName);
        const bgIcon = document.getElementById("backgroundIcon");
        //root.style.setProperty('--widthVariable', icon.offsetWidth )
        setgsapSelect(iconName);
        // Calculate the distance to slide
        const distance = icon.offsetLeft - bgIcon.offsetLeft;
        const width = icon.offsetWidth;
        bgIcon.style.width = width + "px";

        // Animate the background icon
        gsap.to(bgIcon, {
            x: distance,
            duration: 0.5,
            ease: "power2.inOut",
        });
    };
    const handleClick = (iconName) => {
        // Call the animation function
        animateSlide(iconName);
    };
    const handleCardClick = (index) => {
        setPageLabels({
            name: pages[index].name,
            dataIndex: index,
            data: pages[index].data,
        });

        setSelectedCard(index);
    };
    const [attributeData, setAttributeData] = useState([
        { name: "", values: [] },
        // Add more objects as needed
    ]);

    const [attributeType, setAttributeType] = useState([
        { name: "", values: [] },
        // Add more objects as needed
    ]);

    const [openDescription, setOpenDescription] = useState(false);

    const handleChange = (index, selectedValues) => {
        setAttributeData((prevData) => {
            const newData = [...prevData];
            newData[index].values = selectedValues;
            return newData;
        });
    };

    const handleAttributeType = (index, selectedValues) => {
        setAttributeType((prevData) => {
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

    const customAccordianFields = [
        {
            disabled: true,
            col: "Business Entity Name",
            value: "TCPL",
        },
        {
            disabled: true,
            col: "Data Entity Type",
            value: "Master",
        },
        {
            disabled: true,
            col: "Data Entity Group Name",
            value: "Material",
        },
        {
            disabled: true,
            col: "Data Entity Name",
            value: "dq_test_entity",
        },
        {
            disabled: true,
            col: "Data Function Name",
            value: "Stg_35",
        },
    ];
    const handleDescriptionModal = () => {

    }

    return (
        <>
            <div className="container">
                <div className="collapse-container">
                    <div className="tile-container">
                        <p
                            className="text-lg "
                            style={{ fontSize: "16px", fontWeight: "400" }}
                        >
                            Model / {pages[selectedCard].name} :
                        </p>
                    </div>
                    <button
                        id="arrowdown"
                        className="hidden relative left-[100px] rotate-180"
                    >
                        <LineWeightIcon />
                    </button>
                    <div className="card-container items-center h-[90px]">
                        {pages.map((card, index) => (
                            <button
                                className={`flex flex-col items-center text-center p-2 py-2  rounded-lg `}
                                key={index}
                                onClick={() => {
                                    handleCardClick(index);
                                    handleClick(pages[index].name);
                                }}
                            >
                                <div className="flex flex-row justify-center mt-2 mx-2">
                                    <img
                                        id={`cards-${index + 1}`}
                                        src={
                                            selectedCard === index ? card.selected : card.notSelected
                                        }
                                        width="25px"
                                        alt={`Card ${index + 1}`}
                                    />
                                </div>

                                <div
                                    className={`slider text-lg mt-1 px-2  rounded-md ${gsapselect === pages[index].name
                                        ? "text-white"
                                        : "text-black"
                                        } `}
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        width: "max-content"
                                    }}
                                    id={pages[index].name}
                                >
                                    <div> {pages[index].name}</div>
                                </div>
                            </button>
                        ))}
                        <div id="backgroundIcon" className="background-icon"></div>
                    </div>
                </div>

                <div className='table-container mt-10 me-2 flex flex-col gap-[1.2rem]' >
                    <div className='mb-2 max-w-auto' >
                        <CustomAccordian
                            title={"Attributes"}
                            data={customAccordianFields}

                        />
                    </div>
                    <div className='flex items-center justify-between' >
                        <div className="flex gap-[1.5rem] ">
                            <Tooltip title="Add new row" arrow>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddRow}
                                    startIcon={<AddIcon />}
                                    sx={{
                                        backgroundColor: "#4856BEF5",
                                        fontSize: "10px",
                                        color: "white",
                                        borderRadius: "5px",
                                    }}
                                >
                                    Add
                                </Button>
                            </Tooltip>
                            <Tooltip title="Delete Last row" arrow>
                                <Button
                                    variant="contained"

                                    onClick={handleDeleteRow}
                                    startIcon={<AddIcon sx={{ rotate: "45deg" }} />}
                                    sx={{
                                        backgroundColor: "#D32F2F",
                                        fontSize: "10px",
                                        color: "white",
                                        borderRadius: "5px",
                                        background: "#F44336", // This is the muted shade of red
                                        "&:hover": {
                                            backgroundColor: "#D32F2F", // This is a darker shade of red for hover
                                        },
                                    }}
                                >
                                    Delete
                                </Button>
                            </Tooltip>
                        </div>
                        <div className='flex items-center gap-[1.5rem] ' >
                            <div>
                                <input
                                    type="text"
                                    className={`mt-1 py-2 px-4 w-full border border-gray-300 rounded-md`}
                                    style={{
                                        fontSize: "12px",
                                        pointerEvents: "",

                                    }}
                                    placeholder='Configuration'
                                />
                            </div>
                            <div className="">
                                <Tooltip title="Apply Changes" arrow>
                                    <Button
                                        className='py-[0.5rem]'
                                        variant="contained"
                                        color="primary"
                                        startIcon={<CheckIcon />}
                                        sx={{
                                            backgroundColor: "#4856BEF5",
                                            fontSize: "10px",
                                            color: "white",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        Apply
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className="">


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
                                        {["Attribute", "Prev Name", "Attribute Type", "LOV", "Sort Order", "Description", "Configuration", "Deactivate"].map(
                                            (data, i) => (
                                                <TableCell
                                                    key={i}
                                                    align="left"
                                                    sx={{
                                                        backgroundColor: "#4856BEF5",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        borderBottom:
                                                            "1px solid rgba(224, 224, 224, 1)",
                                                        padding: "12px",
                                                        //minWidth: { md: "250px", xl: "300px" },
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
                                                    padding: "12px",

                                                    //minWidth: { md: "50px", xl: "60px" },
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
                                                            Attribute
                                                        </InputLabel>
                                                        <Select
                                                            sx={{
                                                                boxShadow: "none",
                                                                ".MuiOutlinedInput-notchedOutline": {
                                                                    border: 0,
                                                                },
                                                                fontSize: "12px",
                                                                //width: "200px",
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
                                                    padding: "12px",
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >
                                                <Tooltip title="Add attribute value" arrow>
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
                                                            Prev Name
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
                                                            {[].map(
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
                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                sx={{
                                                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                                    padding: "12px",
                                                    //minWidth: { md: "250px", xl: "300px" },
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >

                                                <Tooltip title="Add attribute value" arrow>
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
                                                            Attribute Type
                                                        </InputLabel>
                                                        <Select
                                                            multiple
                                                            value={row.values}
                                                            onChange={(e) =>
                                                                handleAttributeType(rowIndex, e.target.value)
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
                                                            {[].map(
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

                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                sx={{
                                                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                                    padding: "12px",
                                                    //minWidth: { md: "250px", xl: "300px" },
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >

                                                <Tooltip title="Go to List Of Values" arrow>
                                                    <button>
                                                        <FormatListBulletedIcon />
                                                    </button>
                                                </Tooltip>

                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                sx={{
                                                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                                    padding: "12px",
                                                    //minWidth: { md: "250px", xl: "300px" },
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >

                                                <Tooltip title="Sort Order" arrow>
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
                                                            Asc/Desc
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
                                                            {[].map(
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

                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                sx={{
                                                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                                    padding: "12px",
                                                    //minWidth: { md: "250px", xl: "300px" },
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >

                                                <Tooltip title="Open Description Modal" arrow>
                                                    <Button

                                                    >
                                                        <DescriptionModal

                                                        />
                                                    </Button>
                                                </Tooltip>

                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                sx={{
                                                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                                    padding: "12px",
                                                    //minWidth: { md: "250px", xl: "300px" },
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >

                                                <Tooltip title="Go to List Of Values" arrow>
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
                                                            Configuration
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
                                                            {["Update", "Extend"].map(
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

                                            </TableCell>


                                            <TableCell
                                                align="left"
                                                sx={{
                                                    borderBottom: "1px solid rgba(224, 224, 224, 1)",
                                                    padding: "12px",
                                                    //minWidth: { md: "250px", xl: "300px" },
                                                    fontSize: { md: "10px", lg: "12px" },
                                                }}
                                            >

                                                <Tooltip title="Go to List Of Values" arrow>
                                                    <Checkbox />
                                                </Tooltip>

                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='flex gap-[1rem] justify-end items-center' >
                        <Button
                            className='py-[0.5rem]'
                            variant="contained"
                            color="primary"

                            sx={{
                                backgroundColor: "#4856BEF5",
                                fontSize: "10px",
                                fontWeight: "800",
                                color: "white",
                                borderRadius: "5px",
                                padding: "12px"
                            }}
                        >
                            Save And Next
                        </Button>
                        <Button
                            className='py-[0.5rem]'
                            variant="contained"
                            color="primary"

                            sx={{
                                backgroundColor: "#4856BEF5",
                                fontSize: "10px",
                                fontWeight: "800",
                                color: "white",
                                borderRadius: "5px",
                                padding: "12px"
                            }}
                        >
                            Skip To Next
                        </Button>
                        <Button
                            className='py-[0.5rem]'
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: "#4856BEF5",
                                fontSize: "10px",
                                fontWeight: "800",
                                color: "white",
                                borderRadius: "5px",
                                padding: "12px"
                            }}
                        >
                            Save And Close
                        </Button>
                        <Button
                            className='py-[0.5rem]'
                            variant="contained"
                            color="primary"

                            sx={{
                                backgroundColor: "#4856BEF5",
                                fontSize: "10px",
                                fontWeight: "800",
                                color: "white",
                                borderRadius: "5px",
                                padding: "12px"
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            className='py-[0.5rem]'
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: "#4856BEF5",
                                fontSize: "10px",
                                fontWeight: "800",
                                color: "white",
                                borderRadius: "5px",
                                padding: "12px"
                            }}
                        >
                            Cancel
                        </Button>


                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    );
}

export default Screen22;