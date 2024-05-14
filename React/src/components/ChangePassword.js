import React from "react";

export default function ChangePaswword(){
    return(
        <div className="change-main">
            <label>
                <p>Current Password:</p>
                <input type="text"/>
            </label>
            <label>
                <p>New Password:</p>
                <input type="text"/>
            </label>
            <label>
                <p>Re-write New Password:</p>
                <input type="text"/>
            </label>
            <button>Change Password</button>
        </div>
    )
}