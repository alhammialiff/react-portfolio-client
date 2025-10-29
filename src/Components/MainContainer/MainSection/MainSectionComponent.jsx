import InitialPageComponent from './InitialPageComponent/InitialPageComponent';
import './MainSectionComponent.scss';

function MainSectionComponent(){

    /**
    * Should route between:
    * 1. Initial Page Section
    * 2. Dashboard Section
    */
    return (
        <div className='container main-section-container'>
            <div className='row d-flex justify-content-center'>
                <div className='col'>
                    <InitialPageComponent />
                </div>
            </div>
        </div>

    )
}

export default MainSectionComponent;