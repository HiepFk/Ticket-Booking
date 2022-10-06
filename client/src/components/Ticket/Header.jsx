import React from "react";
import styled from "styled-components";
function Header({ setSearchParams, searchParams }) {
  const today = new Date();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Wrapper>
      <form
        className="sort_form"
        onChange={(e) =>
          setSearchParams({
            city: e.target.value,
            day: searchParams.get("day"),
          })
        }
      >
        <label htmlFor="sort">City: </label>
        <select name="sort" id="sort" className="sort_input">
          <option value="Hà Nội">Hà Nội</option>
          <option value="Hồ Chí Minh">TP Hồ Chí Minh</option>
          <option value="Đằ Nẵng">Đằ Nẵng</option>
        </select>
      </form>
      <form
        className="sort_form"
        onChange={(e) =>
          setSearchParams({
            day: e.target.value,
            city: searchParams.get("city"),
          })
        }
      >
        <label htmlFor="sort">Date : </label>
        <select name="sort" id="sort" className="sort_input">
          {arr.map((item) => {
            let tomorrow = new Date(
              today.getTime() + 24 * 60 * 60 * 1000 * item
            );
            let year = tomorrow.getFullYear();
            let month = tomorrow.getMonth() + 1;
            let day = tomorrow.getDate() - 1;
            return (
              <option
                value={`${day}/${month}/${year}`}
                key={item}
              >{`${day} / ${month} / ${year}`}</option>
            );
          })}
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
