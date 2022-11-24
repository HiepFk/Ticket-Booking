import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
  // ... perhaps some authentication logic to protect routes?
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AuthLayout;
