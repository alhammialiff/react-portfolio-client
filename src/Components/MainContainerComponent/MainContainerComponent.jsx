import TopBarComponent from "../TopBar/TopBarComponent";
import './MainContainerComponent.scss';

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

        <TopBarComponent></TopBarComponent>

    );

}

export default MainContainerComponent;