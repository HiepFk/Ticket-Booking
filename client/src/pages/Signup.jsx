import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/login.jpg";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../apis/auth";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user?.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handeSignup = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
      passwordConfirm,
    };
    signUp(user, dispatch, navigate);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <Wrapper
      className="item"
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="wrapper">
        <div className="title">WELCOME</div>
        <div className="hi">TO FK ' CINEMA</div>
        <form className="form" onSubmit={handeSignup}>
          <div className="form_group">
            <label>
              Email <span>*</span>
            </label>
            <input
              type="email"
              placeholder="Email your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label>
              Password <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Email your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label>
              CONFIRM Password <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Email your confirm password"
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <div className="sign">
          Already have an account?
          <Link to={"/login"}>
            <span>Login</span>
          </Link>
        </div>
        <div className="or">
          <hr />
          <span>Or</span>
          <hr />
        </div>
        <div className="social">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaGoogle />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  .wrapper {
    z-index: 99;
    margin: 10rem auto 3rem;
    color: white;
    max-width: 992px;
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
  .hi {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
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
  }
  .sign {
    margin-top: 2rem;
    text-align: center;
    span {
      color: #31d7a9;
      margin-left: 0.5rem;
    }
  }
  .or {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    hr {
      width: calc(50% - 2rem);
      background-color: white;
      opacity: 0.6;
    }
  }
  .social {
    margin: 0 auto;
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s linear;
    :hover {
      background-color: #31d7a9;
    }
  }
`;

export default SignUp;
