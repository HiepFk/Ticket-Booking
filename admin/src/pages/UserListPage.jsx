import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserTable from "../components/User/UserTable";
import { BiSearch } from "react-icons/bi";

function UserListPage() {
  const [id, setId] = useState("");
  const handeSearch = (e) => {
    e.preventDefault();
    console.log(id);
  };
  return (
    <Wrapper>
      <div className="header">
        <div className="title">Users</div>
        <Link to={"/"} className="btn_add">
          Add new user
        </Link>
      </div>
      <form onSubmit={handeSearch} className="form_search">
        <input
          type="text"
          placeholder="Search by Id"
          onChange={(e) => setId(e.target.value)}
          className="input_search"
        />
        <BiSearch className="icon_search" />
      </form>

      <UserTable />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;
export default UserListPage;
