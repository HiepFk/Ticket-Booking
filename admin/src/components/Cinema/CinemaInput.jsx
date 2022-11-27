import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DataEdit from "../DataEdit";

import FileUpload from "../FileUpload";
import Input from "../Input";
import { Wrapper } from "../../utils/wrapperFormStyle";

function CinemaInput({ type, data }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(data?.name || "");
  const [address, setAddress] = useState(data?.address || "");
  const [city, setCity] = useState(data?.city || "");
  const [img, setImg] = useState(data?.img || "");

  const dataUpload = {
    name,
    address,
    city,
    img,
  };

  return (
    <Wrapper>
      <h1 className="name">{type === "info" ? data?.name : "Add new food"}</h1>
      <from className="wrapper">
        <Input label="Name" setData={setName} data={name} />
        <Input label="Address" setData={setAddress} data={address} />
        <Input label="city" setData={setCity} data={city} />

        <FileUpload
          data={img}
          setData={setImg}
          dispatch={dispatch}
          type="cinema"
        />
        <DataEdit
          typeBtn={type}
          typeAPi="cinema"
          dataUpload={dataUpload}
          id={data?._id}
        />
      </from>
    </Wrapper>
  );
}

export default CinemaInput;
