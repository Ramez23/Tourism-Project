// ChangePassword.js
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { updateSettings } from "./updateSettings";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user } = useUser(); // Assuming `user` includes the user's token

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    await updateSettings(
      {
        passwordCurrent: currentPassword,
        password: newPassword,
        passwordConfirm: confirmNewPassword,
      },
      "password",
      user.token
    );
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
    </div>
  );
}
