import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "../Loading";
import { getAllUser } from "../../apis/user";
import { LoginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../apis/createInstance";

function UserTable() {
  const auth = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.user?.users?.data);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  useEffect(() => {
    getAllUser(dispatch, axiosJWT, auth?.accessToken);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      {users?.map((item) => {
        return <h1 key={item?.id}>{item?.name}</h1>;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div``;

export default UserTable;
