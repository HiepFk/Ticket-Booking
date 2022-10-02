import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../apis/auth";

import styled from "styled-components";
import img from "../../assets/login.jpg";
function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activation_token } = useParams();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleResetPassword = (e) => {
    e.preventDefault();
    const data = {
      activation_token,
      password,
      passwordConfirm,
    };
    resetPassword(data, dispatch, navigate);
  };
  return (
    <Wrapper
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="wrapper">
        <div className="title">Hello</div>
        <form className="form" onSubmit={handleResetPassword}>
          <div className="form_group">
            <label>
              New Password<span>*</span>
            </label>
            <input
              type="password"
              required
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label>
              Confirm Password<span>*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Password Confirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  min-height: 75vh;
  .wrapper {
    z-index: 99;
    margin: 10rem auto 3rem;
    color: white;
    max-width: 768px;
    box-shadow: #000000 0px 0px 29.4px 0.6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem 5rem;
  }
  .title {
    font-size: 2rem;
    font-weight: 400;
    color: #31d7a9;
    text-transform: uppercase;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .form_group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  label {
    font-size: 1.15rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    span {
      color: red;
      font-size: 1.5rem;
    }
  }
  input {
    border: none;
    background-color: transparent;
    padding: 0.5rem 0rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1rem;
    width: 25rem;
  }
  button {
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    transition: all ease 0.3s;
    border-radius: 30px;
    width: auto;
    padding: 0 50px;
    height: 50px;
    text-transform: uppercase;
    margin: 0 auto;
    color: white;
    border: none;
  }
`;
export default ResetPassword;
