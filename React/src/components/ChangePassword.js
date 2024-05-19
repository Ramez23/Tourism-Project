import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user } = useUser();
  const [message, setMessage] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setMessage("New passwords do not match");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:3000/users/updatePassword",
        {
          userId: user._id,
          currentPassword,
          newPassword,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error || "An error occurred");
    }
  };

  return (
    <div className="change-main">
      <label>
        <p>Current Password:</p>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </label>
      <label>
        <p>New Password:</p>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <label>
        <p>Re-write New Password:</p>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </label>
      <button onClick={handleChangePassword}>Change Password</button>
      {message && <p>{message}</p>}
    </div>
  );
}
