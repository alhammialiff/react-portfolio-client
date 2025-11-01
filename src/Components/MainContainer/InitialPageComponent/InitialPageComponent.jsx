import './InitialPageComponent.scss';
import { useNavigate } from 'react-router-dom';

function InitialPageComponent(){

    const navigate = useNavigate();

    /**
    * Should route between:
    * 1. Initial Page Section
    * 2. Dashboard Section
    */
    return (
        <>
            <div className="container initial-page-container pt-0">
                {/* Jumbotron */}
                <div className="row jumbotron-section mt-0">
                    <div className="col text-center align-content-center">
                        <h1>A <span id="statement-hook">drawing board</span> for your portfolio</h1>
                    </div>
                </div>

                {/* Initial form */}
                <form className="row initial-form-section">
                    <div className="col">
                        <div className="row">
                            <div className="col text-center">
                                <h4>Enter your stock</h4>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col text-center">
                                <input type="text" placeholder="Eg. VTI" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <h4>How many shares do you have?</h4>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col text-center">
                                <input type="text" placeholder="Eg. 100" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <h4>What is your Profit/Loss with this stock?</h4>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col text-center">
                                <input type="text" placeholder="Eg. -10%, 30%"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col text-center">
                                <button type="button" onClick={() => navigate('/dashboard')}>Go</button>
                            </div>
                        </div>
                    </div>
                </form>
            
            </div>
        </>
    )

}

export default InitialPageComponent;