import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NpiProfile from "./Pages/AboutNpi/NpiProfile";
import OurDream from "./Pages/AboutNpi/OurDream";
import ConcessionForStudent from "./Pages/AboutNpi/ConcessionForStudent";
import ControllingAuthority from "./Pages/AboutNpi/ControllingAuthority";
import ShortBrief from "./Pages/AboutNpi/ShortBrief";
import ComputerScience from "./Pages/Departments/ComputerScience";
import ElectricalEngineering from "./Pages/Departments/ElectricalEngineering";
import Contacts from "./Pages/Contacts";
import AutomobileEngineering from "./Pages/Departments/AutomobileEngineering ";
import CivilEngineering from "./Pages/Departments/CivilEngineering ";
import TextileEngineering from "./Pages/Departments/TextileEngineering ";
import ArchitectureEngineering from "./Pages/Departments/ArchitectureEngineering .JSX";
import FoodTechnology from "./Pages/Departments/FoodTechnology ";
import DiplomaInMechanicalEngineering from "./Pages/Departments/DiplomaInMechanicalEngineering ";
import AdmissionInfo from "./Pages/Academic/AdmissionInfo ";
import DhakaCampus from "./Pages/Academic/DhakaCampus";
import FaridpurCampus from "./Pages/Academic/FaridpurCampus";
import ManikganjCampus from "./Pages/Academic/ManikganjCampus";
import SonargaonCampus from "./Pages/Academic/SonargaonCampus ";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
            path:"/",
            element: <Home/>,
        },
        {
            path:"/NpiProfile",
            element: <NpiProfile/>,
        },
        {
            path:"/OurDream",
            element: <OurDream/>,
        },
        {
            path:"/ConcessionForStudent",
            element: <ConcessionForStudent/>,
        },
        {
            path:"/ControllingAuthority",
            element: <ControllingAuthority/>,
        },
        {
            path:"/ShortBrief",
            element: <ShortBrief/>,
        },
        {
            path:"/ComputerScience",
            element: <ComputerScience/>,
        },
        {
            path:"/ElectricalEngineering",
            element: <ElectricalEngineering/>,

        },
        {
            path:"/Contacts",
            element: <Contacts/>,

        },
        {
            path:"/DiplomaInMechanicalEngineering",
            element: <DiplomaInMechanicalEngineering/>,

        },
        {
            path:"/AutomobileEngineering",
            element: <AutomobileEngineering/>,

        },
        {
            path:"/CivilEngineering",
            element: <CivilEngineering/>,

        },
        {
            path:"/TextileEngineering",
            element: <TextileEngineering/>,

        },
        {
            path:"/ArchitectureEngineering",
            element: <ArchitectureEngineering/>,

        },
        {
            path:"/FoodTechnology",
            element: <FoodTechnology/>,

        },
        {
            path:"/AdmissionInfo",
            element: <AdmissionInfo/>,

        },
        {
            path:"/DhakaCampus",
            element: <DhakaCampus/>,

        },
        {
            path:"/FaridpurCampus",
            element: <FaridpurCampus/>,

        },
        {
            path:"/ManikganjCampus",
            element: <ManikganjCampus/>,

        },
        {
            path:"/SonargaonCampus",
            element: <SonargaonCampus/>,

        },

      ]
    },
  ]);

export default router