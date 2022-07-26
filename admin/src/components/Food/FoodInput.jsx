import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FileUpload from "../FileUpload";
import Input from "../Input";
import DataEdit from "../DataEdit";
import { Wrapper } from "../../utils/wrapperFormStyle";

function FoodInput({ type, data }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(data?.name || "");
  const [price, setPrice] = useState(data?.price || "");
  const [priceDiscount, setPriceDiscount] = useState(data?.priceDiscount || "");
  const [img, setImg] = useState(data?.img || "");

  const dataUpload = {
    name,
    price,
    priceDiscount,
    img,
  };

  return (
    <Wrapper>
      <h1 className="name">{type === "info" ? data?.name : "Add new food"}</h1>
      <from className="wrapper">
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
        <DataEdit
          typeBtn={type}
          typeAPi="food"
          dataUpload={dataUpload}
          id={data?._id}
        />
      </from>
    </Wrapper>
  );
}

export default FoodInput;
