import './InitialPageComponent.scss';

function InitialPageComponent(){

    /**
    * Should route between:
    * 1. Initial Page Section
    * 2. Dashboard Section
    */
    return (
        <>
            <div className="container initial-page-container">
                {/* Jumbotron */}
                <div className="row jumbotron-section">
                    <div className="col text-center align-content-center">
                        <h1>A <span id="statement-hook">drawing board</span> for your portfolio</h1>
                    </div>
                </div>
                {/* Initial form */}
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col text-center">
                                <h3>Enter Your First Ticker</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default InitialPageComponent;