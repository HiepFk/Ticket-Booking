import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addUser, updateUser } from "../../apis/user";
import { LoginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../apis/createInstance";
import Input from "../Input";

function UserInput({ user, type }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [number, setNumber] = useState(user?.number || "");
  const [role, setRole] = useState(user?.isAdmin || false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  const handeSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      number,
      // photo,
      isAdmin: role,
    };
    if (type === "info") {
      updateUser(dispatch, user?._id, data, axiosJWT, auth?.accessToken);
    } else {
      addUser(data, dispatch, navigate, axiosJWT, auth?.accessToken);
    }
  };

  return (
    <Wrapper>
      <h1 className="name">{type === "info" ? user?.name : "Add new user"}</h1>
      <from className="wrapper" onSubmit={handeSubmit}>
        <Input label="Name" setData={setName} data={name} />
        <Input label="Email" setData={setEmail} data={email} type="email" />
        <Input label="Number" setData={setNumber} data={number} />

        <div className="container">
          <label htmlFor="role" className="label_info">
            Role :
          </label>
          <select
            name="role"
            id="role"
            className="input_info"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="false">User</option>
            <option value="true">Admin</option>
          </select>
        </div>

        {type === "info" ? (
          <button className="btn_add" type="submit" onClick={handeSubmit}>
            Update
          </button>
        ) : (
          <button className="btn_add" type="submit" onClick={handeSubmit}>
            Add new movie
          </button>
        )}
      </from>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }
`;

export default UserInput;
