import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfo.css"; // CSS 파일 import 필수

const users = [
    {
        name: "Jang Wonyoung",
        avatarUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
        comment: "Positive mindset, lucky vibe~"
    },
    {
        name: "Ahn Yujin",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801864_1280.png",
        comment: "I think likes me. ^^"
    },
    {
        name: "Park Liz",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801872_1280.png",
        comment: "Sleeping is the best ~~~~~~~~"
    }
];

function UserInfoList(){
    const currentDate = new Date();
    return(
        <div className="card-container">
            {
                users.map((user, index) => {
                    return(
                        <div className="business-card" key={index}>
                            <UserInfo user={user}/>
                            <div className="user-comment">
                                {user.comment}
                            </div>
                            <div className="card-footer">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default UserInfoList;