import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    if (!user && !user?.isAdmin) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AuthLayout;
