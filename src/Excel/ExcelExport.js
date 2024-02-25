import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const ExportExcel = ({excelData, fileName}) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets: {'data':ws},SheetNames:['data']};
        const excelBuffer = XLSX.write(wb, {bookType:'xlsx',type:'array'});
        const data = new Blob([excelBuffer],{type:fileType});
        FileSaver.saveAs(data,fileName+fileExtension);
    }

    return (
        <>
           <button title="Download Data" onClick={(e)=>exportExcel(fileName)} >
              <ArrowCircleDownIcon className="cursor-pointer " style={{ fontSize: "18px" }} />
            </button>
        </>
    )
}

export default ExportExcel;
