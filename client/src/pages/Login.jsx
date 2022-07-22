import React from "react";
import styled from "styled-components";
import img from "../assets/login.jpg";
function Login() {
  return (
    <Wrapper
      className="item"
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="wrapper">
        <div className="title">Hello</div>
        <div className="hi">WELCOME BACK</div>
        <div className="form"></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  .wrapper {
    padding: 0 1rem;
    margin-top: calc(45vh - 12rem);
    z-index: 99;
    margin: 0 auto;
    color: white;
    max-width: 768px;
    box-shadow: #000000 0px 0px 29.4px 0.6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export default Login;
