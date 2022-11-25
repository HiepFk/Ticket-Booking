import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "../Loading";
import { getAllUser, deleteUser } from "../../apis/user";
import { LoginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../apis/createInstance";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  console.log(users);
  return (
    <Wrapper>
      <table>
        <tr>
          <th className="hiden">STT</th>
          {/* <th className="hiden">Image</th> */}
          <th className="hiden">Name</th>
          <th className="hiden">Email</th>
          <th className="hiden">Number</th>
          <th className="hiden">Role</th>
        </tr>
        {users?.map((item, index) => {
          return (
            <tr key={item?._id} className="tr">
              <td>{index + 1}</td>
              {/* <td>
                <img src={item?.poster} alt="" className="img" />
              </td> */}
              <td className="desc hiden">{item?.name}</td>
              <td className="desc hiden">{item?.email}</td>
              <td className="desc hiden">{item?.number}</td>
              <td className="desc hiden">{item?.isAdmin ? "Admin" : "User"}</td>
              <td>
                <button
                  className="icon"
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
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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
export default UserTable;
