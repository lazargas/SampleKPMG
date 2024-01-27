import "./App.css";
import { useState } from "react";
import Layout from "./components/layout/index";
import Sample from "./components/molecules/Sample";
import KPMGContext from "./context/SampleContext";


function App() {
  
  const [columns,setColumns] = useState(["Lookup Type Name","Display Name","Actions"]);

  return (
    <KPMGContext.Provider value={{columns,setColumns}} >
    <div className="overflow-hidden" >
      <Layout>
        <Sample />
      </Layout>
    </div>
    </KPMGContext.Provider>
  );
}

export default App;
