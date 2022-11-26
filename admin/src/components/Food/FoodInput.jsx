import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../Input";

import { addFood, updateFood } from "../../apis/food";
import { createAxios } from "../../apis/createInstance";
import { useNavigate } from "react-router-dom";
import { LoginSuccess } from "../../redux/authSlice";
import FileUpload from "../FileUpload";

function FoodInput({ type, data }) {
  const [name, setName] = useState(data?.name || "");
  const [price, setPrice] = useState(data?.price || "");
  const [priceDiscount, setPriceDiscount] = useState(data?.priceDiscount || "");
  const [img, setImg] = useState(data?.img || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  const handeSubmit = (e) => {
    e.preventDefault();
    const dataUpload = {
      name,
      price,
      priceDiscount,
      img,
    };

    if (type === "info") {
      updateFood(dispatch, data?._id, dataUpload, axiosJWT, auth?.accessToken);
    } else {
      addFood(dataUpload, dispatch, navigate, axiosJWT, auth?.accessToken);
    }
  };

  return (
    <Wrapper>
      <h1 className="name">{type === "info" ? data?.name : "Add new food"}</h1>
      <from className="wrapper" onSubmit={handeSubmit}>
        <Input label="Name" setData={setName} data={name} />
        <Input label="Price" setData={setPrice} data={price} />
        <Input
          label="PriceDiscount"
          setData={setPriceDiscount}
          data={priceDiscount}
        />

        <FileUpload
          data={img}
          setData={setImg}
          dispatch={dispatch}
          type="food"
        />
        {type === "info" ? (
          <button className="btn_add" type="submit" onClick={handeSubmit}>
            Update
          </button>
        ) : (
          <button className="btn_add" type="submit" onClick={handeSubmit}>
            Add new food
          </button>
        )}
      </from>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 2rem;
  }
  .form__upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .form__upload:focus + .label_img {
    outline: 3px solid #435ebe;
    outline-offset: 3px;
  }

  .label_img {
    color: #435ebe;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #435ebe;
    transition: all 0.2s;
    width: 10rem !important;
    margin-right: 5rem;
    cursor: pointer;
    :hover {
      background-color: #435ebe;
      padding: 0.25rem 0.5rem;
      color: #fff;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
  .img {
    width: 10rem;
  }
`;

export default FoodInput;
