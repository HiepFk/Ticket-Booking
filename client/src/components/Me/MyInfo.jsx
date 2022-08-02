import React from "react";
import styled from "styled-components";
function MyInfo() {
  return (
    <Wrapper>
      <div className="title">Thông tin tài khoản :</div>
      <form action="" className="form">
        <div className="input">
          <label htmlFor="">Name : </label>
          <input type="text" required />
        </div>
        <div className="input">
          <label htmlFor="">Email : </label>
          <input type="email" required />
        </div>
        <div className="input">
          <label htmlFor="">Phone : </label>
          <input type="text" required />
        </div>
        <button className="btn">Update Info</button>
      </form>
      <div className="title">Thay đổi mật khẩu :</div>
      <form action="" className="form">
        <div className="input">
          <label htmlFor="">Current Password : </label>
          <input type="password" required />
        </div>
        <div className="input">
          <label htmlFor="">New Password : </label>
          <input type="password" required />
        </div>
        <div className="input">
          <label htmlFor="">Password Comfirm : </label>
          <input type="password" required />
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
  }
  .input {
    margin-bottom: 2rem;
    label {
      display: inline-block;
      width: 10rem;
      color: #31d7a9;
    }
    input {
      max-width: 25rem;
      height: 2rem;
      border: none;
      padding: 0.5rem;
      font-size: 1.25rem;
      border-radius: 0.5rem;
      background-color: transparent;
      color: white;
      border: 1px solid #ccc;
      opacity: 0.8;
    }
  }
  .btn {
    margin-bottom: 3rem;
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
  }
  @media (max-width: 600px) {
    label {
      margin-bottom: 1rem;
    }
  }
`;
export default MyInfo;
