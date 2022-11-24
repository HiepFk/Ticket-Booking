import axios from "axios";
import {
  LoginStart,
  LoginFailed,
  LoginSuccess,
  LogOutStart,
  LogOutSuccess,
  LogOutFailed,
  GetMeStart,
  GetMeError,
  GetMeSuccess,
} from "../redux/authSlice";
import { SetAlert } from "../redux/alertSlice";

axios.defaults.withCredentials = true;
const link = process.env.REACT_APP_API_LINK;

export const Login = async (user, dispatch, navigate) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post(`${link}/v1/user/login`, user);
    dispatch(LoginSuccess(res.data));
    dispatch(SetAlert(res.data));
    navigate("/");
  } catch (error) {
    dispatch(LoginFailed());
    dispatch(SetAlert(error?.response?.data));
  }
};

export const Logout = async (dispatch) => {
  dispatch(LogOutStart());
  try {
    const res = await axios.get(`${link}/v1/user/logout`);
    dispatch(LogOutSuccess());
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(LogOutFailed());
    dispatch(SetAlert(error?.response?.data));
  }
};

export const UpdateMe = async (dispatch, data, type, axiosJWT, accessToken) => {
  dispatch(GetMeStart());
  try {
    const url =
      type === "password"
        ? `${link}/v1/user/updateMyPassword`
        : `${link}/v1/user/updateInfo`;

    const res = await axiosJWT({
      method: "PATCH",
      url,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(GetMeSuccess(res.data));
    dispatch(SetAlert(res.data));
  } catch (error) {
    dispatch(GetMeError());
    dispatch(SetAlert(error?.response?.data));
  }
};
