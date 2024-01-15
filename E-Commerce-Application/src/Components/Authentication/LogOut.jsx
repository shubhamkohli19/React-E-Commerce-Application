import { useEffect } from "react";

const LogOut = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/";
  });
  return null;
};

export default LogOut;
