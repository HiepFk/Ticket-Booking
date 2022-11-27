import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../apis/createInstance";
import { addDoc, updateDoc } from "../apis/handle";
import { LoginSuccess } from "../redux/authSlice";

function DataEdit({ typeBtn, typeAPi, dataUpload, id = "" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);
  const handeSubmit = (e) => {
    e.preventDefault();
    if (typeBtn === "info") {
      updateDoc(id, typeAPi, dataUpload, dispatch, axiosJWT, auth?.accessToken);
    } else {
      addDoc(
        typeAPi,
        dataUpload,
        dispatch,
        navigate,
        axiosJWT,
        auth?.accessToken
      );
    }
  };
  return (
    <>
      {typeBtn === "info" ? (
        <button className="btn_add" type="submit" onClick={handeSubmit}>
          Update
        </button>
      ) : (
        <button className="btn_add" type="submit" onClick={handeSubmit}>
          Add new Doc
        </button>
      )}
    </>
  );
}

export default DataEdit;
