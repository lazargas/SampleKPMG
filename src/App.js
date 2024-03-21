import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/layout/index";
import CommonPage from "./components/organisms/screens/screen-9/CommonPage";
import KPMGContext from "./context/SampleContext";
import { businessEntityData, lookupTypeData } from "./data/tableData";
import { gsap } from "gsap";

// icons
import BusinessEntity from "./assets/images/Business entity.svg";
import BusinessEntitySelected from "./assets/images/Business entity - selected.svg";
import Function from "./assets/images/Function.svg";
import FunctionSelected from "./assets/images/Function - selected.svg";
import Data from "./assets/images/Data.svg";
import DataSelected from "./assets/images/Data - selected.svg";
import Attributes from "./assets/images/Attributes.svg";
import AttributesSelected from "./assets/images/Attributes - selected.svg";
import References from "./assets/images/References.svg";
import ReferencesSelected from "./assets/images/References - selected.svg";
import Sections from "./assets/images/Sections.svg";
import SectionsSelected from "./assets/images/Sections - selected.svg";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/organisms/Home-Page/HomePage";
import Screen8 from "./components/organisms/screens/screen-8/Screen8";
import Screen22 from "./components/organisms/screens/screen-22/Screen22";
import Screen23 from "./components/organisms/screens/screen-23/Screen23";
import Screen25 from "./components/organisms/screens/screen-25/Screen25";
import Screen28 from "./components/organisms/screens/screen-28/Screen28"
import Screen32 from "./components/organisms/screens/screen-32/Screen32";
import Screen33 from "./components/organisms/screens/screen-33/Screen33";
import Screen36 from "./components/organisms/screens/screen-36/Screen36";
import Screen14 from "./components/organisms/screens/screen-14/Screen14";
import Screen15 from "./components/organisms/screens/screen-15/Screen15";
import Screen16 from "./components/organisms/screens/screen-16/Screen16";
import ErrorPage from "./components/organisms/Error-page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-22",
    element: <Screen22 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-23",
    element: <Screen23 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-25",
    element: <Screen25 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-28",
    element: <Screen28 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-32",
    element: <Screen32 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-33",
    element: <Screen33 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-36",
    element: <Screen36 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-8",
    element: <Screen8 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-9",
    element: <CommonPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-14",
    element: <Screen14 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-15",
    element: <Screen15 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/screen-16",
    element: <Screen16 />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [pageLabels, setPageLabels] = useState({
    name: "Lookup Type",
    dataIndex: 0,
    data: lookupTypeData,
  });

  const [attributeData, setAttributeData] = useState([
    { name: "", values: [] },
    // Add more objects as needed
  ]);

  const pages = [
    {
      name: "Business Entity",
      notSelected: BusinessEntity,
      selected: BusinessEntitySelected,
      data: businessEntityData,
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
      name: "References",
      notSelected: References,
      selected: ReferencesSelected,
      data: lookupTypeData,
    },
  ];

  const handleCardClick = (index) => {
    setPageLabels({
      name: pages[index].name,
      dataIndex: 1,
      data: businessEntityData,
    });

    setSelectedCard(index);
  };

  const [selectedCard, setSelectedCard] = useState(5);
  const [gsapselect, setgsapSelect] = useState("");

  useEffect(() => { }, [pageLabels]);

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

  return (
    <KPMGContext.Provider
      value={{
        pageLabels,
        setPageLabels,
        handleCardClick,
        selectedCard,
        setSelectedCard,
        pages,
        gsapselect,
        setgsapSelect,
        animateSlide,
        attributeData,
        setAttributeData
      }}
    >
      <div className="overflow-hidden">
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </div>
    </KPMGContext.Provider>
  );
}

export default App;
