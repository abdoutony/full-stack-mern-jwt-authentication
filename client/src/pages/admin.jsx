import React from "react";
import { logout } from "../services/auth.service";
export default function AdminPage() {
  const handelLogout = () => {
    logout();
  };
  return (
    <div className="container p-5">
      <h1 className="text-4xl font-bold">Admin page</h1>
      <button
        onClick={handelLogout}
        className="btn p-3 mt-3 bg-gray-800 font-bold text-white"
      >
        Logout
      </button>
    </div>
  );
}
