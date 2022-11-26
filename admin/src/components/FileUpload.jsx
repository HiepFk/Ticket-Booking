import React, { useState } from "react";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  // deleteObject,
} from "firebase/storage";
import { storage } from "../utils/firebase";
import { SetAlert } from "../redux/alertSlice";
function FileUpload({ data, setData, dispatch, type }) {
  const [fileUpload, setFileUpload] = useState(null);

  const alert = {
    status: "success",
    msg: "Add image success",
  };

  function uploadFile(e, file) {
    e.preventDefault();
    const today = new Date().toISOString();
    if (file == null) {
      return;
    } else {
      const imageRef = ref(storage, `/${type}/${today + file.name}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setData(url);
        });
      });
      dispatch(SetAlert(alert));
    }
    return;
  }

  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setData(reader.result);
      };
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <label htmlFor="img" className="label_info label_img">
        Image
      </label>
      {data && (
        <button className="btn_add" onClick={(e) => uploadFile(e, fileUpload)}>
          Upload
        </button>
      )}
      <img src={data} alt="" className="img" />
      <input
        type="file"
        accept="image/*"
        id="img"
        className="form__upload"
        onChange={(e) => {
          TransformFileData(e.target.files[0]);
          setFileUpload(e.target.files[0]);
        }}
      />
    </div>
  );
}

export default FileUpload;
