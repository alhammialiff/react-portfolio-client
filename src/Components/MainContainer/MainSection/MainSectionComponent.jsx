import InitialPageComponent from './InitialPageComponent/InitialPageComponent';
import './MainSectionComponent.scss';

function MainSectionComponent(){

    /**
    * Should route between:
    * 1. Initial Page Section
    * 2. Dashboard Section
    */
    return (
        <div className='container-fluid main-section-container'>
            <div className='row'>
                <div className='col justify-content-center'>
                    <InitialPageComponent />
                </div>
            </div>
        </div>

    )
}

export default MainSectionComponent;