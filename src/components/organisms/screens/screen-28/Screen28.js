import react, { useContext, useState } from 'react';
import KPMGContext from '../../../../context/SampleContext';
import BusinessEntity from "../../../../assets/images/Business entity.svg";
import BusinessEntitySelected from "../../../../assets/images/Business entity - selected.svg";
import Function from "../../../../assets/images/Function.svg";
import FunctionSelected from "../../../../assets/images/Function - selected.svg";
import Data from "../../../../assets/images/Data.svg";
import DataSelected from "../../../../assets/images/Data - selected.svg";
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
//data
import { lookupTypeData as data } from '../../../../data/tableData';
//css
import "./styles/screen28.css";
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
import "./styles/screen28.css";
//data
import { businessEntityData, lookupTypeData } from '../../../../data/tableData';
import { Description } from '@mui/icons-material';
import DescriptionModal from '../../../atoms/DescriptionModal';
import Dropdown from '../../../atoms/Dropdown';
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
            notSelected: Data,
            selected: DataSelected,
            data: [],
        },
        {
            name: "Data Entity Group",
            notSelected: Data,
            selected: DataSelected,
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
            notSelected: Attributes,
            selected: AttributesSelected,
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
                    <div className="relative flex flex-col z-[1] gap-2 pb-2">
                        <p className="relative text-[12px]   opacity-[0.7] " >Select Page:</p>
                        <Dropdown data={["Lookup Type", "Lookup"]} />
                    </div>
                    <div className='flex gap-[1rem] ' >
                        <div

                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            {/* Modal header */}
                            <div className=" pt-4">
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
                                className="py-6 max-h-[350px] flex gap-[2.5rem]
          "
                            >
                                {/* Input fields */}
                                {mode === "web" && (
                                    <div className="overflow-y-scroll grid grid-cols-1 md:grid-cols-2 gap-4 w-[max-content]">
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
                                                                    Data Column 1
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className={`px-6 py-3 min-w-[150px]`}
                                                                    style={{ fontSize: "11px" }}
                                                                >
                                                                    Data Column 2
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
                                                                    Data Column 1
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className={`px-6 py-3 min-w-[150px]`}
                                                                    style={{ fontSize: "11px" }}
                                                                >
                                                                    Data Column 2
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
                                                            Data 2 is a not a valid value for Data Column 1 field
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[1rem] justify-end items-center' >
                        {(mode === "web" || uploaded === "uploaded") && (
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
                                Generate Template
                            </Button>
                        )}
                        {mode === "excel" && uploaded === "pending" && (
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
                                Upload Template
                            </Button>
                        )}
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