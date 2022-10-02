import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { UpdateMe } from "../../apis/auth";
import { createAxios } from "../../apis/createInstance";
import { LoginSuccess } from "../../redux/authSlice";

function MyInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(user?.number);

  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  let axiosJWT = createAxios(user, dispatch, LoginSuccess);

  const handeUpdateInfo = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      number,
    };
    UpdateMe(dispatch, data, "info", axiosJWT, user?.accessToken);
  };

  const handeUpdatePassword = (e) => {
    e.preventDefault();
    const data = {
      passwordCurrent,
      password,
      passwordConfirm,
    };
    UpdateMe(dispatch, data, "password", axiosJWT, user?.accessToken);
  };

  return (
    <Wrapper>
      <div className="title">Thông tin tài khoản :</div>
      <form action="" className="form" onSubmit={handeUpdateInfo}>
        <div className="input">
          <label htmlFor="">Name : </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Email : </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Number : </label>
          <input
            type="text"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button className="btn">Update Info</button>
      </form>
      <div className="title">Thay đổi mật khẩu :</div>
      <form action="" className="form" onSubmit={handeUpdatePassword}>
        <div className="input">
          <label htmlFor="">Current Password : </label>
          <input
            type="password"
            required
            value={passwordCurrent}
            onChange={(e) => setPasswordCurrent(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="">New Password : </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Password Confirm : </label>
          <input
            type="password"
            required
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button className="btn">Update Password</button>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .title {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  .input {
    margin-bottom: 2rem;
    label {
      display: inline-block;
      width: 20rem;
      color: #31d7a9;
      font-size: 1.25rem;
    }
    input {
      max-width: 25rem;
      border: none;
      padding: 0.5rem 0.75rem;
      font-size: 1.25rem;
      border-radius: 0.5rem;
      background-color: transparent;
      color: white;
      border: 1px solid #ccc;
      opacity: 0.8;
    }
  }
  .btn {
    margin-bottom: 2rem;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
    color: white;
    font-size: 1.25rem;
    border: none;
  }
  @media (max-width: 600px) {
    label {
      margin-bottom: 1rem;
    }
  }
`;
export default MyInfo;
