import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LoginSuccess } from "../redux/authSlice";
import { createAxios } from "../apis/createInstance";
import { getUser } from "../apis/user";
import Loading from "../components/Loading";
import UserInput from "../components/User/UserInput";

function UserPage() {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);
  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);
  const { id } = useParams();

  useEffect(() => {
    getUser(dispatch, id, axiosJWT, auth?.accessToken);
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }
  return <UserInput user={user?.data} type="info" />;
}

export default UserPage;
