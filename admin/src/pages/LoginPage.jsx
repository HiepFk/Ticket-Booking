import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../apis/auth";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import wrapper from "../assets/wrapper.jpg";
import styled from "styled-components";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (user && user?.isAdmin) {
      navigate("/");
    }
  }, [user, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handeSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    Login(user, dispatch, navigate);
  };
  return (
    <Wrapper
      style={{
        background: `url(${wrapper}) no-repeat center/cover`,
      }}
    >
      <div className="login_wrapper">
        <div className="login_content">
          <img className="logo_img" src={logo} alt="" />
          <h1 className="login_title">Login</h1>
        </div>

        <form className="login_form" onSubmit={handeSubmit}>
          <div className="login_container">
            <label>
              <FaUser />
            </label>
            <input
              type="email"
              className="login_input"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login_container">
            <label>
              <FaLock />
            </label>
            <input
              type="password"
              className="login_input"
              minLength="8"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login_btn" type="submit">
            <FaArrowRight />
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_wrapper {
    padding: 2rem 4rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  .login_content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo_img {
    width: 10rem;
    height: 10rem;
    border-radius: 10rem;
  }
  .login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    label {
      color: black;
      margin-bottom: 1rem;
      cursor: pointer;
      width: 100%;
      transform: translateX(0.5rem);
    }
  }
  .login_input {
    display: block;
    font-family: inherit;
    font-size: 1.5rem;
    color: inherit;
    padding: 0.5rem 1rem;
    border: none;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
    border-radius: 4px;
    box-sizing: border-box;
    :focus {
      outline: none;
      border-bottom: 3px solid #55c57a;
    }
    :focus:invalid {
      border-bottom: 3px solid #ff7730;
    }
  }
  .login_btn {
    margin-top: 1rem;
    width: 5rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 10px 10px 0px rgba(255, 0, 0, 0.5);
    position: relative;
    left: 50%;
    transform: translateX(-65%);
    transition: all 0.5s linear;
    :hover {
      transform: translateX(-50%);
    }
  }
`;

export default LoginPage;
