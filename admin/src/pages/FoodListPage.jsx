import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import { getListFood } from "../apis/food";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

function FoodListPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getListFood(setData, setLoading);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <div className="header">
        <div className="title">Foods</div>
        <Link to={"new"} className="btn_add">
          Add new food
        </Link>
      </div>
      <table>
        <tr>
          <th className="hiden">STT</th>
          <th className="hiden">Image</th>
          <th className="hiden">Name</th>
          <th className="hiden">Price</th>
          <th className="hiden">Price discount</th>
        </tr>
        {data?.map((item, index) => {
          return (
            <tr key={item?._id} className="tr">
              <td>{index + 1}</td>
              <td>
                <img src={item?.img} alt="" className="img" />
              </td>
              <td className="desc hiden">{item?.name}</td>
              <td className="desc hiden">{item?.price}</td>
              <td className="desc hiden">{item?.priceDiscount}</td>
              <td>
                <button
                  className="icon"
                  // onClick={() =>
                  //   deleteUser(
                  //     item?._id,
                  //     dispatch,
                  //     navigate,
                  //     axiosJWT,
                  //     auth?.accessToken
                  //   )
                  // }
                >
                  <FaTrash />
                </button>
              </td>
              <td>
                <Link to={`${item?._id}`} className="icon">
                  <FaEdit />
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    text-align: left;
    padding: 8px;
  }
  .desc {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .img {
    width: 10rem;
    margin-right: 1rem;
    border-radius: 0.25rem;
  }

  .icon {
    color: white;
    cursor: pointer;
    background: brown;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border-radius: 3px;
    border: none;
  }
`;
export default FoodListPage;
