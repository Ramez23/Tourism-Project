import React from "react";
import { useUser } from "../context/UserContext"; // Import useUser hook
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ChangePassword from "../components/ChangePassword";

export default function Profile() {
  const { user } = useUser(); // Use the user data

  return (
    <>
      <Nav />
      <div className="profile-main">
        <div className="profile-part">
          <i className="fa-solid fa-user fa-2xl"></i>
          <span className="profile-email">
            <h2>E-Mail</h2>
            <p>{user ? user.email : "Loading..."}</p> {/* Display user email */}
          </span>
          <span className="profile-pass">
            <span>
              <h2>Password</h2>
              <p>*************</p>
            </span>
            <ChangePassword />
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
