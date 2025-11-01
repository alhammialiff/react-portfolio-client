import SideBarComponent from "./SideBar/SideBarComponent";
import TopBarComponent from "./TopBar/TopBarComponent";
import './MainContainerComponent.scss';
import { Routes, Route } from 'react-router-dom';
import InitialPageComponent from "./InitialPageComponent/InitialPageComponent";
import DashboardComponent from "./DashboardComponent/DashboardComponent";


/**
 * Main Container Component
 * This component encapsulates the entire app structure
 * @component
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} The rendered MainContainer component
 */
function MainContainerComponent(){



    // I need a top bar and a content section component
    return (
        <div className="root-container">
            <TopBarComponent></TopBarComponent>
            <SideBarComponent></SideBarComponent>
            <Routes>
                <Route path="/*" element={<InitialPageComponent />} />
                <Route path="/dashboard" element={<DashboardComponent />} />
            </Routes>
        </div>
    );

}

export default MainContainerComponent;