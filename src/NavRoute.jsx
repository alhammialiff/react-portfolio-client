import { Suspense } from "react";
import MainContainerComponent from "./Components/MainContainer/MainContainerComponent";

export default function NavRoute() {

    return (
        // STOP HERE AND RESUME BELOW
        <Suspense fallback={<div>Loading...</div>}>
            <MainContainerComponent />
        </Suspense>
    );

}