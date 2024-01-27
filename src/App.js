import "./App.css";
import { useState } from "react";
import Layout from "./components/layout/index";
import Sample from "./components/molecules/Sample";
import KPMGContext from "./context/SampleContext";
import {TableDataForSearch} from "./data/tableData"


function App() {
  
  const [columns,setColumns] = useState(["Lookup Type Name","Display Name","Actions"]);
  const [searchData,setSearchData] = useState(TableDataForSearch);
  
  return (
    <KPMGContext.Provider value={{columns,setColumns,searchData,setSearchData}} >
    <div className="overflow-hidden" >
      <Layout>
        <Sample />
      </Layout>
    </div>
    </KPMGContext.Provider>
  );
}

export default App;
