import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import { deleteFood, getListFood } from "../../apis/food";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import { createAxios } from "../../apis/createInstance";
import { useDispatch, useSelector } from "react-redux";
import { LoginSuccess } from "../../redux/authSlice";

function FoodList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

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
      <table className="table_list">
        <tr>
          <th>STT</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price discount</th>
        </tr>
        {data?.map((item, index) => {
          return (
            <tr key={item?._id} className="tr">
              <td>{index + 1}</td>
              <td>
                <img src={item?.img} alt="" className="table_img" />
              </td>
              <td className="table_desc">{item?.name}</td>
              <td className="table_desc">{item?.price}</td>
              <td className="table_desc">{item?.priceDiscount}</td>
              <td>
                <button
                  className="table_icon"
                  onClick={() =>
                    deleteFood(item?._id, dispatch, axiosJWT, auth?.accessToken)
                  }
                >
                  <FaTrash />
                </button>
              </td>
              <td>
                <Link to={`${item?.slug}`} className="table_icon">
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
`;
export default FoodList;
