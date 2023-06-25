import axios from "axios";
export const login = ({ email, passwords }) => {
  axios
    .post("http://localhost:4000/api/auth/login", { email, passwords })
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("token", JSON.stringify(token));
      window.location = "/admin";
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const logout = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    window.location = "/";
  }
};
