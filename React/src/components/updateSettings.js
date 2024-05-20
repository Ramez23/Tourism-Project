// updateSettings.js
import axios from "axios";

export const updateSettings = async (data, type, token) => {
  const url = `http://127.0.0.1:3000/api/v1/users/${
    type === "password" ? "updateMyPassword" : "updateMe"
  }`;

  try {
    const res = await axios({
      method: "PATCH",
      url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data.status === "success") {
      alert(`${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    alert(err.response?.data?.message || "Error updating data");
  }
};
