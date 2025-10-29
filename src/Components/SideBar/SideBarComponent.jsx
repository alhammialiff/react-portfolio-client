import { MdDashboard, MdLogout } from 'react-icons/md';
import './SideBarComponent.scss';
import { FaGear } from 'react-icons/fa6';

function SideBarComponent(){

    return (
        <div className="side-bar-container">
            <div className="container px-3 py-3">

                <div className="row side-bar-nav-link">
                    <div className="col-2">
                        <MdDashboard />
                    </div>
                    <div className="col">
                        <span>Dashboard</span>
                    </div>
                </div>

                <div className="row side-bar-nav-link">
                    <div className="col-2">
                        <FaGear />
                    </div>
                    <div className="col">
                        <span>Settings</span>
                    </div>
                </div>
                
                <div className="row side-bar-nav-link">
                    <div className="col-2">
                        <MdLogout />
                    </div>
                    <div className="col">
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SideBarComponent;