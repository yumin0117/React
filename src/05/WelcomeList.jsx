import React from "react";
import Welcome from "./Welcome";

function WelcomeList(){
    return(
        <div>
            <Welcome name="김인공" color="#ff6b6b" />
            <Welcome name="박폴리" color="#4dabf7" />
            <Welcome name="이정수" color="#51cf66" />
        </div>
    );
}

export default WelcomeList;