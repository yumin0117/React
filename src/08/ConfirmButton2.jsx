import React, { useState } from "react";
import "./ConfirmButton.css";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <div className="confirm-container">
            <button
                className="confirm-btn"
                onClick={handleConfirm}
                disabled={isConfirmed}
            >
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
        </div>
    );
}

export default ConfirmButton;