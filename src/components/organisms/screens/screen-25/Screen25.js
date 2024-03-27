import react, { useContext, useState } from 'react';
import KPMGContext from '../../../../context/SampleContext';
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
import LineWeightIcon from "@mui/icons-material/LineWeight";
//libraries
import { gsap } from "gsap";
import CustomAccordian from '../../../atoms/CustomAccordian'
import CustomButton from "../../../atoms/CustomButton";
import CustomTable from './atoms/CustomTable';
//css
import "./styles/screen-25.css";
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
//data
import { businessEntityData, lookupTypeData } from '../../../../data/tableData';
import { Description } from '@mui/icons-material';
import DescriptionModal from '../../../atoms/DescriptionModal';
import CustomButtonSecondary from '../../../atoms/CustomButtonSecondary';
const Screen25 = () => {
    const [selectedCard, setSelectedCard] = useState(6)
    const [pageLabels, setPageLabels] = useState({
        name: "Lookup Type",
        dataIndex: 0,
        data: [],
    });
    const [gsapselect, setgsapSelect] = useState("");
    const [selectedButton, setSelectedButton] = useState(1);
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
    // const [attributeData, setAttributeData] = useState([
    //     { name: "", values: [] },
    //     // Add more objects as needed
    // ]);
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
        console.log(attributeData);
    };
    const handleAddRow = () => {
        setAttributeData((prevData) => [...prevData, { name: "", values: [] }]);
    };
    const customAccordianFields = [
        {
            disabled: true,
            col: "Calculation Code",
            value: "CAL-00010",
        },
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
            value: "Stg_hidden",
        },
    ];
    const TableData = {
        headers: [
            "Attribute Name",
            "Calculation Rule"
        ],
        data: [
            [
                "calc_1",
                "a-1+a-2"
            ]
        ]
    }
    const handleDescriptionModal = () => {
    }
    const handleSelectedButton = (index) => {
        setSelectedButton(index);
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
                <div className='flex gap-[1rem] ' >
                    <div>
                        <CustomButtonSecondary title={"Default Value"} />
                    </div>
                    <div>
                        <CustomButtonSecondary title={"Concatenation"} />
                    </div>
                    <div>
                        <CustomButton title={"Calculation"} />
                    </div>
                </div>
                <div className='table-container me-2 flex flex-col gap-[1rem]' >
                    <div className='mb-2 max-w-auto' >
                        <CustomAccordian
                            title={"Calculation Fields"}
                            data={customAccordianFields}
                        />
                    </div>
                    <div className="">
                        <CustomTable TableData={TableData} />
                    </div>
                    <div className='flex gap-[1rem] justify-between items-center' >
                        <div onClick={handleAddRow} >

                        </div>
                        <div className='flex gap-[1rem] items-center' >
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
                </div>
                <div>
                </div>
            </div>
        </>
    );
}
export default Screen25;