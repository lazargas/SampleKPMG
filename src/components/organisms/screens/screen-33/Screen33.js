import react, { useContext, useState } from 'react';
import KPMGContext from '../../../../context/SampleContext';
import BusinessEntity from "../../../../assets/images/Business entity.svg";
import BusinessEntitySelected from "../../../../assets/images/Business entity - selected.svg";
import Function from "../../../../assets/images/Function.svg";
import FunctionSelected from "../../../../assets/images/Function - selected.svg";

import Attributes from "../../../../assets/images/Attributes.svg";
import AttributesSelected from "../../../../assets/images/Attributes - selected.svg";
import References from "../../../../assets/images/References.svg";
import ReferencesSelected from "../../../../assets/images/References - selected.svg";
import Sections from "../../../../assets/images/Sections.svg";
import SectionsSelected from "../../../../assets/images/Sections - selected.svg";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import { gsap } from "gsap";
import CustomAccordian from '../../../atoms/CustomAccordian';
import CustomButton from '../../../atoms/CustomButton';
import CustomButtonSecondary from '../../../atoms/CustomButtonSecondary';
import Data from "../../../../assets/screens/screen-32/Data.svg";
import DataSelected from "../../../../assets/screens/screen-32/DataSelected.svg";
import AttributeTagging from "../../../../assets/screens/screen-32/attributeTagging.svg";
import AttributeTaggingSelected from "../../../../assets/screens/screen-32/attributeTaggingSelected.svg";
import DataCollection from "../../../../assets/screens/screen-32/DataCollection.svg";
import DataCollectionSelected from "../../../../assets/screens/screen-32/DataCollectionSelected.svg";
import Delegate from "../../../../assets/screens/screen-32/Delegate.svg";
import DelegateSelected from "../../../../assets/screens/screen-32/DelegateSelected.svg";
import Order from "../../../../assets/screens/screen-32/Order.svg";
import OrderSelected from "../../../../assets/screens/screen-32/OrderSelected.svg";
import Process from "../../../../assets/screens/screen-32/process.svg";
import ProcessSelected from "../../../../assets/screens/screen-32/processSelected.svg";
import RolesAndLevels from "../../../../assets/screens/screen-32/RolesAndLevels.svg";
import RolesAndLevelsSelected from "../../../../assets/screens/screen-32/RolesAndLevelsSelected.svg";
import Users from "../../../../assets/screens/screen-32/users.svg";
import UsersSelected from "../../../../assets/screens/screen-32/usersSelected.svg";
import Workflow from "../../../../assets/screens/screen-32/workflow.svg";
import WorkflowSelected from "../../../../assets/screens/screen-32/workflowSelected.svg";
import WorkflowRel from "../../../../assets/screens/screen-32/workflowRel.svg";
import WorkflowRelSelected from "../../../../assets/screens/screen-32/workflowRelSelected.svg";
//data
import { lookupTypeData as data } from '../../../../data/tableData';
//css
import "./styles/screen33.css";
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
import AddNewModal from '../../../atoms/AddNewModal';
//css
import "./styles/screen33.css";
//data
import { businessEntityData, lookupTypeData } from '../../../../data/tableData';
import { Description } from '@mui/icons-material';
import DescriptionModal from '../../../atoms/DescriptionModal';
import Dropdown from '../../../atoms/Dropdown';
const Screen33 = () => {
    const [selectedCard, setSelectedCard] = useState(0);
    const [selectedSubCard, setSelectedSubCard] = useState(0)
    const [pageLabels, setPageLabels] = useState({
        name: "Workflow",
        dataIndex: 0,
        data: [],
    });
    const [subpPageLabels, setSubPageLabels] = useState({
        name: "Roles and Levels",
        dataIndex: 0,
        data: [],
    });

    const [gsapselect, setgsapSelect] = useState("");
    const [gsapSubSelect, setgsapSubSelect] = useState("");
    const pages = [
        {
            name: "Workflow",
            notSelected: Workflow,
            selected: WorkflowSelected,
            data: [],
        },
        {
            name: "Data Governance",
            notSelected: Data,
            selected: DataSelected,
            data: [],
        },
        {
            name: "Conditional Data Governance",
            notSelected: DataCollection,
            selected: DataCollectionSelected,
            data: [],
        },
        {
            name: "Workflow Relationship",
            notSelected: WorkflowRel,
            selected: WorkflowRelSelected,
            data: [],
        },
        {
            name: "Delegate Workflow",
            notSelected: Delegate,
            selected: DelegateSelected,
            data: [],
        },
        {
            name: "Workflow Process",
            notSelected: Process,
            selected: ProcessSelected,
            data: [],
        },
    ];
    const subPages = [
        {
            name: "Roles And Levels",
            notSelected: RolesAndLevels,
            selected: RolesAndLevelsSelected,
            data: [],
        },
        {
            name: "Order Roles And Levels",
            notSelected: Order,
            selected: OrderSelected,
            data: [],
        },
        {
            name: "Users and SLA",
            notSelected: Users,
            selected: UsersSelected,
            data: [],
        },
        {
            name: "Attribute Tagging",
            notSelected: AttributeTagging,
            selected: AttributeTaggingSelected,
            data: [],
        },
    ];
    const animateSlide = (iconName, id) => {
        const icon = document.getElementById(iconName);
        const bgIcon = document.getElementById(id);
        //root.style.setProperty('--widthVariable', icon.offsetWidth )
        if (id == "backgroundIcon") {
            setgsapSelect(iconName);
        }
        else {
            setgsapSubSelect(iconName);
        }
        // Calculate the distance to slide
        const distance = icon.offsetLeft - bgIcon.offsetLeft;
        const width = icon.offsetWidth;
        bgIcon.style.width = width + "px";
        // Animate the background icon
        gsap.to(bgIcon, {
            x: distance,
            duration: 0.5,
            ease: "power2.inOut", duration: 0.5,
            ease: "power2.inOut",
        });
    };
    const handleClick = (iconName) => {
        // Call the animation function
        animateSlide(iconName, "backgroundIcon");
    };
    const handleCardClick = (index) => {
        setPageLabels({
            name: pages[index].name,
            dataIndex: index,
            data: pages[index].data,
        });
        setSelectedCard(index);
    };
    const handleSubClick = (iconName) => {
        // Call the animation function
        animateSlide(iconName, "subBackgroundIcon");
    };
    const handleSubCardClick = (index) => {
        setSubPageLabels({
            name: subPages[index].name,
            dataIndex: index,
            data: subPages[index].data,
        });
        setSelectedSubCard(index);
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
            col: "Workflow Code",
            value: "WF-00027",
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
            value: "Material",
        },
        {
            disabled: true,
            col: "Data Function Name",
            value: "Quality",
        },
        {
            disabled: true,
            col: "Workflow  Name",
            value: "WF_material",
        },
        {
            disabled: true,
            col: "Business Entity Name",
            value: "TCPL",
        },
        {
            disabled: true,
            col: "For All Actions",
            value: "All_Actions",
        },

    ];
    const handleDescriptionModal = () => {
    }
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
    };
    useState(() => {
        const columns = data[0].map((col) => col.columnName);
        setColumnFields(columns);
    }, [data]);
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
                                        className={`${index == 1 || index == 2 ? "" : ""} `}
                                        id={`cards-${index + 1}`}
                                        src={
                                            selectedCard === index ? card.selected : card.notSelected
                                        }
                                        width="25px"
                                        alt={`Card ${index + 1}`}
                                    />
                                </div>
                                <div
                                    className={`slider text-lg px-2  rounded-md ${gsapselect === pages[index].name
                                        ? "text-white"
                                        : "text-black"
                                        } ${index == 1 || index == 2 ? "" : "mt-1"} `}
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
                    <div className="card-container items-center h-[90px]">
                        {subPages.map((card, index) => (
                            <button
                                className={`flex flex-col items-center text-center p-2 py-2  rounded-lg `}
                                key={index}
                                onClick={() => {
                                    handleSubCardClick(index);
                                    handleSubClick(subPages[index].name);
                                }}
                            >
                                <div className="flex flex-row justify-center mt-2 mx-2">
                                    <img
                                        id={`cards-${index + 1}`}
                                        src={
                                            selectedSubCard === index ? card.selected : card.notSelected
                                        }
                                        width="25px"
                                        alt={`Card ${index + 1}`}
                                    />
                                </div>
                                <div
                                    className={`slider text-lg mt-1 px-2  rounded-md ${gsapSubSelect === subPages[index].name
                                        ? "text-white"
                                        : "text-black"
                                        } `}
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        width: "max-content"
                                    }}
                                    id={subPages[index].name}
                                >
                                    <div> {subPages[index].name}</div>
                                </div>
                            </button>
                        ))}
                        <div id="backgroundIcon" className="background-icon"></div>
                        <div id="subBackgroundIcon" className="background-icon"></div>
                    </div>
                </div>
                <div className='table-container mt-10 me-2 flex flex-col gap-[1.2rem]' >
                    <div className="relative flex flex-col z-[1] gap-2 pb-2">
                        <CustomAccordian data={customAccordianFields} title={"Roles And Levels"} />
                    </div>
                    <div className='flex gap-[1rem] ' >
                        <TableContainer
                            sx={{
                                overflowX: "auto",
                            }}
                            component={Paper}
                            className="my-5"
                        >
                            <Table className=" text-sm text-left">
                                <TableHead>
                                    <TableRow>
                                        {["Workflow Role", "Workflow Level", "Sort Order"].map(
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
                                                        paddingRight: "0",
                                                        paddingLeft: "28px",
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
                                                            Workflow Role
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
                                                                "Creator",
                                                                "Approver",
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
                                                            Level
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
                                                            {["Level 1", "Level 2", "Level 3"].map(
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
                                                    paddingRight: "0",
                                                    paddingLeft: "28px",
                                                    minWidth: { md: "250px", xl: "300px" },
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
                                                            Sort Orders
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
                                                            {["Sort Order 1", "Sort Order 2", "Sort Order 3"].map(
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
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='flex gap-[1rem] justify-between items-center'>
                        <div>
                            <Tooltip title="Add new row" arrow>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddIcon />}
                                    onClick={handleAddRow}
                                    sx={{
                                        backgroundColor: "#4856BEF5",
                                        fontSize: "10px",
                                        color: "white",
                                        borderRadius: "5px",
                                    }}
                                >
                                    Add
                                </Button>
                            </Tooltip></div>
                        <div className='flex gap-[1rem] justify-end items-center' >


                            <Button
                                className=' '
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: "#4856BEF5",
                                    fontSize: "10px",

                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "12px"
                                }}
                            >
                                Previous
                            </Button>


                            <Button
                                className=' '
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: "#4856BEF5",
                                    fontSize: "10px",

                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "12px"
                                }}
                            >
                                Save And Next
                            </Button>

                            <Button
                                className=' '
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: "#4856BEF5",
                                    fontSize: "10px",

                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "12px"
                                }}
                            >
                                Save And Close
                            </Button>
                            <Button
                                className=' '
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: "#4856BEF5",
                                    fontSize: "10px",

                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "12px"
                                }}
                            >
                                Reset
                            </Button>
                            <Button
                                className=' '
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: "#4856BEF5",
                                    fontSize: "10px",

                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "12px"
                                }}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>

                </div>
                <div>
                </div>
            </div>
        </>
    );
}
export default Screen33;