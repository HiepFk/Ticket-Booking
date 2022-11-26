import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../components/User/UserList";
import UserDetail from "../components/User/UserDetail";
import UserInput from "../components/User/UserInput";
function UserPage() {
  return (
    <Routes>
      <Route exact path="/" element={<UserList />} />
      <Route exact path=":id" element={<UserDetail />} />
      <Route exact path="new" element={<UserInput type="new" />} />
    </Routes>
  );
}

export default UserPage;
