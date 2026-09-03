import React from "react";
import "./Clock.css";

function Clock() {
    return(
        <div>
            <h1>인공지능소프트웨어과</h1>
            <h2>현재 시각은 {new Date().toLocaleTimeString()} 입니다.</h2>
        </div>
    );
}

export default Clock;