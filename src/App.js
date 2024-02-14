import "./App.css";
import { useState } from "react";
import Layout from "./components/layout/index";
import Sample from "./components/molecules/Sample";
import KPMGContext from "./context/SampleContext";
import { TableDataForSearch } from "./data/tableData";

function App() {
  const [columns, setColumns] = useState([
    "Lookup Type Name",
    "Display Name",
    "Actions",
  ]);
  const [selectedData, setSelectedData] = useState({});
  const [dropdown,setDropdown] = useState("Lookup Type");

  return (
    <KPMGContext.Provider value={{ columns, setColumns,selectedData, setSelectedData,dropdown,setDropdown }}>
      <div className="overflow-hidden">
        <Layout>
          <Sample />
        </Layout>
      </div>
    </KPMGContext.Provider>
  );
}

export default App;
