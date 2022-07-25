import React from "react";
import styled from "styled-components";
function Header() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  const cinema = ["Hoàng Mai", "Giải Phóng", "Bà Triệu", "Tràng Tiền "];

  return (
    <Wrapper>
      <form className="sort_form">
        <label htmlFor="sort">City: </label>
        <select name="sort" id="sort" className="sort_input">
          <option value="trending">Hà Nội</option>
          <option value="name-a">TP Hồ Chí Minh </option>
          <option value="name-z">Đằ Nẵng</option>
        </select>
      </form>
      <form className="sort_form">
        <label htmlFor="sort">Rạp : </label>
        <select name="sort" id="sort" className="sort_input">
          {cinema.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
      <form className="sort_form">
        <label htmlFor="sort">Date : </label>
        <select name="sort" id="sort" className="sort_input">
          <option value="name-a">{`${day} / ${month} / ${year}`}</option>
          <option value="name-a">{`${day + 1} / ${month} / ${year}`}</option>
          <option value="name-a">{`${day + 2} / ${month} / ${year}`}</option>
        </select>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 8rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(163, 177, 198, 0.4);
  border-radius: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  label {
    opacity: 0.8;
    margin-right: 0.5rem;
  }
  .sort_input {
    opacity: 0.8;
    outline: 0;
    border: 0;
    border: 1px solid rgba(163, 177, 198, 0.4);
    box-shadow: none;
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: white;
    background-color: #0f0f0f;
    background-image: none;
    cursor: pointer;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    .sort_input {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;
export default Header;
