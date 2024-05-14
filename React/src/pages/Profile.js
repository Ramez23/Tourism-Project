import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import ChangePassword from "../components/ChangePassword";
export default function Profile() {
    const [edit, setEdit] = useState(false)
    return (
        <>
            <Nav />
            <div className="profile-main">
                <div className="profile-part">
                    <i class="fa-solid fa-user fa-2xl"></i>
                    <span className="profile-email">
                        <h2>E-Mail</h2>
                        <p>david@gmail.com</p>
                    </span>
                    <span className="profile-pass">
                        <span>
                            <h2>Password</h2>
                            <p>*************</p>
                        </span>
                        <i className="fa-regular fa-pen-to-square" onClick={() => setEdit(!edit)}></i>
                        {edit ? '' : <ChangePassword />}
                    </span>
                </div>
            </div>
            <Footer name="footer-main" />
        </>
    )
}