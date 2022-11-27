import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaEdit } from "react-icons/fa";

import { LoginSuccess } from "../redux/authSlice";
import { createAxios } from "../apis/createInstance";
import { deleteDoc } from "../apis/handle";
import { Link } from "react-router-dom";

function IconEdit({ id, slug, type }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);
  return (
    <>
      <td>
        <button
          className="table_icon"
          onClick={() =>
            deleteDoc(id, type, dispatch, axiosJWT, auth?.accessToken)
          }
        >
          <FaTrash />
        </button>
      </td>
      <td>
        <Link to={`${slug}`} className="table_icon">
          <FaEdit />
        </Link>
      </td>
    </>
  );
}

export default IconEdit;
