import React, { useState } from "react";
import "./MessageSender.css";

function MessageSender() {
    const [text, setText] = useState("");
    const [sentMessage, setSentMessage] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;
        setSentMessage(text);
        setText("");
    };

    return (
        <div className="message-app-stage">
            <div className="message-card">
                <div className="card-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="status-label">SIGNAL: STABLE</span>
                </div>

                <h1>메시지 전송 프로그램</h1>

                {sentMessage && (
                    <div className="sent-alert">
                        <span className="badge">SUCCESS</span>
                        <span className="content">{sentMessage}</span>
                    </div>
                )}

                <div className="sender-controls">
                    <input
                        type="text"
                        placeholder="전송할 메시지 입력"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSend();
                        }}
                    />
                    <button onClick={handleSend}>메시지전송</button>
                </div>

                <p className="preview-area">
                    미리보기: <span className="preview-value">{text || "내용을 입력하세요..."}</span>
                </p>
            </div>
        </div>
    );
}

export default MessageSender;