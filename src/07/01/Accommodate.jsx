import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css"; // CSS 파일 불러오기

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("===== useEffect 확인용 =====");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될때, 업데이트될때");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">시설 입장 관리</h2>

                <div className="status-box">
                    <p className="count-text">
                        현재 총 <span className="count-number">{count}</span>명 수용 중입니다.
                    </p>
                    <p className="capacity-info">(최대 정원: {MAX_CAPACITY}명)</p>
                </div>

                <div className="button-group">
                    <button
                        className="btn btn-enter"
                        onClick={increaseCount}
                        disabled={isFull}
                    >
                        입장
                    </button>
                    <button
                        className="btn btn-exit"
                        onClick={decreaseCount}
                        disabled={count === 0}
                    >
                        퇴장
                    </button>
                </div>

                {isFull && (
                    <p className="full-warning">⚠️ 수용시설에 정원이 가득 찼습니다.</p>
                )}
            </div>
        </div>
    );
}

export default Accommodate;