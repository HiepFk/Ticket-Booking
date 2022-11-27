import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DataEdit from "../DataEdit";

import FileUpload from "../FileUpload";
import Input from "../Input";
import { Wrapper } from "../../utils/wrapperFormStyle";
function NewsInput({ type, data }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(data?.title || "");
  const [desc, setDesc] = useState(data?.desc || "");
  const [img, setImg] = useState(data?.img || "");

  const dataUpload = {
    title,
    desc,
    img,
  };

  return (
    <Wrapper>
      <h1 className="name">{type === "info" ? data?.name : "Add new news"}</h1>
      <from className="wrapper">
        <Input label="Title" setData={setTitle} data={title} />
        <Input
          label="Desc"
          setData={setDesc}
          data={desc}
          inputType="textarea"
        />
        <FileUpload
          data={img}
          setData={setImg}
          dispatch={dispatch}
          type="news"
        />
        <DataEdit
          typeBtn={type}
          typeAPi="news"
          dataUpload={dataUpload}
          id={data?._id}
        />
      </from>
    </Wrapper>
  );
}
// const Wrapper = styled.div`
//   padding: 1.5rem 2rem;
//   h1 {
//     margin-bottom: 1rem;
//   }
//   .container {
//     display: flex;
//     align-items: center;
//     margin-bottom: 1.25rem;
//     gap: 2rem;
//   }
//   .form__upload {
//     width: 0.1px;
//     height: 0.1px;
//     opacity: 0;
//     overflow: hidden;
//     position: absolute;
//     z-index: -1;
//   }

//   .form__upload:focus + .label_img {
//     outline: 3px solid #435ebe;
//     outline-offset: 3px;
//   }

//   .label_img {
//     color: #435ebe;
//     display: inline-block;
//     text-decoration: none;
//     border-bottom: 1px solid #435ebe;
//     transition: all 0.2s;
//     width: 10rem !important;
//     margin-right: 5rem;
//     cursor: pointer;
//     :hover {
//       background-color: #435ebe;
//       padding: 0.25rem 0.5rem;
//       color: #fff;
//       box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
//       transform: translateY(-2px);
//     }
//   }
//   .img {
//     width: 10rem;
//   }
// `;

export default NewsInput;
