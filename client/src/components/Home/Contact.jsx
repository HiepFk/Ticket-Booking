import React from "react";
import styled from "styled-components";
import img from "../../assets/contact.jpg";
function Contact() {
  return (
    <Wrapper
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
      className="app"
    >
      <div className="container">
        <div className="info">
          <h5 class="cate">subscribe to Boleto </h5>
          <h3 class="title">to get exclusive benifits</h3>
          <form action="" className="form">
            <input type="text" placeholder="Your email" className="input" />
            <button className="btn">Subscribe</button>
          </form>
          <p>We respect your privacy, so we never share your info</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 5rem;
  height: 40vh;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  text-align: center;
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.8);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    padding-top: 5vh;
    z-index: 99;
    margin: 0 auto;
    color: white;
    max-width: 1024px;
  }
  .cate {
    color: #31d7a9;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-size: 1.25rem;
  }
  .title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .form {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .input {
    height: 3rem;
    padding-right: 10rem;
    color: #99abe2;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 25px;
    padding-left: 20px;
    box-shadow: 0px 3px 10px 0px rgb(0 0 0 / 10%);
    background-color: transparent;
  }
  .btn {
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 2rem;
    border: none;
    color: white;
    letter-spacing: 1px;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    box-shadow: 0px 10px 15px 0px rgb(59 55 188 / 50%);
  }
`;
export default Contact;
