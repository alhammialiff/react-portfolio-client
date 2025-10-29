import './TopBarComponent.scss';

export function TopBarComponent(){

    return (

        <div className="top-bar-container">
            <div className="top-bar-content px-2">
                <div className="top-bar-nav-link">
                    Home
                </div>
                <div className="top-bar-nav-link">
                    About
                </div>
                <div className="top-bar-nav-link">
                    Projects
                </div>
            </div>
        </div>

    );

}

export default TopBarComponent;