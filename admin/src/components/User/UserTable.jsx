import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { LoginSuccess } from "../../redux/authSlice";
import { getAllUser, deleteUser } from "../../apis/user";
import { createAxios } from "../../apis/createInstance";
import Loading from "../Loading";
function UserTable() {
  const auth = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user?.users?.data);
  const loading = useSelector((state) => state.user.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  useEffect(() => {
    getAllUser(dispatch, axiosJWT, auth?.accessToken);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <table className="table_list">
      <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Role</th>
      </tr>
      {users?.map((item, index) => {
        return (
          <tr key={item?._id} className="tr">
            <td>{index + 1}</td>
            <td className="table_desc">{item?.name}</td>
            <td className="table_desc">{item?.email}</td>
            <td className="table_desc">{item?.number}</td>
            <td className="table_desc">{item?.isAdmin ? "Admin" : "User"}</td>
            <td>
              <button
                className="table_icon"
                onClick={() =>
                  deleteUser(
                    item?._id,
                    dispatch,
                    navigate,
                    axiosJWT,
                    auth?.accessToken
                  )
                }
              >
                <FaTrash />
              </button>
            </td>
            <td>
              <Link to={`${item?._id}`} className="table_icon">
                <FaEdit />
              </Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
export default UserTable;
