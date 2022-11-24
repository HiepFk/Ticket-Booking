import axios from "axios";
import {
  GetListUserStart,
  GetListUserSuccess,
  GetListUserError,
  GetUserStart,
  GetUserSuccess,
  GetUserError,
} from "../redux/userSlice";
import { SetAlert } from "../redux/alertSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;

export const getAllUser = async (dispatch, axiosJWT, accessToken) => {
  dispatch(GetListUserStart());
  try {
    const url = `${link}/v1/user/`;
    const res = await axiosJWT.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetListUserSuccess(res.data));
  } catch (error) {
    dispatch(GetListUserError());
  }
};

export const getUser = async (dispatch, id, axiosJWT, accessToken) => {
  dispatch(GetUserStart());
  try {
    const res = await axiosJWT.get(`${link}/v1/user/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetUserSuccess(res.data));
  } catch (error) {
    dispatch(GetUserError());
  }
};

export const addUser = async (
  data,
  dispatch,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT.post(`${link}/v1/user/`, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
    navigate("/users");
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};

export const updateUser = async (dispatch, id, data, axiosJWT, accessToken) => {
  dispatch(GetUserStart());
  try {
    const res = await axiosJWT({
      method: "PATCH",
      url: `${link}/v1/user/${id}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetUserSuccess(res.data));
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(GetUserError());
    dispatch(SetAlert(error?.response?.data));
  }
};

export const deleteUser = async (
  id,
  dispatch,
  navigate,
  axiosJWT,
  accessToken
) => {
  try {
    const res = await axiosJWT.delete(`${link}/v1/user/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(SetAlert(res.data));
    navigate("/users");
  } catch (error) {
    dispatch(SetAlert(error?.response?.data));
  }
};
