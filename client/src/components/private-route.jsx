import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
export default function PrivateRoute({ children }) {
  const [child, setChild] = useState();
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    {
      const token = JSON.parse(localStorage.getItem("token"));
      const options = {
        url: "http://localhost:4000/api/verify-login",
        method: "GET",
        headers: {
          Accpet: "application/json",
          Authorization: token,
        },
      };
      axios(options)
        .catch((error) => {
          window.location = "/";
        })
        .then((res) => {
          if (res.status === 200) {
            return setChild(children);
          } else {
            return <Navigate to="/" />;
          }
        });
    }
  }
  return child;
}
