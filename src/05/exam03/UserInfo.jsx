import React from "react";
import Avatar from "./Avatar";

function UserInfo(props){
    return(
        <div className="user-info-box">
            <Avatar user={props.user}/>
            <div className="user-name">
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;